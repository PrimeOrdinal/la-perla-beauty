import type { ModularBlocksTypes } from "../../types/ModularBlocks"

import clsx from "clsx"
import React from "react"
import styled, { css } from "styled-components"

import { ModularBlocks } from "../components/ModularBlocks"

export type PageSectionsProps = {
  pageSections: Array<{
    background_image: {
      attachment: string
      colour: {
        colour_picker: string
        transparent: boolean
      }
      file: {
        description: string
        title: string
        url: string
      }
      position: {
        custom_position: string
        horizontal_position: string
        vertical_position: string
      }
      repeat: {
        horizontal_repetition_behaviour: string
        vertical_repetition_behaviour: string
      }
      size: {
        custom_size: string
        preset: string
      }
    }
    container: boolean
    id: string
    modular_blocks: ModularBlocksTypes[]
    title: string
  }>
}

export const PageSections: React.FC<PageSectionsProps> = ({ pageSections }) => (
  <React.Fragment>
    {pageSections?.map(page_section => {
      const SectionStyled = styled.section`
        ${page_section?.background_image?.attachment &&
        css`
          background-attachment: ${page_section?.background_image?.attachment};
        `}
        ${page_section?.background_image?.colour?.transparent === false &&
        page_section?.background_image?.colour?.colour_picker &&
        css`
          background-color: ${page_section?.background_image?.colour
            ?.colour_picker};
        `}
            ${page_section?.background_image?.file?.url &&
        css`
          background-image: url("${page_section?.background_image?.file?.url}");
        `}
          ${page_section?.background_image?.position?.custom_position !== ""
          ? css`
              background-position: ${page_section?.background_image?.position
                ?.custom_position};
            `
          : css`
              background-position: ${page_section?.background_image?.position
                  ?.horizontal_position}
                ${page_section?.background_image?.position?.vertical_position};
            `}
          ${page_section?.background_image?.repeat &&
        css`
          background-repeat: ${page_section?.background_image?.repeat
              ?.horizontal_repetition_behaviour}
            ${page_section?.background_image?.repeat
              ?.vertical_repetition_behaviour};
        `}
          ${page_section?.background_image?.size?.custom_size !== ""
          ? css`
              background-size: ${page_section?.background_image?.size
                ?.custom_size};
            `
          : css`
              background-size: ${page_section?.background_image?.size?.preset};
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
