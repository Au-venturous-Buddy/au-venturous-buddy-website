import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo";
import ResponsiveHeader from "../components/responsive-header";
import MenuWindow from "../components/menu-window";

export default function Home() {
  return(
    <Layout menuBarItems={[(<MenuWindow pageID="home" />)]} showMenuBar={true}>
    <SEO title="Home" description="Welcome to the Au-venturous Buddy Official Website!" />
    <div className="home-credits-page">
    <section className="py-3 m-3 home-credits-page-body">
      <section className="py-3 hero">
        <div style={{textAlign: `center`, margin: 0}}>
          <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 860,
              padding: `1.45rem 1.0875rem`
            }}
            className="mb-4"
          >
            <div style={{ margin: 0 }}>
              <StaticImage src="../images/ZNZNxSSDT.png" alt="Zene 'N Zeanne Meets Sporty Sam: Dream Team" layout="fullWidth"></StaticImage>
            </div>
          </div>
          "Au-Some" meets "Dare Dream Big"!
          </ResponsiveHeader>
        </div>
        <p className="mx-2" style={{textAlign: `center`}}>
          Sporty Sam: Dream Team is now joining forces with Zene 'N Zeanne to promote a culture of acceptance and love for everyone, even for all persons with disabilities of all kinds.
        </p>
      </section>
    </section>
    </div>
    </Layout>
  )
}
