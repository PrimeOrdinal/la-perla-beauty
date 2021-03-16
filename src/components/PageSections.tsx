import type {
  BigCommerceGql_Product
} from "../../graphql-types"

import type { ModularBlocksTypes } from "../../types/ModularBlocks"

import clsx from "clsx"
import React from "react"
import styled, { css } from "styled-components"

import { ModularBlocks } from "../components/ModularBlocks"

export type Section = {
  background_attachment: string
  background_colour: string
  background_image: string
  background_position: string
  background_repeat: string
  background_size: string
  container: boolean
  id: string
  modular_blocks: ModularBlocksTypes[]
  title: string
}

export type PageSectionsProps = {
  bestSellingProducts: BigCommerceGql_Product[]
  featuredProducts: BigCommerceGql_Product[]
  sections: Section[]
}

export const PageSections: React.FC<PageSectionsProps> = ({ sections }) => (
  <React.Fragment>
    {sections?.map(section => {
      const SectionStyled = styled.section`
        ${section?.background_attachment &&
        css`
          background-attachment: ${section?.background_attachment};
        `}

        ${section?.background_colour &&
        css`
          background-color: ${section?.background_colour};
        `}

        ${section?.background_image &&
        css`
          background-image: url("${section?.background_image}");
        `}

        ${section?.background_position &&
        css`
          background-position: ${section?.background_position};
        `}

        ${section?.background_repeat &&
        css`
          background-repeat: ${section?.background_repeat};
        `}

        ${section?.background_size &&
        css`
          background-size: ${section?.background_size};
        `}
        
        min-height: 25vh;
      `

      return (
        <SectionStyled
          className={clsx(section?.container && "container")}
          id={section?.id}
          key={section?.id}
        >
          <ModularBlocks modularBlocks={section?.modular_blocks} bestSellingProducts={props.bestSellingProducts} featuredProducts={props.featuredProducts} />
        </SectionStyled>
      )
    })}
  </React.Fragment>
)