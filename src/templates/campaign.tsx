import type { MutableRefObject } from "react"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

import { useIntersection } from "../hooks/useIntersection"

import { ArticleCardGrid } from "../components/ArticleCardGrid"
import { Banner } from "../components/Banner"
import { BlurCard } from "../components/BlurCard"
import { Leaf } from "../components/Leaf"
import { Link } from "../components/Button"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { VideoPlayer } from "../components/VideoPlayer"

const HeaderStyled = styled.header`
  margin-top: calc(var(--header-min-height, 38px) * -1);
`

const MainStyled = styled.main`
  background-color: ${themeGet("colors.lightgrey")};

  section {
    margin-block-end: ${themeGet("space.11")}px;
    margin-block-start: ${themeGet("space.11")}px;
    text-align: center;

    &.section-bottle-figure {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &.section-leaf {
      background-image: url("/images/c0c7c497e385a154164ba79a1e9c413b23c4f17e.png");
      background-position: center;
      background-size: cover;
      padding-block-end: 48px;
      padding-block-start: 48px;
    }

    > .title,
    > .text,
    > .link {
      margin-block-end: unset;
      margin-block-start: unset;
      margin-inline-end: auto;
      margin-inline-start: auto;
      max-width: 90ch;
    }

    > p {
      &:not(:last-child) {
      }
    }

    > .link {
      display: inline-block;
      font-weight: bold;
      margin-block-start: ${themeGet("space.9")}px;
      text-transform: uppercase;
    }

    > .title {
      font-size: var(--font-size-heading-1, 24px);
    }
  }

  .bottle-figure {
    display: flex;
    justify-content: center;
    margin-block-start: ${themeGet("space.13")}px;
    position: relative;

    .pattern {
      max-width: 40%;
      position: absolute;

      &:nth-child(1) {
        left: 0;
        top: 0;
      }

      &:nth-child(2) {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-child(3) {
        bottom: 0;
        left: 0;
      }

      &:nth-child(4) {
        bottom: 0;
        right: 0;
      }

      &:nth-child(5) {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-child(6) {
        bottom: 0;
        right: 0;
      }
    }

    .bottle {
      max-width: 30%;
      z-index: 10;
      display: inline-block;
    }
  }

  .blur-card-gallery {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
`

