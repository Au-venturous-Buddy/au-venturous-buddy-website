import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo";
import ResponsiveHeader from "../components/responsive-header";
import MenuWindow from "../components/menu-window";
import AUVBBrowser from "../components/auvb-browser";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {GetAUVBContent} from "../hooks/get-auvb-content"
import {GetAUVBCovers} from "../hooks/get-auvb-covers"

export default function Home() {
  const franchisesData = GetAUVBContent()
  const franchisesCovers = GetAUVBCovers()

  var franchises = {}

  for(var i = 0; i < franchisesData.allFile.edges.length; i++) {
      var franchiseData = franchisesData.allFile.edges[i].node;
      var franchiseCover = franchisesCovers.allFile.edges[i].node;

      var franchiseGroup = franchiseData.relativeDirectory.split("/")[franchiseData.relativeDirectory.split("/").length - 2]
      if(!(franchiseGroup in franchises)) {
          franchises[franchiseGroup] = []
      }

      franchises[franchiseGroup].push({"name": franchiseData.childMarkdownRemark.frontmatter.name, "cover": franchiseCover.publicURL, "url": (franchiseData.childMarkdownRemark.frontmatter.url == "") ? ("/au-venturous-buddy-website" + franchiseData.childMarkdownRemark.fields.slug) : franchiseData.childMarkdownRemark.frontmatter.url})
  }
  
  return(
    <Layout menuBarItems={[(<MenuWindow pageID="home" />)]} showMenuBar={true}>
    <SEO title="Home" description="Welcome to the Au-venturous Buddy Official Website!" />
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
                <div className="mx-2 mt-2 mb-4 kali-profile-image-inner">
                  <StaticImage src="../images/KaliProfile.png" alt="Kali Profile Picture" layout="fullWidth"></StaticImage>
                </div>
              </div>
            </div>
            Inspiring AU-some Buddy, AU-some Dad, AU-some Mom to have an AU-some AU-venture!
          </ResponsiveHeader>
          Welcome to Au-venturous Buddy, a place where Au-venturous buddies can explore and learn new things from fellow Au-venturous buddies!
        </section>
        <section className="py-3">
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
              <div style={{ margin: 0 }} className="hero-image">
                <StaticImage src="../images/June2026.png" alt="June 2026" layout="fullWidth"></StaticImage>
              </div>
            </div>
            </ResponsiveHeader>
          </div>
        </section>
        <AUVBBrowser />
      </section>
    </div>
    </Layout>
  )
}
