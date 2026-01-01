import React from "react"
import { Button, Tab, Tabs } from "react-bootstrap"
import ResponsiveHeader from "./responsive-header"
import Layout from "./layout"
import SEO from "./seo";
import MenuWindow from "./menu-window";
import UpFolderButton from "./up-folder-button";
import Slider from "react-slick";

function TitlePreviewButton(props) {
  return(
    <Button aria-label={props.titleName} className={`mx-2 mt-2 view img-button ${props.titleType}-preview ${props.titleType}-preview-${props.titleCode}`} href={"/au-venturous-buddy-website" + props.titleSlug}>
      <div style={{maxWidth: "450px"}}>
        <div class={`${props.titleType}-preview-contents`} aria-hidden={true}>
          <img
            className={`d-block w-100 ${props.titleType}-preview-image`}
            src={props.titleCover}
            alt={props.titleName}
          />
          <section className={`m-3 ${props.titleType}-preview-title`}>
            <ResponsiveHeader level={3} maxSize={1} minScreenSize={460}>
              {props.titleName}
            </ResponsiveHeader>
          </section>
        </div>
      </div>
    </Button>
  )
}

export default function FranchiseLibrary(props) {
  var franchiseTitlesRender = {}
  Object.keys(props.franchiseTitles).forEach((value) => {
    var franchiseTitle = props.franchiseTitles[value]
    if(!(franchiseTitle["type"] in franchiseTitlesRender)) {
      franchiseTitlesRender[franchiseTitle["type"]] = []
    }

    franchiseTitlesRender[franchiseTitle["type"]].push(
      <div>
        <TitlePreviewButton titleCode={value.toLowerCase().replaceAll(/[^\w]/gi, "-")} titleName={franchiseTitle["name"]} titleType={franchiseTitle["type"]} titleSlug={franchiseTitle["slug"]} titleCover={franchiseTitle["cover"]} />
      </div>
    )
  })

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true
  };
  
  return(
    <Layout useCustomBackground="wall-background" menuBarItems={[(<UpFolderButton previousFolder="/au-venturous-buddy-website/explore" />), (<MenuWindow pageID={props.pageID} />)]} showMenuBar={true}>
    <SEO title={props.title} description={props.description} />
      <section className="py-3 justify-content-center" style={{textAlign: "center"}}>
        <Tabs fill>
          {
            Object.keys(franchiseTitlesRender).map((value) => (
              <Tab eventKey={value} title={value}>
                <ul className="franchise-list">
                  <li style={{display: "inline"}}>
                    {
                      franchiseTitlesRender[value].map((item) => (
                        <div className="px-1 pt-3 m-3 franchise-types-list">
                          {item}
                        </div>
                      ))
                    }
                  </li>
                </ul>
              </Tab>
            ))
          }
        </Tabs>
      </section>
    </Layout>
  )
}
