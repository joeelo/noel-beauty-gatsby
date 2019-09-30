import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const imageSrc = "https://images.squarespace-cdn.com/content/v1/55b04019e4b08745c52f0b8d/1514923260447-VX5P8HVUHQW6ZPJ5SD0A/ke17ZwdGBToddI8pDm48kCgnL50anMCU6VaIstMxCzMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2KJSnoLuGGsu3PSR8Wyu_Kkd-ZcdeJ_PurDofJWjrKkSbhuOb0MAcXaQ6whlEkpec/model.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <PageContainer>

      <Image src={imageSrc} alt="photograph of Rachel Hill"/>

      <section>
        JoAnne Noel is a New York based makeup artist who has worked on many of the worlds most famouse celebrities and models. Not only does she have 
      </section>
    </PageContainer>


  </Layout>
)

export default IndexPage;

const Image = styled.img`
  width: 50%;

  @media (max-width: 400px) {
    display: none;
  }
`

const PageContainer = styled.div`
    width: 80vw;
    display: flex;
    margin: 0 auto;
`

const Section = styled.section`
  @media
`
