import type { InstagramQuery } from "../../graphql-types"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

import { ListPlain } from "./ListPlain"

const InstagramStyle = styled.aside`
  background-color: #efeee9;
  display: grid;
  gap: 2rem;
  padding: 1rem;
`

export type InstagramProps = {
  title?: string
}

export const Instagram: React.FC<InstagramProps> = (
  { title } = {
    title: "Instagram",
  }
) => {
  const data: InstagramQuery = useStaticQuery(graphql`
    query Instagram {
      allInstaNode {
        edges {
          node {
            caption
            localFile {
              childImageSharp {
                fluid {
                  srcSet
                  src
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <InstagramStyle>
      <h1>{title}</h1>
      <ListPlain>
        {data.allInstaNode.edges.map(({ node: post }, index) => (
          <li key={index}>
            <h2>{post?.caption}</h2>
            <Img fluid={post?.localFile?.childImageSharp?.fluid} />
          </li>
        ))}
      </ListPlain>
    </InstagramStyle>
  )
}
