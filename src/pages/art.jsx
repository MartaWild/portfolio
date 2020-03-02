import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description"
import Lightbox from 'react-image-lightbox';

/*CSS*/
const Paragraph = styled.p`
    margin: 15px;
    width: 65%;
    padding: 10vh 0;
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

const projects = [
    { image: "/logosoap.jpg", description: "Логотип для магазина декоративного мыла" },
    { image: "/logo.png" , description: "Лого для сайта транспортной компании" },
    { image: "/oct.jpg" , description: "Иллюстрация" },
    { image: "/backgr.jpg", description: "Задний фон для игры" },
    { image: "/reeves.jpg", description: "Портрет Киану" },
    { image: "/bullfinch.jpg",  description: "Иллюстрация" },
    { image: "/cardinal.jpg",  description: "Иллюстрация" },
    { image: "/fish.jpg",  description: "Иллюстрация" },
    { image: "/field.jpg",  description: "Иллюстрация" },
    { image: "/sprite.jpg",  description: "Спрайты для игры" },
    { image: "/dwrf.jpg",  description: "Спрайт для игры" }
]

export default function Art() {
    const [urlImage, setUrl] = React.useState(null);

    return (
        <Page>
            <Header />
            <Content>
            <Paragraph>
                Отлично владею CSS3, HTML5, современным стандартом JavaScript, а также библиотеками ReactJS, styled-components и многими другими.
            </Paragraph>
            {
                    projects.map(project => (
                        <Section>
                            <Image src={project.image} onClick={() => setUrl(project.image)} />
                            <Description>
                                {project.description} 
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