import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const PortfolioPage = (props) => {
    return (
        <Layout>
            <PageContainer>
                stuff;
            </PageContainer>
        </Layout>
    )
}

export default PortfolioPage;

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`