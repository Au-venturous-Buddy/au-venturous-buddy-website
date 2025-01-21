import React from "react"
import Layout from "../components/layout"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from "react-bootstrap"
import SEO from "../components/seo";
import ResponsiveHeader from "../components/responsive-header";
import MenuWindow from "../components/menu-window";
import {GetFranchises} from "../hooks/get-franchises"
import {GetFranchisesCovers} from "../hooks/get-franchises-covers"

export default function Explore() {
    const franchisesData = GetFranchises()
    const franchisesCovers = GetFranchisesCovers()

    var franchises = []

    for(var i = 0; i < franchisesData.allFile.edges.length; i++) {
        var franchiseData = franchisesData.allFile.edges[i].node;
        var franchiseCover = franchisesCovers.allFile.edges[i].node;
        franchises.push({"name": franchiseData.childMarkdownRemark.frontmatter.name, "cover": franchiseCover.publicURL, "slug": franchiseData.childMarkdownRemark.fields.slug})
    }

    return(
        <Layout menuBarItems={[(<MenuWindow pageID="explore" />)]} showMenuBar={true}>
            <SEO title="Explore" description="Explore Au-venturous Buddy Media Content" />
            <div className="explore-page">
                <section className="py-3 m-3 explore-page-body">
                    <section className="py-3 hero">
                        <div style={{textAlign: `center`, margin: 0}}>
                            <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
                                Explore Au-venturous Buddy Media Content
                            </ResponsiveHeader>
                        </div>
                        <ImageList sx={{ height: 450 }} cols={3}>
                            {
                                franchises.map((franchise) => (
                                    <ImageListItem>
                                        <Button aria-label={franchise["name"]} className={`m-2 view img-button franchise-cover`} href={"/au-venturous-buddy-website" + franchise["slug"]}>
                                            <img
                                                className={`d-block w-100`}
                                                src={franchise["cover"]}
                                                alt={franchise["name"]}
                                            />
                                        </Button>
                                    </ImageListItem>
                                ))
                            }
                        </ImageList>
                    </section>
                </section>
            </div>
        </Layout>
    )
}