const CampaignPage: React.FC = () => {
  const headerRef = useRef() as MutableRefObject<HTMLElement>
  const mainRef = useRef() as MutableRefObject<HTMLElement>
  const sectionOneRef = useRef() as MutableRefObject<HTMLElement>

  const headerIntersection = useIntersection(headerRef, {
    // root: null,
    // rootMargin: "0px",
    threshold: 0.2,
  })

  const mainIntersection = useIntersection(mainRef, {
    // root: null,
    // rootMargin: "0px",
    threshold: 0.2,
  })

  const sectionOneIntersection = useIntersection(sectionOneRef, {
    // root: null,
    // rootMargin: "0px",
    threshold: 0.2,
  })

  const tumble = [{ transform: "translateY(-50%)", color: "#000" }]

  const timing = {
    duration: 2000,
    iterations: 1,
  }

  // useEffect(() => {
  //   const mainAnimation = mainRef.current
  //   const elements = mainRef.current.querySelectorAll(".animated")

  //   sectionOneIntersection &&
  //     sectionOneIntersection.intersectionRatio < 0.2 &&
  //     elements.forEach(elem => elem.animate(tumble, timing))
  // }, [])

  // const animation = element => element.animate(tumble, timing)

  return (
    <Layout transparent={headerIntersection?.isIntersecting}>
      <SEO title="Campaign Landing Page" />
      <HeaderStyled ref={headerRef}>
        <VideoPlayer alt="something" layout="hero" muted={true} url="/videos/hero.mp4" />
      </HeaderStyled>
      <MainStyled ref={mainRef}>
        <section className={clsx("section-bottle-figure")} ref={sectionOneRef}>
          <span className={clsx("animated")}>EAU DE PARFUM</span>
          <h2 className={clsx("animated", "heading-1")}>
            The Signature Fragrance
          </h2>
          <p className={clsx("animated")}>
            An elegant floral bouquet, as radiant, layered and confident as the
            woman who wears it.
          </p>
          <Link className={clsx("animated", "link")} to="/discover-more">
            Discover More
          </Link>

          <figure className={clsx("bottle-figure")}>
            <img
              className={clsx("animated", "bottle")}
              src="/images/bottle.png"
              alt="bottle"
            />
            <img className={clsx("pattern")} src="/images/flowerPattern.svg" alt="flower" />
            <img className={clsx("pattern")} src="/images/flowerPattern.svg" alt="flower" />
            <img className={clsx("pattern")} src="/images/flowerPattern.svg" alt="flower" />
            <img className={clsx("pattern")} src="/images/flowerPattern.svg" alt="flower" />
            <img className={clsx("pattern")} src="/images/flowerPattern.svg" alt="flower" />
            <img className={clsx("pattern")} src="/images/flowerPattern.svg" alt="flower" />
          </figure>
        </section>
        <section className={clsx("container")}>
          <h2 className={clsx("heading-1")}>What's behind the scent?</h2>
          <p>The other day the grass was brown, now it’s green because I ain’tgive up. Never surrender. In life there will be road blocks.</p>
        </section>
        <section>
          <div className={clsx("blur-card-gallery", "container")}>
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: "/images/7f1778134449df3e8e82dd2ccf3ed285e4ff60c1.png",
              }}
              link={{ src: "/test", title: "Learn more" }}
              tag="The signature fragrance"
              title="What’s behind the bottle?"
            />
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: "/images/4fa74605110310e38a04cafc92e2c8afa584a837.png",
              }}
              link={{ src: "/test", title: "Learn more" }}
              tag="The signature fragrance"
              title="What’s behind the scent?"
            />
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: "/images/7d241ff3ece2fdb9a7dc94c49074ce5a5562ffdd.png",
              }}
              link={{ src: "/test", title: "Learn more" }}
              tag="The signature fragrance"
              title="What’s behind the film?"
            />
          </div>
        </section>
        <section className={clsx("container")}>
          <Banner
            backgroundPosition="center 22.5%"
            className={clsx("banner")}
            image={{
              alt: "Model close-up",
              src: "/images/b0a09ce98fd5953510a511cb3c486184c16051f4.png",
            }}
            justifyItems="center"
            layout="overlay"
            link={{
              href: "/test",
              title: "Learn more"
            }}
            text="Have you ever felt like you had to choose between self-care and caring for the world? We're proud of our clean, responsible beauty because it's an artful synergy of luxury and sustainability."
            title="What’s Behind Responsible Beauty?"
          />
        </section>
        <section className={clsx("container")}>
          <h2 className={clsx("heading-1", "title")}>The making of&hellip;</h2>
          <p className={clsx("text")}>
            As it floats around us in an eternity of bliss; and then, my friend,
            when darkness overspreads my eyes, and heaven and earth seem to
            dwell in my soul and absorb its power.
          </p>
          <ArticleCardGrid
            items={[
              {
                backgroundPosition: "top right",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: "/images/fd2bd7af24571f3f6c5b9f3f9835be1336b0cacf.png",
                },
                summary:
                  "Suzanne Dalton shares the creative inspiration and artisanal craft behind the enduringly beautiful, handmade flacon.",
                title: "​What’s behind the bottle?",
              },
              {
                backgroundPosition: "top right",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: "/images/f713a7baa58a1abe727aa5b32667509e8de55dc7.png",
                },
                summary:
                  "Discover how Massimiliano Bombo captured the heart and soul of our fragrance.​",
                title: "​​​What’s behind the film?",
              },
              {
                backgroundPosition: "top right",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: "/images/0ba5465e8a5c652286d7bd410ddd61cf0fdc5513.png",
                },
                summary:
                  "See why model Malika El Maslouhi encapsulates the modern muse.",
                title: "What’s behind the woman we see?",
              },
              {
                backgroundPosition: "top right",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: "/images/bc826a7b4f2c6021df414f838c6779b4077f8d75.png",
                },
                summary:
                  "Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt",
                title: "Promo banner",
              },
            ]}
          />
        </section>
        <section className={clsx("container", "section-leaf")}>
          <Leaf
            colour="lightgrey"
            image={{
              alt: "White flowers",
              src: "/images/c0c7c497e385a154164ba79a1e9c413b23c4f17e.png",
            }}
            layout="image-and-text-inside"
            text="The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. In life there will be road blocks."
            title="What's behind responsible beauty?"
          />
        </section>
      </MainStyled>
    </Layout>
  )
}
export default CampaignPage
