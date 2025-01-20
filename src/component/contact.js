import React from "react";
import Styled from "styled-components";
import {FirstContainer} from './MoreInformation'
import styled from "styled-components";
import Button from "./Button";
import IntroImg from '../images/me1.jpg';


const Container = Styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 1rem;
position: relative;
`;

const ContactContainer = Styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
transform: ${props => props.visible ? 'translate(0, 0)' : 'translate(0, 100px)'};
opacity: ${props => props.visible ? 1 : 0};
transition: opacity 2s, transform 2s;
flex-direction: row-reverse;
@media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const ContactForm = Styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 45%;
@media (max-width: 768px) {
    width: 90%;
    margin-right: 13vw;
  }
`;

const Profil = Styled.div`
background-color: rgba(248,249,250);
box-shadow: 10px 10px #f5df4e;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 45%;
padding: 3rem 1rem;
@media (max-width: 768px) {
    width: 90%;
    margin-top: 0.7rem;
    margin-right: 10vw;
  }
`;

const ImgContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Myimg = Styled.div`
width: 100%;
aspect-ratio: 1/1;
background: url(${props => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
cursor: pointer;
border-radius: 50%;
display: block;
transition: 0.5s all ease-in-out;
&:hover{
    transform: scale(1.3);
}
`;

const InfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin: 0.3rem 0;
`;

const Name = styled.span`
font-size: 3vw;
color: #212529;
font-weight: 700;
@media (max-width: 768px) {
    font-size: 5vw;
  }
`;
const Input = Styled.input`
width: 100%;
height: 1rem;
padding: 1rem;
border: 3px solid #f5df4e;
border-radius: 10px;
&::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
@media (max-width: 768px) {
    width: ${props => props.Portwidth};
    height: 0.3rem;
  }
`;

const Profission = Styled.span`
font-size: calc(0.3rem + 1vw);
color: #6c757d;
margin: 0.3rem 0;
@media (max-width: 768px) {
    font-size: calc(1vw + 0.6rem);
  }
`;

const Area = styled.textarea`
width: 100%;
height: 40vh;
padding: 1rem;
border: 3px solid #f5df4e;
border-radius: 10px;
`;

const InputContainer = styled.div`
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Doc = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: ${props => props.Width};
`;

const ZoomEffect = styled.div`
width: 50%;
height: 50%;
border-radius: 50%;
margin: 1.66%;
overflow: hidden;
`;

const Media = styled.a`
text-decoration: none;
cursor: pointer;
&:hover {
    color: #f5df4e;
    border-bottom: 1px solid #f5df4e;
  }
&:visited {
    text-decoration: none;
}
transition: color 500ms, border-bottom 500ms;
margin-left: 0.4rem;
font-size: calc(0.5rem + 1vw);
border-bottom: 1px solid black;
`;

const Success = styled.div`
width: 90%;
font-size: calc(1vw + 0.4rem);
color: #f5df4e;
display: flex;
align-items: center;
justify-content: flex-start;
@media (max-width: 768px) {
    font-size: calc(1vw + 0.8rem);
  }
`;


class Contact extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            Fvisible: true,
            Success: false
        }

        this.firstRef = React.createRef();
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    componentDidMount() {
        const Firstobserver = new IntersectionObserver((entries) => {
            let entry = entries[0];
            this.setState({Fvisible: entry.isIntersecting});
            if(entry.isIntersecting){
                Firstobserver.unobserve(this.firstRef.current);
            }
        }, {threshold: 0.4});
        Firstobserver.observe(this.firstRef.current);

    }

    HandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("https://getform.io/f/741f119a-079b-4f5e-9525-a935e68af120", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => {
            console.log(response);
            this.setState({Success: true});
            setTimeout(() => {
                this.setState({Success: false});
            }, 4000);
        })
        .catch(error => console.log(error))

    }
    
    render(){
        return(
            <Container id="contact" ref={this.firstRef}>
                <FirstContainer visible={this.state.Fvisible}>
                    <span style={{backgroundColor: '#f5df4e', color: '#212529' ,fontSize: 'calc(0.7rem + 1vw)'}}>contact</span>
                    <span style={{fontSize: '5vw', color: '#212529', fontWeight: '700'}}>Contact Us</span>
                </FirstContainer>
                <ContactContainer visible={this.state.Fvisible}>
                    <ContactForm onSubmit={this.HandleSubmit}>
                        <InputContainer>
                            <Doc Width="45%">
                                <span style={{fontSize: 'calc(0.5rem + 1vw)', padding: '0.5rem'}}>your name</span>
                                <Input Portwidth="90%" placeholder="your name" type="text" id="name" name="name" onChange={() => this.onchangeName}/>
                            </Doc>
                            <Doc Width="45%">
                                <span style={{fontSize: 'calc(0.5rem + 1vw)', padding: '0.5rem'}}>your number</span>
                                <Input Portwidth="90%" placeholder="your phone" type="number" id="number" name="number" onChange={() => this.onchangeNumber}/>
                            </Doc>
                        </InputContainer>
                        <Doc Width="95%">
                            <span style={{fontSize: 'calc(0.5rem + 1vw)', padding: '0.5rem'}}>your email</span>
                            <Input Portwidth="100%" placeholder="your email" type="email" id="email" name="email" onChange={() => this.onchangeEmail}/>
                        </Doc>
                        <Doc Width="95%">
                            <span style={{fontSize: 'calc(0.5rem + 1vw)', padding: '0.5rem'}}>subject</span>
                            <Input Portwidth="100%" placeholder="subject" type="text" id="subject" name="subject" onChange={() => this.onchangeSubject}/>
                        </Doc>
                        <Doc Width="95%">
                            <span style={{fontSize: 'calc(0.5rem + 1vw)', padding: '0.5rem'}}>your message</span>
                            <Area placeholder="your message" name="message" id="message" onChange={() => this.onchangeText}/>
                        </Doc>
                        <Button color='#f5df4e'>Send message</Button>
                        {this.state.Success && <Success>message sent successfuly</Success>}
                    </ContactForm>
                    <Profil>
                        <ImgContainer>
                            <ZoomEffect>
                                <Myimg url={IntroImg}/>
                            </ZoomEffect>
                        </ImgContainer>
                        <Name>Marwan Moujane</Name>
                        <Profission>Software developer</Profission>
                        <Profission>I am available for freelance work.</Profission>
                        <InfoContainer>
                            <Profission>Email: </Profission>
                            <Media>moujane16marwane@gmail.com</Media>
                        </InfoContainer>
                        <InfoContainer>
                            <Profission>Phone: </Profission>
                            <Media>0675984872</Media>
                        </InfoContainer>
                    </Profil>
                </ContactContainer>
            </Container>
        );
    }
}

export default Contact;