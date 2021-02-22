import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import DownArrow from "../../images/DownArrow.svg"
import { Layout } from "../../components/Layout"
import { Button } from "../../components/Button"
import { Accordion } from "../../components/Accordion"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"
import { mediaQueries } from "../../theme"

const ColumnTwoStyled = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  .account-title {
    display: none;
    ${mediaQueries.md} {
      font-size: 32px;
      display: initial;
      margin: 0;
    }
  }
  .account-description {
    display: none;
    ${mediaQueries.md} {
      display: initial;
      margin: 0;
      font-size: 14px;
    }
  }

  form {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    ${mediaQueries.md} {
      padding-block-start: 1rem;
      padding-block-end: 1rem;
    }
    .mobile-numbers {
      display: grid;
      grid-template-columns: 135px 1fr;
      gap: 1rem;
      .country-code-container {
        border: solid ${themeGet("border.color")} ${themeGet("border.width")};
        border-radius: 12px;
        display: flex;
        padding: 0 1rem;
        justify-content: space-between;
        align-items: center;
        input {
          border: none;
          padding: 0;
          width: 80px;
        }
      }
    }
    .password-accordion {
      border-bottom: ${themeGet("border.width")} solid
        ${themeGet("border.color")};
    }
  }
  h3 {
    margin: 0;
    ${mediaQueries.md} {
      font-size: 20px;
    }
  }
`

const AccordionGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
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
          <label htmlFor="first name">First name*</label>
          <input type="text" />
          <label htmlFor="last name">Last name*</label>
          <input type="text" />
          <label htmlFor="email">email address</label>
          <input type="email" />
          <label htmlFor="mobile">mobile number*</label>
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
              <img src={DownArrow} alt="something" />
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
        <h3>Newsletter preferences</h3>
        <Button variant="primary">manage newsletter preferences</Button>
      </ColumnTwoStyled>
    </AccountLayout>
  </Layout>
)

export default InformationPage
