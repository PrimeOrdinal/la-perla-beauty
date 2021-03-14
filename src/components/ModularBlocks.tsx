import type {
  ModularBlocksTypes,
  ModularBlock,
} from "../../types/ModularBlocks"

import React from "react"

import { standardiseContentstackImageField } from "../utils/standardiseContentstackImageField"

import { Accordion, AccordionProps } from "./Accordion"
import {
  ArticleCardGallery,
  ArticleCardGalleryProps,
} from "./ArticleCardGallery"
import { Banner, BannerProps } from "./Banner"
import { BlogPostPreview, BlogPostPreviewProps } from "./BlogPostPreview"
import { BannerGallery, BannerGalleryProps } from "./BannerGallery"
import { BannerGallery } from "./BannerGallery"
import { Link } from "./Button"
import { HoriontalRule, HoriontalRuleProps } from "./HoriontalRule"
import { IconList, IconListProps } from "./IconList"
import { Leaf, LeafProps } from "./Leaf"
import { ProductCard, ProductCardProps } from "./ProductCard"
import { ProductCardAlt, ProductCardAltProps } from "./ProductCardAlt"
import { MenuCategory, MenuCategoryProps } from "./MenuCategory"
import { VideoPlayer, VideoPlayerProps } from "./VideoPlayer"
import { WYSIWYG, WYSIWYGProps } from "./WYSIWYG"

export type ModularBlocksProps = {
  modularBlocks: ModularBlocksTypes[]
}

export const ModularBlocks: React.FC<ModularBlocksProps> = (props) => (
  <React.Fragment>
    {props.modularBlocks?.map(modular_block => {
      let component

      Object.entries(modular_block).forEach(
        ([key, value]: [key: string, value: ModularBlock]) => {
          if (value === null) {
            return
          }

          const margins = {
            marginBottom: { _: value?.margins?.[0], md: value?.margins?.[2] },
            marginTop: { _: value?.margins?.[1], md: value?.margins?.[3] },
          }

          switch (key) {
            case "accordion":
              const {
                accordion,
              }: { accordion: AccordionProps[] } = value as any
              component = accordion?.map((props, index) => (
                <Accordion key={index} {...margins} {...props} />
              ))
              break
            case "article_card_gallery":
              const {
                article_card_gallery,
              }: {
                article_card_gallery: ArticleCardGalleryProps[]
              } = value as any
              component = article_card_gallery?.map((props, index) => (
                <ArticleCardGallery key={index} {...margins} {...props} />
              ))
              break
            case "banner":
              const { banner }: { banner: BannerProps[] } = value as any
              const banners = banner?.map((props, index) => (
                <Banner
                  key={index}
                  {...margins}
                  {...props}
                  image={standardiseContentstackImageField(props.image)}
                />
              ))
              component = <BannerGallery>{banners}</BannerGallery>
              break
            case "horizontal_rule":
              const props: HoriontalRuleProps[] = value as any
              component = <HoriontalRule {...margins} {...props} />
              break
            case "icon_list":
              const {
                icon_list,
              }: {
                icon_list: IconListProps[]
              } = value as any
              component = icon_list?.map((props, index) => (
                <IconList
                  key={index}
                  {...margins}
                  {...props}
                  mobileView={props.mobile_view}
                />
              ))
              break
            case "leaf":
              const {
                leaf,
              }: {
                leaf: LeafProps[]
              } = value as any
              component = leaf?.map((props, index) => (
                <Leaf
                  key={index}
                  {...margins}
                  {...props}
                  image={standardiseContentstackImageField(props.image)}
                />
              ))
              break
            case "menu":
              const {
                menu,
              }: {
                menu: MenuCategoryProps[]
              } = value as any
              component = menu?.map((props, index) => (
                <MenuCategory key={index} {...margins} {...props}>{props.links.map((link, index) => <Link key={index} to={link?.url?.href}>{link?.url?.title}</Link>)}</MenuCategory>
              ))
              break
              case "video":
                const {
                  video,
                }: {
                  video: VideoPlayerProps[]
                } = value as any
                component = video?.map((props, index) => (
                  <VideoPlayer key={index} {...margins} {...props} />
                ))
                break
            case "wysiwyg":
              const {
                wysiwyg,
              }: {
                wysiwyg: WYSIWYGProps[]
              } = value as any
              component = wysiwyg?.map((props, index) => (
                <WYSIWYG key={index} {...margins} {...props} />
              ))
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
