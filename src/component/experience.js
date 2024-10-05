import React from 'react';
import Styled from 'styled-components';
import Button from './Button';
import {StyledSection, FirstContainer} from './MoreInformation';


const Title = Styled(FirstContainer)``;

const ExperienceContainer = Styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: flex-start;
transform: ${props => props.visible ? 'translate(0, 0)' : 'translate(0, 100px)'};
opacity: ${props => props.visible ? 1 : 0};
transition: opacity 2s, transform 2s;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StudiesAndExperience = Styled.div`
width: 48%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 2%;
@media (max-width: 768px) {
    width: 90%;
  }
`;

const Study = Styled.div`
border-left: solid 3px #f5df4e;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 100%;
padding: 1rem;
`;

const Skills = Styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
transform: ${props => props.visible ? 'translate(0, 0)' : 'translate(0, 100px)'};
opacity: ${props => props.visible ? 1 : 0};
transition: opacity 2s, transform 2s;
`;

const SkillsProgressBars = Styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
align-items: center;
justify-content: center;
`;

const SkillAndName = Styled.div`
display: flex;
flex-direction: column;
width: 40%;
margin: 5%;
justify-content: center;
align-items: flex-start;
`;

const ProgressBar = Styled.div`
height: 0.5rem;
width: 100%;
background-color: #e9ecef;
border-radius: 0.25rem;
`;

const Progress = Styled.div`
height: 100%;
width: ${props => props.visible ? props.width : '0'};
background-color: #f5df4e;
border-radius: 0.25rem;
transition: width 2s ease 2s;
`;


const SkillPecentage = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;


class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Fvisible: false,
            Svisible: false,
            Tvisible: false
        }

        this.firstRef = React.createRef();
        this.secondRef = React.createRef();
        this.ThirdRef = React.createRef();
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

        const ThirdObserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({Tvisible: entry.isIntersecting});
            if(entry.isIntersecting){
                ThirdObserver.unobserve(this.ThirdRef.current);
            }
        }, {threshold: 0.5});

        ThirdObserver.observe(this.ThirdRef.current);

    }

    render(){
        return(
            <StyledSection id="resume">
                <Title ref={this.firstRef} visible={this.state.Fvisible}>
                    <span style={{backgroundColor: '#f5df4e', color: '#212529' ,fontSize: 'calc(0.5rem + 1vw)'}}>resume</span>
                    <span style={{fontSize: '5vw', color: '#212529', fontWeight: '700'}}>A summary of my resume</span>
                </Title>
                <ExperienceContainer ref={this.secondRef} visible={this.state.Svisible}>
                    <StudiesAndExperience>
                        <span style={{fontSize: 'calc(0.8rem + 1vw)', color: '#212529',display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem 0'}}>My Education</span>
                        <Study>
                           <span style={{fontSize: 'calc(0.7rem + 1vw)'}}>baccalaureate in electrical science</span>
                           <span style={{fontSize: 'calc(0.4rem + 1vw)', padding: '0.5rem 0'}}>mohammed 5 high school / 2020 - 2022</span>
                           <p style={{fontSize: 'calc(0.5rem + 1vw)', color: '#6c757d'}}>I successfully obtained my high school degree in Electrical Science and Technology, achieving a great mark reflects not only my dedication and hard work,but also my genuine love for exploring the fascinating world of technology</p>
                        </Study>
                        <Study>
                           <span style={{fontSize: 'calc(0.7rem + 1vw)'}}>Classe Préparatoire program</span>
                           <span style={{fontSize: 'calc(0.4rem + 1vw)', padding: '0.5rem 0'}}>LM6E / 2023 - 2024</span>
                           <p style={{fontSize: 'calc(0.5rem + 1vw)', color: '#6c757d'}}>I successfully completed my Classe Préparatoire program, achieving a national ranking of 7th in Concours National Commun (CNC). This program, known for its rigorous curriculum in mathematics, physics, and engineering, prepared me to excel in problem-solving and critical thinking. My strong performance in the CNC, a national exam for entrance into top engineering schools in Morocco, reflects my dedication and determination throughout this challenging academic journey.</p>
                        </Study>
                        <Study>
                           <span style={{fontSize: 'calc(0.7rem + 1vw)'}}>engineering degree in cybersecurity</span>
                           <span style={{fontSize: 'calc(0.4rem + 1vw)', padding: '0.5rem 0'}}>INPT / 2024 - 2027</span>
                           <p style={{fontSize: 'calc(0.5rem + 1vw)', color: '#6c757d'}}>After successfully passing the Concours National Commun, I chose to pursue an engineering degree in cybersecurity at the Institut National des Postes et Télécommunications (INPT) in Rabat. This decision was driven by my passion for technology and the growing importance of cybersecurity in today’s digital world. INPT’s specialized program in cybersecurity provides the ideal environment for me to develop the skills and knowledge necessary to address the challenges of securing information systems and networks, aligning with my long-term career goals.</p>
                        </Study>
                    </StudiesAndExperience>
                    <StudiesAndExperience>
                        <span style={{fontSize: 'calc(0.8rem + 1vw)', color: '#212529',display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem 0'}}>My Experience</span>
                        <Study>
                           <span style={{fontSize: 'calc(0.7rem + 1vw)'}}>start my journey on freelancing</span>
                           <span style={{fontSize: 'calc(0.4rem + 1vw)', padding: '0.5rem 0'}}>2023</span>
                           <p style={{fontSize: 'calc(0.5rem + 1vw)', color: '#6c757d'}}>I am eager to embark on a new chapter in my professional journey by venturing into freelancing. My goal is to leverage my skills, knowledge, and expertise to provide valuable services to clients on a freelance basis. Freelancing offers me the opportunity to exercise my creativity, autonomy, and flexibility in managing projects and working with diverse clients.</p>
                        </Study>
                    </StudiesAndExperience>
                </ExperienceContainer>
                <Skills visible={this.state.Tvisible}  ref={this.ThirdRef}>
                   <span style={{fontSize: 'calc(0.4rem + 1vw)'}}>My skills</span>
                   <SkillsProgressBars>
                       <SkillAndName>
                           <SkillPecentage>
                              <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>Web Design</span>
                              <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>50%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='50%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                       <SkillAndName>
                           <SkillPecentage>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>node.js/express.js</span>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>60%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='60%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                       <SkillAndName>
                           <SkillPecentage>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>php</span>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>50%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='50%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                       <SkillAndName>
                           <SkillPecentage>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>html/css</span>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>95%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='95%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                       <SkillAndName>
                           <SkillPecentage>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>java script</span>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>80%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='80%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                       <SkillAndName>
                           <SkillPecentage>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>React</span>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>85%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='85%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                       <SkillAndName>
                           <SkillPecentage>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>mongodb</span>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>80%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='80%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                       <SkillAndName>
                           <SkillPecentage>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>mysql</span>
                           <span style={{fontSize: 'calc(0.3rem + 1vw)', padding: '0.5rem 0'}}>80%</span>
                           </SkillPecentage>
                           <ProgressBar>
                               <Progress width='80%' visible={this.state.Tvisible}/>
                           </ProgressBar>
                       </SkillAndName>
                   </SkillsProgressBars>
                   <Button color='#f5df4e'>download my CV</Button>
                </Skills>
            </StyledSection>
        )
    }
}

export default Experience;