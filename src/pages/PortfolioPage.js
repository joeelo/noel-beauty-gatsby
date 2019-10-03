import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const PortfolioPage = (props) => {
    return (
        <Layout>
            <PageContainer>

                <MainContainer>
                    <AbsoluteContainer>
                        <ScrollingContainer>
                        
                        stuff;
                        </ScrollingContainer>
                    </AbsoluteContainer>
                </MainContainer>
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

const MainContainer = styled.div`
    overflow: scroll;
    width: 100vw;
    background-color: blue;
    height: 70vh;
    margin-top: 5vh;
`

const ScrollingContainer = styled.div`
    display: flex;
    height: 60vh;
    width: 2000px;
    position: relative;
    background-color: green;
    overflow-x: scroll;
    bottom: 0;
`

const AbsoluteContainer = styled.div`
    position: absolute; 
    width: 100vw;
    background-color: red;
    height: 60vh;
    right: 0vw;
    overflow: scroll;
`