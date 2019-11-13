import React from "react";
import styled from "styled-components";

/*CSS*/

const Image = styled.img`
    width: 100px;
`;

const LogoWrapper = styled.div`
    margin-left: 20px;
`;

const NavMenu = styled.nav`
    display: flex;
    width: 550px;
    /*width: 30%;*/
    justify-content: space-between;
    margin-right: 100px;
    align-items: center;

`;

const HeaderBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    background-color: rgb(250, 250, 250);
    font-family: 'Lobster', cursive;
    font-size: 18px;
    flex-basis: 0;
    flex-grow: 0;
`;

const MenuLink = styled.a`
    text-decoration: none;
    color: rgb(26, 101, 147);
    :active {
        color: rgb(26, 101, 147);
    }
`;

export default function Header(){
    return (
        <HeaderBar>
            <LogoWrapper>
                <a href="/">
                    <Image src="/icon.png" />
                </a>
            </LogoWrapper>

            <NavMenu>
                <MenuLink href="/"> Веб-разработка </MenuLink>
                <MenuLink href="/"> Арт и дизайн </MenuLink>
                <MenuLink href="/"> Контакты </MenuLink>
                <MenuLink href="/"> Eng / Rus </MenuLink>
            </NavMenu>

        </HeaderBar>
    )
}