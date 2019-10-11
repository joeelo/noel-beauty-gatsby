import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const ContactPage = (props) => {
    return (
        <Layout>
            <PageContainer>

                Contact JoAnne
            </PageContainer>
        </Layout>
    )
}

export default ContactPage;

const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`