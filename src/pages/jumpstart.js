import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import ResponsiveSize from "../hooks/responsive-size";
import MenuWindow from "../components/menu-window";
import ResponsiveHeader from "../components/responsive-header";
import { StaticImage } from "gatsby-plugin-image"

export default function HomePage() {
  return(
    <Layout menuBarItems={[(<MenuWindow pageID="jumpstart" />)]} showMenuBar={true}>
      <SEO title="AUVBxBBP Jumpstart Program Page" description="AUVBxBBP Jumpstart Program Page" />
      <section className="pt-3 mt-3 mb-5 auvb-bbp-jumpstart-main-page" style={{textAlign: "center", paddingBottom: "1in"}}>
        <section className="mx-3 hero-section">
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 260,
              padding: `1.45rem 1.0875rem`,
              textAlign: `center`
            }}
          >
            <div style={{ margin: 0 }}>
              <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
                <StaticImage src="../images/AUVBxBBPJmpstart.jpg" alt='AUVBxBBP Jumpstart Logo' layout="fullWidth"></StaticImage>
              </ResponsiveHeader>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}
