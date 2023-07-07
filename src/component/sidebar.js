import React from 'react';
import styled from 'styled-components';
import {FaInstagram, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';


const Container = styled.div`
position: fixed;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: ${props => props.show ? "20%" : "0"};
height: 100vh;
background-color: black;
z-index: 5;
transition: width 1s;
@media (max-width: 768px) {
    width: ${props => props.show ? "50%" : "0"};
  }
`;

const Brand = styled.a`
width: ${props => props.show ? "100%" : "0"};
transition: width 1s, opacity 500ms;
opacity: ${props => props.show ? "1" : "0"};
height: 10%;
display: flex;
align-items: center;
justify-content: center;
color: white;
cursor: pointer;
font-size: calc(1vw + 0.6rem);
padding: 0.7rem;
color: white;
text-decoration: none;
&:hover {
    color: #f5df4e;
  }
&:visited {
    text-decoration: none;
}
@media (max-width: 768px) {
    font-size: calc(1vw + 0.8rem);
  }
`;

const LinksContainer = styled.div`
height: 45%;
width: ${props => props.show ? "100%" : "0"};
opacity: ${props => props.show ? "1" : "0"};
transition: width 1s, opacity 500ms;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Link = styled(Brand)`
font-size: calc(1vw + 0.4rem);
width: 100%;
opacity: 1;
@media (max-width: 768px) {
    font-size: calc(1vw + 0.6rem);
  }
`;

const MediaContainer = styled(Brand)`
justify-content: space-between;
font-size: calc(1vw + 0.4rem);
width: ${props => props.show ? "90%" : "0"};
transition: width 1s, opacity 500ms;
opacity: ${props => props.show ? "1" : "0"};
@media (max-width: 768px) {
    font-size: calc(1vw + 0.6rem);
  }
`;

const Media = styled.span`
color: white;
trnasition: margin-bottom 1s;
&:hover {
    color: #f5df4e;
    margin-bottom: 0.3rem;
  }

`;

class Sidebar extends React.Component {

    render(){
        return(
            <Container show={this.props.show}>
                <Brand href="#intro" show={this.props.show}>Pixel</Brand>
                <LinksContainer show={this.props.show}>
                    <Link href="#about">About me</Link>
                    <Link href="#help">What i do</Link>
                    <Link href="#resume">resume</Link>
                    <Link href="#my-work">Portfolio</Link>
                    <Link href="#contact">Contact</Link>
                </LinksContainer>
                <MediaContainer show={this.props.show}>
                    <Media>
                        <FaGithub />
                    </Media>
                    <Media>
                        <FaInstagram />
                    </Media>
                    <Media>
                        <FaLinkedin />
                    </Media>
                    <Media>
                        <FaTwitter />
                    </Media>
                </MediaContainer>
            </Container>
        );
    }
}

export default Sidebar;