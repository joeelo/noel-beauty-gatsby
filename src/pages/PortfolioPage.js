import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const PortfolioPage = (props) => {
    return (
        <Layout>
            <PageContainer>
                <ScrollingContainer>

                stuff;
                </ScrollingContainer>
            </PageContainer>
        </Layout>
    )
}

export default PortfolioPage;

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
`

const ScrollingContainer = styled.div`
    display: flex;
    height: 100%;
    background-color: green;
    overflow-x: scroll;
`