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

export default function Web() {
    const [urlImage, setUrl] = React.useState(null);

    return (
        <Page>
            <Header />
            <Content>
                <Paragraph>
                Отлично владею CSS3, HTML5, современным стандартом JavaScript, а также библиотеками ReactJS, styled-components и многими другими.
                </Paragraph>
                <Section>
                    <TestImg onClick={() => setUrl('https://i.imgur.com/kftuyZf.jpg')}/>

                    <Description>
                        Техком-Логистик Описание проекта  Описание проекта Описание проекта Описание проекта Описание проекта
                    </Description>
                </Section>
                <Section>
                    <TestImg onClick={() => setUrl('https://i.imgur.com/1suKT5N.png')}/>
                    <Description>
                        Табель учета рабочего времени компании Описание проекта  Описание проекта Описание проекта
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Трекер потребления воды за сутки Описание проекта 
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Тудер Описание проекта 
                    </Description>
                </Section>
                
            </Content>  
            {(urlImage !== null) && (
                <Lightbox
                    mainSrc={urlImage}
                     onCloseRequest={() => setUrl(null)}
                
                />
            )}          
        </Page>
    )
}