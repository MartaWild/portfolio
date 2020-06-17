import * as React from 'react';
import styled from 'styled-components';
import Burger from './burger';

const MenuPanel = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    width: 200px;
    height: 100%;
    background: white;
    overflow: auto;
    padding-top: /* menuButtonTop - half menu button height */calc(6vh - 23px);
    transform: translate(${props => props.active ? '0' : '-100%'}, 0);
    transition: ${props => props.active
        ? `visibility 0s 0s, transform 0.3s ease-in-out`
        : `visibility 0s 0.3s, transform 0.3s ease-out`
    };
`;

const MenuContent = styled.div`
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 0.4s ease-in-out;
    padding-top: 65px;
    padding-left: 10px;
`;

const MenuItem = styled.a`
    display: block;
    width: 100%;
    font-size: 20px;
    padding: 10px 16px;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    &:visited {
        color: inherit;
    }
`;

const MenuOverlay = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(2, 54, 122, 0.2);
    opacity: ${props => props.visible ? 1 : 0};
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    transition: ${props => props.visible
        ? `visibility 0s 0s, opacity 0.3s ease-in-out`
        : `visibility 0s 0.3s, opacity 0.3s ease-in-out`
    };
`;

const MenuButton = styled.div`
	position: absolute;
	/*top: 1%;*/
	left: 23px;
    top: 20px;
	width: ${props => props.theme.sidePadding};
	height: auto;
	z-index: 30;
	@media screen and (min-width: 800px) {
        display: none;
    }  
`;

export const Menu = (props) => {
    const { open, onSetOpen } = props;
    const { translate, changeLocale } = props;

    return (
        <>
            <MenuOverlay visible={open} onClick={() => { onSetOpen(false) }} />
            <MenuPanel active={open}>
                <MenuContent active={open}>
                    <MenuItem href="/">
                        { translate('header.itemMain') }
                    </MenuItem>
                    <MenuItem href="/web">
                        { translate('header.itemWeb') }
                    </MenuItem>
                    <MenuItem href="/art">
                        { translate('header.itemArt') }
                    </MenuItem>
                    <MenuItem href="/about">
                        { translate('header.about'  ) }
                    </MenuItem>
                    <MenuItem href="#" onClick={() => changeLocale()}> 
                        Eng / Rus 
                    </MenuItem>                    
                </MenuContent>
            </MenuPanel>
            <MenuButton>
                <Burger active={open} onClick={() => { onSetOpen(!open) }} />
            </MenuButton>
        </>
    )
};