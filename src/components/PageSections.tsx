import type { Background as BackgroundProp } from "../../types/components"
import type { ModularBlocksTypes } from "../../types/ModularBlocks"

import clsx from "clsx"
import React from "react"
import styled, { css } from "styled-components"

import { ModularBlocks } from "../components/ModularBlocks"

export type PageSection = {
  background: BackgroundProp
  container: boolean
  id: string
  modular_blocks: ModularBlocksTypes[]
  title: string
}

export type PageSectionsProps = {
  pageSections: PageSection[]
}

export const PageSections: React.FC<PageSectionsProps> = ({ pageSections }) => (
  <React.Fragment>
    {pageSections?.map(page_section => {
      const SectionStyled = styled.section`
        ${page_section?.background?.attachment &&
        css`
          background-attachment: ${page_section?.background?.attachment};
        `}
        ${page_section?.background?.colour?.transparent === false &&
        page_section?.background?.colour?.colour_picker &&
        css`
          background-color: ${page_section?.background?.colour?.colour_picker};
        `}
            ${page_section?.background?.file?.url &&
        css`
          background-image: url("${page_section?.background?.file?.url}");
        `}

        background-position: ${page_section?.background?.position};

        ${page_section?.background?.repeat &&
        css`
          background-repeat: ${page_section?.background?.repeat
              ?.horizontal_repetition_behaviour}
            ${page_section?.background?.repeat?.vertical_repetition_behaviour};
        `}
        ${page_section?.background?.size?.custom_size !== ""
          ? css`
              background-size: ${page_section?.background?.size?.custom_size};
            `
          : css`
              background-size: ${page_section?.background?.size?.preset};
            `}
          min-height: 25vh;
      `

      return (
        <SectionStyled
          className={clsx(page_section?.container && "container")}
          id={page_section?.id}
          key={page_section?.id}
        >
          {/* <h2>{page_section?.title}</h2> */}
          <ModularBlocks modularBlocks={page_section?.modular_blocks} />
        </SectionStyled>
      )
    })}
  </React.Fragment>
)
