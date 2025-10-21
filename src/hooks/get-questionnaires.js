import { useStaticQuery, graphql } from "gatsby"

export const GetQuestionnaires = () => {
    const questionnaireData = useStaticQuery(
        graphql`
        query {
          allFile(
            filter: {relativeDirectory: {regex: "/assets/ASDScreen.*/"}, ext: {eq: ".md"}, name: {eq: "index"}}
            sort: {relativePath: DESC}
          ) {
            edges {
              node {
                relativeDirectory
                name
                ext
                childMarkdownRemark {
                  frontmatter {
                    title
                    url
                  }
                }
              }
            }
          }
        }
        `
        )
    
    return questionnaireData
}
      
