import React from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { IconList } from "../components/IconList"
import { Button } from "../components/Button"
import { SEO } from "../components/SEO"

import { mediaQueries } from "../theme"

const MainStyled = styled.main`
  .desktop-heading {
    display: none;
    ${mediaQueries.md} {
      display: initial;
      font-size: ${themeGet("fontSizes.7")}px;
    }
  }
`

const GridStyled = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: ${themeGet("space.9")}px;
  ${mediaQueries.md} {
    grid-auto-flow: column;
    gap: 6rem;
    margin-block-start: ${themeGet("space.12")}px;
  }
  .sign-in {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    .desktop-subheading {
      display: none;
      ${mediaQueries.md} {
        display: initial;
        font-size: ${themeGet("fontSizes.6")}px;
        margin: 0;
      }
    }
    .mobile-heading {
      font-size: ${themeGet("fontSizes.6")}px;
      margin: 0;
      ${mediaQueries.md} {
        display: none;
      }
    }
    p {
      margin: 0;
    }
    form {
      span {
        text-transform: uppercase;
        font-size: ${themeGet("fontSizes.small")}px;
        ${mediaQueries.md} {
          font-size: ${themeGet("fontSizes.1")}px;
        }
      }
    }
  }
  .register {
    display: grid;
    grid-auto-flow: row;
    gap: ${themeGet("space.7")}px;
    h1 {
      font-size: ${themeGet("fontSizes.6")}px;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
`

const AccountPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Account" />
      <MainStyled className="container">
        <h1 className="desktop-heading">Sign in/Register</h1>
        <GridStyled>
          <section className="sign-in">
            <h1 className="desktop-subheading">Sign in</h1>
            <h1 className="mobile-heading">Sign in/Register</h1>
            <p>
              Please enter your email address and password below to access your
              account
            </p>
            <form>
              <label htmlFor="email address">email address*</label>
              <input className="input-focus" type="email" />
              <label htmlFor="password">password</label>
              <input className="input-focus" type="password" />
              <span>forgot your password?</span>
              <Button variant="primary" p={5}>
                Sign in
              </Button>
            </form>
          </section>
          <section className="register">
            <h1>Register</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              quidem adipisci quos.
            </p>
            <IconList />
            <Button variant="primary" py={5}>
              register
            </Button>
          </section>
        </GridStyled>
      </MainStyled>
    </Layout>
  )
}

export default AccountPage
