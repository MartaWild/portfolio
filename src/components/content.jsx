import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    font-size: 19px;
    > section:nth-child(2n) {
        background-color: rgb(207, 228, 240);
    }
    > section:nth-child(2n+1){
        background-color: rgb(194, 218, 232);
    }
`;
