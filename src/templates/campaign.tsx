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

import hero from "../videos/hero.mp4"
import bottle from "../images/bottle.png"
import flower from "../images/flowerPattern.svg"
import { mediaQueries } from "../theme"

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
      background-image: url("https://picsum.photos/1600/900?${
        Math.floor(Math.random() * 10) + 1
      }");
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
        <VideoPlayer alt="something" layout="hero" muted={true} url={hero} />
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
              src={bottle}
              alt="bottle"
            />
            <img className={clsx("pattern")} src={flower} alt="flower" />
            <img className={clsx("pattern")} src={flower} alt="flower" />
            <img className={clsx("pattern")} src={flower} alt="flower" />
            <img className={clsx("pattern")} src={flower} alt="flower" />
            <img className={clsx("pattern")} src={flower} alt="flower" />
            <img className={clsx("pattern")} src={flower} alt="flower" />
          </figure>
        </section>
        <section className={clsx("container")}>
          <h2 className={clsx("heading-1")}>What's behind the scent?</h2>
          <p>
            Meet the makers, and explore how they brought the stories behind our
            couture fragrance to life.
          </p>
        </section>
        <section>
          <div className={clsx("blur-card-gallery", "container")}>
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: `https://picsum.photos/900/1200?${
                  Math.floor(Math.random() * 10) + 1
                }`,
              }}
              link={{ src: "/test", title: "Learn more" }}
              tag="Suzanne Dalton shares the creative inspiration and artisanal craft behind the enduringly beautiful, handmade flacon."
              title="What’s behind the bottle?"
            />
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: `https://picsum.photos/900/1200?${
                  Math.floor(Math.random() * 10) + 1
                }`,
              }}
              link={{ src: "/test", title: "Learn more" }}
              tag="​​Louise Turner, the nose behind our signature scent, describes the textures and sensations of its many layers."
              title="What’s behind the scent?"
            />
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: `https://picsum.photos/900/1200?${
                  Math.floor(Math.random() * 10) + 1
                }`,
              }}
              link={{ src: "/test", title: "Learn more" }}
              tag="Discover how Massimiliano Bombo captured the heart and soul of our fragrance."
              title="What’s behind the film?"
            />
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: `https://picsum.photos/900/1200?${
                  Math.floor(Math.random() * 10) + 1
                }`,
              }}
              link={{ src: "/test", title: "Learn more" }}
              tag="See why model Malika El Maslouhi encapsulates the modern muse."
              title="What’s behind the woman we see?"
            />
          </div>
        </section>
        <section className={clsx("container")}>
          <Banner
            className={clsx("banner")}
            image={{
              src: `https://picsum.photos/900/1200?${
                Math.floor(Math.random() * 10) + 1
              }`,
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
                colour: "lightgreen",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: `https://picsum.photos/900/1200?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                },
                layout: "overlay",
                link: {
                  href: "/learn-more",
                  title: "Learn more",
                },
                tag: "Sample tag",
                text:
                  "Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt",
                title: "Promo banner",
              },
              {
                backgroundPosition: "top right",
                colour: "lightgreen",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: `https://picsum.photos/900/1200?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                },
                layout: "overlay",
                link: {
                  href: "/learn-more",
                  title: "Learn more",
                },
                tag: "Sample tag",
                text:
                  "Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt",
                title: "Promo banner",
              },
              {
                backgroundPosition: "top right",
                colour: "lightgreen",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: `https://picsum.photos/900/1200?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                },
                layout: "overlay",
                link: {
                  href: "/learn-more",
                  title: "Learn more",
                },
                tag: "Sample tag",
                text:
                  "Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt",
                title: "Promo banner",
              },
              {
                backgroundPosition: "top right",
                colour: "lightgreen",
                image: {
                  alt:
                    "A grey placeholder image with the dimensions overlayed in white text",
                  src: `https://picsum.photos/900/1200?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                },
                layout: "overlay",
                link: {
                  href: "/learn-more",
                  title: "Learn more",
                },
                tag: "Sample tag",
                text:
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
              alt: "leaf image",
              src: `https://picsum.photos/405/712?${
                Math.floor(Math.random() * 10) + 1
              }`,
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
