import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

const Paragraph = styled.p`
    margin: 15px;
    width: 65%;
    padding: 10vh 0;
`;

const TestImg = styled.div`
    background-color: white;
    width: 200px;
    height: 200px;
`;

const Image = styled.img`
    height: 200px;
    margin: 10px;
    margin-right: 30px;
`;

const projects = [
    { image: "/techcom.jpg", description: "Разработка сайта для логистической компании (верстка, frontend, дизайн, логотип). Использованные технологии: JavaScript, React, Next.js, БЭМ" },
    { image: "/tabel.jpg" , description: "Работа над системой учета рабочего времени для строительных компаний: работа над фронтэндом и версткой, правка багов. Использованные технологии: JavaScript, React, Rx.js" },
    { image: "/water.jpg", description: "Веб-приложение, рассчитывающее суточное потребление воды в соответствии с весом, с возможностью отслеживать уже выпитое количество и браузерными напоминаниями (верстка, frontend, дизайн). Использованные технологии: JavaScript, React", url: "https://water-check.herokuapp.com/" },
    { image: "/date.jpg",  description: "Тундер" }
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
                                {project.description} <br />
                                {project.url}
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