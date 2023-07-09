import React from 'react';
import Styled from 'styled-components';
import {GrClose} from 'react-icons/gr';


const Container = Styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 5;
background: #111418;
opacity: 0.5;
display: ${props => props.url ? 'flex' : 'none'};
align-items: center;
justify-content: center;
`;

const DetailsContainer = Styled.div`
width: 80vw;
display: ${props => props.url ? 'flex' : 'none'};
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
position: fixed;
top: 5%;
left: 10%;
z-index: 6;
border-radius: 20px;
@media (max-width: 768px) {
    width: 90vw;
    left: 5%;
  }
`;

const StyledImageDetails = Styled.div`
height: 90%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = Styled.div`
font-size: 2vw;
color: #212529;
font-weight: 700;
height: 10%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    margin-top: 1.1rem;
    font-size: 1rem;
  }
`;

const ImageContainer = Styled.div`
width: 50%;
height: 40vw;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
margin-right: 6vw;
overflow: hidden;
margin-top: 0.6rem;
margin-bottom: 0.6rem;
@media (max-width: 768px) {
    height: 30vh;
    width: 30vh;
    margin-top: 0.4rem;
    margin-right: 0;
  }
`;

const Image = Styled.div`
height: 100%;
width: 100%;
background: url(${props => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
border-radius: 20px;
cursor: pointer;
transition: 0.5s all ease-in-out;
&:hover{
    transform: scale(1.3);
}
`;

const Explanation = Styled.div`
width: 35%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    height: 60%;

    width: 100%;
    align-items: flex-start;
  }
`;

const ProjectInfo = Styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%;
@media (max-width: 768px) {
    width: 100%;
  }
`;

const Description = Styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
`;

const SubTitle = Styled.span`
color: #6c757d;
margin: 0.5rem;
`;

const Icon = Styled.span`
color: black;
cursor: pointer;
position: absolute;
right: 2%;
top: 3%
`;

const Url = Styled.a`
text-decoration: none;
cursor: pointer;
&:visited {
    text-decoration: none;
}
background-color: #f5df4e;
color: #212529;
@media (max-width: 768px) {
    font-size: calc(0.5rem + 1vw);
  }
font-size: calc(0.2rem + 1vw);
padding: 0.5rem;
`;



const ProjectDetails = Styled(ProjectInfo)``;

const Parag = Styled.p`
@media (max-width: 768px) {
    font-size: calc(0.5rem + 1vw);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const H1 = Styled.h1`
border-bottom: 3px solid #f5df4e;
@media (max-width: 768px) {
    font-size: 1.3rem;
    margin-left: 0.6rem;
  }
`;

class Details extends React.Component {

    render(){
        return(
            <div>
                <Container url={this.props.URL}/>
                <DetailsContainer url={this.props.URL}>
                    <Icon onClick={this.props.Close}>
                        <GrClose />
                    </Icon>
                    <Title>
                        <span style={{borderBottom: "3px solid #f5df4e"}}>{this.props.title}</span>
                    </Title>
                    <StyledImageDetails>
                        <ImageContainer>
                            <Image url={this.props.img}/>
                        </ImageContainer>
                        <Explanation>
                            <ProjectInfo>
                                <H1>Project Info:</H1>
                                <Parag>{this.props.paragraph}</Parag>
                            </ProjectInfo>
                            <ProjectDetails>
                                 <H1>Project Details:</H1>
                                 <Description>
                                    <SubTitle>Client:</SubTitle>
                                    <span>{this.props.client}</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>industry:</SubTitle>
                                    <span>{this.props.industry}</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>Technologies:</SubTitle>
                                    <span>{this.props.technology}</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>Date:</SubTitle>
                                    <span>{this.props.date}</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>URL:</SubTitle>
                                    <Url href={this.props.project}>{this.props.project}</Url>
                                 </Description>
                            </ProjectDetails>
                        </Explanation>
                    </StyledImageDetails>
                </DetailsContainer>
            </div>
        );
    }
}

export default Details;

/* <DetailsContainer>
                    <Title>
                        <span>Project Title 1</span>
                    </Title>
                    <StyledImageDetails>
                        <ImageContainer>
                            <Image url={this.props.URL}/>
                        </ImageContainer>
                        <Explanation>
                            <ProjectInfo>
                                <h1>Project Info:</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et in quot quidam vim ad persequeris, ad mea essent possim iriure.</p>
                            </ProjectInfo>
                            <ProjectDetails>
                                 <h1>Project Details:</h1>
                                 <Description>
                                    <SubTitle>Client:</SubTitle>
                                    <span>Ruby Clinton</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>industry:</SubTitle>
                                    <span>Art and Design</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>Client:</SubTitle>
                                    <span>Ruby Clinton</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>Client:</SubTitle>
                                    <span>Ruby Clinton</span>
                                 </Description>
                                 <Description>
                                    <SubTitle>Client:</SubTitle>
                                    <span>Ruby Clinton</span>
                                 </Description>
                            </ProjectDetails>
                        </Explanation>
                    </StyledImageDetails>
                </DetailsContainer> */