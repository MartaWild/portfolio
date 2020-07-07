import React from "react";
import styled, { css } from "styled-components";

const BurgerContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    &:hover {
        opacity: 0.7;
    }
`;

const BurgerBox = styled.div`
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
`;

const BurgerInner = styled.div`
    display: block;
    top: 50%;
    margin-top: -2px;
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &, &::before, &::after {
        width: 40px;
        height: 4px;
        background-color: rgb(26, 101, 147);
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }

    &::before, &::after {
        content: "";
        display: block;
    }

    &::before {
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
        top: -10px;
    }

    &::after {
        transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        bottom: -10px;
    }

    ${props => props.active ? css`
        transform: rotate(135deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        &, &::before, &::after {
            background-color: rgb(26, 101, 147);
        }
        &::before {
            top: 0;
            opacity: 0;
            transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
        }
        &::after {
            bottom: 0;
            transform: rotate(-90deg);
            transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
    ` : ``}
`;

export default function Burger(props){
   return (
        <BurgerContainer onClick={props.onClick}>
            <BurgerBox>
                <BurgerInner active={props.active} />
            </BurgerBox>
        </BurgerContainer>
    )

}