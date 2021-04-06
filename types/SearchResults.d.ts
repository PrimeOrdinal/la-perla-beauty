import type {
  Image as ImageProp,
} from "./components"

type SearchResult = {
  id: string
  image: ImageProp
  path: string
  title: string
  tags: string[]
}
