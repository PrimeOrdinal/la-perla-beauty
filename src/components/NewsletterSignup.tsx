import React from "react"
import styled from "styled-components"
import { mediaQueries, theme } from "../theme"
import { Button } from "./Button"

const StyledNewsletter = styled.div`
  ${mediaQueries.md} {
    flex: 0.8;
    justify-content: end;
  }
  form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: ${theme.space[3]}px;
    ${mediaQueries.md} {
      display: flex;
      justify-content: end;
      align-items: center;
    }
    label {
      display: none;
      ${mediaQueries.md} {
        display: block;
        font-size: ${theme.fontSizes[1]}px;
        text-transform: uppercase;
        margin-right: 14px;
      }
    }
    input {
      border: 1px solid ${theme.colors.tertiary};
      border-radius: ${theme.space[2]}px;
      font-size: ${theme.fontSizes[0]}px;
      font-family: "Quicksand";
      padding: 0.875rem 1.375rem;
      gap: ${theme.space[3]}px;
      ${mediaQueries.md} {
        padding: 0.75rem 1.9375rem;
      }
      &:focus {
        background: none;
        outline: none;
        box-shadow: none;
      }
      &::selection {
        outline: none;
        background: none;
        box-shadow: none;
      }
    }
  }
`

export const NewsletterSignup: React.FC = () => {
  return (
    <StyledNewsletter>
      <form>
        <label htmlFor="email-address">Sign up to our newsletter</label>
        <input
          id="email-address"
          name="email-address"
          placeholder="Enter your email address"
          type="email"
        />
        <Button variant="primary">Sign up</Button>
      </form>
    </StyledNewsletter>
  )
}
