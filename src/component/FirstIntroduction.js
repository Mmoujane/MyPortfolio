import React from 'react';
import Styled, { keyframes } from 'styled-components';
import Button from './Button';


const StyledSection = Styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
width: 100%;
overflow: hidden;
@media screen and (max-width: 768px) {

}
`;


const IntroContainer = Styled.div`
height: 100%;
width: 100%;
background: url(${props => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`;

const Text = Styled.span`
font-size: ${props => props.size};
color: white;
@media (max-width: 768px) {
    font-size: 5vw;
  }
`;


const blink = keyframes`
  from {
    border-right: none;
  }

  to {
    border-right: 3px solid White;
  }
`;


const Profession = Styled(Text)`

animation: ${blink} 0.5s infinite ease;
@media (max-width: 768px) {
    font-size: 9vw;
  }
`;

const ShadowBox = Styled.div`
height: 100%;
width: 100%;
z-index: 2;
background: #111418;
opacity: 0.8;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


class FirstIntroduction extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            profession: 'a software developer',
            typing: '',
            isTyping: true
        }

        this.index = 0;
    }

    componentDidMount(){
        this.typeEffect();
    }

    typeEffect = () => {
        if(this.state.isTyping){
            if(this.state.typing.length >= this.state.profession.length - 2){
                this.setState({isTyping: false});
            }
            this.setState({typing : this.state.profession.slice(0, this.index++)});
        }else{
            if(this.state.typing.length <= 3){
                this.setState({isTyping: true});
            }
            this.setState({typing : this.state.profession.slice(0, this.index--)});
        }
        setTimeout(this.typeEffect, 120);
    }


    render(){
        return(
            <StyledSection id="intro">
              <IntroContainer url={this.props.url}/>
              <ShadowBox> 
                  <Text size='50px'>Hi I'm a freelancer</Text>
                  <Profession size='100px'>{this.state.typing}</Profession>
                  <Text size='30px'>based in Morocco</Text>
                  <a href="#my-work"><Button color='white'>view my work</Button></a>
              </ShadowBox>
            </StyledSection>
        )
        
    }
}

export default FirstIntroduction;