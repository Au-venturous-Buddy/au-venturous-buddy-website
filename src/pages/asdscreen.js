import React from "react"
import Layout from "../components/layout"
import {GetQuestionnaires} from "../hooks/get-questionnaires"
import SEO from "../components/seo";
import QuestionnaireCover from "../components/questionnaire-cover";
import {MdLogin, MdLogout} from "react-icons/md";
import {BsTrashFill} from "react-icons/bs";
import {Button} from "react-bootstrap";
import ShowAudio from "../components/show-audio";
import ResponsiveSize from "../hooks/responsive-size";
import MenuWindow from "../components/menu-window";
import ResponsiveHeader from "../components/responsive-header";
import { StaticImage } from "gatsby-plugin-image"

export default function HomePage() {
  const questionnaireData = GetQuestionnaires()

  var questionnaireItems = [];
  
  for(var i = 0; i < questionnaireData.allFile.edges.length; i++) {
    var questionnaireItemData = questionnaireData.allFile.edges[i].node.childMarkdownRemark;

    var displayBookCover = (
      <QuestionnaireCover title={questionnaireItemData.frontmatter.title} slug={questionnaireItemData.frontmatter.url} />
    )

    questionnaireItems.push(displayBookCover)
  }

  return(
    <Layout menuBarItems={[(<MenuWindow pageID="asdscreen" />)]} showMenuBar={true}>
      <SEO title="ASD Screen App Home" description="ASD Screen App Home Page" />
      <section className="pt-3 mt-3 mb-5 asdscreen-background" style={{textAlign: "center", paddingBottom: "1in"}}>
        <section className="mx-3 hero-section">
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 260,
              padding: `1.45rem 1.0875rem`,
              textAlign: `center`
            }}
          >
            <div style={{ margin: 0 }}>
              <ResponsiveHeader level={1} maxSize={2} minScreenSize={800}>
                <StaticImage src="../images/ACRILogoWide.jpg" alt='ACRI Logo' layout="fullWidth"></StaticImage>
              </ResponsiveHeader>
            </div>
          </div>
          <section className="mb-2" lang="en">
            <article className="mb-2">{`Welcome to the Autism Spectrum Disorder (ASD) Screening website where you can access two autism-specific screening tools as part of your child's routine developmental screening or to identify if your child is at risk for ASD. Results of any of these screening tools do not replace a formal diagnosis from a developmental assessment conducted by a developmental and behavioral pediatrician.`}</article>
            <ShowAudio audioLink="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1405661800%3Fsecret_token%3Ds-211zZdy7v0A&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" showAudio={true} />
          </section>
          <section lang="tl">
            <article className="mb-2">{`Maligayang pagdating mula sa Autism Spectrum Disorder (ASD) Screening website kung saan maaaring sumagot ng dalawang autism-specific screening tools bilang parte ng routine developmental screening ng iyong anak para malaman kung siya ay nagpapakita ng senyales ng ASD. Ang resulta ng kahit anong karagdagang pagsusuri ay hindi papalit sa isang developmental assessment na ginagawa ng isang developmental and behavioral pediatrician.`}</article>
            <ShowAudio audioLink="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1405661788%3Fsecret_token%3Ds-4ocYJHnG6gk&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" showAudio={true} />
          </section>
          <small><b>{`© ${new Date().getFullYear()} ACRI`}</b></small>
        </section>
        <ul className="questionnaires-list">
          {questionnaireItems.map((value, index) => (
            <li style={{display: "inline"}} key={index} className="m-3 questionnaires-list-item">
              {value}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
