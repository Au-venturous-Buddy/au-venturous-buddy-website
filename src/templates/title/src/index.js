import React from "react"
import TitleLibrary from "../../../components/title-library";
import { graphql } from "gatsby"

export default function TitleTemplate(props) {
  var titleName = null
  var titleType = null
  var titleCode = null
  var franchiseSlug = null
  var contents = {}

  for(var i = 0; i < props.data.allFile.edges.length; i++) {
    var nodeItem = props.data.allFile.edges[i].node

    if(nodeItem.name === "index" && nodeItem.ext === ".md") {
      if(nodeItem.childMarkdownRemark.frontmatter.hierarchy === "title") {
        titleName = nodeItem.childMarkdownRemark.frontmatter.name
        titleType = nodeItem.childMarkdownRemark.frontmatter.type
        titleCode = nodeItem.relativeDirectory.split("/")[nodeItem.relativeDirectory.split("/").length - 1]
        franchiseSlug = nodeItem.childMarkdownRemark.fields.slug.slice(0, nodeItem.childMarkdownRemark.fields.slug.lastIndexOf("/"));
        franchiseSlug = franchiseSlug.slice(0, franchiseSlug.lastIndexOf("/"))
      }
      else if(nodeItem.childMarkdownRemark.frontmatter.hierarchy === "content") {
        var contentGroup = nodeItem.relativeDirectory.split("/")[nodeItem.relativeDirectory.split("/").length - 2]
        if(!(contentGroup in contents)) {
          contents[contentGroup] = {}
        }

        var contentItem = nodeItem.relativeDirectory.split("/")[nodeItem.relativeDirectory.split("/").length - 1]
        if(!(contentItem in contents[contentGroup])) {
          contents[contentGroup][contentItem] = {}
        }

        contents[contentGroup][contentItem]["name"] = nodeItem.childMarkdownRemark.frontmatter.name
        contents[contentGroup][contentItem]["synopsis"] = nodeItem.childMarkdownRemark.html
        contents[contentGroup][contentItem]["url"] = nodeItem.childMarkdownRemark.frontmatter.url
      }
    }
    else if(nodeItem.ext === ".png") {
      if(nodeItem.name === "CONTENT_COVER") {
        var contentGroup = nodeItem.relativeDirectory.split("/")[nodeItem.relativeDirectory.split("/").length - 2]
        if(!(contentGroup in contents)) {
          contents[contentGroup] = {}
        }

        var contentItem = nodeItem.relativeDirectory.split("/")[nodeItem.relativeDirectory.split("/").length - 1]
        if(!(contentItem in contents[contentGroup])) {
          contents[contentGroup][contentItem] = {}
        }

        contents[contentGroup][contentItem]["cover"] = nodeItem.publicURL
      }
    }
  }

  return(
    <TitleLibrary pageID="explore" type={titleType} franchiseSlug={franchiseSlug} titleCode={titleCode.toLowerCase().replaceAll(/[^\w]/gi, "-")} title={titleName} description={titleName} contents={contents} />
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
            url
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
}
`
