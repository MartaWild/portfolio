import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description"

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
    return (
        <Page>
            <Header />
            <Content>
                <Paragraph>
                Отлично владею CSS3, HTML5, современным стандартом JavaScript, а также библиотеками ReactJS, styled-components и многими другими.
                </Paragraph>
                <Section>
                    <TestImg />
                    <Description>
                        Описание проекта  Описание проекта Описание проекта Описание проекта Описание проекта
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Описание проекта  Описание проекта Описание проекта
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Описание проекта 
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Описание проекта 
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Описание проекта 
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Описание проекта 
                    </Description>
                </Section>
            </Content>            
        </Page>
    )
}