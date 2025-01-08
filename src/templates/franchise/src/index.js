import React from "react"
import FranchiseLibrary from "../../../components/franchise-library";
import { graphql } from "gatsby"

export default function FranchiseTemplate(props) {
  var franchiseName = null
  var franchiseCover = null
  var franchiseTitles = {}

  for(var i = 0; i < props.data.allFile.edges.length; i++) {
    var nodeItem = props.data.allFile.edges[i].node

    if(nodeItem.name === "index" && nodeItem.ext === ".md") {
      if(nodeItem.childMarkdownRemark.frontmatter.hierarchy === "franchise") {
        franchiseName = nodeItem.childMarkdownRemark.frontmatter.name
      }
      else if(nodeItem.childMarkdownRemark.frontmatter.hierarchy === "title") {
        var titleId = nodeItem.relativeDirectory.split("/")[nodeItem.relativeDirectory.split("/").length - 1]
        if(!(titleId in franchiseTitles)) {
          franchiseTitles[titleId] = {}
        }
        franchiseTitles[titleId]["name"] = nodeItem.childMarkdownRemark.frontmatter.name
        franchiseTitles[titleId]["slug"] = nodeItem.childMarkdownRemark.fields.slug
        franchiseTitles[titleId]["type"] = nodeItem.childMarkdownRemark.frontmatter.type
      }
    }
    else if(nodeItem.ext === ".png") {
      if(nodeItem.name === "FRANCHISE_COVER") {
        franchiseCover = nodeItem.publicURL
      }
      else if(nodeItem.name === "TITLE_COVER") {
        var titleId = nodeItem.relativeDirectory.split("/")[nodeItem.relativeDirectory.split("/").length - 1]
        if(!(titleId in franchiseTitles)) {
          franchiseTitles[titleId] = {}
        }
        franchiseTitles[titleId]["cover"] = nodeItem.publicURL
      }
    }
  }

  return(
    <FranchiseLibrary pageID="explore" title={franchiseName} description={franchiseName} franchiseTitles={franchiseTitles} />
  )
}

export const query = graphql`
query($pagePath: String!) {
  allFile(
    filter: {relativeDirectory: {regex: $pagePath}}
    sort: {relativePath: ASC}
  ) {
    edges {
      node {
        name
        ext
        relativeDirectory
        publicURL
        childMarkdownRemark {
          frontmatter {
            hierarchy
            name
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
}
`