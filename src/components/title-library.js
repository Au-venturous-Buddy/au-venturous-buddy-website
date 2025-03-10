import React, {useState} from "react"
import { Accordion, Button, Modal, Badge } from "react-bootstrap"
import ResponsiveHeader from "./responsive-header"
import Layout from "./layout"
import SEO from "./seo";
import MenuWindow from "./menu-window";
import BackButton from "./back-button";
import {QRCodeSVG} from 'qrcode.react';
import UpFolderButton from "./up-folder-button";

function ContentPreviewButton(props) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return(
    <>
      <Button aria-label={props.contentName} className={`m-2 view img-button ${props.titleType}-content-preview ${props.titleType}-content-preview-${props.titleCode}`} onClick={handleShow}>
        <div style={{maxWidth: "600px"}}>
          <div class={`${props.titleType}-content-preview-contents`} aria-hidden={true}>
            <img
              className={`d-block w-100 ${props.titleType}-content-preview-image`}
              src={props.contentCover}
              alt={props.contentName}
            />
            <section className={`m-3 ${props.titleType}-content-preview-title`}>
              <ResponsiveHeader level={3} maxSize={1} minScreenSize={460}>
                {props.contentName}
              </ResponsiveHeader>
              <Badge>{`${props.contentGroup} ${props.contentItem}`}</Badge>
            </section>
          </div>
        </div>
      </Button>
      <Modal size="xl" show={show} onHide={handleClose} centered scrollable fullscreen={true}>
        <Modal.Header className="justify-content-center bold-text">
          <Modal.Title>
            <ResponsiveHeader level={1} maxSize={2} minScreenSize={500}>Content Info</ResponsiveHeader>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-0 p-0">
          <div className={`p-3 ${props.titleType}-content-main ${props.titleType}-content-main-${props.titleCode}`}>
            <div className={`p-3 ${props.titleType}-content-main-body ${props.titleType}-content-main-body-${props.titleCode}`}>
              <section>
                <div className="my-3">
                  <ResponsiveHeader level={2}>{props.contentName}</ResponsiveHeader>
                  <Badge>{`${props.contentGroup} ${props.contentItem}`}</Badge>
                </div>
                <img
                  className={`hover-shadow-card d-block w-100 mb-3 ${props.titleType}-content-preview-image`}
                  src={props.contentCover}
                  alt={props.contentName}
                />
                <div className={`${props.titleType}-content-preview-caption`} dangerouslySetInnerHTML={{__html: props.contentSynopsis}}></div>
              </section>
              <section className="m-5" style={{textAlign: "center"}}>
                <ResponsiveHeader level={3}>Scan, Click, or Tap on the QR Code below to start:</ResponsiveHeader>
                <Button className="view img-button qr-code m-2 p-2" style={{backgroundColor: "white"}} href={props.contentURL} target="_blank" rel="noreferrer">
                  <QRCodeSVG value={props.contentURL} />
                </Button>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <BackButton handleClose={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default function TitleLibrary(props) {
  var contentsRender = {}
  Object.keys(props.contents).forEach((group) => {
    var contentsGroup = props.contents[group]
    if(!(group in contentsRender)) {
      contentsRender[group] = {}
    }
    Object.keys(contentsGroup).forEach((item) => {
      var contentsItem = contentsGroup[item]
      contentsRender[group][item] = (
        <ContentPreviewButton titleType={props.type} titleCode={props.titleCode} contentGroup={group} contentItem={item} contentCover={contentsItem["cover"]} contentName={contentsItem["name"]} contentSynopsis={contentsItem["synopsis"]} contentURL={contentsItem["url"]} />
      )
    })
  })

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
  return(
    <Layout useCustomBackground="wall-background" menuBarItems={[(<UpFolderButton previousFolder={`/au-venturous-buddy-website${props.franchiseSlug}`} />), (<MenuWindow pageID={props.pageID} />)]} showMenuBar={true}>
    <SEO title={props.title} description={props.description} />
      <div className={`py-3 justify-content-center ${props.type}-title-main ${props.type}-title-main-${props.titleCode}`} style={{textAlign: "center"}}>
        <section className={`m-3 p-2 ${props.type}-title-main-body ${props.type}-title-main-body-${props.titleCode}`}>
          <div className={`mt-2 ${props.type}-title-main-body-name`}>
            <ResponsiveHeader level={1} maxSize={2} minScreenSize={460}>
              {props.title}
            </ResponsiveHeader>
          </div>
          <Accordion flush>
          {
            Object.keys(contentsRender).map((currentContentsGroup) => (
              <div className="m-3" key={currentContentsGroup}>
                <Accordion.Item eventKey={currentContentsGroup}>
                  <Accordion.Header className="hover-shadow-card bold-text justify-content-center" style={{textAlign: "center"}}>
                    <ResponsiveHeader level={2} maxSize={1.5} minScreenSize={500}>
                      {currentContentsGroup}
                    </ResponsiveHeader>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {Object.keys(contentsRender[currentContentsGroup]).map((currentContentsItem, index) => (
                        <li style={{display: "inline"}} key={index}>
                          {contentsRender[currentContentsGroup][currentContentsItem]}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            ))
          }
          </Accordion>
        </section>
      </div>
    </Layout>
  )
}
