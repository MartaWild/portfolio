import React from "react";
import Header from "../components/header";
import styled, { keyframes }  from "styled-components";
import Page from "../components/page";
import Title from "../components/title";
import SubTitle from "../components/subtitle";
import useLocale from "../hooks/use-locale";

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
    const [translate, locale, changeLocale] = useLocale();
    
    return (
        <Page>
            <Header translate={translate} changeLocale={changeLocale}/>
            <Content>
                <Title>
                    {translate('about.title')}
                </Title>
                <Section>
                    <SubTitle>
                        {translate('about.whatDo')}
                    </SubTitle>
                    <Paragraph> 
                        {translate('art.header')}
                    </Paragraph>
                    <Paragraph>
                        {translate('web.header')}
                    </Paragraph>
                    <Paragraph>
                        {translate('about.alsoDo')}
                    </Paragraph>
                    <Paragraph>
                        {translate('about.language')}
                    </Paragraph>
                </Section>
                <Section delay={"1s"}>
                    <SubTitle>
                        {translate('about.connect')}
                    </SubTitle>
                    <Paragraph>
                        {translate('about.contactInfo')} &nbsp;
                        <a href="mailto:if-so-girl865@mail.ru">
                            if-so-girl865@mail.ru
                        </a>
                    </Paragraph>
                </Section>
                <Section delay={"2s"}>
                    <SubTitle>
                        {translate('about.otherMedia')}
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