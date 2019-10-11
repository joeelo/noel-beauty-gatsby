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
        JoAnne Noel is a New York based makeup artist who has worked on many of the worlds most famouse celebrities and models. Not only does she have the style, but also has been endowed with the talent to create animations of some of the most iconic people/images in fashion history. 
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

`

const Image = styled.img`
  width: 50%;

  @media (max-width: 400px) {
    display: none;
  }
`

const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  padding: 0 40px;
  font-size: 1.25em;

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`
