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
    width: 200px;
    object-fit: contain;
    margin: 10px;
    margin-right: 30px;
`;

const projects = [
    { image: "/logosoap.jpg", description: "Разработка сайта для логистической компании (верстка, frontend, дизайн, логотип). Использованные технологии: JavaScript, React, Next.js, БЭМ" },
    { image: "/logo.png" , description: "Работа над системой учета рабочего времени для строительных компаний: работа над фронтэндом и версткой, правка багов. Использованные технологии: JavaScript, React, Rx.js" },
    { image: "/oct.jpg" , description: "Работа над системой учета рабочего времени для строительных компаний: работа над фронтэндом и версткой, правка багов. Использованные технологии: JavaScript, React, Rx.js" },
    { image: "/backgr.jpg", description: "Веб-приложение, рассчитывающее суточное потребление воды в соответствии с весом, с возможностью отслеживать уже выпитое количество и браузерными напоминаниями (верстка, frontend, дизайн). Использованные технологии: JavaScript, React", url: "https://water-check.herokuapp.com/" },
    { image: "/reeves.jpg", description: "Веб-приложение, рассчитывающее суточное потребление воды в соответствии с весом, с возможностью отслеживать уже выпитое количество и браузерными напоминаниями (верстка, frontend, дизайн). Использованные технологии: JavaScript, React", url: "https://water-check.herokuapp.com/" },
    { image: "/bullfinch.jpg",  description: "Тундер" },
    { image: "/cardinal.jpg",  description: "Тундер" },
    { image: "/fish.jpg",  description: "Тундер" },
    { image: "/field.jpg",  description: "Тундер" },
    { image: "/sprite.jpg",  description: "Тундер" },
    { image: "/dwrf.jpg",  description: "Тундер" }
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
                                {project.description} <br />
                                {project.url}
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