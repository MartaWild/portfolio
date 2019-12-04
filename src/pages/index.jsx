import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";


/*CSS*/
const Content = styled.div`
    padding: 2vh 7vw;
    padding-bottom: 0;
`;

const MainInfo = styled.div`
    flex-grow: 1;
    flex-basis: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 52px);
`;

const Image = styled.img`
    border-radius: 50%;
    height: 500px;
    margin: 30px;
`;

const MainText = styled.div`
    font-size: 30px;
    width: 800px;
`;

const Paragraph = styled.p`
    margin: 15px;
`;

const SubText = styled.div`
    font-size: 18px;
    padding: 50px 0;
`;

export default function Main(){
    return (
        <Page>
            <Header />
            <Content>
                <MainInfo>
                    <Image src="/avatar.jpg" />
                    <MainText>
                        <Paragraph>Привет, я Мария!</Paragraph>
                        <Paragraph>Я дизайнер широкого профиля и веб-разработчик. </Paragraph>
                        <Paragraph>Помогу наладить контакт между вашим бизнесом и клиентами.</Paragraph> 
                    </MainText>
                </MainInfo>

            </Content>

        </Page>
    )
}
