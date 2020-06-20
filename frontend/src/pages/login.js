import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import HeroLogin from "../components/HeroLogin"
import Login from "../components/Login"

const contact = () => {
  return (
    <Layout>
      <SEO title="Tickets" />
      <HeroLogin />
      <Login title="LOGIN" />
    </Layout>
  )
}

export default contact
