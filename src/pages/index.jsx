import React from "react";
import Header from "../components/header";
import styled, { keyframes } from "styled-components";
import Page from "../components/page";
import { useEffect } from "react";

/*CSS*/
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

const slideRight = keyframes`
  0% {
        transform: translateX(-200px);
        opacity: 0;
  }
  100% {
        transform: translateX(0px);
        opacity: 1;
  }
`

const Content = styled.div`
    padding-right: 1vw;
    padding-bottom: 0; 
    padding-left: 15vw; 
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    overflow: hidden;
    @media screen and (max-width: 1180px) {
        padding-right: 1vw;
        padding-bottom: 0; 
        padding-left: 5vw; 
    } 

    @media screen and (max-width: 500px) {
        padding-right: 0vw;
        padding-bottom: 0; 
        padding-left: 2vw; 
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

const Photo = styled.img`
    border-radius: 20%;
    height: 500px;
    margin-top: 50px;
    margin-bottom: 20px;

    animation: ${slideRight} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @media screen and (max-width: 500px) {
        height: 300px;
    }   
`;

const MainText = styled.div`
    font-size: 30px;
    width: 800px;
    margin-left: 50px;

    animation: ${slideLeft} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @media screen and (max-width: 1180px) {
        flex-direction: column;
        height: auto;
        width: auto;
    } 
    @media screen and (max-width: 500px) {
        font-size: 18px;
        margin-left: 20px;
    }  
`;

const Paragraph = styled.p`
    margin: 15px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

/*const SubText = styled.div`
    font-size: 18px;
    padding: 50px 0;
`;*/



export default function Main(){
    const [loaded, setLoaded] = React.useState(false);
    useEffect(() =>{
        const image = new Image();
        image.src = "/avatar2.jpg";
        image.onload = () => {
            setLoaded(true);
        }
        image.onerror = () => {
            setLoaded(true);
        }
    })

    if (!loaded){
       return null;
    }

    return (
        <Page>
            <Wrapper>
                <Header />
                <Content>
                    <MainInfo>
                        <Photo src="/avatar2.jpg" />
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
