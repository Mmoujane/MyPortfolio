import React from 'react';
import Styled from 'styled-components';

const StyledButton = Styled.button`
background-color: #f5df4e;
color: black;
cursor: pointer;
text-align: center;
padding: 1rem;
border: none;
width: 20vw;
margin-top: 1rem;
transition: all 0.5s ease;
&:hover {
    color : ${props => props.color};
    background: transparent;
    border: 1px solid #f5df4e;
    }

@media (max-width: 768px) {
    width: calc(0.7rem + 35vw);
}
    
`;


class Button extends React.Component {
    render(){
        return(
            <StyledButton color={this.props.color}>{this.props.children}</StyledButton>
        );
    }
}

export default Button;