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
          <p>
          Best Buddies Philippines and Au-venturous Buddy are teaming up to expand our Best Buddies Philippines Friendship Program! We believe every person with Intellectual and Developmental Diversities deserves to be included in schools and that all students should have the same social opportunities.<br/><br/>
          Through Friendship Chapters where individuals are matched in one to one friendship, students with and without disabilities can grow socially and emotionally by attending group socials and friendship activities within schools and with their buddy.<br/><br/>
          Right now, Best Buddies Philippines has been present in Metro Manila, Rizal, Samar, Leyte, and Cebu. But with more than 7,000 islands, there is definitely more room for expansion, and we need your help!<br/><br/>
          We have developed a form for you to indicate your interest in bringing Best Buddies to your school!<br/><br/>
          Find out more about this initiative through the video below!
          </p>
        </section>
        <section>
            <div className="m-3 tablet-display-blue">
              <div className="tablet-display-body">
                <div className="tablet-display-screen">
                  <iframe width="100%" height="840" src="https://www.youtube.com/embed/UdgvdcIeaiA"></iframe>
                </div>
              </div>
            </div>
        </section>
        <section>
            <div className="m-3 tablet-display-pink">
              <div className="tablet-display-body">
                <div className="tablet-display-screen">
                  <iframe width="100%" height="840" src="https://docs.google.com/forms/d/e/1FAIpQLSelDYy3ULEXE6bP18MmknDVjyUQ5tHnoYlp-YKebUIQtwwIvA/viewform?embedded=true"></iframe>
                </div>
              </div>
            </div>
        </section>
      </section>
    </Layout>
  )
}
