import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Page from "../components/page";


/*CSS*/
const Content = styled.div`
    padding-right: 1vw;
    padding-bottom: 0; 
    padding-left: 15vw; 
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    @media screen and (max-width: 1180px) {
        padding-right: 1vw;
        padding-bottom: 0; 
        padding-left: 5vw; 
    } 

`;

const MainInfo = styled.div`
    flex-grow: 1;
    flex-basis: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 67px);
    @media screen and (max-width: 1180px) {
        flex-direction: column;
        height: auto;
    }   
`;

const Image = styled.img`
    border-radius: 20%;
    height: 500px;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const MainText = styled.div`
    font-size: 30px;
    width: 800px;
    margin-left: 50px;
    @media screen and (max-width: 1180px) {
        flex-direction: column;
        height: auto;
        width: auto;
    } 
`;

const Paragraph = styled.p`
    margin: 15px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1190px) {

    }
`;

/*const SubText = styled.div`
    font-size: 18px;
    padding: 50px 0;
`;*/

export default function Main(){
    return (
        <Page>
            <Wrapper>
                <Header />
                <Content>
                    <MainInfo>
                        <Image src="/avatar2.jpg" />
                        <MainText>
                            <Paragraph>Привет, я Мария!</Paragraph>
                            <Paragraph>Я дизайнер широкого профиля и веб-разработчик. </Paragraph>
                            <Paragraph>Помогу наладить контакт между вашим бизнесом и клиентами.</Paragraph> 
                        </MainText>
                    </MainInfo>
                </Content>
            </Wrapper>

        </Page>
    )
}
