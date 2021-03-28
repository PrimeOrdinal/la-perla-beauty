import { navigate } from "gatsby"

export const redirectToMaintenancePage = (status: "PRE_LAUNCH" | "OPEN") => {
  // Show a maintenance page when the BigCommerce store is not available
  if (
    process.env.GATSBY_SHOW_PRE_LAUNCH === "true" &&
    status === "PRE_LAUNCH"
  ) {
    navigate("/maintenance")
  }
}
