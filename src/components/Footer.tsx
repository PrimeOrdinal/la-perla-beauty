import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo.svg"

import { ListPlain } from "../styles/ListPlain"

import { NewsletterSignup } from "./NewsletterSignup"

const StyledFooter = styled.footer`
  background-color: #efeee9;
  display: grid;
  gap: 2rem;
  padding: 1rem;
`

const SocialContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
`

const SocialLinkList = styled(ListPlain)`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
`

export type FooterProps = {
  siteTitle?: string
}

export const Footer: React.FC<FooterProps> = (
  { siteTitle } = {
    siteTitle: "Site Title",
  }
) => {
  return (
    <StyledFooter>
      <div className="primary">
        <Logo />
        <NewsletterSignup />
      </div>
      <div className="secondary"></div>
      <div className="tertiary">
        <SocialContainer>
          <span>Follow us</span>
          <SocialLinkList>
            <li>
              <a href="https://www.facebook.com/BeautyByLaPerla/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/BeautyByLaPerla/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BeautyByLaPerla">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/EJo0TYlRfn6rYQUCAxW1XT0i">
                <FaYoutube />
              </a>
            </li>
          </SocialLinkList>
        </SocialContainer>
        <span>
          © {new Date().getFullYear()} {siteTitle}
        </span>
      </div>
    </StyledFooter>
  )
}

export const query = graphql`
  {
    allBigCommerceCategories {
      edges {
        node {
          name
          id
        }
      }
    }
    allBigCommerceProducts {
      edges {
        node {
          custom_url {
            url
          }
          availability
          calculated_price
          categories
          depth
          description
          fixed_cost_shipping_price
          gtin
          height
          id
          inventory_level
          inventory_warning_level
          is_featured
          is_free_shipping
          is_preorder_only
          is_price_hidden
          is_visible
          mpn
          order_quantity_maximum
          order_quantity_minimum
          preorder_message
          price
          price_hidden_label
          sale_price
          sku
          title: name
          upc
          weight
          width
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          id
          product_id
          rich_text_editor
          title
          url
        }
      }
    }
  }
`
