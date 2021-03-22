export const availabilityPreset = {
  control: {
    options: [
      "https://schema.org/InStock",
      "https://schema.org/LimitedAvailability",
      "https://schema.org/OnlineOnly",
      "https://schema.org/OutOfStock",
      "https://schema.org/PreOrder",
      "https://schema.org/SoldOut",
    ],
    type: "inline-radio",
  },
}

export const backgroundPositionPreset = {
  control: {
    options: [
      "top left",
      "top center",
      "top right",
      "center left",
      "center center",
      "center right",
      "bottom left",
      "bottom center",
      "bottom right",
    ],
    type: "inline-radio",
  },
}

export const colourPreset = {
  control: {
    options: ["beige", "lightgreen", "lightgrey", "lilac", "orange", "pink"],
    type: "inline-radio",
  },
}

export const justifyPreset = {
  control: {
    options: ["center", "end", "start", "stretch"],
    type: "inline-radio",
  },
}