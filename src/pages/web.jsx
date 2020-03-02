import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description";
import Lightbox from 'react-image-lightbox';

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

const projects = [
    { image: "/techcom.jpg", description: "Этот сайт-портфолио", tech: "Технологии: JavaScript, React, Gatsby"},
    { image: "/techcom.jpg", description: "Разработка сайта для логистической компании (верстка, frontend, дизайн, логотип)" , tech: "Технологии: JavaScript, React, Next.js, БЭМ"},
    { image: "/tabel.jpg" , description: "Работа над системой учета рабочего времени для строительных компаний: работа над фронтэндом и версткой, правка багов", tech: "Технологии: JavaScript, React, Rx.js" },
    { image: "/water.jpg", description: "Веб-приложение, рассчитывающее суточное потребление воды в соответствии с весом, с возможностью отслеживать уже выпитое количество и браузерными напоминаниями (верстка, frontend, дизайн)", tech: "Технологии: JavaScript, React", url: "https://water-check.herokuapp.com/" },
    { image: "/date.jpg",  description: <>Сервис-пародия на Tinder со случайной генерацией профилей. Для фотографий использовались изображения с <a href="https://thispersondoesnotexist.com">ThisPersionDoesNotExist</a>. </>, tech: "Технологии: JavaScript, React, Chance"}
]

export default function Web() {
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