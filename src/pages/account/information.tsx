import React from "react"
import styled from "styled-components"
import { Layout } from "../../components/Layout"
import { Button } from "../../components/Button"
import { Accordion } from "../../components/Accordion"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"
import { mediaQueries } from "../../theme"

const ColumnTwoStyled = styled.section`
  .account-title,
  .account-description {
    display: none;
    ${mediaQueries.md} {
      display: initial;
    }
  }
  form {
    .name-wrapper {
      display: grid;
      grid-auto-flow: row;
      .first-name,
      .last-name {
        display: grid;
        grid-auto-flow: row;
      }
    }
  }
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
          <label htmlFor="email">email address</label>
          <input type="email" />
          <div className="mobile-wrapper">
            <label htmlFor="mobile">mobile number*</label>
            <div className="mobile-numbers">
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <Accordion
            allowMultipleExpanded={true}
            allowZeroExpanded={true}
            className="password-accordion"
            items={[
              {
                heading: "change password",
                panel: (
                  <React.Fragment>
                    <label htmlFor="password">password*</label>
                    <input type="password" />
                    <label htmlFor="new password">new password*</label>
                    <input type="password" />
                    <label htmlFor="re-enter new password">
                      re-enter new password
                    </label>
                    <input type="password" />
                    <Button variant="secondary">Save changes</Button>
                  </React.Fragment>
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
