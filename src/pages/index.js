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
    <section className="py-3 m-3">
      <section className="py-3 hero">
        <div style={{textAlign: `center`, margin: 0}}>
          <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
          What's New?
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 860,
              padding: `1.45rem 1.0875rem`
            }}
            className="mb-4"
          >
            <div style={{ margin: 0 }}>
              <StaticImage src="../images/AUVBxNACW.png" alt="National Autism Consciousness Week" layout="fullWidth"></StaticImage>
            </div>
          </div>
          </ResponsiveHeader>
        </div>
      </section>
      <section>
        <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 860,
              padding: `1.45rem 1.0875rem`,
              borderRadius: `50%`,
              border: `#00F`
            }}
            className="mb-4"
          >
            <div style={{ margin: 0 }}>
              <StaticImage src="../images/KaliProfile.png" alt="Kali's Profile Picture" layout="fullWidth"></StaticImage>
            </div>
          </div>
          Inspiring AU-some Buddy, AU-some Dad, AU-some Mom to have an AU-some AU-venture!
        </ResponsiveHeader>
        Welcome to Au-venturous Buddy, a place where Au-venturous buddies can explore and learn new things from fellow Au-venturous buddies!
      </section>
    </section>
    </Layout>
  )
}
