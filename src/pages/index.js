import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1><span role="image" aria-label="tada">🎉</span></h1>
    <p>I'm currently playing around with Gatsby.js and Netlify so there's not much here yet. Go check out my <Link to="/now/">"now"</Link> page.</p>
    
  </Layout>
)

export default IndexPage
