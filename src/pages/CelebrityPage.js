import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const CelebrityPage = () => {

    return (

        <Layout>
            <PageContainer>
                Hello celebrities
            </PageContainer>
        </Layout>
    )

}

export default CelebrityPage;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`