import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description";
import Lightbox from 'react-image-lightbox';
import useLocale from "../hooks/use-locale"


const Paragraph = styled.p`
    margin: 15px;
    width: 65%;
    padding: 10vh 0;
`;

const Text = styled.p`
    margin-bottom: 15px;
    margin-top: 0;
`;

const Image = styled.img`
    height: 200px;
    object-fit: contain;
    margin: 10px;
    margin-right: 30px;
    @media screen and (max-width: 900px) {
        height: 100px;
        margin-right: 0px;
        margin: 5px;
        margin-top: 20px;

    }  
`;


export default function Web() {
    const [translate, locale, changeLocale] = useLocale();
    const [urlImage, setUrl] = React.useState(null);

    const projects = [
        { image: "/portfolio.jpg", description: translate('portfolio.description'), tech: translate('portfolio.tech')},
        { image: "/techcom.jpg", description: translate('techcom.description') , tech:  translate('techcom.tech')},
        { image: "/tabel.jpg" , description: translate('tabel.description'), tech: translate('tabel.tech')},
        { image: "/water.jpg", description: translate('water.description' ), tech: translate('water.tech' ), url: "https://water-check.herokuapp.com/" },
        { image: "/date.jpg",  description: <> {translate('date.descrition')} <a href="https://thispersondoesnotexist.com">ThisPersionDoesNotExist</a>. </>, tech: translate('date.tech')}
    ]

    
    

    return (
        <Page>
            <Header translate={translate} changeLocale={changeLocale} />
            <Content>
                <Paragraph>
                Отлично владею CSS3, HTML5, современным стандартом JavaScript, а также библиотеками ReactJS, styled-components и многими другими.
                </Paragraph>

                {
                    projects.map(project => (
                        <Section>
                            <Image src={project.image} onClick={() => setUrl(project.image)} />
                            <Description>
                                <Text>
                                    {project.description} <br />
                                </Text> 
                                <Text>
                                    {project.tech}
                                </Text> 
                                <a href={project.url}> 
                                    {project.url}
                                </a>
                                
                            </Description>
                        </Section>
                    ))
                }

            </Content>  
            {(urlImage !== null) && (
                <Lightbox
                    mainSrc={urlImage}
                    onCloseRequest={() => setUrl(null)}
                    imagePadding={50}
                />
            )}          
        </Page>
    )
}