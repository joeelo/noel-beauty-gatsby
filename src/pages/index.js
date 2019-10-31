import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const imageSrc = "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <PageContainer>

      <Image src={imageSrc} alt="photograph of Rachel Hill"/>

      <Section>
        <TextDiv>
          <HelveticaSpan>JoAnne Noel</HelveticaSpan>  is a New York based makeup artist who has worked on many of the worlds most famouse celebrities and models. Not only does she have the style, but also has been endowed with the talent to create animations of some of the most iconic people/images in fashion history. Her makeup philosophy is, beauty is meant to be celebrated, not covered up, so makeup looks natural and reveal the true beauty of each individual subject.
        </TextDiv>
      </Section>
    </PageContainer>


  </Layout>
)

export default IndexPage;

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
      flex-direction: column;
    }

`

const Image = styled.img`
  width: 35vw;
  margin-top: 50px;
  height: auto;

  @media only screen 
  and (min-device-width : 768px) 
  and (max-device-width : 1024px)  { 
    width: 40vw;
    height: auto;
  }
    
  @media (max-width: 700px) {
    margin-top: 20px;
    width: 100vw;
  }
`

const Section = styled.section`
  height: 60vh;
  align-items: center;
  padding: 0 40px;
  font-size: 22px;
  font-family: Lato, sans-serif;
  line-height: 1.75em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;

  @media screen and (max-width: 700px) {
    padding: 0;
    font-size: 1em;
    justify-content: flex-start;
    height: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
    padding: 0;
  }

  @media screen and (max-width: 460px) {
    font-size: 12px;
  }

  @media screen and (max-width: 965px) {
    font-size: 1em;
  }
`

const HelveticaSpan = styled.span`
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 24px;
  display: inline-block;
`

const TextDiv = styled.div`
  width: 100%;
`