import clsx from "clsx"
import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const FAQsPage: React.FC = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <main className={clsx("container")}>
      <h1>Frequently Asked Questions</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum dictum blandit. Fusce bibendum ante ornare massa blandit, et euismod sem tempus. Quisque sit amet dictum sapien. Aenean sed nunc commodo, rhoncus mi ac, consequat ipsum. Etiam vitae risus ut purus imperdiet efficitur vel sed nunc. Aenean ut dui fringilla lacus ultricies euismod. Aenean eget nisl molestie, ullamcorper lacus vitae, faucibus mi. In eu magna laoreet, scelerisque lorem ut, consequat eros. Mauris iaculis est sit amet sem suscipit viverra. Ut egestas sollicitudin enim et congue. Maecenas molestie commodo neque vitae volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus posuere sem vel elit ultricies pretium. Etiam placerat nisi non metus dignissim, in rutrum ligula semper. Praesent blandit sapien urna.</p>
      <p>In eget lectus in urna aliquam malesuada et eget justo. Proin at blandit est. Nullam vestibulum in magna sed blandit. Quisque quis sodales quam. Maecenas pulvinar at ipsum id sodales. Pellentesque consectetur magna massa, in fermentum lorem rutrum eu. Phasellus dignissim metus euismod turpis elementum convallis. Duis feugiat odio dolor, nec venenatis leo fermentum in. Etiam venenatis ex et magna volutpat malesuada. Morbi pulvinar est sit amet euismod tincidunt. Pellentesque non enim fringilla massa faucibus mollis pellentesque vehicula urna. Duis dictum euismod purus, gravida sagittis arcu cursus sed. Pellentesque facilisis, lorem in euismod mollis, neque dui ultricies erat, ut tempor nisl odio a leo. Nunc auctor maximus diam lobortis bibendum. Morbi quis magna egestas, fermentum sem ut, condimentum erat.</p>
    </main>
  </Layout>
)

export default FAQsPage
