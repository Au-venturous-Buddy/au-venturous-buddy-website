import { useStaticQuery, graphql } from "gatsby"

export const GetAUVBContent = () => {
    const auvbContentData = useStaticQuery(
        graphql`
            query {
                allFile(
                    filter: {relativeDirectory: {regex: "/assets.*/"}, childMarkdownRemark: {frontmatter: {hierarchy: {eq: "franchise"}}}}
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
                                    name
                                    url
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
    )
    return auvbContentData
}