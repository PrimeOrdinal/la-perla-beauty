import type { Contentstack_Pages } from "../../graphql-types"

import { PageProps } from "gatsby"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { color } from "styled-system"

import { Button } from "../components/Button"
// import { Instagram } from "../components/Instagram.tsx"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

import { signIn as signInPath } from "../utils/paths"

const Box = styled.div`
  ${color}
`

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const IndexPage: React.FC<PageProps<null, PageContextPage>> = ({
  pageContext,
}) => {
  const { page } = pageContext

  return (
    <Layout>
      <SEO title={page?.title} />

      <h1>{page?.title}</h1>

      <section>
        <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
      </section>
      <section>
        <h1>Section</h1>
        <button>Default</button>
        <Link to={signInPath}>Sign in</Link>
        <Button>Styled</Button>
        <Button space={1} variant="primary" disabled>
          Primary
        </Button>
        <Button space={2} variant="secondary">
          Secondary
        </Button>
        <Button space={4} variant="tertiary">
          Tertiary
        </Button>
        <Button bg="orange" color="#fff" padding={1}>
          Override
        </Button>
        <Button disabled>Override</Button>
        <Box bg="blue" color="black">
          Blue Box
        </Box>
        <Box bg="primary" color="black">
          Primary Theme Colour Box
        </Box>
        {/* <Instagram /> */}
      </section>
      <section>
        <h1>Section</h1>
      </section>
      <section>
        <h1>Section</h1>
      </section>
      <section>
        <h1>Section</h1>
      </section>
    </Layout>
  )
}

export default IndexPage
