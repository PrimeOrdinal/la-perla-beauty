import React from "react"
import styled from "styled-components"
import { mediaQueries, theme } from "../theme"
import { Button } from "./Button"

const StyledNewsletter = styled.div`
  ${mediaQueries.md} {
    justify-content: end;
  }

  form {
    display: grid;
    gap: ${theme.space[3]}px;
    grid-auto-flow: column;

    ${mediaQueries.md} {
      align-items: center;
      gap: 1rem;
      grid-auto-flow: column;
      grid-template-columns: unset;
      justify-content: end;
    }

    label {
      display: none;

      ${mediaQueries.md} {
        display: block;
        font-size: ${theme.fontSizes[1]}rem;
        text-transform: uppercase;
        margin-right: 0.875rem;
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
        <Button variant="tertiary">Sign up</Button>
      </form>
    </StyledNewsletter>
  )
}
