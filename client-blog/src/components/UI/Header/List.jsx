import styled from 'styled-components';
import Anchor from './Anchor';

export default function List() {

    return(
        <>
        <InnerLeft>
            <a href="">
                <img src="Logo" alt="" />
            </a>
            <UlStyled>
                <LiStyled>
                    <a href="/">Home</a>
                </LiStyled>
                <LiStyled>
                    <a href="/contact">Contact</a>
                </LiStyled>
            </UlStyled>
        </InnerLeft>
        <InnerRight>
            <UlStyled className="nav right ul">
                <LiStyled id="twitter">
                    <a href="https://twitter.com/dubsteph4n">
                        <i className="devicon-twitter-original"></i>
                    </a>
                </LiStyled>
                <li className="nav link" id="github">
                    <a href="https://github.com/stpafk">
                        <i className="devicon-github-original"></i>
                    </a>
                </li>
                <LiStyled id="linkedin">
                    <a href="https://www.linkedin.com/in/stephan-allek-weigert-53801619">
                        <i className="devicon-linkedin-plain"></i>
                    </a>
                </LiStyled>
            </UlStyled>
            <Anchor />
        </InnerRight>
        </>
    );

}

const InnerLeft = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    text-transform: uppercase;
`;

const InnerRight = styled.div`
    display: flex;
    flex: auto;
`;

const UlStyled = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
`;

const LiStyled = styled.li`
    display: block;
    padding: 12px;
    line-height: 1rem;
`;