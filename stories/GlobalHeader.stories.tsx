import React from "react"
import { Story, Meta } from "@storybook/react"

import { GlobalHeader, GlobalHeaderProps } from "../src/components/GlobalHeader"

export default {
  title: "GlobalHeader",
  component: GlobalHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<GlobalHeaderProps> = args => <GlobalHeader {...args} />

export const Example = Template.bind({})
Example.args = {
  data: {
    site: { siteMetadata: { title: "La Perla Beauty" } },
    allContentstackMenuComponent: {
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
                  href: "/account/",
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
            title: "GlobalHeader Navigation",
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
  onClick: { action: "GlobalHeader clicked" },
}
