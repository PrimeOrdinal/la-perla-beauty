import type { MutableRefObject } from "react"

import clsx from "clsx"
import React, { useRef, useEffect } from "react"
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

const SectionOne = styled.section`
  padding-block-start: 40px;
  .contents {
    text-align: center;
    span {
      display: inline-block;
    }
    h2 {
      font-size: var(--font-size-xl, 24px);
      margin-block-start: 10px;
      margin-block-end: 10px;
    }
    p {
      max-width: 85ch;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }
    a {
      font-weight: bold;
      text-transform: uppercase;
      display: inline-block;
    }
  }
  .bottleSection {
    background: linear-gradient(to top, #efeee9, transparent);
    margin-block-start: 3rem;
    display: flex;
    justify-content: center;
    position: relative;
    .pattern {
      position: absolute;
      max-width: 40%;
      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:nth-child(3) {
        left: 0;
        bottom: 0;
      }
      &:nth-child(4) {
        right: 0;
        bottom: 0;
      }
      &:nth-child(5) {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:nth-child(6) {
        right: 0;
        bottom: 0;
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
  text-align: center;
  padding-block-start: 40px;

  h2 {
    font-size: var(--font-size-xl, 24px);
    margin-top: 0;
  }
  p {
    max-width: 85ch;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    margin-bottom: 0;
    padding-block-end: 40px;
  }
`

const SectionThree = styled.section`
  background-color: #efeee9;

  aside {
    border-radius: 0;
    ${mediaQueries.md} {
      margin-inline-end: auto;
      margin-inline-start: auto;
      padding-inline-end: var(--app-gutter-x, 0.75rem);
      padding-inline-start: var(--app-gutter-x, 0.75rem);
      --app-gutter-x: 2rem;
      max-width: 68rem;
      border-radius: 10px;
    }
    div {
      margin-inline-start: 0;
      margin-inline-end: 0;
      text-align: center;
      h1 {
        width: 100%;
      }
    }
  }
  .blurWrapper {
    padding-block-start: 6rem;
    padding-block-end: 2rem;
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    overflow: scroll;
  }
`
const SectionFour = styled.section`
  background-color: #efeee9;
  padding-block-start: 40px;
  .sectionTitle {
    text-align: center;
    font-size: var(--font-size-xl, 24px);
    margin-top: 0;
  }
  .sectionPara {
    text-align: center;
    max-width: 85ch;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    margin-bottom: 0;
    padding-block-end: 40px;
  }
`

const CampaignPage: React.FC = () => {
  const newRef = useRef() as MutableRefObject<HTMLDivElement>
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  const tumble = [{ transform: "translateY(-50%)", color: "#000" }]

  const timing = {
    duration: 2000,
    iterations: 1,
  }
  useEffect(() => {
    const newAnim = newRef.current
    const elements = newRef.current.querySelectorAll(".animateElem")
    console.log(newAnim, "new anima")

    intersection &&
      intersection.intersectionRatio < 0.2 &&
      elements.forEach(elem => elem.animate(tumble, timing))

    console.log(intersection?.intersectionRatio, "heyy")
  }, [])

  // const animation = element => element.animate(tumble, timing)

  return (
    <Layout transparent={newRef}>
      <SEO title="Campaign Landing Page" />
      <VideoPlayer
        style={{
          objectFit: "cover",
          marginTop: "calc(var(--header-min-height) * -1.12)",
        }}
        alt="something"
        url={hero}
        layout="hero"
        // paddingRemove={true}
        muted={true}
      />
      <main ref={newRef}>
        <SectionOne ref={ref}>
          <div className={clsx("contents")}>
            <span className={clsx("animateElem")}>EAU DE PARFUM</span>
            <h2 className={clsx("animateElem")}>The Signature Fragrance</h2>
            <p className={clsx("animateElem")}>
              The other day the grass was brown, now it’s green because I ain’t
              give up. Never surrender. In life there will be road blocks.
            </p>
            <Link className={clsx("animateElem")}>Discover More</Link>
            <div className={clsx("bottleSection")}>
              <img className={clsx("pattern")} src={flower} alt="flower" />
              <img className={clsx("pattern")} src={flower} alt="flower" />
              <img className={clsx("pattern")} src={flower} alt="flower" />
              <img
                className={clsx("animateElem", "bottle")}
                src={bottle}
                alt="bottle"
              />
              <img className={clsx("pattern")} src={flower} alt="flower" />
              <img className={clsx("pattern")} src={flower} alt="flower" />
              <img className={clsx("pattern")} src={flower} alt="flower" />
            </div>
          </div>
        </SectionOne>
        <SectionTwo className={clsx("container")}>
          <h2>What's behind the scent?</h2>
          <p>
            As it floats around us in an eternity of bliss; and then, my friend,
            when darkness overspreads my eyes, and heaven and earth seem to
            dwell in my soul and absorb its power.
          </p>
        </SectionTwo>
        <SectionThree>
          <Banner
            layout="overlay"
            showImage={true}
            title="What's behind the woman we see?"
            className={clsx("img-bl")}
            image={{
              src: `https://picsum.photos/405/712?${
                Math.floor(Math.random() * 10) + 1
              }`,
            }}
          />
          <div className={clsx("blurWrapper", "container")}>
            <BlurCard />
            <BlurCard />
            <BlurCard />
          </div>
        </SectionThree>
        <SectionFour className={clsx("container")}>
          <h2 className={clsx("sectionTitle")}>The making of...</h2>
          <p className={clsx("sectionPara")}>
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
      </main>
    </Layout>
  )
}
export default CampaignPage
