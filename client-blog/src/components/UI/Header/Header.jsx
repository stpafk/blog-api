import List from "./List";
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderStyled>
            <Outer>
                <Inner>
                    <List />
                </Inner>    
            </Outer>
        </HeaderStyled>
    )
};

const HeaderStyled = styled.header`
    display: flex;
    padding: 0 5vw;
    height: 64px;
`;

const Outer = styled.div`
    position: fixed;
    width: 100%;
    max-width: 1040px;
`;

const Inner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`