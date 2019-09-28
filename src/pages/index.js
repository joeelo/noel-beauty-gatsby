import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const imageSrc = "https://images.squarespace-cdn.com/content/v1/55b04019e4b08745c52f0b8d/1514923260447-VX5P8HVUHQW6ZPJ5SD0A/ke17ZwdGBToddI8pDm48kCgnL50anMCU6VaIstMxCzMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2KJSnoLuGGsu3PSR8Wyu_Kkd-ZcdeJ_PurDofJWjrKkSbhuOb0MAcXaQ6whlEkpec/model.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    

      Welcome to Noel Beauty
      <img src={imageSrc} alt="photograph of Rachel Hill"/>

  </Layout>
)

export default IndexPage
