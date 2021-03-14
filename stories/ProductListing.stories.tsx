import React from "react"
import { Story, Meta } from "@storybook/react"

import { ProductListing } from "../src/components/ProductListing"

export default {
  title: "ProductListing",
  component: ProductListing,
  argTypes: {
    view: {
      control: {
        type: "inline-radio",
        options: ["grid", "list"],
      },
    },
  },
} as Meta

const Template: Story = args => <ProductListing {...args} />

export const Example = Template.bind({})
Example.args = {
  items: [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Executive Anvil",
      category: [
        {
          "@type": "Thing",
          identifier: 123,
          name: "Fragrances",
          url: "/fragrances",
        },
      ],
      image: [
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
      ],
      description:
        "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      sku: "0446310786",
      mpn: "925872",
      review: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
        author: { "@type": "Person", name: "Fred Benson" },
      },
      offers: {
        "@type": "Offer",
        url: "https://example.com/anvil",
        priceCurrency: "USD",
        price: "119.99",
        priceValidUntil: "2020-11-20",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Executive Anvil",
      category: [
        {
          "@type": "Thing",
          identifier: 123,
          name: "Fragrances",
          url: "/fragrances",
        },
      ],
      image: [
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
      ],
      description:
        "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      sku: "0446310786",
      mpn: "925872",
      review: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
        author: { "@type": "Person", name: "Fred Benson" },
      },
      offers: {
        "@type": "Offer",
        url: "https://example.com/anvil",
        priceCurrency: "USD",
        price: "119.99",
        priceValidUntil: "2020-11-20",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Executive Anvil",
      category: [
        {
          "@type": "Thing",
          identifier: 123,
          name: "Fragrances",
          url: "/fragrances",
        },
      ],
      image: [
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
      ],
      description:
        "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      sku: "0446310786",
      mpn: "925872",
      review: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
        author: { "@type": "Person", name: "Fred Benson" },
      },
      offers: {
        "@type": "Offer",
        url: "https://example.com/anvil",
        priceCurrency: "USD",
        price: "119.99",
        priceValidUntil: "2020-11-20",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Executive Anvil",
      category: [
        {
          "@type": "Thing",
          identifier: 123,
          name: "Fragrances",
          url: "/fragrances",
        },
      ],
      image: [
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
        {
          "@type": "ImageObject",
          caption: "Image caption",
          contentUrl: "https://via.placeholder.com/300x400",
        },
      ],
      description:
        "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      sku: "0446310786",
      mpn: "925872",
      review: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
        author: { "@type": "Person", name: "Fred Benson" },
      },
      offers: {
        "@type": "Offer",
        url: "https://example.com/anvil",
        priceCurrency: "USD",
        price: "119.99",
        priceValidUntil: "2020-11-20",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
    },
  ],
  view: "grid",
}
