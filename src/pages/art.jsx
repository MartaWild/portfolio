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