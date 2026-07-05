import React from "react"
import Layout from "./layout"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from "react-bootstrap"
import SEO from "./seo";
import ResponsiveHeader from "./responsive-header";
import MenuWindow from "./menu-window";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {GetAUVBContent} from "../hooks/get-auvb-content"
import {GetAUVBCovers} from "../hooks/get-auvb-covers"

export default function AUVBBrowser() {
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
        
        <div className="explore-page">
            <section className="py-3">
            <Tab.Container id="auvb-channels" defaultActiveKey="auvb-explores" justify>
                <Nav variant="pills" className="flex-column">
                <Row>
                    <Col>
                    <Nav.Item>
                        <Nav.Link eventKey="auvb-explores">Explores</Nav.Link>
                    </Nav.Item>
                    </Col>
                    <Col>
                    <Nav.Item>
                        <Nav.Link eventKey="auvb-connects">Connects</Nav.Link>
                    </Nav.Item>
                    </Col>
                    <Col>
                    <Nav.Item>
                        <Nav.Link eventKey="auvb-neurovercity">NeuroverCity</Nav.Link>
                    </Nav.Item>
                    </Col>
                </Row>
                </Nav>
                <Tab.Content>
                    {
                        Object.keys(franchises).map((group, index) => (
                            <Tab.Pane eventKey={group.toLowerCase().replace(" ", "-")}>
                                <section className="py-3 my-3 explore-page-body">
                                    <section className="py-3 hero character-profiles-main">
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
                                </section>
                            </Tab.Pane>
                        ))
                    }
                </Tab.Content>
            </Tab.Container>
            </section>
        </div>
    )
}
