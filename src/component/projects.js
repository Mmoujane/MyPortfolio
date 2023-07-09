import React from 'react';
import Styled from 'styled-components';
import {StyledSection, FirstContainer} from './MoreInformation';
import Img01 from '../images/portfolio.jpg';
import Img02 from '../images/e-commerce.jpg';
import Img03 from '../images/scr.jpg';
import Img04 from '../images/leetcode.jpg';
import Img05 from '../images/python.jpg';
import Img06 from '../images/game_engine.png';
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
color: ${props => props.clicked ? '#212529' : 'gray'};
margin: 0 1.3rem;
cursor: pointer;
background-color: ${props => props.clicked ? '#f5df4e' : 'rgba(248,249,250)'};
&:hover{
    color: ${props => props.clicked ? '#212529' : '#f5df4e'};
}
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
            web : true,
            algo: true,
            graphics : true,
            url : '',
            title: '',
            paragraph: '',
            client: '',
            industry: '',
            technology: '',
            date: '',
            project: '',
            display : false,
            refvisible: false,
            allclick: true,
            webclick: false,
            algoclick: false,
            graphclick: false
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
                web: true,
                algo: false,
                graphics: false,
                webclick: true,
                algoclick: false,
                allclick: false,
                graphclick: false
            })
        }else if(select == 'algo'){
            this.setState({
                web: false,
                algo: true,
                graphics: false,
                webclick: false,
                algoclick: true,
                allclick: false,
                graphclick: false
            })
        }else if(select == 'graphics'){
            this.setState({
                web: false,
                algo: false,
                graphics: true,
                webclick: false,
                algoclick: false,
                allclick: false,
                graphclick: true
            })
        }else{
            this.setState({
                web: true,
                algo: true,
                graphics: true,
                webclick: false,
                algoclick: false,
                allclick: true,
                graphclick: false
            })
        }
    }

    Details = (Url, title, parag, client, industry, tech, date, proj) => {
        this.setState({
            url: Url,
            title: title,
            paragraph: parag,
            client: client,
            industry: industry,
            technology: tech,
            date: date,
            project: proj,
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
                        <SubFilter onClick={() => this.Choice('all')} clicked={this.state.allclick}>All</SubFilter>
                        <SubFilter onClick={() => this.Choice('web')} clicked={this.state.webclick}>Web</SubFilter>
                        <SubFilter onClick={() => this.Choice('algo')} clicked={this.state.algoclick}>algorithm</SubFilter>
                        <SubFilter onClick={() => this.Choice('graphics')} clicked={this.state.graphclick}>graphics</SubFilter>
                    </Filter>
                    <StyledProjects>
                        <Project url={Img01} Dispaly={this.state.web ? 'block' : 'none'} onClick={() => this.Details(Img01, 'portfolio', 'I have created a portfolio website from scratch using React.js, showcasing my skills and projects in an interactive and visually appealing manner. By harnessing the power of React.js, I have built a dynamic and responsive portfolio that provides a seamless user experience. Through modular component-based development, I have organized my projects, skills, and achievements into distinct sections, allowing visitors to easily navigate and explore my work.', 'public', '', 'React.js', '', 'https://github.com/Mmoujane/MyPortfolio')}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>web category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img02} Dispaly={this.state.web ? 'block' : 'none'} onClick={() => this.Details(Img02, 'restaurant', "I have designed and developed a comprehensive e-commerce restaurant website from scratch, utilizing React.js for the frontend and Node.js for the backend. This seamless integration of technologies ensures a robust and efficient platform for online ordering and dining experiences.", 'public', '', 'React.js, node.js(express), mongodb', '', 'https://github.com/Mmoujane/restaurent-website')}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>web category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img03} Dispaly={this.state.web ? 'block' : 'none'} onClick={() => this.Details(Img03, 'scribd-extention', 'I have developed a custom extension that unlocks hidden content on the Scribd website, providing users with unrestricted access to valuable information. This extension empowers users to overcome limitations and access premium content without any barriers.', 'public', '', 'javascript', '', 'https://github.com/Mmoujane/scribd-extention')}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>web category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img04} Dispaly={this.state.algo ? 'block' : 'none'} onClick={() => this.Details(Img04, 'leetcode problems', 'I have developed a collection of C++ algorithms specifically tailored for solving LeetCode problems. These algorithms leverage the power and efficiency of C++ to tackle a wide range of problem-solving scenarios. With a focus on data structures, algorithmic techniques, and optimized code, I have designed solutions that are both accurate and performant.', 'public', '', 'c, c++', '', 'https://github.com/Mmoujane/c-leetcode-problems')}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>algorithm category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img05} Dispaly={this.state.algo ? 'block' : 'none'} onClick={() => this.Details(Img05, 'python projects', "I have curated a diverse collection of small Python projects that showcase my versatility and proficiency in the language. These projects exemplify my creativity, problem-solving abilities, and coding skills in various domains. From simple console-based games to practical utilities, each project highlights different aspects of Python's capabilities.", 'public', '', 'python', 'jun 14, 2022', 'https://github.com/Mmoujane/python_projects')}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>algorithm category</span>
                            </Shaddow>
                        </Project>
                        <Project url={Img06} Dispaly={this.state.graphics ? 'block' : 'none'} onClick={() => this.Details(Img06, 'game engine', "I am currently in the process of developing a Python game engine using the Tkinter GUI library. This game engine is a work in progress, aimed at creating interactive and visually appealing games. By utilizing Tkinter's robust widget library and event-driven programming, I am building a foundation for designing engaging gameplay mechanics, dynamic graphics, and immersive user interfaces.", 'public', '', 'python, tkinter', '', 'https://github.com/Mmoujane/game_engine')}>
                            <Shaddow>
                               <span style={{color: 'white' ,fontSize: 'calc(0.8rem + 1vw)', fontWeight: '600'}}>graphics category</span>
                            </Shaddow>
                        </Project>
                    </StyledProjects>
                </ProjectContainer>
                </Container>
                <Details URL={this.state.display} img={this.state.url} title={this.state.title} paragraph={this.state.paragraph} client={this.state.client} industry={this.state.industry} technology={this.state.technology} date={this.state.date} project={this.state.project} Close={this.close}/>
            </SSection>
        
        );
    }
}

export default Projects;