export const availabilitySchemaToHumanReadableText = availability => {
  // TODO:  Integrate translations

  let humanReadableText = "sold out"

  switch (availability) {
    case "https://schema.org/InStock":
      humanReadableText = "in stock"
      break
    case "https://schema.org/LimitedAvailability":
      humanReadableText = "limited availability"
      break
    case "https://schema.org/OnlineOnly":
      humanReadableText = "online only"
      break
    case "https://schema.org/OutOfStock":
      humanReadableText = "out of stock"
      break
    case "https://schema.org/PreOrder":
      humanReadableText = "pre-order"
      break
    case "https://schema.org/SoldOut":
      humanReadableText = "sold out"
      break
  }

  return humanReadableText
}

export const availabilitySchemaToShortName = availability => availability.substring(availability.lastIndexOf('/') + 1)
