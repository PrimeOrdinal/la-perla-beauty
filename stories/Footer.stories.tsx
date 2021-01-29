import React from "react"
import { Story, Meta } from "@storybook/react"

import { Footer, FooterProps } from "../src/components/Footer"

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story<FooterProps> = args => <Footer {...args} />

export const Example = Template.bind({})
Example.args = {
  data: {
    allContentstackMenus: {
      edges: [
        {
          node: {
            id: "6ac7fbe6-173f-5014-9c7c-d0fee6a77241",
            title: "Follow Us",
            slot: "tertiary-1",
            links: [
              {
                text: "",
                url: {
                  href:
                    "https://www.youtube.com/channel/EJo0TYlRfn6rYQUCAxW1XT0i",
                  title: "Follow us on YouTube",
                },
                icon: null,
              },
              {
                text: "",
                url: {
                  href: "https://www.instagram.com/BeautyByLaPerla/",
                  title: "Follow us on Instagram",
                },
                icon: null,
              },
              {
                text: "",
                url: {
                  href: "https://www.facebook.com/BeautyByLaPerla/",
                  title: "Follow us on Facebook",
                },
                icon: null,
              },
              {
                text: "",
                url: {
                  href: "https://twitter.com/BeautyByLaPerla",
                  title: "Follow us on Twitter",
                },
                icon: null,
              },
              {
                text: "",
                url: {
                  href: "https://www.pinterest.com/laperla/",
                  title: "Follow us on Pinterest",
                },
                icon: null,
              },
            ],
          },
        },
        {
          node: {
            id: "ae387fe1-21f0-5681-8cbc-f6713e550ef8",
            title: "About Us",
            slot: "secondary-1",
            links: [
              {
                text: "Our Company",
                url: { href: "/our-company/", title: "Our Company" },
                icon: null,
              },
              {
                text: "Our Commitments",
                url: { href: "/our-commitments/", title: "Our Commitments" },
                icon: null,
              },
              {
                text: "Our Stockists",
                url: { href: "/our-stockists/", title: "Our Stockists" },
                icon: null,
              },
              {
                text: "Our Products",
                url: { href: "/our-products/", title: "Our Products" },
                icon: null,
              },
              {
                text: "Clean Beauty",
                url: { href: "/clean-beauty/", title: "Clean Beauty" },
                icon: null,
              },
            ],
          },
        },
        {
          node: {
            id: "87287b53-1ea7-55c3-89cb-f5454f4a52d2",
            title: "Information & Help",
            slot: "secondary-3",
            links: [
              {
                text: "Work With Us",
                url: { href: "/work-with-us/", title: "Work With Us" },
                icon: null,
              },
              {
                text: "Store Locator/Stockists",
                url: {
                  href: "store-locator-stockists",
                  title: "Store Locator/Stockists",
                },
                icon: null,
              },
              {
                text: "FAQs",
                url: { href: "/faqs/", title: "FAQs" },
                icon: null,
              },
              {
                text: "Contact Us",
                url: { href: "/contact-us/", title: "Contact Us" },
                icon: null,
              },
            ],
          },
        },
        {
          node: {
            id: "17a629c0-6e77-5e6f-bd03-6126c4c5a3c1",
            title: "Delivery & Returns",
            slot: "secondary-2",
            links: [
              {
                text: "My Account",
                url: { href: "/my-account/", title: "My Account" },
                icon: null,
              },
              {
                text: "Delivery & Returns",
                url: {
                  href: "/delivery-and-returns/",
                  title: "Delivery & Returns",
                },
                icon: null,
              },
              {
                text: "Terms & Conditions",
                url: {
                  href: "/terms-and-conditions/",
                  title: "Terms & Conditions",
                },
                icon: null,
              },
              {
                text: "Privacy Policy",
                url: { href: "/privacy-policy/", title: "Privacy Policy" },
                icon: null,
              },
              {
                text: "Data Protection",
                url: { href: "/data-protection/", title: "Data Protection" },
                icon: null,
              },
            ],
          },
        },
      ],
    },
  },
}
Example.argTypes = {
  onClick: { action: "Footer clicked" },
}
