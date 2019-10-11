import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const ContactPage = (props) => {
    return (
        <Layout>
            <PageContainer>

                <ContactSpan> Contact JoAnne </ContactSpan>
            </PageContainer>
        </Layout>
    )
}

export default ContactPage;

const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    justify-content: center;
`

const ContactSpan = styled.span`
    font-family: Helvetica, sans-serfif;
    text-decoration: underline;
`