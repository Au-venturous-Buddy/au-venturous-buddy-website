import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo";
import ResponsiveHeader from "../components/responsive-header";
import MenuWindow from "../components/menu-window";

export default function FourZeroFour() {
  return(
    <Layout menuBarItems={[(<MenuWindow pageID={null} />)]} showMenuBar={true}>
    <SEO title="404" description="Page Not Found!" />
    <div className="explore-page">
      <section className="py-3 m-3 explore-page-body">
        <section className="py-3 hero">
          <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 460,
                padding: `1.45rem 1.0875rem`
              }}
              className="mb-4"
            >
              <div style={{ margin: 0 }} className="kali-profile-image">
                <StaticImage src="../images/KaliProfile.png" alt="Kali's Profile Picture" layout="fullWidth"></StaticImage>
              </div>
            </div>
            Looks like this page doesn't exist yet!
          </ResponsiveHeader>
          Please navigate to an existing page via the main menu below.
        </section>
      </section>
    </div>
    </Layout>
  )
}
