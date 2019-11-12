import React from "react";
import styled from "styled-components"

/*CSS*/
const Image = styled.img`
    width: 200px;
`;

export default function Header(){
    return (
        <div>
            <a href="/" className="header__logo-container">
                <Image src="/icon.png" className="header__logo-img" />
            </a>
        </div>
    )
}