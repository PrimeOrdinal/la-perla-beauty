import { themeGet } from "@styled-system/theme-get"
import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../../components/Button"
import { IconList } from "../../components/IconList"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"

import { mediaQueries } from "../../theme"

import { myAccount as myAccountPath } from "../../utils/paths"

const MainStyled = styled.main`
  display: grid;
  place-content: center;

  .desktop-heading {
    display: none;

    ${mediaQueries.md} {
      display: initial;
      font-size: ${themeGet("fontSizes.8")}px;
      margin-block-start: 70px;
    }
  }
`

const GridStyled = styled.section`
  display: grid;
  gap: ${themeGet("space.9")}px;
  grid-auto-flow: row;

  ${mediaQueries.md} {
    gap: 6rem;
    grid-template-columns: minmax(400px, 550px) minmax(400px, 550px);
    margin-block-end: 70px;
    margin-block-start: ${themeGet("space.12")}px;
    place-content: center;
  }

  .sign-in {
    display: grid;
    gap: 1rem;
    grid-auto-flow: row;

    .desktop-subheading {
      display: none;

      ${mediaQueries.md} {
        display: initial;
        font-size: var(--font-size-lg, 18px);
        margin: 0;
      }
    }

    .mobile-heading {
      font-size: var(--font-size-xl, 24px);
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
        font-size: var(--font-size-sm, 12px);
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
    align-items: flex-start;
    h1 {
      font-size: var(--font-size-lg, 18px);
      margin: 0;
    }

    p {
      margin: 0;
    }
  }
`

const AccountPage: React.FC = () => {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false)

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
            <form
              action={
                userIsSignedIn ? `${myAccountPath}/information` : `${myAccountPath}/sign-up`
              }
            >
              <label htmlFor="email address">email address*</label>
              <input className="input-focus" type="email" />
              <label htmlFor="password">password</label>
              <input className="input-focus" type="password" />
              <span>forgot your password?</span>
              <Button
                type="submit"
                variant="secondary"
                p={5}
                className="sign-in"
              >
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
                  color: "purple",
                  icon: "recycle",
                  body:
                    "some pseudo text here to populate the body of this usp section.",
                },
              ]}
              orientation="horizontal"
            />
            <IconList
              items={[
                {
                  color: "orange",
                  icon: "plant",
                  body:
                    "some pseudo text here to populate the body of this usp section.",
                },
              ]}
              orientation="horizontal"
            />
            <IconList
              items={[
                {
                  color: "pink",
                  icon: "nib",
                  body:
                    "some pseudo text here to populate the body of this usp section.",
                },
              ]}
              orientation="horizontal"
            />
            <IconList
              items={[
                {
                  color: "green",
                  icon: "tracking",
                  body:
                    "some pseudo text here to populate the body of this usp section.",
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
