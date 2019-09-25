import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Header from "../components/Header2";

const About = (props) => {
    return (
        <Layout>
            <PageContainer>
                <ImageContainer>
                    <Image src="/images/about-me-image-1.jpeg" alt="image of desk with makeup"/>
                    <Image src="/images/about-me-image-2.jpg" alt="image of woman doing makeup on model"/>
                    <Image src="/images/about-me-image-3.jpg" alt="image of woman doing makeup on model"/>
                </ImageContainer>
                <BioSection>
                    <Paragraph> 
                        A native New Yorker, Joanne Noel's style of classic beauty and flawless skin comes from her passion for classic film and fashion in the mid 20th century. It is a love that has led her to the halls of New York's Fashion Institute of Technology (FIT), and on to becoming the top global sales and makeup associate at Sak's Fifth Avenue, which was known as the number one retailer in the world. 
                    </Paragraph>
                    <Paragraph>
                        Known to many as a young makeup prodigy, Joanne Noel worked in New York’s top luxury department stores for 10 years with more than 80 percent of the city’s top cosmetic and retail vendors, including Chanel, Christian Dior, Givenchy, Guerlain, Sisley, Bloomingdale, Barney's, Bergdorf Goodman, and Jeffrey's selling-floors. This experience provided her with the product knowledge, and training skills both corporate leaders, and customers longed for in a luxury cosmetic experience. 
                    </Paragraph>
                    <Paragraph>
                        By the late 1990’s, JoAnne Noel had earned the distinguished opportunity to assist the late makeup legend Kevin Aucoin, and beauty icons Bobbi Brown, Laura Mercier and Francois Nars. During this time, JoAnne Noel came to understand cosmetic artistry through the eyes of the world’s greatest cosmeticians and was able to take bits and pieces of their mastery and mold them into her own signature style. 
                    </Paragraph>
                    <Paragraph>
                        Her success in luxury beauty retail led JoAnne Noel to appear as a contributing expert on top television shows in the early 2000’s, including “The Early Show,” “Good Day New York” and “Good Morning America.” She continued in broadcast, directing teams of artists, and creating daily looks for celebrity hosts. Her ability to make older women and men appear younger through the application of classic beauty makeup techniques was the best kept secret of elites across broadcast networks, including Lifetime Television, ESPN Classic Network, Food Network, MTV Network, Spike Lee Production and MSNBC. She was also personally responsible for creating the everyday looks of celebrities, including Rachael Ray, Martha Stewart, and Stewart Scott, and has worked with musical greats, including Beyonce, and Kelly Clarkson. 
                    </Paragraph>
                    <Paragraph>
                        In addition to JoAnne Noel’s work in broadcast, she has also executed full-looks for editorial fashion features in Cosmopolitan, Allure, Elle, Town and Country and Seventeen magazines.
                    </Paragraph>
                    <Paragraph>
                        Over time, JoAnne Noel has evolved her craft to incorporate classic looks with new trends in art, beauty, fashion and technology. She has also translated her love for makeup into digital illustration, graphic design, and animation for beauty, and now studies at the New York School of Visual Arts. She now story boards, art directs, edits, animates and assembles fully animated beauty videos for digital marketing and video makeup “how-to” tutorials. JoAnne Noel is currently working on the launch of her next beauty platform, NoelBeauty.com, where the knowledge she’s accumulated throughout her 25-year career in creating effortless, classic beauty looks and flawless skin will be shared with the masses
                    </Paragraph>
                </BioSection>
            </PageContainer>
        </Layout>
    )
}

export default About;

const PageContainer = styled.div`
    width: 80vw;
    display: flex;
    margin: 0 auto;
`

const ImageContainer = styled.div`
    flex-grow: 1;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0; 

    @media (max-width: 740px) {
        display: none;
        width: 100%;
    }
`

const Image = styled.img`
    width: 90%;
    margin: 3% auto;
`

const BioSection = styled.section`
    width: 50%;
    padding: 40px 30px;
    font-family: Muli, sans-serif;

    @media (max-width: 740px) {
        width: 100%;
        padding: 20px 15px;
    }

`

const Paragraph = styled.p`
    margin: 1em 0px;
`