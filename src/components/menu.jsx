import * as React from 'react';
import styled from 'styled-components';
import Burger from './burger';

const MenuPanel = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    width: 30vw;
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
`;

const MenuItem = styled.a`
    display: block;
    width: 100%;
    font-size: 16px;
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
    background: rgba(0, 0, 0, 0.3);
    opacity: ${props => props.visible ? 1 : 0};
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    transition: ${props => props.visible
        ? `visibility 0s 0s, opacity 0.3s ease-in-out`
        : `visibility 0s 0.3s, opacity 0.3s ease-in-out`
    };
`;

const MenuButton = styled.div`
	position: fixed;
	bottom: 3.5%;
	left: 23px;
	width: ${props => props.theme.sidePadding};
	height: auto;
	z-index: 30;
	transform: translate(0, 50%);
`;

export const Menu = (props) => {
    const { open, onSetOpen } = props;

    return (
        <>
            <MenuOverlay visible={open} onClick={() => { onSetOpen(false) }} />
            <MenuPanel active={open}>
                <MenuContent active={open}>
                    <MenuItem href="#" active>
                        Поу
                    </MenuItem>
                    <MenuItem href="#">
                        Пиу
                    </MenuItem>
                </MenuContent>
            </MenuPanel>
            <MenuButton>
                <Burger active={open} onClick={() => { onSetOpen(!open) }} />
            </MenuButton>
        </>
    )
};