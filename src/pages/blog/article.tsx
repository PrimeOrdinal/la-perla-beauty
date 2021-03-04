import React from "react"

import type { BigCommerceGql_Category } from "/../../graphql-types"
import { PageProps } from "gatsby"

import { Breadcrumb } from "../../components/Breadcrumb"
import { Layout } from "../../components/Layout"
import { Leaf } from "../../components/Leaf"
import { Link } from "../../components/Button"
import { BlogPostPreview } from "../../components/BlogPostPreview"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

export const ArticlePage: React.FC<PageProps<PageContextCategory>> = ({
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />

      <main>
        <img
          src={`https://picsum.photos/905/440?${
            Math.floor(Math.random() * 10) + 1
          }`}
          alt="placeholder image"
          style={{ width: "100%" }}
        />
        <section className="container">
          <span style={{ display: "block" }}>Be inspired</span>
          <h1>The exquisite sense of mere tranquil existence</h1>
          <p>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees.
          </p>
          <p>
            Which was created for the bliss of souls like mine. I am so happy,
            my dear friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment; and yet I feel that I
            never was a greater artist than now. We the best. Find peace, life
            is like a water fall, you’ve gotta flow. They will try to close the
            door on you, just open it. A major key, never panic. Don’t panic,
            when it gets crazy and rough, don’t panic, stay calm. Surround
            yourself with angels, positive energy, beautiful people, beautiful
            souls, clean heart, angel. Watch your back, but more importantly
            when you get out the shower, dry your back, it’s a cold world out
            there. The first of the month is coming, we have to get money, we
            have no choice. It cost money to eat and they don’t want you to eat.
          </p>
          <img
            src={`https://picsum.photos/405/712?${
              Math.floor(Math.random() * 10) + 1
            }`}
            alt="placeholder"
            style={{ width: "100%", height: "712px" }}
          />
          <h2 style={{ backgroundColor: "steelblue" }}>Quote section</h2>
          <img
            src={`https://picsum.photos/405/712?${
              Math.floor(Math.random() * 10) + 1
            }`}
            alt="placeholder"
            style={{ width: "100%", height: "712px" }}
          />
          <span>Shop the la perla beauty fragrance</span>
          <h2>
            Among the tall grass by the trickling stream, I lie close to the
            earth.
          </h2>
          <p>
            When I hear the buzz of the little world among the stalks, and grow
            familiar with the countless indescribable forms of the insects and
            flies, then I feel the presence of the Almighty, who formed us in
            his own image, and the breath of that universal love which bears and
            sustains us, as it floats around us in an eternity of bliss. And
            then, my friend, when darkness overspreads my eyes, and heaven and
            earth seem to dwell in my soul and absorb its power, like the form
            of a beloved mistress, then I often think with longing, Oh, would I
            could I describe these conceptions, could impress upon paper.
          </p>
          {/* Video Player */}
          <img
            src={`https://picsum.photos/405/712?${
              Math.floor(Math.random() * 10) + 1
            }`}
            alt="placeholder for video"
            style={{ width: "100%", height: "712px" }}
          />
          <h2>
            But it is too much for my strength. I sink under the weight of the
            splendour of these visions!
          </h2>
          <p>
            I am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment. I am so happy, my
            dear friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment; and yet I feel that I
            never was a greater artist than now. The key to more success is to
            have a lot of pillows. Hammock talk come soon. Life is what you make
            it, so let’s make it. Let’s see what Chef Dee got that they don’t
            want us to eat. Mogul talk. You do know, you do know that they don’t
            want you to have lunch. I’m keeping it real with you, so what you
            going do is have lunch. The key to more success is to have a lot of
            pillows. They key is to have every key, the key to open every door.
            Mogul talk.
          </p>
        </section>
        <section>
          <div className="container">
            <Leaf>
              <h2>Promo banner</h2>
              <p>
                Etiam aliquet metus mauris, in tempus ves odio feugiat non.
                Docet praesent eu magna id arcu docet ves.
              </p>
              <Link>learn more</Link>
            </Leaf>
          </div>
        </section>
        <section className="container">
          <h2>
            The other day the grass was brown, now it’s green because I ain’t
            give up. Never surrender.
          </h2>
          <p>
            I’m up to something. You should never complain, complaining is a
            weak emotion, you got life, we breathing, we blessed. Surround
            yourself with angels, positive energy, beautiful people, beautiful
            souls, clean heart, angel. To succeed you must believe. When you
            believe, you will succeed. The first of the month is coming, we have
            to get money, we have no choice. It cost money to eat and they don’t
            want you to eat. The key to more success is to get a massage once a
            week, very important, major key, cloth talk. Surround yourself with
            angels. Surround yourself with angels.
          </p>
          <div>
            <span>share article</span>
            <span>facebook</span>
            <span>twitter</span>
          </div>
        </section>
        <section className="container">
          <h1>Don't miss</h1>
          <p>
            Etiam aliquet metus mauris, tempus odio feugiat non. Praesent eu
            magna id hendrerit bibendum. Aenean eget aliquet nisl. Pellentesque.
          </p>
          <BlogPostPreview
            headingBelow="Look at the sunset, life is amazing"
            body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
            link="read more"
          />
        </section>
        <section
          className="container"
          style={{
            display: "flex",
            gap: "1rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <BlogPostPreview
            headingAbove="Look at the sunset, life is amazing"
            body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
            link="read more"
          />
          <BlogPostPreview
            headingBelow="Look at the sunset, life is amazing"
            body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
            link="read more"
          />
          <BlogPostPreview
            headingAbove="Look at the sunset, life is amazing"
            body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
            link="read more"
          />
        </section>
      </main>
    </Layout>
  )
}

export default ArticlePage
