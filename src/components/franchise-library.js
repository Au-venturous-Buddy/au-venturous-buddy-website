import React from "react"
import { Button } from "react-bootstrap"
import ResponsiveHeader from "./responsive-header"
import Layout from "./layout"
import SEO from "./seo";
import MenuWindow from "./menu-window";
import Slider from "react-slick";

function TitlePreviewButton(props) {
  return(
    <Button aria-label={props.titleName} className={`m-2 view img-button ${props.titleType}-preview ${props.titleType}-preview-${props.titleCode}`} href={props.titleSlug}>
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
        <TitlePreviewButton titleCode={value.toLowerCase().replaceAll(" ", "-")} titleName={franchiseTitle["name"]} titleType={franchiseTitle["type"]} titleSlug={franchiseTitle["slug"]} titleCover={franchiseTitle["cover"]} />
      </div>
    )
  })

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
  return(
    <Layout useCustomBackground="wall-background" menuBarItems={[(<MenuWindow pageID={props.pageID} />)]} showMenuBar={true}>
    <SEO title={props.title} description={props.description} />
      <section className="py-3 justify-content-center" style={{textAlign: "center"}}>
        {
          Object.keys(franchiseTitlesRender).map((value) => (
            <ul className="franchise-list">
              <li style={{display: "inline"}}>
                <div className="px-1 pt-3 m-3 franchise-types-list">
                  <Slider {...settings}>
                    {franchiseTitlesRender[value]}
                  </Slider>
                </div>
              </li>
            </ul>
          ))
        }
      </section>
    </Layout>
  )
}