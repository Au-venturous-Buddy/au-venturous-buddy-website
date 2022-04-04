import React, { useState } from "react"
import {GridList, GridListTile} from '@material-ui/core';
import {Container, Button, Modal} from 'react-bootstrap';
import CloseButton from "./close-button";
import ResponsiveSize from "../hooks/responsive-size";
import ResponsiveGridColumns from "../hooks/responsive-grid-columns";

function ShowImage({image, title, captionSize}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button className="view img-button" onClick={handleShow}>
          <img
            className="d-block w-100"
            src={image.publicURL}
            alt={image.name}
          />
      </Button>
      <Modal size="lg" show={show} onHide={handleClose} centered scrollable>
          <Modal.Header className="justify-content-center">
            <Modal.Title style={{textAlign: "center", color: "#017BFF"}}>
              <h1 style={{fontSize: captionSize}}>{`${title} - Image ${image.name}`}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign: "justify"}}>
            <img
              className="hover-shadow-card d-block w-100 mb-3"
              src={image.publicURL}
              alt={image.name}
            />
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <CloseButton handleClose={handleClose} />
          </Modal.Footer>
        </Modal>
    </>
    )
}

export default function GridGalleryMain({images, title}) {
  var imgDisplay = [];
  
  for(var i = 0; i < images.length; i++) {
    imgDisplay.push(
      <ShowImage key={images[i].name} image={images[i]} title={title} captionSize={ResponsiveSize(2, "rem", 0.001, 800)} />
    )
  }

  return (
    <Container className="my-5">
      <h1 className="mb-5" style={{color: "#fff", textAlign: "center"}}>{title}</h1>
      <GridList cellHeight="auto" spacing={5} cols={ResponsiveGridColumns(4, [993, 770, 500])}>
        {imgDisplay.map((currentValue, index) => (
          <GridListTile key={index}>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 330,
                padding: `10%`
              }}
            >
              {currentValue}
            </div>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}