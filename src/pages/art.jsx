import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../components/content";
import Section from "../components/section";
import Description from "../components/description"

/*CSS*/

const TestImg = styled.div`
    background-color: white;
    width: 200px;
    height: 200px;
`;

export default function Art() {
    return (
        <Page>
            <Header />
            <Content>
                <Section>
                    <TestImg />
                    <Description>
                        Лого для Юльки Описание проекта  Описание проекта Описание проекта Описание проекта Описание проекта
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Лого для Техком-Логистик Описание проекта  Описание проекта Описание проекта
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                       Задник для игры Описание проекта 
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                      Птичка  Описание проекта 
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                       Рыбка Описание проекта 
                    </Description>
                </Section>
                <Section>
                    <TestImg />
                    <Description>
                        Ривза Описание проекта 
                    </Description>
                </Section>
            </Content>            
        </Page>
    )
}