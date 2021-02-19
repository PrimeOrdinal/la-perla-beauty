import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { Layout } from "../../components/Layout"
import { IconList } from "../../components/IconList"
import { Button } from "../../components/Button"
import { SEO } from "../../components/SEO"

import { mediaQueries } from "../../theme"

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
  gap: ${themeGet("space.9")}px;
  grid-auto-flow: row;

  ${mediaQueries.md} {
    gap: 6rem;
    grid-auto-flow: column;
    margin-block-start: ${themeGet("space.12")}px;
  }
  .sign-in {
    display: grid;
    gap: 1rem;
    grid-auto-flow: row;

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
        font-size: ${themeGet("fontSizes.small")}px;
        text-transform: uppercase;

        ${mediaQueries.md} {
          font-size: ${themeGet("fontSizes.1")}px;
        }
      }
    }
  }
  .register {
    display: grid;
    gap: ${themeGet("space.7")}px;
    grid-auto-flow: row;

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
            <IconList
              items={[
                {
                  color: "red",
                  heading: "hello",
                  icon: "diamond",
                  body: "some pseudo text here",
                },
              ]}
              orientation="horizontal"
            />
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
