import React from "react"
import { themeGet } from "@styled-system/theme-get"
import styled from "styled-components"
import { mediaQueries } from "../../theme"

import { Layout } from "../../components/Layout"
import { ListPlain } from "../../components/ListPlain"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"
import { ProductCard } from "../../components/ProductCard"

const WishlistColumn = styled(ListPlain)`
  .wishlist-title {
    margin: 0;
  }
  .recent-heading {
    margin: 0;
    padding-block-start: 1rem;
    padding-block-end: 1rem;
  }

  .wishlist-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    ${mediaQueries.md} {
      grid-template-columns: repeat(2, 1fr);
    }
    border-bottom: solid ${themeGet("border.color")} ${themeGet("border.width")};
    padding-block-end: 2rem;
  }
  .recently-viewed {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
  }
`

const WishlistPage: React.FC = () => (
  <Layout>
    <AccountLayout>
      <SEO title="My wishlist" />
      <WishlistColumn className="container">
        <h1 className="wishlist-title">Wishlist</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          doloremque blanditiis veniam at temporibus provident eveniet a fuga
          atque excepturi!
        </p>
        <ListPlain className="wishlist-grid">
          <li>
            <ProductCard
              product={{
                "@context": "https://schema.org",
                "@type": "ProductGroup",
                category: [
                  { name: "Fragrances", url: "/fragrances/" },
                  { name: "Shop All", url: "/shop-all/" },
                  {
                    name: "Fragrances sub-category 1",
                    url: "/fragrances/fragrances-sub-category-1/",
                  },
                ],
                description: "Lip Balm | 202 Petal Lips | Standard",
                identifier: "141",
                image: [
                  {
                    caption: "Bottle",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/141/379/LaPerla_Collection_120ml__LTDB__36380.1613651451.jpg",
                    representativeOfPage: true,
                  },
                  {
                    caption: "Ravine",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/141/409/1015-600x600__02193.1613651452.jpg",
                    representativeOfPage: false,
                  },
                  {
                    caption: "Mountain",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/141/410/1016-600x600__38046.1613651452.jpg",
                    representativeOfPage: false,
                  },
                  {
                    caption: "Clouds",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/141/408/1019-600x600__22691.1613651452.jpg",
                    representativeOfPage: false,
                  },
                  {
                    caption: "Mist",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/141/411/1021-600x600__03146.1613661248.jpg",
                    representativeOfPage: false,
                  },
                ],
                name: "Petal Lips",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/OutOfStock",
                  price: 120,
                  priceCurrency: "EUR",
                },
                productID: "141",
                sku: "00097540701001",
                url: "/petal-lips/",
                hasVariant: [
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "Lip Balm | 202 Petal Lips | Standard",
                    identifier: "109",
                    name: "Petal Lips",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/OutOfStock",
                      price: 100,
                      priceCurrency: "EUR",
                    },
                    productID: "109",
                    sku: "00097540701001-30",
                    size: "30ml",
                    variesBy: "Size",
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "Lip Balm | 202 Petal Lips | Standard",
                    identifier: "110",
                    name: "Petal Lips",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/OutOfStock",
                      price: 100,
                      priceCurrency: "EUR",
                    },
                    productID: "110",
                    sku: "00097540701001-90",
                    size: "90ml",
                    variesBy: "Size",
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "Lip Balm | 202 Petal Lips | Standard",
                    identifier: "111",
                    name: "Petal Lips",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/OutOfStock",
                      price: 100,
                      priceCurrency: "EUR",
                    },
                    productID: "111",
                    sku: "00097540701001-12",
                    size: "120ml",
                    variesBy: "Size",
                  },
                ],
                productGroupID: "UHJvZHVjdDoxNDE=",
              }}
            />
          </li>
          <li>
            <ProductCard
              product={{
                "@context": "https://schema.org",
                "@type": "ProductGroup",
                category: [{ name: "Shop All", url: "/shop-all/" }],
                description: "About That Night | 12ml EDP | Miniature",
                identifier: "113",
                image: [
                  {
                    caption: "",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/113/407/LaPerla_Collection_120ml__MD__86621.1612958300.jpg",
                    representativeOfPage: true,
                  },
                ],
                name: "About That Night",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  price: 0,
                  priceCurrency: "EUR",
                },
                productID: "113",
                sku: "08006556697002",
                url: "/about-that-night/",
                hasVariant: [
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "About That Night | 12ml EDP | Miniature",
                    identifier: "78",
                    name: "About That Night",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/InStock",
                      price: 0,
                      priceCurrency: "EUR",
                    },
                    productID: "78",
                    sku: "08006556697002",
                  },
                ],
                productGroupID: "UHJvZHVjdDoxMTM=",
              }}
            />
          </li>
          <li>
            <ProductCard
              product={{
                "@context": "https://schema.org",
                "@type": "ProductGroup",
                category: [{ name: "Shop All", url: "/shop-all/" }],
                description: "Invisible Touch | 12ml EDP | Miniature",
                identifier: "114",
                image: [
                  {
                    caption: "",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/114/406/LaPerla_Collection_120ml__LTDB__37833.1612958287.jpg",
                    representativeOfPage: true,
                  },
                ],
                name: "Invisible Touch",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  price: 0,
                  priceCurrency: "EUR",
                },
                productID: "114",
                sku: "08004006294002",
                url: "/invisible-touch/",
                hasVariant: [
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "Invisible Touch | 12ml EDP | Miniature",
                    identifier: "79",
                    name: "Invisible Touch",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/InStock",
                      price: 0,
                      priceCurrency: "EUR",
                    },
                    productID: "79",
                    sku: "08004006294002",
                  },
                ],
                productGroupID: "UHJvZHVjdDoxMTQ=",
              }}
            />
          </li>

          <li>
            <ProductCard
              product={{
                "@context": "https://schema.org",
                "@type": "ProductGroup",
                category: [
                  { name: "Shop All", url: "/shop-all/" },
                  { name: "Fragrances", url: "/fragrances/" },
                  {
                    name: "Fragrances sub-category 1",
                    url: "/fragrances/fragrances-sub-category-1/",
                  },
                ],
                description: "Lipstick | Matte-Silk 106 VERE | Standard",
                identifier: "138",
                image: [
                  {
                    caption: "",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/138/382/LaPerla_Collection_120ml__P__97038.1612958040.jpg",
                    representativeOfPage: true,
                  },
                ],
                name: "106 Venetian Red",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  price: 0,
                  priceCurrency: "EUR",
                },
                productID: "138",
                sku: "00087863606001",
                url: "/106-venetian-red/",
                hasVariant: [
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "Lipstick | Matte-Silk 106 VERE | Standard",
                    identifier: "103",
                    name: "106 Venetian Red",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/InStock",
                      price: 0,
                      priceCurrency: "EUR",
                    },
                    productID: "103",
                    sku: "00087863606001",
                  },
                ],
                productGroupID: "UHJvZHVjdDoxMzg=",
              }}
            />
          </li>
        </ListPlain>
        <h1 className="recent-heading">Recently viewed</h1>
        <ListPlain className="recently-viewed">
          <li>
            <ProductCard
              product={{
                "@context": "https://schema.org",
                "@type": "ProductGroup",
                category: [{ name: "Shop All", url: "/shop-all/" }],
                description: "Invisible Touch | 12ml EDP | Miniature",
                identifier: "114",
                image: [
                  {
                    caption: "",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/114/406/LaPerla_Collection_120ml__LTDB__37833.1612958287.jpg",
                    representativeOfPage: true,
                  },
                ],
                name: "Invisible Touch",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  price: 0,
                  priceCurrency: "EUR",
                },
                productID: "114",
                sku: "08004006294002",
                url: "/invisible-touch/",
                hasVariant: [
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "Invisible Touch | 12ml EDP | Miniature",
                    identifier: "79",
                    name: "Invisible Touch",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/InStock",
                      price: 0,
                      priceCurrency: "EUR",
                    },
                    productID: "79",
                    sku: "08004006294002",
                  },
                ],
                productGroupID: "UHJvZHVjdDoxMTQ=",
              }}
            />
          </li>

          <li>
            <ProductCard
              product={{
                "@context": "https://schema.org",
                "@type": "ProductGroup",
                category: [{ name: "Shop All", url: "/shop-all/" }],
                description: "About That Night | 12ml EDP | Miniature",
                identifier: "113",
                image: [
                  {
                    caption: "",
                    contentUrl:
                      "https://cdn11.bigcommerce.com/s-9o6tufixs6/images/stencil/original/products/113/407/LaPerla_Collection_120ml__MD__86621.1612958300.jpg",
                    representativeOfPage: true,
                  },
                ],
                name: "About That Night",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  price: 0,
                  priceCurrency: "EUR",
                },
                productID: "113",
                sku: "08006556697002",
                url: "/about-that-night/",
                hasVariant: [
                  {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    description: "About That Night | 12ml EDP | Miniature",
                    identifier: "78",
                    name: "About That Night",
                    offers: {
                      "@type": "Offer",
                      availability: "https://schema.org/InStock",
                      price: 0,
                      priceCurrency: "EUR",
                    },
                    productID: "78",
                    sku: "08006556697002",
                  },
                ],
                productGroupID: "UHJvZHVjdDoxMTM=",
              }}
            />
          </li>
        </ListPlain>
      </WishlistColumn>
    </AccountLayout>
  </Layout>
)

export default WishlistPage
