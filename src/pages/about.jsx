import React from "react";
import Header from "../components/header";
import styled, { keyframes }  from "styled-components";
import Page from "../components/page";
import Title from "../components/title";
import SubTitle from "../components/subtitle";

const slideLeft = keyframes`
  0% {
        transform: translateX(100px);
        opacity: 0;
  }
  100% {
        transform: translateX(0px);
        opacity: 1;
  }
`

const Paragraph = styled.p`
    margin: 15px;
    font-size: 20px;
`;

const Content = styled.div`
    margin: 0 auto;
    margin-top: 5%;
    padding: 0 5%;
    margin-bottom: 5%;
    overflow: hidden;
`;

const Section = styled.section`
    animation: ${slideLeft} 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${props => props.delay} both;
`;

export default function Main(){
    return (
        <Page>
            <Header />
            <Content>
                <Title>
                    Обо мне
                </Title>
                <Section>
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
                </Section>
                <Section delay={"1s"}>
                    <SubTitle>
                        Как со мной лучше связаться
                    </SubTitle>
                    <Paragraph>
                        Сейчас я живу в России, работаю удалённо. Связаться можно по e-mail: &nbsp;
                        <a href="mailto:if-so-girl865@mail.ru">
                            if-so-girl865@mail.ru
                        </a>
                    </Paragraph>
                </Section>
                <Section delay={"2s"}>
                    <SubTitle>
                        Где ещё меня можно найти
                    </SubTitle>
                    <Paragraph>
                        Instagram: &nbsp;
                        <a href="https://www.instagram.com/marta_goes_wild">
                            @marta_goes_wild
                        </a>
                    </Paragraph>
                </Section>
            </Content>
                

        </Page>
    )
}