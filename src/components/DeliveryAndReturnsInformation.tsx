import { themeGet } from "@styled-system/theme-get"
import { Formik, Field, Form, FormikHelpers } from "formik"
import React from "react"
import {
  Tab as ReactTab,
  Tabs as ReactTabs,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
} from "react-tabs"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { Button } from "./Button"

export type DeliveryAndReturnsInformationProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
  }

export const DeliveryAndReturnsInformationStyled: React.FC<DeliveryAndReturnsInformationProps> = styled.section`
  display: grid;
  grid-auto-flow: column;

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const TabsStyled = styled(ReactTabs)`
  label {
    font-weight: normal;
    text-transform: unset;
  }

  .form-row {
    align-items: unset;
  }
`

export const TabListStyled = styled(ReactTabList)`
  display: grid;
  grid-auto-flow: column;
  list-style: none;
  padding-block-end: ${themeGet("space.3")}px;
  padding-inline-start: unset;
`

export const TabStyled = styled(ReactTab)`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  cursor: pointer;
  padding-block-end: ${themeGet("space.5")}px;
  padding-inline-end: ${themeGet("space.5")}px;
  padding-inline-start: ${themeGet("space.5")}px;
  text-align: center;
  text-transform: uppercase;

  &.react-tabs__tab--selected {
    border-bottom-color: ${themeGet("colors.black")};
    font-weight: bold;
  }
`

interface Values {
  country: string
}

export const DeliveryAndReturnsInformation: React.FC<DeliveryAndReturnsInformationProps> = ({
  children,
  ...props
}) => (
  <DeliveryAndReturnsInformationStyled {...props}>
    <TabsStyled>
      <TabListStyled>
        <TabStyled>Delivery</TabStyled>
        <TabStyled>Returns</TabStyled>
      </TabListStyled>
      <ReactTabPanel>
        <Formik
          initialValues={{
            country: "",
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            const path = `/.netlify/functions/sign-up-to-our-newsletter`

            const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

            const response = await fetch(url.toString(), {
              body: JSON.stringify(values),
              headers: {
                Accept: "application/json",
              },
              method: "POST",
            })

            setSubmitting(false)

            console.log(response)
          }}
        >
          <Form>
            <label htmlFor="country">
              Enter your country to recieve avaiable delivery options and
              prices. Donec quis erat feugiat, ultrices eros nec, tincidunt
              nisl.
            </label>
            <div className="form-row">
              <Field
                as="input"
                id="country"
                name="country"
                placeholder="Enter country"
                type="text"
              />
              <Button type="submit" variant="secondary">
                View rates
              </Button>
            </div>
          </Form>
        </Formik>
      </ReactTabPanel>
      <ReactTabPanel>
        <p>Lorem ipsum</p>
      </ReactTabPanel>
    </TabsStyled>
  </DeliveryAndReturnsInformationStyled>
)
