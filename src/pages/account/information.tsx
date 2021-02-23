import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import Chevron from "../../images/Chevron.svg"
import { Layout } from "../../components/Layout"
import { Button } from "../../components/Button"
import { Accordion } from "../../components/Accordion"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"
import { mediaQueries } from "../../theme"

const ColumnTwoStyled = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: ${themeGet("space.5")}px;
  .account-title {
    font-size: ${themeGet("fontSizes.6")}px;
    margin: 0;
    ${mediaQueries.md} {
      font-size: ${themeGet("fontSizes.7")}px;
      display: initial;
    }
  }
  .account-description {
    margin: 0;
    ${mediaQueries.md} {
      font-size: ${themeGet("fontSizes.bodyDesktop")}px;
    }
  }

  form {
    display: grid;
    grid-auto-flow: row;
    gap: ${themeGet("space.5")}px;
    ${mediaQueries.md} {
      padding-block-start: ${themeGet("space.6")}px;
      padding-block-end: ${themeGet("space.6")}px;
    }
    label {
      font-size: ${themeGet("fontSizes.bodyMobile")}px;
    }
    .name-wrapper {
      display: grid;
      grid-auto-flow: row;
      gap: ${themeGet("space.5")}px;
      ${mediaQueries.md} {
        grid-template-columns: auto auto;
        gap: ${themeGet("space.10")}px;
      }
      .first-name,
      .last-name {
        display: grid;
        grid-auto-flow: row;
        gap: ${themeGet("space.5")}px;
      }
    }

    .mobile-numbers {
      display: grid;
      grid-template-columns: 135px 1fr;
      gap: ${themeGet("space.6")}px;
      .country-code-container {
        border: solid ${themeGet("border.color")} ${themeGet("border.width")};
        border-radius: ${themeGet("radii.3")}px;
        display: flex;
        padding: 0 ${themeGet("space.6")}px;
        justify-content: space-between;
        align-items: center;
        input {
          border: none;
          padding: 0;
          width: ${themeGet("space.13")}px;
        }
      }
    }
    .password-accordion {
      border-bottom: ${themeGet("border.width")} solid
        ${themeGet("border.color")};
    }
  }
  h2 {
    margin: 0;
    font-size: 20px;
    ${mediaQueries.md} {
    }
  }
`

const AccordionGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: ${themeGet("space.6")}px;
`

const InformationPage: React.FC = () => (
  <Layout>
    <SEO title="account information" />
    <AccountLayout>
      <ColumnTwoStyled>
        <h1 className="account-title">Account information</h1>
        <p className="account-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <form>
          <label htmlFor="title">title*</label>
          <input type="text" />
          <div className="name-wrapper">
            <div className="first-name">
              <label htmlFor="first name">First name*</label>
              <input type="text" />
            </div>
            <div className="last-name">
              <label htmlFor="last name">Last name*</label>
              <input type="text" />
            </div>
          </div>
          <label htmlFor="email">email address*</label>
          <input type="email" />
          <label htmlFor="mobile">mobile no.</label>
          <div className="mobile-numbers">
            <div className="country-code-container">
              <input
                list="country-code"
                id="country-code"
                name="country-code"
                placeholder="+44"
              />
              <datalist id="country-code">
                <option value="+42" />
                <option value="+12" />
              </datalist>
              <img src={Chevron} alt="something" />
            </div>

            <input type="text" />
          </div>

          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            className="password-accordion"
            items={[
              {
                heading: "change password",
                panel: (
                  <AccordionGrid>
                    <label htmlFor="password">password*</label>
                    <input type="password" />
                    <label htmlFor="new password">new password*</label>
                    <input type="password" />
                    <label htmlFor="re-enter new password">
                      re-enter new password
                    </label>
                    <input type="password" />
                    <Button variant="secondary">Save changes</Button>
                  </AccordionGrid>
                ),
              },
            ]}
          />
        </form>
        <h2>Newsletter preferences</h2>
        <Button variant="primary">manage newsletter preferences</Button>
      </ColumnTwoStyled>
    </AccountLayout>
  </Layout>
)

export default InformationPage
