import React from "react"
import { Story, Meta } from "@storybook/react"

import { Header, HeaderProps } from "../src/components/Header"

export default {
  title: "Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Example = Template.bind({})
Example.args = {
  data: {
    site: { siteMetadata: { title: "La Perla Beauty" } },
    allBigCommerceCategories: {
      edges: [
        {
          node: {
            custom_url: { url: "/women/" },
            description: "",
            id: "2c4eedda-f366-59f0-9271-b72d405d4c72",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Women",
            page_title: "",
            parent_id: 0,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/projects/" },
            description: "",
            id: "65f6b500-50d3-5f5f-90ad-d19b3109e6c0",
            is_visible: false,
            meta_description: "",
            meta_keywords: [""],
            name: "Projects",
            page_title: "",
            parent_id: 0,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/accessories/" },
            description: "",
            id: "258e678f-7535-5319-9256-ca5d19101654",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Accessories",
            page_title: "",
            parent_id: 0,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/collections/" },
            description: "",
            id: "32f274fd-a370-51a1-9ca4-1869daaf27a1",
            is_visible: false,
            meta_description: "",
            meta_keywords: [""],
            name: "Collections",
            page_title: "",
            parent_id: 0,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/utility/" },
            description: "",
            id: "766bccad-cc76-54e5-9409-082645268122",
            is_visible: false,
            meta_description: "",
            meta_keywords: [""],
            name: "Utility",
            page_title: "",
            parent_id: 0,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/shop/" },
            description: "",
            id: "77501cf1-d505-5e08-bf14-e604e9fdac20",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Shop",
            page_title: "",
            parent_id: 0,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/" },
            description:
              "<p><span>Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem.</span></p>",
            id: "d1ed0333-5af9-53bd-8f29-096af10724d0",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Men",
            page_title: "",
            parent_id: 0,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-new-in/" },
            description:
              '<p class="styles__Root-sc-15iyh5a-0 ezamoy sc-bwzfXH ilZGwB styles__Root-sc-1myek4t-0 llcYES">Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras efficitur erat aliquam, gravida mi ac, blandit sem.</p>',
            id: "d7296d1a-d94e-51b6-a29c-abc570aa6b5c",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens New In",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/women/new-category/" },
            description: "",
            id: "70277029-b0a4-5f2a-bba5-27a3813e3cc9",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Women New In",
            page_title: "",
            parent_id: 18,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-vegan-shoes/" },
            description: "",
            id: "c98f2402-a4b2-508e-a5cc-fce85dd5157d",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Vegan Shoes",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/women/womens-vegan-shoes/" },
            description: "",
            id: "4caea449-da23-5f1d-89fd-94f3172f6b46",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Womens Vegan Shoes",
            page_title: "",
            parent_id: 18,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/projects/grenson-craig-green/" },
            description: "",
            id: "7d4f9d5d-524f-5eea-9123-925fa934cb79",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Grenson + CRAIG GREEN",
            page_title: "",
            parent_id: 19,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/accessories-and-shoe-care/shoe-repairs/" },
            description: "",
            id: "073c130b-6670-5b6a-8eb5-969fa1ecbffe",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Shoe Repairs",
            page_title: "",
            parent_id: 20,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/collections/the-chunky-boot/" },
            description: "",
            id: "6ece600a-1f1f-57ac-886b-93833e0b3f09",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "The Chunky Boot",
            page_title: "",
            parent_id: 21,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-slippers/" },
            description: "",
            id: "97dd18cd-c10c-5d33-aeb2-e0501cbc1d0a",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Slippers",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-socks/" },
            description: "",
            id: "2197ec43-7913-5b16-96b4-09c36af9cf37",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Socks",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-sneakers/" },
            description: "",
            id: "dd01b5e8-c722-53d1-9d54-2a3e8d267db0",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Sneakers",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-triple-welt/" },
            description: "",
            id: "512846c3-0333-5131-b863-216687c2d108",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Triple Welt",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-brogues/" },
            description: "",
            id: "f6319046-a8c1-549c-b599-5afbc4f2d578",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Brogues",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-boots/" },
            description: "",
            id: "6685f301-f244-51a8-b64d-61c669acddaa",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Boots",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/new-category/" },
            description: "",
            id: "bc94a40e-051c-5793-a381-aa6c04ad7136",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Chelsea Boots",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/new-category-1/" },
            description: "",
            id: "95136b6b-f91c-5c14-9828-86502f37fd53",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Chukka Boots",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-hiker-boots/" },
            description: "",
            id: "85a43d1f-b677-5da8-90f1-53942c1bb7cc",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Hiker Boots",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-derby-shoes/" },
            description: "",
            id: "6b39a9c1-6460-5b33-a5e6-07075a9741f3",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Derby Shoes",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-oxford-shoes/" },
            description: "",
            id: "8b4caf0a-aa10-5633-93f1-041041248a9c",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Oxford Shoes",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-loafers/" },
            description: "",
            id: "258ee642-ac27-549e-8047-f996367775d1",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Loafers",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-monkstrap-shoes/" },
            description: "",
            id: "c8298d24-da9d-5002-82a4-b3a2212f1ccb",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Monkstrap Shoes",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
        {
          node: {
            custom_url: { url: "/men/mens-test/" },
            description: "",
            id: "e963b774-0b55-5753-b9c0-ab359b6efb12",
            is_visible: true,
            meta_description: "",
            meta_keywords: [""],
            name: "Mens Test",
            page_title: "",
            parent_id: 24,
            search_keywords: "",
          },
        },
      ],
    },
    allContentstackMenus: {
      edges: [
        {
          node: {
            icon: null,
            links: [
              {
                text: "Our Company",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/our-company/",
                  title: "Our Company",
                },
              },
              {
                text: "Our Commitments",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/our-commitments/",
                  title: "Our Commitments",
                },
              },
              {
                text: "Our Stockists",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/our-stockists/",
                  title: "Our Stockists",
                },
              },
              {
                text: "Our Products",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/our-products/",
                  title: "Our Products",
                },
              },
              {
                text: "Clean Beauty",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/clean-beauty/",
                  title: "Clean Beauty",
                },
              },
            ],
            slot: "footer-secondary-1",
            title: "About Us",
          },
        },
        {
          node: {
            icon: null,
            links: [
              {
                text: "My Account",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/my-account/",
                  title: "My Account",
                },
              },
              {
                text: "Delivery & Returns",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/delivery-and-returns/",
                  title: "Delivery & Returns",
                },
              },
              {
                text: "Terms & Conditions",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/terms-and-conditions/",
                  title: "Terms & Conditions",
                },
              },
              {
                text: "Privacy Policy",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/privacy-policy/",
                  title: "Privacy Policy",
                },
              },
              {
                text: "Data Protection",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/data-protection/",
                  title: "Data Protection",
                },
              },
            ],
            slot: "footer-secondary-2",
            title: "Delivery & Returns",
          },
        },
        {
          node: {
            icon: null,
            links: [
              {
                text: "Work With Us",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/work-with-us/",
                  title: "Work With Us",
                },
              },
              {
                text: "Store Locator/Stockists",
                sub_menus: null,
                icon: null,
                url: {
                  href: "store-locator-stockists",
                  title: "Store Locator/Stockists",
                },
              },
              {
                text: "FAQs",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/faqs/",
                  title: "FAQs",
                },
              },
              {
                text: "Contact Us",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/contact-us/",
                  title: "Contact Us",
                },
              },
            ],
            slot: "footer-secondary-3",
            title: "Information & Help",
          },
        },
        {
          node: {
            icon: null,
            links: [
              {
                text: "New In",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/new-in/",
                  title: "New In",
                },
              },
              {
                text: "Fragrances",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/fragrances/",
                  title: "Fragrances",
                },
              },
              {
                text: "Makeup",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/makeup/",
                  title: "Makeup",
                },
              },
              {
                text: "Body",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/body/",
                  title: "Body",
                },
              },
              {
                text: "Content House",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/content-house/",
                  title: "Content House",
                },
              },
              {
                text: "La Perla Lingerie",
                sub_menus: null,
                icon: null,
                url: {
                  href: "https://laperla.com",
                  title: "La Perla Lingerie",
                },
              },
              {
                text: "About La Perla",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/about/",
                  title: "About La Perla",
                },
              },
              {
                text: "Contact Us",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/contact-us/",
                  title: "Contact Us",
                },
              },
            ],
            slot: "header-navigation",
            title: "Header Navigation",
          },
        },
        {
          node: {
            icon: {
              description: "",
              title: "facebook.svg",
              url:
                "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blt120936cf45aa5baf/601013432206ca0c0330f7c4/facebook.svg",
            },
            links: [
              {
                text: "",
                sub_menus: null,
                icon: {
                  description: "",
                  title: "youtube.svg",
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blta5b46ebe32db0638/601012b833e08b0bf863165e/youtube.svg",
                },
                url: {
                  href:
                    "https://www.youtube.com/channel/EJo0TYlRfn6rYQUCAxW1XT0i",
                  title: "Follow us on YouTube",
                },
              },
              {
                text: "",
                sub_menus: null,
                icon: {
                  description: "",
                  title: "instagram.svg",
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blt26448e2036f3e297/6010131a2206ca0c0330f7c2/instagram.svg",
                },
                url: {
                  href: "https://www.instagram.com/BeautyByLaPerla/",
                  title: "Follow us on Instagram",
                },
              },
              {
                text: "",
                sub_menus: null,
                icon: {
                  description: "",
                  title: "facebook.svg",
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blt120936cf45aa5baf/601013432206ca0c0330f7c4/facebook.svg",
                },
                url: {
                  href: "https://www.facebook.com/BeautyByLaPerla/",
                  title: "Follow us on Facebook",
                },
              },
              {
                text: "",
                sub_menus: null,
                icon: {
                  description: "",
                  title: "twitter.svg",
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blt906eec211b8f861c/6010132b3a3dc60c74cd7232/twitter.svg",
                },
                url: {
                  href: "https://twitter.com/BeautyByLaPerla",
                  title: "Follow us on Twitter",
                },
              },
              {
                text: "",
                sub_menus: null,
                icon: {
                  description: null,
                  title: "pinterest.svg",
                  url:
                    "https://eu-images.contentstack.com/v3/assets/blt2bb45aeece463821/blta0e9c4ee012dba84/601a9186bd5bd00dbe111759/pinterest.svg",
                },
                url: {
                  href: "https://www.pinterest.com/laperla/",
                  title: "Follow us on Pinterest",
                },
              },
            ],
            slot: "footer-tertiary-1",
            title: "Follow Us",
          },
        },
        {
          node: {
            icon: null,
            links: [
              {
                text: "Item 1",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/fragrances/item-1/",
                  title: "",
                },
              },
              {
                text: "Item 2",
                sub_menus: null,
                icon: null,
                url: {
                  href: "/fragrances/item-2/",
                  title: "",
                },
              },
            ],
            slot: "",
            title: "Fragrances",
          },
        },
        {
          node: {
            icon: null,
            links: [
              {
                text: "Makeup",
                sub_menus: [],
                icon: null,
                url: {
                  href: "/makeup-1/",
                  title: "Makeup 1",
                },
              },
              {
                text: "Makeup 2",
                sub_menus: [],
                icon: null,
                url: {
                  href: "/makeup-2/",
                  title: "Makeup 2",
                },
              },
            ],
            slot: "",
            title: "Makeup",
          },
        },
        {
          node: {
            icon: null,
            links: [
              {
                text: "New In",
                sub_menus: [],
                icon: null,
                url: {
                  href: "/new-in/",
                  title: "New In",
                },
              },
              {
                text: "Fragrances",
                sub_menus: [
                  {
                    title: "Fragrances",
                    links: [
                      {
                        text: "Item 1",
                        url: {
                          href: "/fragrances/item-1/",
                          title: "",
                        },
                      },
                      {
                        text: "Item 2",
                        url: {
                          href: "/fragrances/item-2/",
                          title: "",
                        },
                      },
                    ],
                    slot: "",
                  },
                ],
                icon: null,
                url: {
                  href: "/fragrances/",
                  title: "Fragrances",
                },
              },
              {
                text: "Makeup",
                sub_menus: [
                  {
                    title: "Makeup",
                    links: [
                      {
                        text: "Makeup",
                        url: {
                          href: "/makeup-1/",
                          title: "Makeup 1",
                        },
                      },
                      {
                        text: "Makeup 2",
                        url: {
                          href: "/makeup-2/",
                          title: "Makeup 2",
                        },
                      },
                    ],
                    slot: "",
                  },
                ],
                icon: null,
                url: {
                  href: "/makeup/",
                  title: "Makeup",
                },
              },
            ],
            slot: "mobile-navigation",
            title: "Mobile Navigation",
          },
        },
        {
          node: {
            icon: null,
            links: [],
            slot: null,
            title: "Footer Navigation",
          },
        },
      ],
    },
    siteSearchIndex: {
      index: {
        version: "0.9.5",
        fields: ["title", "tags"],
        ref: "id",
        documentStore: {
          docs: {
            "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": {
              id: "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c",
              path: "/fog-linen-chambray-towel-beige-stripe/",
              sku: "SLCTBS",
              title: "[Sample] Fog Linen Chambray Towel - Beige Stripe",
            },
            "94837537-e442-504d-afef-d33414ea0652": {
              id: "94837537-e442-504d-afef-d33414ea0652",
              path: "/orbit-terrarium-large/",
              sku: "OTL",
              title: "[Sample] Orbit Terrarium - Large",
            },
            "8290b203-d6f9-5351-a9ae-9bdb4fc65f17": {
              id: "8290b203-d6f9-5351-a9ae-9bdb4fc65f17",
              path: "/orbit-terrarium-small/",
              sku: "OTS",
              title: "[Sample] Orbit Terrarium - Small",
            },
            "57d7b885-0af8-55b0-8a73-f04e1e05ff90": {
              id: "57d7b885-0af8-55b0-8a73-f04e1e05ff90",
              path: "/able-brewing-system/",
              sku: "ABS",
              title: "[Sample] Able Brewing System",
            },
            "054986ab-1425-5b6b-8915-9b26b13b89cb": {
              id: "054986ab-1425-5b6b-8915-9b26b13b89cb",
              path: "/chemex-coffeemaker-3-cup/",
              sku: "CC3C",
              title: "[Sample] Chemex Coffeemaker 3 Cup",
            },
            "65af5c46-81fe-5257-8008-d9f634c1a514": {
              id: "65af5c46-81fe-5257-8008-d9f634c1a514",
              path: "/1-l-le-parfait-jar/",
              sku: "SLLPJ",
              title: "[Sample] 1 L Le Parfait Jar",
            },
            "da82f036-ace7-57bd-a61b-79cc29dce4bb": {
              id: "da82f036-ace7-57bd-a61b-79cc29dce4bb",
              path: "/oak-cheese-grater/",
              sku: "OCG",
              title: "[Sample] Oak Cheese Grater",
            },
            "55585e3c-9f52-545c-99c6-daaddb737ffe": {
              id: "55585e3c-9f52-545c-99c6-daaddb737ffe",
              path: "/tiered-wire-basket/",
              sku: "TWB",
              title: "[Sample] Tiered Wire Basket",
            },
            "e960ee65-0314-5365-a6a0-0b10ed5e52d9": {
              id: "e960ee65-0314-5365-a6a0-0b10ed5e52d9",
              path: "/laundry-detergent/",
              sku: "CGLD",
              title: "[Sample] Laundry Detergent",
            },
            "faaa2f7b-27b2-51d5-a7a5-5660ceec6064": {
              id: "faaa2f7b-27b2-51d5-a7a5-5660ceec6064",
              path: "/canvas-laundry-cart/",
              sku: "CLC",
              title: "[Sample] Canvas Laundry Cart",
            },
            "571c0e36-5c23-51a9-b000-a0ef1f4e1f84": {
              id: "571c0e36-5c23-51a9-b000-a0ef1f4e1f84",
              path: "/utility-caddy/",
              sku: "OFSUC",
              title: "[Sample] Utility Caddy",
            },
            "0435f7d3-d2f0-5922-a2a5-702bbab37e7b": {
              id: "0435f7d3-d2f0-5922-a2a5-702bbab37e7b",
              path: "/dustpan-brush/",
              sku: "DPB",
              title: "[Sample] Dustpan & Brush",
            },
            "3da7867b-c1eb-5606-8239-1573390fe93e": {
              id: "3da7867b-c1eb-5606-8239-1573390fe93e",
              path: "/smith-journal-13/",
              sku: "SM13",
              title: "[Sample] Smith Journal 13",
            },
            "bb55f52f-8d6a-559c-9117-13335d67898f": {
              id: "bb55f52f-8d6a-559c-9117-13335d67898f",
              path: "/albert/",
              sku: "110284",
              title: "Joseph",
            },
            "f4ac50fd-6b7a-5f7f-89e7-ceddfb24a964": {
              id: "f4ac50fd-6b7a-5f7f-89e7-ceddfb24a964",
              path: "/peter/",
              sku: "110285-3",
              title: "Peter",
            },
          },
          docInfo: {
            "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": { title: 7, tags: 0 },
            "94837537-e442-504d-afef-d33414ea0652": { title: 4, tags: 0 },
            "8290b203-d6f9-5351-a9ae-9bdb4fc65f17": { title: 4, tags: 0 },
            "57d7b885-0af8-55b0-8a73-f04e1e05ff90": { title: 3, tags: 0 },
            "054986ab-1425-5b6b-8915-9b26b13b89cb": { title: 5, tags: 0 },
            "65af5c46-81fe-5257-8008-d9f634c1a514": { title: 6, tags: 0 },
            "da82f036-ace7-57bd-a61b-79cc29dce4bb": { title: 4, tags: 0 },
            "55585e3c-9f52-545c-99c6-daaddb737ffe": { title: 4, tags: 0 },
            "e960ee65-0314-5365-a6a0-0b10ed5e52d9": { title: 3, tags: 0 },
            "faaa2f7b-27b2-51d5-a7a5-5660ceec6064": { title: 4, tags: 0 },
            "571c0e36-5c23-51a9-b000-a0ef1f4e1f84": { title: 3, tags: 0 },
            "0435f7d3-d2f0-5922-a2a5-702bbab37e7b": { title: 3, tags: 0 },
            "3da7867b-c1eb-5606-8239-1573390fe93e": { title: 4, tags: 0 },
            "bb55f52f-8d6a-559c-9117-13335d67898f": { title: 1, tags: 0 },
            "f4ac50fd-6b7a-5f7f-89e7-ceddfb24a964": { title: 1, tags: 0 },
          },
          length: 15,
          save: true,
        },
        index: {
          title: {
            root: {
              "1": {
                "3": {
                  docs: { "3da7867b-c1eb-5606-8239-1573390fe93e": { tf: 1 } },
                  df: 1,
                },
                docs: { "65af5c46-81fe-5257-8008-d9f634c1a514": { tf: 1 } },
                df: 1,
              },
              "3": {
                docs: { "054986ab-1425-5b6b-8915-9b26b13b89cb": { tf: 1 } },
                df: 1,
              },
              docs: {},
              df: 0,
              s: {
                docs: {},
                df: 0,
                a: {
                  docs: {},
                  df: 0,
                  m: {
                    docs: {},
                    df: 0,
                    p: {
                      docs: {},
                      df: 0,
                      l: {
                        docs: {
                          "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": { tf: 1 },
                          "94837537-e442-504d-afef-d33414ea0652": { tf: 1 },
                          "8290b203-d6f9-5351-a9ae-9bdb4fc65f17": { tf: 1 },
                          "57d7b885-0af8-55b0-8a73-f04e1e05ff90": { tf: 1 },
                          "054986ab-1425-5b6b-8915-9b26b13b89cb": { tf: 1 },
                          "65af5c46-81fe-5257-8008-d9f634c1a514": { tf: 1 },
                          "da82f036-ace7-57bd-a61b-79cc29dce4bb": { tf: 1 },
                          "55585e3c-9f52-545c-99c6-daaddb737ffe": { tf: 1 },
                          "e960ee65-0314-5365-a6a0-0b10ed5e52d9": { tf: 1 },
                          "faaa2f7b-27b2-51d5-a7a5-5660ceec6064": { tf: 1 },
                          "571c0e36-5c23-51a9-b000-a0ef1f4e1f84": { tf: 1 },
                          "0435f7d3-d2f0-5922-a2a5-702bbab37e7b": { tf: 1 },
                          "3da7867b-c1eb-5606-8239-1573390fe93e": { tf: 1 },
                        },
                        df: 13,
                      },
                    },
                  },
                },
                t: {
                  docs: {},
                  df: 0,
                  r: {
                    docs: {},
                    df: 0,
                    i: {
                      docs: {},
                      df: 0,
                      p: {
                        docs: {},
                        df: 0,
                        e: {
                          docs: {
                            "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": { tf: 1 },
                          },
                          df: 1,
                        },
                      },
                    },
                  },
                },
                m: {
                  docs: {},
                  df: 0,
                  a: {
                    docs: {},
                    df: 0,
                    l: {
                      docs: {},
                      df: 0,
                      l: {
                        docs: {
                          "8290b203-d6f9-5351-a9ae-9bdb4fc65f17": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                  i: {
                    docs: {},
                    df: 0,
                    t: {
                      docs: {},
                      df: 0,
                      h: {
                        docs: {
                          "3da7867b-c1eb-5606-8239-1573390fe93e": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                },
                y: {
                  docs: {},
                  df: 0,
                  s: {
                    docs: {},
                    df: 0,
                    t: {
                      docs: {},
                      df: 0,
                      e: {
                        docs: {},
                        df: 0,
                        m: {
                          docs: {
                            "57d7b885-0af8-55b0-8a73-f04e1e05ff90": { tf: 1 },
                          },
                          df: 1,
                        },
                      },
                    },
                  },
                },
              },
              f: {
                docs: {},
                df: 0,
                o: {
                  docs: {},
                  df: 0,
                  g: {
                    docs: { "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": { tf: 1 } },
                    df: 1,
                  },
                },
              },
              l: {
                docs: { "65af5c46-81fe-5257-8008-d9f634c1a514": { tf: 1 } },
                df: 1,
                i: {
                  docs: {},
                  df: 0,
                  n: {
                    docs: {},
                    df: 0,
                    e: {
                      docs: {},
                      df: 0,
                      n: {
                        docs: {
                          "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                },
                a: {
                  docs: {},
                  df: 0,
                  r: {
                    docs: {},
                    df: 0,
                    g: {
                      docs: {
                        "94837537-e442-504d-afef-d33414ea0652": { tf: 1 },
                      },
                      df: 1,
                    },
                  },
                  u: {
                    docs: {},
                    df: 0,
                    n: {
                      docs: {},
                      df: 0,
                      d: {
                        docs: {},
                        df: 0,
                        r: {
                          docs: {},
                          df: 0,
                          i: {
                            docs: {
                              "e960ee65-0314-5365-a6a0-0b10ed5e52d9": { tf: 1 },
                              "faaa2f7b-27b2-51d5-a7a5-5660ceec6064": { tf: 1 },
                            },
                            df: 2,
                          },
                        },
                      },
                    },
                  },
                },
                e: {
                  docs: { "65af5c46-81fe-5257-8008-d9f634c1a514": { tf: 1 } },
                  df: 1,
                },
              },
              c: {
                docs: {},
                df: 0,
                h: {
                  docs: {},
                  df: 0,
                  a: {
                    docs: {},
                    df: 0,
                    m: {
                      docs: {},
                      df: 0,
                      b: {
                        docs: {},
                        df: 0,
                        r: {
                          docs: {},
                          df: 0,
                          a: {
                            docs: {},
                            df: 0,
                            y: {
                              docs: {
                                "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": {
                                  tf: 1,
                                },
                              },
                              df: 1,
                            },
                          },
                        },
                      },
                    },
                  },
                  e: {
                    docs: {},
                    df: 0,
                    m: {
                      docs: {},
                      df: 0,
                      e: {
                        docs: {},
                        df: 0,
                        x: {
                          docs: {
                            "054986ab-1425-5b6b-8915-9b26b13b89cb": { tf: 1 },
                          },
                          df: 1,
                        },
                      },
                    },
                    e: {
                      docs: {},
                      df: 0,
                      s: {
                        docs: {
                          "da82f036-ace7-57bd-a61b-79cc29dce4bb": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                },
                o: {
                  docs: {},
                  df: 0,
                  f: {
                    docs: {},
                    df: 0,
                    f: {
                      docs: {},
                      df: 0,
                      e: {
                        docs: {},
                        df: 0,
                        e: {
                          docs: {},
                          df: 0,
                          m: {
                            docs: {},
                            df: 0,
                            a: {
                              docs: {},
                              df: 0,
                              k: {
                                docs: {
                                  "054986ab-1425-5b6b-8915-9b26b13b89cb": {
                                    tf: 1,
                                  },
                                },
                                df: 1,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                u: {
                  docs: {},
                  df: 0,
                  p: {
                    docs: { "054986ab-1425-5b6b-8915-9b26b13b89cb": { tf: 1 } },
                    df: 1,
                  },
                },
                a: {
                  docs: {},
                  df: 0,
                  n: {
                    docs: {},
                    df: 0,
                    v: {
                      docs: {},
                      df: 0,
                      a: {
                        docs: {
                          "faaa2f7b-27b2-51d5-a7a5-5660ceec6064": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                  r: {
                    docs: {},
                    df: 0,
                    t: {
                      docs: {
                        "faaa2f7b-27b2-51d5-a7a5-5660ceec6064": { tf: 1 },
                      },
                      df: 1,
                    },
                  },
                  d: {
                    docs: {},
                    df: 0,
                    d: {
                      docs: {},
                      df: 0,
                      i: {
                        docs: {
                          "571c0e36-5c23-51a9-b000-a0ef1f4e1f84": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                },
              },
              t: {
                docs: {},
                df: 0,
                o: {
                  docs: {},
                  df: 0,
                  w: {
                    docs: {},
                    df: 0,
                    e: {
                      docs: {},
                      df: 0,
                      l: {
                        docs: {
                          "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                },
                e: {
                  docs: {},
                  df: 0,
                  r: {
                    docs: {},
                    df: 0,
                    r: {
                      docs: {},
                      df: 0,
                      a: {
                        docs: {},
                        df: 0,
                        r: {
                          docs: {},
                          df: 0,
                          i: {
                            docs: {},
                            df: 0,
                            u: {
                              docs: {},
                              df: 0,
                              m: {
                                docs: {
                                  "94837537-e442-504d-afef-d33414ea0652": {
                                    tf: 1,
                                  },
                                  "8290b203-d6f9-5351-a9ae-9bdb4fc65f17": {
                                    tf: 1,
                                  },
                                },
                                df: 2,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                i: {
                  docs: {},
                  df: 0,
                  e: {
                    docs: {},
                    df: 0,
                    r: {
                      docs: {
                        "55585e3c-9f52-545c-99c6-daaddb737ffe": { tf: 1 },
                      },
                      df: 1,
                    },
                  },
                },
              },
              b: {
                docs: {},
                df: 0,
                e: {
                  docs: {},
                  df: 0,
                  i: {
                    docs: {},
                    df: 0,
                    g: {
                      docs: {
                        "ab637d41-bb4b-54b9-9851-bcd5d0fa1a5c": { tf: 1 },
                      },
                      df: 1,
                    },
                  },
                },
                r: {
                  docs: {},
                  df: 0,
                  e: {
                    docs: {},
                    df: 0,
                    w: {
                      docs: {
                        "57d7b885-0af8-55b0-8a73-f04e1e05ff90": { tf: 1 },
                      },
                      df: 1,
                    },
                  },
                  u: {
                    docs: {},
                    df: 0,
                    s: {
                      docs: {},
                      df: 0,
                      h: {
                        docs: {
                          "0435f7d3-d2f0-5922-a2a5-702bbab37e7b": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                },
                a: {
                  docs: {},
                  df: 0,
                  s: {
                    docs: {},
                    df: 0,
                    k: {
                      docs: {},
                      df: 0,
                      e: {
                        docs: {},
                        df: 0,
                        t: {
                          docs: {
                            "55585e3c-9f52-545c-99c6-daaddb737ffe": { tf: 1 },
                          },
                          df: 1,
                        },
                      },
                    },
                  },
                },
              },
              o: {
                docs: {},
                df: 0,
                r: {
                  docs: {},
                  df: 0,
                  b: {
                    docs: {},
                    df: 0,
                    i: {
                      docs: {},
                      df: 0,
                      t: {
                        docs: {
                          "94837537-e442-504d-afef-d33414ea0652": { tf: 1 },
                          "8290b203-d6f9-5351-a9ae-9bdb4fc65f17": { tf: 1 },
                        },
                        df: 2,
                      },
                    },
                  },
                },
                a: {
                  docs: {},
                  df: 0,
                  k: {
                    docs: { "da82f036-ace7-57bd-a61b-79cc29dce4bb": { tf: 1 } },
                    df: 1,
                  },
                },
              },
              p: {
                docs: {},
                df: 0,
                a: {
                  docs: {},
                  df: 0,
                  r: {
                    docs: {},
                    df: 0,
                    f: {
                      docs: {},
                      df: 0,
                      a: {
                        docs: {},
                        df: 0,
                        i: {
                          docs: {},
                          df: 0,
                          t: {
                            docs: {
                              "65af5c46-81fe-5257-8008-d9f634c1a514": { tf: 1 },
                            },
                            df: 1,
                          },
                        },
                      },
                    },
                  },
                },
                e: {
                  docs: {},
                  df: 0,
                  t: {
                    docs: {},
                    df: 0,
                    e: {
                      docs: {},
                      df: 0,
                      r: {
                        docs: {
                          "f4ac50fd-6b7a-5f7f-89e7-ceddfb24a964": { tf: 1 },
                        },
                        df: 1,
                      },
                    },
                  },
                },
              },
              j: {
                docs: {},
                df: 0,
                a: {
                  docs: {},
                  df: 0,
                  r: {
                    docs: { "65af5c46-81fe-5257-8008-d9f634c1a514": { tf: 1 } },
                    df: 1,
                  },
                },
                o: {
                  docs: {},
                  df: 0,
                  u: {
                    docs: {},
                    df: 0,
                    r: {
                      docs: {},
                      df: 0,
                      n: {
                        docs: {},
                        df: 0,
                        a: {
                          docs: {},
                          df: 0,
                          l: {
                            docs: {
                              "3da7867b-c1eb-5606-8239-1573390fe93e": { tf: 1 },
                            },
                            df: 1,
                          },
                        },
                      },
                    },
                  },
                  s: {
                    docs: {},
                    df: 0,
                    e: {
                      docs: {},
                      df: 0,
                      p: {
                        docs: {},
                        df: 0,
                        h: {
                          docs: {
                            "bb55f52f-8d6a-559c-9117-13335d67898f": { tf: 1 },
                          },
                          df: 1,
                        },
                      },
                    },
                  },
                },
              },
              g: {
                docs: {},
                df: 0,
                r: {
                  docs: {},
                  df: 0,
                  a: {
                    docs: {},
                    df: 0,
                    t: {
                      docs: {},
                      df: 0,
                      e: {
                        docs: {},
                        df: 0,
                        r: {
                          docs: {
                            "da82f036-ace7-57bd-a61b-79cc29dce4bb": { tf: 1 },
                          },
                          df: 1,
                        },
                      },
                    },
                  },
                },
              },
              w: {
                docs: {},
                df: 0,
                i: {
                  docs: {},
                  df: 0,
                  r: {
                    docs: {},
                    df: 0,
                    e: {
                      docs: {
                        "55585e3c-9f52-545c-99c6-daaddb737ffe": { tf: 1 },
                      },
                      df: 1,
                    },
                  },
                },
              },
              d: {
                docs: {},
                df: 0,
                e: {
                  docs: {},
                  df: 0,
                  t: {
                    docs: {},
                    df: 0,
                    e: {
                      docs: {},
                      df: 0,
                      r: {
                        docs: {},
                        df: 0,
                        g: {
                          docs: {
                            "e960ee65-0314-5365-a6a0-0b10ed5e52d9": { tf: 1 },
                          },
                          df: 1,
                        },
                      },
                    },
                  },
                },
                u: {
                  docs: {},
                  df: 0,
                  s: {
                    docs: {},
                    df: 0,
                    t: {
                      docs: {},
                      df: 0,
                      p: {
                        docs: {},
                        df: 0,
                        a: {
                          docs: {},
                          df: 0,
                          n: {
                            docs: {
                              "0435f7d3-d2f0-5922-a2a5-702bbab37e7b": { tf: 1 },
                            },
                            df: 1,
                          },
                        },
                      },
                    },
                  },
                },
              },
              u: {
                docs: {},
                df: 0,
                t: {
                  docs: {},
                  df: 0,
                  i: {
                    docs: {},
                    df: 0,
                    l: {
                      docs: {
                        "571c0e36-5c23-51a9-b000-a0ef1f4e1f84": { tf: 1 },
                      },
                      df: 1,
                    },
                  },
                },
              },
            },
          },
          tags: { root: { docs: {}, df: 0 } },
        },
        pipeline: ["trimmer", "stopWordFilter", "stemmer"],
      },
    },
  },
}
Example.argTypes = {
  onClick: { action: "Header clicked" },
}
