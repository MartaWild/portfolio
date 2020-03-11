import React from "react";
import styled from "styled-components";
import { Menu } from "./menu";

/*CSS*/

const Image = styled.img`
    width: 100px;
`;

const LogoWrapper = styled.div`
    margin-left: 40px;
    @media screen and (max-width: 800px) {
        margin-right:20px;
    }  
`;

const NavMenu = styled.nav`
    display: flex;
    width: 600px;
    /*width: 30%;*/
    justify-content: space-between;
    margin-right: 100px;
    align-items: center;
    @media screen and (max-width: 1180px) {
          margin-right: 10px;
    }   

    @media screen and (max-width: 800px) {
        display: none;
    }  

`;

const HeaderBar = styled.div`
    height: 67px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    background-color: rgb(250, 250, 250);
    font-family: 'Lobster', cursive;
    font-size: 22px;
    flex-basis: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;

    -webkit-box-shadow: 0px -19px 61px 53px rgba(2,54,122,0.1);
    -moz-box-shadow: 0px -19px 61px 53px rgba(2,54,122,0.1);
    box-shadow: 0px -19px 61px 53px rgba(2,54,122,0.1);
    
    @media screen and (max-width: 800px) {
        position: relative;
        justify-content: flex-end;
    }  
`;

const MenuLink = styled.a`
    text-decoration: none;
    color: rgb(26, 101, 147);
    :active {
        color: rgb(26, 101, 147);
    }
    :hover{
        color: rgb(101, 164, 203);
    }
`;

export default function Header(props){
    const [menuOpen, setMenuOpen] = React.useState(false);
    const { translate, changeLocale } = props;

    return (
        <HeaderBar>
            <Menu open={menuOpen} onSetOpen={setMenuOpen} />
            <LogoWrapper>
                <a href="/">
                    <Image src="/icon.png" />
                </a>
            </LogoWrapper>
            <NavMenu>
                <MenuLink href="/web"> Веб-разработка </MenuLink>
                <MenuLink href="/art"> Арт и дизайн </MenuLink>
                <MenuLink href="/about"> О себе </MenuLink>
                <MenuLink href="#" onClick={() => changeLocale()}> Eng / Rus </MenuLink>
            </NavMenu>

        </HeaderBar>
    )
}