import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description"
import Lightbox from 'react-image-lightbox';
import useLocale from "../hooks/use-locale";

const Paragraph = styled.p`
    margin: 15px;
    width: 65%;
    padding: 10vh 0;
    line-height: 2em;
`;

const Image = styled.img`
    height: 200px;
    object-fit: contain;
    margin: 10px;
    margin-right: 30px;
    @media screen and (max-width: 900px) {
        width: 200px;
    }  
`;

export default function Art() {
    const [translate, locale, changeLocale] = useLocale();
    const [urlImage, setUrl] = React.useState(null);

    const projects = [
        { image: "/logosoap.jpg", description: 'art.soap' },
        { image: "/logo.png" , description: 'art.logo' },
        { image: "/oct.jpg" , description: 'art.illustration' },
        { image: "/backgr.jpg", description: 'art.background' },
        { image: "/bullfinch.jpg",  description: 'art.illustration' },
        { image: "/cardinal.jpg",  description: 'art.illustration' },
        { image: "/fish.jpg",  description: 'art.illustration' },
        { image: "/field.jpg",  description: 'art.illustration' },
    ]

    return (
        <Page>
            <Header translate={translate} changeLocale={changeLocale}/>
            <Content>
            <Paragraph>
                { translate('art.header') }
            </Paragraph>
            {
                    projects.map(project => (
                        <Section>
                            <Image src={ project.image } onClick={() => setUrl(project.image)} />
                            <Description>
                                { translate(project.description) } 
                            </Description>
                        </Section>
                    ))
                }

            
            {(urlImage !== null) && (
                <Lightbox
                    mainSrc={urlImage}
                    onCloseRequest={() => setUrl(null)}
                    imagePadding={50}
                />
            )} 
            </Content>            
        </Page>
    )
}