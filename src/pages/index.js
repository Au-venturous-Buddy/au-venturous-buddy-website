import React from "react"
import Layout from "../components/layout"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo";
import ResponsiveHeader from "../components/responsive-header";
import MenuWindow from "../components/menu-window";
import { Tab, Tabs } from "react-bootstrap";
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
        <section className="py-3">
            <Tabs defaultActiveKey="home">
                <Tab eventKey="home" title="Home">
                  <section className="py-3 explore-page-tab-contents">
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
                </Tab>
                {
                    Object.keys(franchises).map((group, index) => (
                        <Tab eventKey={group.toLowerCase().replace(" ", "-")} title={group.split(" ")[group.split(" ").length - 1]}>
                            <section className="py-3 explore-page-tab-contents character-profiles-main">
                                <ImageList cols={3}>
                                    {
                                        franchises[group].map((franchise) => (
                                            <ImageListItem className="character-profiles">
                                                <Button aria-label={franchise["name"]} className="view profile-button m-2" href={franchise["url"]} target="_blank" rel="noopener noreferrer">
                                                    <div aria-hidden={true} className="profile-button-contents">
                                                        <img
                                                            className="d-block w-100 profile-img"
                                                            src={franchise["cover"]}
                                                            alt={franchise["name"]}
                                                            aria-hidden={true}
                                                        />
                                                        <div className="m-2 bold-text profile-caption">
                                                        <ResponsiveHeader level={4} maxSize={0.9} minScreenSize={330}>{franchise["name"]}</ResponsiveHeader>
                                                        </div>
                                                    </div>
                                                </Button>
                                            </ImageListItem>
                                        ))
                                    }
                                </ImageList>
                            </section>
                        </Tab>
                    ))
                }
              </Tabs>
            </section>
        </section>
      </div>
    </Layout>
  )
}
