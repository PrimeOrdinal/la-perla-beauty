import type { Product } from "schema-dts"

import { themeGet } from "@styled-system/theme-get"
import React, { useState } from "react"
import { Modal } from "./Modal"
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share"
import styled from "styled-components"
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { ReactComponent as ShareIcon } from "../images/Share.svg"

import { Button } from "./Button"

export type QuickShareProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & { product: Product }

interface Values {
  identifier: string
}

export const QuickShareStyled: React.FC<QuickShareProps> = styled.div`
  ${compose(layout, position, space)}
`

export const FallbackShareOptions = styled.div`
  align-items: center;
  display: grid;
  gap: ${themeGet("space.8")}px;
  grid-template-columns: repeat(8, fit-content(60px));
  justify-content: center;

  svg {
    width: 36px;
  }
`

export const QuickShare: React.FC<QuickShareProps> = ({
  product,
  ...props
}) => {
  const onButtonClick = async () => {
    const shareData = {
      title: "MDN",
      text: "Learn web development on MDN!",
      url: window.location.href,
    }

    try {
      await navigator.share(shareData)
      console.log(shareData.url)
    } catch (error) {
      console.error(error)
    }
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const output = navigator.canShare ? (
    <Button onClick={onButtonClick} type="button">
      <span className="sr-only">Share</span>
      <ShareIcon />
    </Button>
  ) : (
    <React.Fragment>
      <Button onClick={openModal} type="button">
        <span className="sr-only">Share</span>
        <ShareIcon />
      </Button>
      <Modal
        closeModal={closeModal}
        contentLabel="Share"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="title">Share</h1>
        <FallbackShareOptions>
          <EmailShareButton url={window.location.href}>
            <EmailIcon />
          </EmailShareButton>
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon />
          </FacebookShareButton>
          <HatenaShareButton url={window.location.href}>
            <HatenaIcon />
          </HatenaShareButton>
          <InstapaperShareButton url={window.location.href}>
            <InstapaperIcon />
          </InstapaperShareButton>
          <LineShareButton url={window.location.href}>
            <LineIcon />
          </LineShareButton>
          <LinkedinShareButton url={window.location.href}>
            <LinkedinIcon />
          </LinkedinShareButton>
          <LivejournalShareButton url={window.location.href}>
            <LivejournalIcon />
          </LivejournalShareButton>
          <MailruShareButton url={window.location.href}>
            <MailruIcon />
          </MailruShareButton>
          <OKShareButton url={window.location.href}>
            <OKIcon />
          </OKShareButton>
          <PinterestShareButton url={window.location.href}>
            <PinterestIcon />
          </PinterestShareButton>
          <PocketShareButton url={window.location.href}>
            <PocketIcon />
          </PocketShareButton>
          <RedditShareButton url={window.location.href}>
            <RedditIcon />
          </RedditShareButton>
          <TelegramShareButton url={window.location.href}>
            <TelegramIcon />
          </TelegramShareButton>
          <TumblrShareButton url={window.location.href}>
            <TumblrIcon />
          </TumblrShareButton>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon />
          </TwitterShareButton>
          <ViberShareButton url={window.location.href}>
            <ViberIcon />
          </ViberShareButton>
          <VKShareButton url={window.location.href}>
            <VKIcon />
          </VKShareButton>
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon />
          </WhatsappShareButton>
          <WorkplaceShareButton url={window.location.href}>
            <WorkplaceIcon />
          </WorkplaceShareButton>
        </FallbackShareOptions>
      </Modal>
    </React.Fragment>
  )

  return <QuickShareStyled {...props}>{output}</QuickShareStyled>
}
