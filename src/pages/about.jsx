import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Title from "../components/title";
import SubTitle from "../components/subtitle";



const Paragraph = styled.p`
    margin: 15px;
    font-size: 20px;
`;

const Content = styled.div`
    margin: 0 auto;
    margin-top: 5%;
    padding: 0 5%;
    margin-bottom: 5%;
`;

export default function Main(){
    return (
        <Page>
            <Header />
            <Content>
                <Title>
                    Обо мне
                </Title>
                <SubTitle>
                    Что я могу
                </SubTitle>
                <Paragraph> 
                    Свободно владею такими графическими инструментами, как Adobe Photoshop, Adobe Illustrator, Paint Tool SAI 2.0
                </Paragraph>
                <Paragraph>
                    Отлично владею CSS3, HTML5, современным стандартом JavaScript, а также библиотеками ReactJS, styled-components и многими другими.
                </Paragraph>
                <Paragraph>
                    Также имею опыт работы с TypeScript, RxJS, Semantic UI и другими технологиями.
                </Paragraph>
                <Paragraph>
                    Родной язык - русский. Свободно владею английским.
                </Paragraph>
                <SubTitle>
                    Как со мной лучше связаться
                </SubTitle>
                <Paragraph>
                    Сейчас я живу в России, работаю удалённо. Связаться можно по e-mail: TESTTEST@TEST
                </Paragraph>
                <SubTitle>
                    Где ещё меня можно найти
                </SubTitle>
                <Paragraph>
                    Instagram: sdfsdf
                </Paragraph>
            </Content>
                

        </Page>
    )
}