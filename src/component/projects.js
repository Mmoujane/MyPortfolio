import React from 'react';
import Styled from 'styled-components';
import {StyledSection, FirstContainer} from './MoreInformation';
import Img01 from '../images/brando-makes-branding-ljurPRAnLAQ-unsplash.jpg';
import Img02 from '../images/daniel-korpai-pKRNxEguRgM-unsplash.jpg';
import Img03 from '../images/eftakher-alam-i1VQZsU86ok-unsplash.jpg';
import Img04 from '../images/leio-mclaren-OzeOpF6kTyg-unsplash.jpg';
import Img05 from '../images/markus-spiske-Skf7HxARcoc-unsplash.jpg';
import Img06 from '../images/sai-kiran-anagani-Tjbk79TARiE-unsplash.jpg';
import Details from './Details';



const SSection = Styled.section`
background-color: rgba(248,249,250)
`;

const Container = Styled.div`
width: 100%;
display: flex;
position: relative;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2rem 0;
`;

const Title = Styled(FirstContainer)``;

const ProjectContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
transform: ${props => props.visible ? 'translate(0, 0)' : 'translate(0, 100px)'};
opacity: ${props => props.visible ? 1 : 0};
transition: opacity 2s, transform 2s;
`;

const Filter = Styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

const StyledProjects = Styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
align-items: center;
`;

const Project = Styled.div`
width: 30%;
aspect-ratio: 1/1;
margin: 1.66%;
background: url(${props => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
cursor: pointer;
border-radius: 20px;
display: ${props => props.Dispaly};
@media (max-width: 768px) {
    width: 45%;
  }
`;

const SubFilter = Styled.span`
font-size: calc(0.5rem + 1vw);
color: #6c757d;
margin: 0 1.3rem;
cursor: pointer;
`;

const Shaddow = Styled.div`
width: 100%;
height: 100%;
background-color: #111418;
opacity: 0;
transition: opacity 0.5s ease;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
&:hover{
    opacity: 0.8;
}
`;

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            web : 'block',
            automation: 'block',
            mobile : 'block',
            url : '',
            display : false,
            refvisible: false
        }

        this.myref = React.createRef();
    }

    componentDidMount() {
        const Firstobserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({refvisible: entry.isIntersecting});
            if(entry.isIntersecting){
                Firstobserver.unobserve(this.myref.current);
            }
        }, {threshold: 1});
        Firstobserver.observe(this.myref.current);

    }

    Choice = (select) => {
        if(select == 'web'){
            this.setState({
                web: 'block',
                automation: 'none',
                mobile: 'none'
            })
        }else if(select == 'auto'){
            this.setState({
                web: 'none',
                automation: 'block',
                mobile: 'none'
            })
        }else if(select == 'mobile'){
            this.setState({
                web: 'none',
                automation: 'none',
                mobile: 'block'
            })
        }else{
            this.setState({
                web: 'block',
                automation: 'block',
                mobile: 'block'
            })
        }
    }

    Details = (Url) => {
        this.setState({url: Url,
            display: true
        })
    }

    close = () => {
        this.setState({display: false})
    }

    render(){
        return(
            <SSection id="my-work">
                <Container>
                <Title ref={this.myref} visible={this.state.refvisible}>
                    <span style={{backgroundColor: '#f5df4e', color: '#212529' ,fontSize: 'calc(0.5rem + 1vw)'}}>portfolio</span>
                    <span style={{fontSize: '5vw', color: '#212529', fontWeight: '700'}}>Some of my recent Project</span>
                </Title>
                <ProjectContainer visible={this.state.refvisible}>
                    <Filter>
                        <SubFilter onClick={() => this.Choice('all')}>All</SubFilter>
                        <SubFilter onClick={() => this.Choice('web')}>Web</SubFilter>
                        <SubFilter onClick={() => this.Choice('auto')}>Automation</SubFilter>
                        <SubFilter onClick={() => this.Choice('mobile')}>mobile</SubFilter>
                    </Filter>
                    <StyledProjects>
                        <Project url={Img01} Dispaly={this.state.mobile} onClick={() => this.Details(Img01)}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>phone category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img02} Dispaly={this.state.web} onClick={() => this.Details(Img02)}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>web category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img03} Dispaly={this.state.web} onClick={() => this.Details(Img03)}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>web category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img04} Dispaly={this.state.mobile} onClick={() => this.Details(Img04)}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>phone category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img05} Dispaly={this.state.automation} onClick={() => this.Details(Img05)}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>automation category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img06} Dispaly={this.state.automation} onClick={() => this.Details(Img06)}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>automation category</span>
                            </Shaddow>
                        </Project>
                    </StyledProjects>
                </ProjectContainer>
                </Container>
                <Details URL={this.state.display} img={this.state.url} Close={this.close}/>
            </SSection>
        
        );
    }
}

export default Projects;