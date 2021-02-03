import React from "react"
import { Story, Meta } from "@storybook/react"

import { Footer, FooterProps } from "../src/components/Footer"

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    backgroundColor: { control: "color" },
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
            id: "ae387fe1-21f0-5681-8cbc-f6713e550ef8",
            title: "About Us",
            slot: "footer-secondary-1",
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
            id: "17a629c0-6e77-5e6f-bd03-6126c4c5a3c1",
            title: "Delivery & Returns",
            slot: "footer-secondary-2",
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
        {
          node: {
            id: "87287b53-1ea7-55c3-89cb-f5454f4a52d2",
            title: "Information & Help",
            slot: "footer-secondary-3",
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
            id: "ae387fe1-21f0-8cbc-5681-f6713e550ef8",
            title: "Follow Us",
            slot: "footer-tertiary-1",
            links: [
              {
                icon: {
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blta5b46ebe32db0638/601012b833e08b0bf863165e/youtube.svg",
                  title: "youtube.svg",
                },
              },
              {
                icon: {
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blt26448e2036f3e297/6010131a2206ca0c0330f7c2/instagram.svg",
                  title: "instagram.svg",
                },
              },
              {
                icon: {
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blt120936cf45aa5baf/601013432206ca0c0330f7c4/facebook.svg",
                  title: "facebook.svg",
                },
              },
              {
                icon: {
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blt906eec211b8f861c/6010132b3a3dc60c74cd7232/twitter.svg",
                  title: "twitter.svg",
                },
              },
            ],
          },
        },
      ],
    },
  },
  siteTitle: "La Perla Beauty"
}
Example.argTypes = {
  onClick: { action: "Footer clicked" },
}
