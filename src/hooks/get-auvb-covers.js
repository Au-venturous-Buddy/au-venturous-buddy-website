import { useStaticQuery, graphql } from "gatsby"

export const GetAUVBCovers = () => {
    const auvbCovers = useStaticQuery(
        graphql`
            query {
                allFile(
                    filter: {relativeDirectory: {regex: "/assets.*/"}, name: {eq: "CHARACTER_COVER"}, ext: {eq: ".png"}}
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
    return auvbCovers
}