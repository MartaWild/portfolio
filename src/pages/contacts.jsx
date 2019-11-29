import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";

const Paragraph = styled.p`
    margin: 15px;
    font-size: 20px;
`;

const Content = styled.div`
    padding: 10vh 7vw;

`;

export default function Contacts(){
    return (
        <Page>
            <Header />
            <Content>
                <Paragraph>
                    Сейчас живу в России, работаю в основном удаленно. Связаться можно по e-mail: TESTTEST@TEST
                </Paragraph>
                <Paragraph>
                    Также меня можно найти в Instagram
                </Paragraph>
             </Content>
            
        </Page>
    )
}