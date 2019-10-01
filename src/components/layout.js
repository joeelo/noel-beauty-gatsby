/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavBar/>
      <MainContentWrapper>

        {children}

      </MainContentWrapper>

      <Footer/>

    </SiteContainer>
  )
}

export default Layout

const SiteContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80vw;
  margin: 0 auto;
`

const MainContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`