import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description";
import Lightbox from 'react-image-lightbox';
import useLocale from "../hooks/use-locale";

const Paragraph = styled.p`
    margin: 15px;
    width: 65%;
    padding: 10vh 0;
    line-height: 2em;
`;

const Text = styled.p`
    margin-bottom: 15px;
    margin-top: 0;
`;

const TechText = styled(Text)`
    opacity: 0.6;
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
        { image: "/todos.jpg", description: translate('todos.description'), tech: translate('todos.tech'),  url: "https://martas-todo-list.herokuapp.com"},
        { image: "/portfolio.jpg", description: translate('portfolio.description'), tech: translate('portfolio.tech')},
        { image: "/techcom.jpg", description: translate('techcom.description') , tech:  translate('techcom.tech')},
        { image: "/tabel.jpg" , description: translate('tabel.description'), tech: translate('tabel.tech')},
        { image: "/water.jpg", description: translate('water.description' ), tech: translate('water.tech' ), url: "https://water-check.herokuapp.com/" },
        { image: "/date.png",  description: <> {translate('date.descrition')} <a href="https://thispersondoesnotexist.com">ThisPersionDoesNotExist</a>. </>, tech: translate('date.tech')}
    ]

    return (
        <Page>
            <Header translate={translate} changeLocale={changeLocale} />
            <Content>
                <Paragraph>
                {translate('web.header')}
                </Paragraph>

                {
                    projects.map(project => (
                        <Section>
                            <Image src={project.image} onClick={() => setUrl(project.image)} />
                            <Description>
                                <Text>
                                    {project.description} <br />
                                </Text> 
                                <TechText>
                                    {project.tech}
                                </TechText> 
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