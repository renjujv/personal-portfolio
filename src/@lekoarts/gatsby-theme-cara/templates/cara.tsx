import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"
import Articles from "../../../components/articles"

const Cara = () => (
    <Layout>
        <Parallax pages={6}>
            <Hero offset={0} factor={1} />
            <Projects offset={1} factor={1} />
            <Articles offset={2} factor={2} />
            <About offset={4} factor={1} />
            <Contact offset={5} factor={1} />
        </Parallax>
    </Layout>
)

export default Cara