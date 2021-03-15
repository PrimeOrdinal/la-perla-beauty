import React from "react"
import { Story, Meta } from "@storybook/react"

import {
  ProductCardAlternateGallery,
  ProductCardAlternateGalleryProps,
} from "../src/components/ProductCardAlternateGallery"

export default {
  title: "ProductCardAlternateGallery",
  component: ProductCardAlternateGallery,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ProductCardAlternateGalleryProps> = args => (
  <ProductCardAlternateGallery {...args} />
)

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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
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
      size: {
        "@type": "QuantitativeValue",
        unitText: "ml",
        value: 30,
      },
    },
  ],
  view: "grid",
  variantType: "size",
  width: { _: 1, sm: 1 / 2, md: 1 / 2, lg: 1 / 6 },
}
