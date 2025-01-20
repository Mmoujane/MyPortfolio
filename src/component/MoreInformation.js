import React from 'react';
import Styled, { keyframes } from 'styled-components';


export const StyledSection = Styled.section`
width: 100%;
display: flex;
position: relative;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2rem 0;
`;

export const FirstContainer = Styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 0;
transform: ${props => props.visible ? 'translate(0, 0)' : 'translate(0, 100px)'};
opacity: ${props => props.visible ? 1 : 0};
transition: opacity 2s, transform 2s;
`;

const SecondContainer = Styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 2rem 0;
transform: ${props => props.visible ? 'translate(0, 0)' : 'translate(0, 100px)'};
opacity: ${props => props.visible ? 1 : 0};
transition: opacity 2s, transform 2s;
`;

const ThirdContainer = Styled(SecondContainer)`
@media (max-width: 768px) {
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const FirstChild = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
`;

const SecondChild = Styled(FirstChild)`
width: 40%;
`;

const Description = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 25%;
@media (max-width: 768px) {
    width: 45%;
  }
`;

const scale = keyframes`
0% {
    font-size: calc(2.025rem + 9.3vw);
    width: 15vw;
    height: 15vw;
    
}
50% {
    font-size: calc(3.5rem + 9.3vw);
    width: calc(3.5rem + 15vw);
    height: calc(3.5rem + 15vw);
}
100% {
    font-size: calc(2.025rem + 9.3vw);
    width: 15vw;
    height: 15vw;
}
`;

const RoundedStyle = Styled.span`
width: 15vw;
height: 15vw;
background-color: #f5df4e;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: calc(2.025rem + 9.3vw);
color: #212529;
animation-name: ${props => props.visible ? scale : null};
animation-duration: 0.5s;
animation-delay: 2s;
animation-iteration-count: 2;
animation-timing-function: ease;
@media (max-width: 768px) {
    width: 20vw;
    height: 20vw;
    animation-name: ${props => props.visible ? keyframes`
      0% {
        font-size: calc(2.025rem + 9.3vw);
        width: 20vw;
        height: 20vw;
      }
      50% {
        font-size: calc(3.5rem + 9.3vw);
        width: calc(3rem + 20vw);
        height: calc(3rem + 20vw);
      }
      100% {
        font-size: calc(2.025rem + 9.3vw);
        width: 20vw;
        height: 20vw;
      }
    ` : null};
  }
`;

const Title = Styled.span`
color: #6c757d;
margin-bottom: 0.5rem;
`;

const rubberEffect = keyframes`
0% {transform: scale(1, 1)}
30% {transform: scale(1.25, 0.75)}
40% {transform: scale(0.75, 1.25)}
50% {transform: scale(1.15, 0.85)}
65% {transform: scale(0.95, 1.05)}
75% {transform: scale(1.05, 0.95)}
100% {transform: scale(1, 1)}
`;

const Experience = Styled.span`
font-ize: 2vw;
color: #212529;
display: flex;
justify-content: center;
align-items: center;
animation-name: ${props => props.visible ? rubberEffect : null};
animation-duration: 0.5s;
animation-delay: 3s;
animation-iteration-count: 2;
animation-timing-function: ease;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Paragraph = Styled.p`
font-size: 1.3125rem;
@media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;



class MoreInformation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            Fvisible: false,
            Svisible: false,
            Tvisible: false
        }
        this.myref = React.createRef();
        this.secondRef = React.createRef();
        this.thirdRef = React.createRef();
    }

    componentDidMount() {
        const Firstobserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({Fvisible: entry.isIntersecting});
            if(entry.isIntersecting){
                Firstobserver.unobserve(this.myref.current);
            }
        }, {threshold: 1});
        Firstobserver.observe(this.myref.current);

        const SecondObserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({Svisible: entry.isIntersecting});
            if(entry.isIntersecting){
                SecondObserver.unobserve(this.secondRef.current);
            }
        }, {threshold: 1});

        SecondObserver.observe(this.secondRef.current);

        const ThirdObserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({Tvisible: entry.isIntersecting});
            if(entry.isIntersecting){
                ThirdObserver.unobserve(this.thirdRef.current);
            }
        }, {threshold: 1});

        ThirdObserver.observe(this.thirdRef.current)
    }

    render(){
        return(
            <StyledSection id="about">
                <FirstContainer ref={this.myref} visible={this.state.Fvisible}>
                    <span style={{backgroundColor: '#f5df4e', color: '#212529' ,fontSize: 'calc(0.5rem + 1vw)'}}>about me</span>
                    <span style={{fontSize: '5vw', color: '#212529', fontWeight: '700'}}>know me more</span>
                </FirstContainer>
                <SecondContainer ref={this.secondRef} visible={this.state.Svisible}>
                    <FirstChild>
                        <span style={{fontSize: '3vw', color: '#212529',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>hi I'm <span style={{borderBottom: '3px solid #f5df4e', marginLeft: '2vw', fontWeight: '700'}}>marwane</span></span>
                        <Paragraph>
                        Here, at pixels We’re passionate about empowering small businesses through smart digital solutions. From creating sleek, modern websites to developing automation tools that simplify your daily operations, our focus is on delivering real value.Meeting your needs within time and budget is what we do best.
                        </Paragraph>
                    </FirstChild>
                    <SecondChild>
                        <RoundedStyle visible={this.state.Svisible}>3</RoundedStyle>
                        <Experience visible={this.state.Svisible}>years of<span style={{borderBottom: '3px solid #f5df4e', marginLeft: '1vw', fontWeight: '700'}}>experience</span></Experience>
                    </SecondChild>
                </SecondContainer>
                <ThirdContainer ref={this.thirdRef} visible={this.state.Tvisible}>
                    <Description>
                        <Title>name:</Title>
                        <span>marwane</span>
                    </Description>
                    <Description>
                        <Title>email:</Title>
                        <span>moujane16marwane@gmail.com</span>
                    </Description>
                    <Description>
                        <Title>date of birth:</Title>
                        <span>16/06/2004</span>
                    </Description>
                    <Description>
                        <Title>from:</Title>
                        <span>Morocco</span>
                    </Description>
                </ThirdContainer>
            </StyledSection>
        )
    }
}

export default MoreInformation;