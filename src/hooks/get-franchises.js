import { useStaticQuery, graphql } from "gatsby"

export const GetFranchises = () => {
    const franchisesData = useStaticQuery(
        graphql`
            query {
                allFile(
                    filter: {childMarkdownRemark: {frontmatter: {hierarchy: {eq: "franchise"}}}}
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
    return franchisesData
}