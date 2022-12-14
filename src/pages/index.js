import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import {BsPuzzleFill} from "react-icons/bs";
import {GiPartyFlags} from "react-icons/gi";
import {FaCross} from "react-icons/fa";
import SEO from "../components/seo";
import ResponsiveHeader from "../components/responsive-header";
import SearchBox from "../components/search-box";
import MenuWindow from "../components/menu-window";

export default function Home() {
  return(
    <Layout menuBarItems={[(<MenuWindow pageID="home" />), (<SearchBox />)]} showMenuBar={true}>
    <SEO title="Home" description="Welcome to the Zene 'N Zeanne Official Website!" />
    <div className="table-background">
    <section className="py-3 m-3 home-credits-page">
      <section className="py-3 hero">
        <div style={{textAlign: `center`, margin: 0}}>
          <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
          <div className="m-3">
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 860,
              padding: `1.45rem 1.0875rem`,
              border: "5px solid rgb(221, 221, 221)",
              backgroundColor: "white"
            }}
          >
            <div style={{ margin: 0, border: "5px solid rgb(221, 221, 221)" }}>
              <StaticImage src="../images/Zene N Zeanne V4 FantaZZticFive.png" alt="The FantaZZtic Five" layout="fullWidth"></StaticImage>
            </div>
          </div>
          </div>
          Your Pinoy Twin Buddies.
          </ResponsiveHeader>
        </div>
        <p style={{textAlign: `center`}}>
          New neighbors. New friends. New stories. Same twin power.
        </p>
      </section>
      <section className="py-3" style={{textAlign: `center`}}>
        <div className="mb-3">
          <ResponsiveHeader level={2} maxSize={1.5} minScreenSize={800}>Zene 'n Zeanne aims to help you learn:</ResponsiveHeader>
        </div>
        <ul>
          <li><BsPuzzleFill aria-hidden={true} /> Autism Inclusion and Acceptance</li>
          <li><GiPartyFlags aria-hidden={true} /> Filipino Culture and Pride</li>
          <li><FaCross aria-hidden={true} /> Christianity, Faith, and Spirituality</li>
        </ul>
      </section>
      <section
        style={{
          margin: `0 auto`,
          marginTop: `50px`, 
          marginBottom: `90px`,
          maxWidth: 460,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div style={{ margin: 0 }}>
          <StaticImage src="../images/Au-MazinOriginals.png" alt="Au-Mazin Originals" layout="fullWidth"></StaticImage>
        </div>
      </section>
    </section>
    </div>
    </Layout>
  )
}
