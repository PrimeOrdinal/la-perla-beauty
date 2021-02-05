import type { Handler } from "aws-lambda"

import fetch from "node-fetch"

export const handler: Handler = async () => {
  const apiURL = "https://api.instagram.com/v1/users/self/media/recent"
  const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
  const count = 5

  if (!INSTAGRAM_ACCESS_TOKEN) {
    return {
      statusCode: 400,
      body: "Environment variable missing",
    }
  }

  try {
    const url = new URL(apiURL)

    url.searchParams.append("access_token", INSTAGRAM_ACCESS_TOKEN)
    url.searchParams.append("count", count.toString())

    const response = await fetch(url)

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }

    const data = await response.json()

    const { data: posts } = data

    return {
      statusCode: 200,
      body: JSON.stringify(
        posts.map(post => ({
          id: post.id,
          link: post.link,
          images: post.images,
          videos: post.videos,
          caption: post.caption.text,
        }))
      ),
    }
  } catch (err) {
    console.error(err) // output to netlify function log

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
