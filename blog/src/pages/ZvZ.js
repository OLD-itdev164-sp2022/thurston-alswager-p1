import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Lambo's Zerg VS Zerg Guide</h1>
    <StaticImage
      src="../images/zvz.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Zerg vs Terran Image"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2>Intro</h2>
    <p>This guide is based off of Lambo's Standard ZvZ video guide that he made a few months ago. The current standard ZvZ build includes safely opening with 3
    bases using Zergling Baneling tech and transitions into a standard Roach Ravager mid game that aims to hit 66 drone saturation. This guide includes how to
    safely get to that position as well as how to transition past that standard Roach Ravager mid game. </p>

    <h2>Build Order</h2>
    <h3>Opening</h3>
    <p>
    This is a standard ZvZ opening, however keep that early reactions/changes are needed to defend early aggression such as 12 pool or 13/12. Keep an eye out for 
    these attacks coming across the map by using your overlords to scout pathways and react accordingly.  
    </p>
    <ul>
        <li>16 - Hatchery</li>
        <li>18 - Extractor</li>
        <li>17 - Spawning Pool</li>
        <li>21 - Overlord</li>
        <li>26 - Zergling Speed</li>
        <li>26 - Hold larva until you confirm hatch first vs pool first</li>
        <li>30 - 2-4x Zerglings</li>
        <li>32 - Hatchery</li>
    </ul>
  </Layout>
)

export default IndexPage
