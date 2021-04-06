// import { ReactSVG } from "react"

declare module "*.svg" {
  // export const ReactComponent: React.FC;
  export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
  // export const ReactComponent: React.FC<ReactSVG>
  // eslint-disable-next-line
  const content: any
  export default content
}