import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>General Zerg Openers</h1>
    <p>Check out our guides for each matchup</p>
    <StaticImage
      src="../images/zerg.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <ul>
    {
      data.allContentfulBlogPost.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
        </li>
      ))
    }
    </ul>
    <p>
      <Link to="/ZvT/">Zerg VS Terran</Link> <br />
      <Link to="/ZvZ/">Zerg VS Zerg</Link> <br />
      <Link to="/ZvP">Zerg VS Protoss</Link> <br />
    </p>
  </Layout>
)

export default IndexPage