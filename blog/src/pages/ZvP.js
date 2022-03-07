import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Zerg VS Protoss Hydra Ling Allin Guide</h1>
    <StaticImage
      src="../images/zvp.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Zerg vs Terran Image"
      style={{ marginBottom: `1.45rem` }}
    />
    <h2>Intro</h2>
    <p>This build is designed to stop droning around 54-60 and then mass Zerglings and Hydralisks to attack as muscular augments finishes and before protoss 
    can reach storm. Banelings can be added but are not necessary, getting banelings greatly reduces the amount of Zerglings and Hydras that you can reach at
    the timing however they can be a good choice if the Protoss researches charge early.</p>

    <h2>Build Order</h2>
    <h3>Opening</h3>
    <p>
        If a significant amount of damage is done to transition out of this build start drone production a baneling nest as well as a fourth base.
    </p>
    <ul>
        <li>13 - Overlord</li>
        <li>17 - Hatch</li>
        <li>18 - Gas</li>
        <li>17 - Spawning Pool</li>
        <li>20 - Overlord</li>
        <li>20 - 2x Queens 4x Lings Metabolic Boost</li>
        <li>30 - Third Hatchery</li>
        <li>33 - Overlord</li>
        <li>33 - Queen</li>
        <li>@100 Gas Lair ~3:40</li>
        <li>@4:00 2x Extractor //Put 2 drones back on gas</li>
        <li>@4:30 1x Extractor</li>
        <li>@100% Lair Hydralisk Den</li>
        <li>@100% Hydra Den muscular augments</li>
        <li>@100% Muscular augments attack with lings and hydras</li>
        <li>@54-60 Drones only Ling Hydra production use all of your gas for Hydras and the rest of your larvae on Lings</li>
    </ul>
  </Layout>
)

export default IndexPage
