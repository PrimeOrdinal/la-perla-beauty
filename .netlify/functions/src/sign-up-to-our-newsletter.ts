import type { APIGatewayEvent, Handler } from "aws-lambda"

const validate = value => {
  let errorMessage

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address"
  }

  return errorMessage
}

export const handler: Handler = async (event: APIGatewayEvent) => {
  const GATSBY_SITE_URL = `${process.env.GATSBY_SITE_URL}`

  if (!GATSBY_SITE_URL) {
    return {
      body: "Environment variable missing",
      statusCode: 400,
    }
  }

  try {
    // console.log(event)

    if (event.httpMethod === "POST") {
      //   console.log(event.httpMethod)

      if (event.body) {
        // console.log(event.body)

        const body = JSON.parse(event.body)
        console.log(body)

        const valid = validate(body.emailAddress)
        console.log(valid)

        return {
          statusCode: 200,
          body: event.body,
        }
      }
    }

    return {
      statusCode: 500,
      body: "Unknown error",
    }
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
