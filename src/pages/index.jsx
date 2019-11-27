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
                <SubText>
                    <Paragraph> 
                        Свободно владею слу графическими инструментами, как Adobe Photoshop, Adobe Illustrator, Paint Tool SAI 2.0
                    </Paragraph>
                    <Paragraph>
                        Отлично владею CSS3, HTML5, современным стандартом JavaScript, а также библиотеками ReactJS, styled-components и многими другими.
                    </Paragraph>
                    <Paragraph>
                        Также имею опыт работы с TypeScript, RxJS, Semantic UI и другими технологиями.
                    </Paragraph>
                </SubText>
            </Content>

        </Page>
    )
}
