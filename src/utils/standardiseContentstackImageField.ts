export const standardiseContentstackImageField = (image: {
  description: string
  title: string
  url: string
}) => ({
  alt: image.description,
  src: image.url,
  title: image.title,
})
