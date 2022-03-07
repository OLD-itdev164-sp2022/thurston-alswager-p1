import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Standard Zerg VS Terran Guide</h1>
    <StaticImage
      src="../images/zvt.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Zerg vs Terran Image"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2>Intro</h2>
    <p>This is a complete ZvT guide including how to play ling bane hydra or ling bane muta vs bio as well as roach ravager swarmhost, roach hydra viper, 
    or ling bane hydra swarm host vs mech. It includes responses to 2-1-1 as well as 1-1-1 Terran openings. With all this being said, it focuses primarily 
    on the highest levels of play. What this means is it includes the strategies which are used at the highest levels of play, but may not cover strategies 
    that you see on ladder. In addition to this, the timings for defending attacks are based off of the highest levels of play, while at lower levels the 
    timings will generally happen later. Keep these things in mind when reading through the guide, and if you are at a lower level of play, focus on the order
    that things are built and the benchmarks that the build aims to hit, rather than the specific times that things are happening.</p>

    <h2>Build Order</h2>
    <h3>Opening</h3>
    <p>
    This opening build sets you up in a solid defensive position with a strong economy if your opponent is playing standard. If the Terran is doing anything on 1
    base, such as proxy barracks or 3 barracks reaper, you will need to deviate from this opening.  
    </p>
    <ul>
        <li>13 - Overlord</li>
        <li>16 - Hatchery (pull a drone from your mineral line @ ~200 minerals)</li>
        <li>18 - Gas (rally 17th drone from egg)</li>
        <li>17 - Spawning Pool (rally 18th drone from egg)</li>
        <li>20 - Overlord</li>
        <li>20 - 2x Queens 4x Lings</li>
        <li>28 - Third Hatchery</li>
        <li>29 - Third Queen</li>
        <li>31 - Metabolic Boost</li>
        <li>31 - Overlord</li>
        <li>40 - Overlord</li>
        <li>42 - Fourth Queen</li>
        <li>44 - Fifth Queen</li>
        <li>46 - Overlord</li>
        <li>@3rd Hatchery - 6th Queen</li>
    </ul>
  </Layout>
)

export default IndexPage
