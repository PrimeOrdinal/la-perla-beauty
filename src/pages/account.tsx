import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../theme"

import { Layout } from "../components/Layout"
import { IconList } from "../components/IconList"
import { Button } from "../components/Button"
import { SEO } from "../components/SEO"

const MainStyled = styled.main`
  .desktop-heading {
    display: none;
    ${mediaQueries.md} {
      display: initial;
    }
  }
`

const GridStyled = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  ${mediaQueries.md} {
    grid-auto-flow: column;
    gap: 6rem;
  }
  .sign-in {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    .desktop-subheading {
      display: none;
      ${mediaQueries.md} {
        display: initial;
      }
    }
    .mobile-heading {
      ${mediaQueries.md} {
        display: none;
      }
    }
  }
  .register {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
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
              <input type="email" />
              <label htmlFor="password">password</label>
              <input type="password" />
              <span>forgot your password?</span>
              <Button variant="primary">Sign in</Button>
            </form>
          </section>
          <section className="register">
            <h1>Register</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              quidem adipisci quos.
            </p>
            <IconList />
            <Button variant="primary">register</Button>
          </section>
        </GridStyled>
      </MainStyled>
    </Layout>
  )
}

export default AccountPage
