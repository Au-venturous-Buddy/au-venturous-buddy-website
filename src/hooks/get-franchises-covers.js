import { useStaticQuery, graphql } from "gatsby"

export const GetFranchisesCovers = () => {
    const franchisesCovers = useStaticQuery(
        graphql`
            query {
                allFile(
                    filter: {name: {eq: "FRANCHISE_COVER"}, ext: {eq: ".png"}}
                    sort: {relativePath: ASC}
                ) {
                    edges {
                        node {
                            name
                            ext
                            relativeDirectory
                            publicURL
                        }
                    }
                }
            }
        `
    )
    return franchisesCovers
}