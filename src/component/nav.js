import React from 'react';
import Styled from 'styled-components';
import {FaBars, FaPhone} from 'react-icons/fa';
import Sidebar from './sidebar';


const NavBar = Styled.nav`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 0;
min-height: 10vh;
background: ${props => props.something ? 'black' : 'transparent'};
overflow: visible;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
`;

const Container = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
height: 95%;
@media (max-width: 768px) {
    width: 90%;
  }
`;

const Logo = Styled.a`
color: white;
cursor: pointer;
text-decoration: none;
font-size: calc(1vw + 0.6rem);
&:hover {
    color: #f5df4e;
  }
&:visited {
    text-decoration: none;
}
transition: color 500ms;
@media (max-width: 768px) {
    font-size: calc(1vw + 0.9rem);
  }
`;

const ContactContainer = Styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Icon = Styled.span`
margin: 0 1rem;
color: white;
cursor: pointer;
&:hover {
    color: #f5df4e;
  }
transition: color 500ms;
`;

const Number = Styled(Icon)``;
const SideBarButton = Styled(Icon)``;


class Nav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            toogle: false,
            click: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.BackgroundColor, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.BackgroundColor)
    }

    BackgroundColor = () => {
        const ColorState = document.documentElement.scrollTop > 300 ? true : false;
        this.setState({ toogle : ColorState });
        
    }

    handleClick = () => {
        this.setState({ click : !(this.state.click) });
        console.log(this.setState.click);
    }

    render(){
        return(
            <div>
            <NavBar something={this.state.toogle}>
                <Container>
                    <Logo href="#intro">Pixels</Logo>
                    <ContactContainer>
                        <Icon>
                            <FaPhone />
                        </Icon>
                        <Number>0675984872</Number>
                        <SideBarButton onClick={() => this.handleClick()}>
                            <FaBars />
                        </SideBarButton>
                    </ContactContainer>
                </Container>
            </NavBar>
            <Sidebar show={this.state.click}/>
            </div>
        );
    }
}

export default Nav;