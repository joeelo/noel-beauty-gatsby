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
                        <PlaceHolderDiv></PlaceHolderDiv>
                        <Image src="https://images.unsplash.com/photo-1493018245248-737b8728173f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                        <Image src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                        <Image src="https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                        <Image src="https://images.unsplash.com/photo-1496440459387-85ced90156f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80"/>
                        <Image src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=342&q=80"/>
                        <Image src="https://images.unsplash.com/photo-1498551252598-4b4ad94ed4be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                        <Image src="https://images.unsplash.com/photo-1487980359585-fc92bf3fb9a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                        <Image src="https://images.unsplash.com/photo-1494765803320-93c95366f4b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
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
    width: 100vw;
    height: 90vh;
    margin-top: 5vh;
`

const ScrollingContainer = styled.div`
    display: flex;
    height: 80vh;
    min-width: 90vw;
    position: relative;
    overflow-x: scroll;
    bottom: 0;
    background-color: antiquewhite;

`

const AbsoluteContainer = styled.div`
    position: absolute; 
    width: 100vw;
    height: 80vh;
    right: 0vw;
    overflow: scroll;
`

const PlaceHolderDiv = styled.div`
    height: 80vh;
    background-color: white;
    padding-right: 10vw;

    @media (max-width: 600px) {
        padding-right: 20vw;
    }
`

const Image = styled.img`
    height: 80vh;
    margin: 0;
    margin-right: 3px;
`