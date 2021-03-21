import type { BigCommerceGql_Product } from "../../graphql-types"

import type {
  ModularBlocksTypes,
  ModularBlock,
} from "../../types/ModularBlocks"

import React, { useContext } from "react"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"

import { Accordion, AccordionProps } from "./Accordion"
import {
  ArticleCardGallery,
  ArticleCardGalleryProps,
} from "./ArticleCardGallery"
import { ArticleCardGrid, ArticleCardGridProps } from "./ArticleCardGrid"
import { Banner, BannerProps } from "./Banner"
import { BannerGallery, BannerGalleryProps } from "./BannerGallery"
import { Link } from "./Button"
import { HoriontalRule, HoriontalRuleProps } from "./HoriontalRule"
import { IconList, IconListProps } from "./IconList"
import { ImageGallery, ImageGalleryProps } from "./ImageGallery"
import { SiteContext } from "./Layout"
import { Leaf, LeafProps } from "./Leaf"
import { MenuCategory, MenuCategoryProps } from "./MenuCategory"
import {
  ProductCardAlternateGallery,
  ProductCardAlternateGalleryProps,
} from "./ProductCardAlternateGallery"
import { SharePage, SharePageProps } from "./SharePage"
import { VideoPlayer, VideoPlayerProps } from "./VideoPlayer"
import { WYSIWYG, WYSIWYGProps } from "./WYSIWYG"
import { YouMayAlsoLike, YouMayAlsoLikeProps } from "./YouMayAlsoLike"

export type ModularBlocksProps = {
  modularBlocks: ModularBlocksTypes[]
}

export const ModularBlocks: React.FC<ModularBlocksProps> = props => {
  const site = useContext(SiteContext)

  const featuredProducts = site?.featuredProducts?.edges?.map(
    ({ node: productFormatBigCommerce }) =>
      standardiseBigCommerceProduct({
        productFormatBigCommerce,
      })
  )

  return (
    <React.Fragment>
      {props.modularBlocks?.map(modular_block => {
        let component

        Object.entries(modular_block).forEach(
          (
            [key, value]: [key: string, value: ModularBlock],
            modularBlockIndex
          ) => {
            if (value === null) {
              return
            }

            const margins = {
              marginBottom: { _: value?.margins?.[1], md: value?.margins?.[3] },
              marginTop: { _: value?.margins?.[0], md: value?.margins?.[2] },
            }

            switch (key) {
              case "accordion":
                const {
                  accordion,
                }: { accordion: AccordionProps[] } = value as any
                component = accordion?.map((instance, index) => (
                  <Accordion key={index} {...margins} {...instance} />
                ))
                break
              case "article_card_gallery":
                const {
                  article_card_gallery,
                }: {
                  article_card_gallery: ArticleCardGalleryProps[]
                } = value as any
                component = article_card_gallery?.map((instance, index) => (
                  <ArticleCardGallery key={index} {...margins} {...instance} />
                ))
                break
              case "article_card_grid":
                const {
                  article_card_grid,
                }: {
                  article_card_grid: ArticleCardGridProps[]
                } = value as any
                component = article_card_grid?.map((instance, index) => (
                  <ArticleCardGrid key={index} {...margins} {...instance} />
                ))
                break
              case "banner":
                const {
                  banner,
                }: {
                  banner: BannerProps[]
                } = value as any
                component = (
                  <BannerGallery
                    key={`${key}-${modularBlockIndex}`}
                    {...margins}
                    items={banner}
                  />
                )
                break
              case "horizontal_rule":
                const instance: HoriontalRuleProps[] = value as any
                component = <HoriontalRule {...margins} {...instance} />
                break
              case "icon_list":
                const {
                  icon_list,
                }: {
                  icon_list: IconListProps[]
                } = value as any
                component = icon_list?.map((instance, index) => (
                  <IconList
                    key={index}
                    {...margins}
                    {...instance}
                    mobileView={instance.mobileView}
                  />
                ))
                break
              case "image_gallery":
                const {
                  image_gallery,
                }: {
                  image_gallery: ImageGalleryProps[]
                } = value as any
                component = image_gallery?.map((instance, index) => {
                  const mapped = {
                    ...instance,
                    items: instance.items.map(image => ({
                      image,
                    })),
                  }
                  return <ImageGallery key={index} {...margins} {...mapped} />
                })
                break
              case "leaf":
                const {
                  leaf,
                }: {
                  leaf: LeafProps[]
                } = value as any
                component = leaf?.map((instance, index) => (
                  <Leaf key={index} {...margins} {...instance} />
                ))
                break
              case "menu":
                const {
                  menu,
                }: {
                  menu: MenuCategoryProps[]
                } = value as any
                component = menu?.map((instance, index) => (
                  <MenuCategory key={index} {...margins} {...instance}>
                    {instance.links.map((link, index) => (
                      <Link key={index} to={link?.link?.href}>
                        {link?.link?.title}
                      </Link>
                    ))}
                  </MenuCategory>
                ))
                break
              case "product_card_alternate_gallery":
                const {
                  product_card_alternate_gallery,
                }: {
                  product_card_alternate_gallery: ProductCardAlternateGalleryProps[]
                } = value as any

                component = product_card_alternate_gallery?.map(
                  (instance, index) => (
                    <ProductCardAlternateGallery
                      key={index}
                      {...margins}
                      {...instance}
                      items={featuredProducts}
                    />
                  )
                )
                break
              case "share":
                const {
                  share,
                }: {
                  share: SharePageProps[]
                } = value as any
                component = share?.map((instance, index) => (
                  <SharePage key={index} {...margins} {...instance} />
                ))
                break
              case "video":
                const {
                  video,
                }: {
                  video: VideoPlayerProps[]
                } = value as any
                component = video?.map((instance, index) => (
                  <VideoPlayer key={index} {...margins} {...instance} />
                ))
                break
              case "wysiwyg":
                const {
                  wysiwyg,
                }: {
                  wysiwyg: WYSIWYGProps[]
                } = value as any
                component = wysiwyg?.map((instance, index) => (
                  <WYSIWYG key={index} {...margins} {...instance} />
                ))
                break
              case "you_may_also_like":
                component = (
                  <YouMayAlsoLike
                    featuredProducts={featuredProducts}
                    key={`${key}-${modularBlockIndex}`}
                    {...margins}
                  />
                )
                break
              default:
                console.log(`Unmapped modular block type: ${key}`)
                break
            }
          }
        )

        return component
      })}
    </React.Fragment>
  )
}
