import React from 'react';
import Styled from 'styled-components';
import {StyledSection, FirstContainer} from './MoreInformation';
import {FaPalette, FaDesktop, FaPen, FaBrush, FaChartArea, FaBullhorn} from 'react-icons/fa';


const Styledsection = Styled(StyledSection)`
background-color: rgba(248,249,250);
`;

const Title = Styled(FirstContainer)``;

const SkillsContainer = Styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
transform: ${props => props.visible ? 'translate(0, 0)' : 'translate(0, 100px)'};
opacity: ${props => props.visible ? 1 : 0};
transition: opacity 2s, transform 2s;
@media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Skill = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 30%;
margin: 1.66%;
@media (max-width: 768px) {
    width: 45%;
  }
`;

const Icon = Styled.span`
color: #f5df4e;
cursor: pointer;
font-size: calc(2rem + 1vw);
`;


class Help extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Fvisible: false,
            Svisible: false
        }

        this.firstRef = React.createRef();
        this.secondRef = React.createRef();
    }

    componentDidMount() {
        const Firstobserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({Fvisible: entry.isIntersecting});
            if(entry.isIntersecting){
                Firstobserver.unobserve(this.firstRef.current);
            }
        }, {threshold: 1});
        Firstobserver.observe(this.firstRef.current);

        const SecondObserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({Svisible: entry.isIntersecting});
            if(entry.isIntersecting){
                SecondObserver.unobserve(this.secondRef.current);
            }
        }, {threshold: 0.5});

        SecondObserver.observe(this.secondRef.current);

    }

    render(){
        return(
            <Styledsection id="help">
                <Title ref={this.firstRef} visible={this.state.Fvisible}>
                    <span style={{backgroundColor: '#f5df4e', color: '#212529' ,fontSize: 'calc(0.5rem + 1vw)'}}>what i do</span>
                    <span style={{fontSize: '5vw', color: '#212529', fontWeight: '700'}}>How I can help your next project</span>
                </Title>
                <SkillsContainer ref={this.secondRef} visible={this.state.Svisible}>
                    <Skill>
                        <Icon>
                            <FaPalette />
                        </Icon>
                        <span style={{fontSize: 'calc(0.7rem + 1vw)'}}>Graphic Design</span>
                        <p style={{fontSize: 'calc(0.5rem + 1vw)', color: '#6c757d'}}>As a graphics designer, I enhance client projects with visually appealing designs, effectively communicating their message and enhancing their brand identity.</p>
                    </Skill>
                    <Skill>
                        <Icon>
                            <FaDesktop />
                        </Icon>
                        <span style={{fontSize: 'calc(0.7rem + 1vw)'}}>Web Design</span>
                        <p style={{fontSize: 'calc(0.5rem + 1vw)', color: '#6c757d'}}>I create engaging, user-friendly websites that align with client goals. Through collaboration, responsive design, and SEO optimization, I deliver impactful web solutions.</p>
                    </Skill>
                    <Skill>
                        <Icon>
                            <FaPen />
                        </Icon>
                       <span style={{fontSize: 'calc(0.7rem + 1vw)'}}>Web Developement</span>
                        <p style={{fontSize: 'calc(0.5rem + 1vw)', color: '#6c757d'}}>I provide effective web development solutions, creating functional and dynamic websites that meet client objectives.</p>
                    </Skill>
                </SkillsContainer>
            </Styledsection>
        )
    }
}

export default Help;