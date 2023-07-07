import React from "react";
import styled from "styled-components";


const Container = styled.div`
width: 100%;
height: 30vh;
display: flex;
background-color: rgba(248,249,250);
flex-direction: column;
align-items: center;
justify-content: center;
`;


class Footer extends React.Component {

    render(){
        return(
            <Container>
                <span style={{fontSize: '5vw', color: '#212529', fontWeight: '700'}}>Pixel</span>
                <span style={{color: '#212529' ,fontSize: 'calc(0.7rem + 1vw)'}}>© 2023. All rights reserved by Pixel</span>
            </Container>

        );
    }
}

export default Footer;