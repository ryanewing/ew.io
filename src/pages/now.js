import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>Now</h1>
    <p><strong>Think</strong>ing about how to manage the intake and triage of articles, books, videos, and other content that I want to consume without destroying the storage medium (todoist, notion, email, text file, pocket). I've failed everywhere.</p>
    <p><strong>Read</strong>ing <a href="https://samharris.org/books/lying/">Lying</a> by Sam Harris, as well as <a href="https://en.wikipedia.org/wiki/Dune_(novel)">Dune</a> by Frank Herbert.</p>
    <p><strong>Learn</strong>ing about 3D printing. My first printer comes this month!</p>
    <p><strong>Work</strong>ing for SAP Concur as an Engineering Manager leading the Expense UI team.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
