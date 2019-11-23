import React from "react";
import Header from "../components/header";
import styled from "styled-components";

/*CSS*/
const MainPage = styled.div`
    background-color: rgb(228, 237, 242);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    color: rgb(26, 101, 147);
`;

const Content = styled.div`
    flex-grow: 1;
    flex-basis: 1;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vh 7vw;
    padding-bottom: 0;
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


export default function Main(){
    return (
        <MainPage>
            <Header />
            <Content>
                <Image src="/avatar.jpg" />
                <MainText>
                    <Paragraph>Привет, я Мария!</Paragraph>
                    <Paragraph>Я дизайнер широкого профиля и веб-разработчик. </Paragraph>
                    <Paragraph>Помогу воплотить в жизнь любую идею.</Paragraph> 
                </MainText>
            </Content>
            
        </MainPage>
    )
}
