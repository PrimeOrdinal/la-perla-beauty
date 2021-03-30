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
  section {
    text-align: center;

    p {
      margin-block-end: unset;
      margin-block-start: unset;
      margin-inline-end: auto;
      margin-inline-start: auto;
      max-width: 90ch;

      &:not(:last-child) {
        padding-block-end: ${themeGet("space.12")}px;
      }
    }

    .blur-card-gallery {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
      padding-block-end: ${themeGet("space.12")}px;
      padding-block-start: ${themeGet("space.11")}px;
    }
  }
`

const SectionOne = styled.section`
  padding-block-start: ${themeGet("space.12")}px;

  span {
    display: inline-block;
  }

  a {
    font-weight: bold;
    text-transform: uppercase;
  }

  .bottleSection {
    background: linear-gradient(to top, #efeee9, transparent);
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
`

const SectionTwo = styled.section`
  background-color: #efeee9;
  padding-block-start: ${themeGet("space.15")}px;
`

const SectionThree = styled.section`
  background-color: #efeee9;

  aside {
    border-radius: 0;

    ${mediaQueries.md} {
      --app-gutter-x: 2rem;

      border-radius: 10px;
      margin-inline-end: auto;
      margin-inline-start: auto;
      padding-inline-end: var(--app-gutter-x, 0.75rem);
      padding-inline-start: var(--app-gutter-x, 0.75rem);
    }

  }
`
const SectionFour = styled.section`
  background-color: #efeee9;
  padding-block-start: 40px;

  .sectionTitle {
    font-size: var(--font-size-xl, 24px);
    margin-top: 0;
    text-align: center;
  }

  .sectionParagraph {
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    padding-block-end: 40px;
    text-align: center;
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
  //   const elements = mainRef.current.querySelectorAll(".animateElem")

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
        <SectionOne ref={sectionOneRef}>
          <span className={clsx("animateElem")}>EAU DE PARFUM</span>
          <h2 className={clsx("animateElem", "heading-1")}>
            The Signature Fragrance
          </h2>
          <p className={clsx("animateElem")}>
            An elegant floral bouquet, as radiant, layered and confident as the
            woman who wears it.
          </p>
          <Link className={clsx("animateElem")} to="/discover-more">
            Discover More
          </Link>

          <figure className={clsx("bottleSection")}>
            <img
              className={clsx("animateElem", "bottle")}
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
        </SectionOne>
        <SectionTwo className={clsx("container")}>
          <h2 className={clsx("heading-1")}>What's behind the scent?</h2>
          <p>
            Meet the makers, and explore how they brought the stories behind our
            couture fragrance to life.
          </p>
        </SectionTwo>
        <SectionThree>
          <div className={clsx("blur-card-gallery", "container")}>
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: `https://picsum.photos/1600/900?${
                  Math.floor(Math.random() * 10) + 1
                }`,
              }}
              link={{ src: "/test", title: "Dolor sit amet" }}
              tag="Lorem ipsum dolor sit"
              title="What's behind the woman we see?"
            />
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: `https://picsum.photos/1600/900?${
                  Math.floor(Math.random() * 10) + 1
                }`,
              }}
              link={{ src: "/test", title: "Dolor sit amet" }}
              tag="Lorem ipsum dolor sit"
              title="What's behind the woman we see?"
            />
            <BlurCard
              image={{
                alt: "Lorem ipum",
                src: `https://picsum.photos/1600/900?${
                  Math.floor(Math.random() * 10) + 1
                }`,
              }}
              link={{ src: "/test", title: "Dolor sit amet" }}
              tag="Lorem ipsum dolor sit"
              title="What's behind the woman we see?"
            />
          </div>
        </SectionThree>
        <SectionFour className={clsx("container")}>
          <Banner
            image={{
              src: `https://picsum.photos/1600/900?${
                Math.floor(Math.random() * 10) + 1
              }`,
            }}
            layout="overlay"
            title="What's behind the woman we see?"
          />
          <h2 className={clsx("heading-1", "sectionTitle")}>
            The making of&hellip;
          </h2>
          <p className={clsx("sectionParagraph")}>
            As it floats around us in an eternity of bliss; and then, my friend,
            when darkness overspreads my eyes, and heaven and earth seem to
            dwell in my soul and absorb its power.
          </p>
          <ArticleCardGrid />
        </SectionFour>
        <section>
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
