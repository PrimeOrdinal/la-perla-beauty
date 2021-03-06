import clsx from "clsx"
import React from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { PromotionalBanner } from "../components/PromotionalBanner"
import { SEO } from "../components/SEO"

const MainStyled = styled.main`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
`

const PromoTest: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MainStyled className={clsx("container")}>
      <PromotionalBanner
        color="beige"
        layout="desktopFull"
        title="Desktop Full prop"
        showImage={true}
        text="Don't take it personal! Take the bitter with the sweet! Some good things come to an end."
        link={{ text: "learn more" }}
        image={{
          src: `https://picsum.photos/405/712?${
            Math.floor(Math.random() * 10) + 1
          }`,
          alt: "something here",
        }}
      />
      <PromotionalBanner
        color="beige"
        layout="inlineView"
        title="Inline View prop"
        showImage={true}
        text="Don't take it personal! Take the bitter with the sweet! Some good things come to an end."
        link={{ text: "learn more" }}
        image={{
          src: `https://picsum.photos/405/712?${
            Math.floor(Math.random() * 10) + 1
          }`,
        }}
      />
      <PromotionalBanner
        color="beige"
        layout="listView"
        title="List View prop"
        showImage
        text="Don't take it personal! Take the bitter with the sweet! Some good things come to an end."
        link={{ text: "learn more" }}
        image={{
          src: `https://picsum.photos/405/712?${
            Math.floor(Math.random() * 10) + 1
          }`,
        }}
      />
      <PromotionalBanner
        color="beige"
        title="Default"
        showImage={true}
        text="Don't take it personal! Take the bitter with the sweet! Some good things come to an end."
        link={{ text: "learn more" }}
        image={{
          src: `https://picsum.photos/405/712?${
            Math.floor(Math.random() * 10) + 1
          }`,
        }}
      />
    </MainStyled>
  </Layout>
)

export default PromoTest
