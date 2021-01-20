import React, { ReactElement } from "react"

export const NewsletterSignup = (): ReactElement => {
  return (
    <form>
      <label htmlFor="email-address">Sign up to our newsletter</label>
      <input
        id="email-address"
        name="email-address"
        placeholder="Enter your email address"
        type="email"
      />
    </form>
  )
}
