export const availabilitySchemaToHumanReadableText = (availability: string) => {
  // TODO:  Integrate translations

  const itemAvailability = availability.replace("https://schema.org/", "")

  let humanReadableText = "in stock"

  switch (itemAvailability) {
    case "InStock":
      humanReadableText = "in stock"
      break
    case "LimitedAvailability":
      humanReadableText = "limited availability"
      break
    case "OnlineOnly":
      humanReadableText = "online only"
      break
    case "OutOfStock":
      humanReadableText = "out of stock"
      break
    case "PreOrder":
      humanReadableText = "pre-order"
      break
    case "SoldOut":
      humanReadableText = "sold out"
      break
  }

  return humanReadableText
}

export const availabilitySchemaToShortName = availability => availability.substring(availability.lastIndexOf('/') + 1)
