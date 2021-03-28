import type {
  Contentstack_Pages,
  IngredientsPageQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { PageProps, graphql } from "gatsby"
import React, { useLayoutEffect, useState } from "react"
import styled from "styled-components"

import { Breadcrumb } from "../components/Breadcrumb"
import { Button } from "../components/Button"
import { Ingredient, IngredientProp } from "../components/Ingredient"
import { Layout } from "../components/Layout"
import { PageSections } from "../components/PageSections"
import { SEO } from "../components/SEO"

import { mediaQueries } from "../theme"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const ProductSelectorFormStyled = styled(Form)`
  max-width: 500px;
  padding-block-end: ${themeGet("space.10")}px;
  padding-block-start: ${themeGet("space.6")}px;

  ${mediaQueries.md} {
    padding-block-end: ${themeGet("space.13")}px;
    padding-block-start: ${themeGet("space.10")}px;
  }

  label {
    font-size: var(--font-size-body, 13px);
  }
`

const MainStyled = styled.main`
  display: grid;
  gap: 1rem;
`

const Letter = styled.dt`
  padding-block-end: ${themeGet("space.3")}px;
  padding-block-start: ${themeGet("space.3")}px;
  background-color: ${themeGet("colors.lightgreen")};
  position: sticky;
  top: var(--header-min-height, 38px);
  z-index: 999;

  ${mediaQueries.md} {
    padding-block-end: ${themeGet("space.5")}px;
    padding-block-start: ${themeGet("space.5")}px;
  }

  span {
    font-size: var(--font-size-lg, 18px);
    font-family: "Tiempos", serif;
  }
`

const IngredientList = styled.dl`
  dd {
    &:not(:last-child) {
      border-bottom: 1px solid ${themeGet("border.color")};
    }
  }
`

interface Values {
  product: string | undefined
}

type Listings = {
  [key: string]: IngredientProp[]
}

const IngredientsPage: React.FC<
  PageProps<IngredientsPageQuery, PageContextPage>
> = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
    page,
  } = pageContext

  const products = data?.allContentstackProduct?.edges?.map(({ node }) => node)

  const ingredients = data?.allContentstackIngredient?.edges
    ?.map(({ node }) => node)
    .sort((a, b) => a.title.localeCompare(b.title))

  const getListings = (productId?: string | undefined) =>
    ingredients
      .filter(ingredient => {
        // console.log("ingredient", ingredient)

        if (productId) {
          // console.log("productId", productId)
          const product = products.find(product => product.id === productId)
          // console.log("product", product)

          const productIngredientIds = product.ingredients?.flatMap(
            ({ ingredient: ingredients }) => ingredients?.map(({ id }) => id)
          )
          // console.log("productIngredientIds", productIngredientIds)

          if (productIngredientIds.includes(ingredient.id)) {
            return true
          }

          return false
        }

        return true
      })
      .reduce((result, ingredient) => {
        // get the first letter. (this assumes no empty ingredients in the list)
        const letter = ingredient.title?.[0]

        // ensure the result has an entry for this letter
        result[letter] = result[letter] || []

        // add the ingredient to the letter index
        result[letter].push(ingredient)

        // return the updated result
        return result
      }, {}) as Listings

  const allListings = getListings()
  // setFilteredListings(allListings)

  // useLayoutEffect(() => {
  //   // console.log("selectedProduct", selectedProduct)

  //   // if (selectedProduct) {
  //   //   const matchingListings = getListings(selectedProduct)
  //   //   console.log("matchingListings", matchingListings)
  //   //   setFilteredListings(matchingListings)
  //   // }

  //   const listings = getListings(selectedProduct)
  //   setFilteredListings(listings)
  // })

  // const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined)
  const [filteredListings, setFilteredListings] = useState<
    Listings | undefined
  >(allListings)

  return (
    <Layout>
      <SEO title={page?.title} />

      {data?.contentstackPage?.breadcrumb?.show && (
        <Breadcrumb crumbs={crumbs} />
      )}

      <PageSections sections={data?.contentstackPage?.sections} />
      <header className={clsx("container", "product-selector")}>
        <Formik
          initialValues={{
            product: undefined,
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setSubmitting(false)

            // console.log("values", values)

            const product =
              values?.product !== "all" ? values?.product : undefined
            // console.log("product", product)

            // setSelectedProduct(values?.product)
            const matchingListings = getListings(product)

            setFilteredListings(matchingListings)
          }}
        >
          <ProductSelectorFormStyled>
            <label htmlFor="product">product selector</label>
            <Field
              className="select"
              component="select"
              id="product"
              name="product"
              onChange={e => {
                // console.log("e.target.value", e.target.value)

                const product = e.target.value !== "all" ? e.target.value : undefined

                const matchingListings = getListings(product)

                setFilteredListings(matchingListings)
              }}
            >
              {/* <option disabled selected>
                Select a product
              </option> */}
              <option selected value="all">
                All
              </option>
              {products?.map(product => {
                // console.log("product.ingredients", product.ingredients)
                return <option value={product.id}>{product.title}</option>
              })}
            </Field>
            <Button
              className="sr-only"
              type="submit"
              variant="secondary"
              py={{ md: 4 }}
              px={{ md: 9 }}
            >
              Filter
            </Button>
          </ProductSelectorFormStyled>
        </Formik>
      </header>

      <MainStyled>
        <IngredientList>
          {filteredListings &&
            Object.entries(filteredListings).map(([term, definitions]) => (
              <React.Fragment key={term}>
                <Letter>
                  <span className="container">{term}</span>
                </Letter>
                {(definitions as IngredientProp[])?.map(definition => (
                  <dd className="container">
                    <Ingredient ingredient={definition} />
                  </dd>
                ))}
              </React.Fragment>
            ))}
        </IngredientList>

        <Button className="button" justifySelf="center" variant="tertiary">
          Load more
        </Button>
      </MainStyled>
    </Layout>
  )
}

export default IngredientsPage

export const query = graphql`
  query IngredientsPage($contentstackId: String!) {
    allContentstackIngredient {
      edges {
        node {
          ...Contentstack_ingredientFragment
        }
      }
    }
    allContentstackProduct {
      edges {
        node {
          id
          title
          ingredients {
            ingredient {
              id
              title
              url
            }
          }
        }
      }
    }
    contentstackPage(id: { eq: $contentstackId }) {
      ...Contentstack_pageFragment
    }
  }
`
