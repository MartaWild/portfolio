import styled from "styled-components";

export default styled.section`
    width: 80%;
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        padding: 10px;
        width: 90%;
    }  
`;