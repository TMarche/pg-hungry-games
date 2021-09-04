import React from 'react';
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
    font-size: 16px;
    color: white;
    border: none;
    background: hsl(225, 21%, 49%);
    box-shadow: 0 3px 0 hsl(224, 28%, 35%);
    font-family: 'Spartan', sans-serif;

    margin: ${props => props.margin};

    height: 32px;
    line-height: 32px;

    &:hover {
        background: hsl(225, 21%, 40%)
    }

    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }

    border-radius: 5px;
    text-transform: uppercase;

    // Conditional formatting
    /* ${props => (props.value === "=" || props.value === "reset") && css`
        grid-column: span 2;
    `} */

    ${props => props.delete && css`
        background: hsl(6, 63%, 50%);
        box-shadow: 0 3px 0 hsl(6, 70%, 34%);
        &:hover {
            background: hsl(6, 63%, 40%)
        }
    `}

    ${props => props.disabled && css`
        background: hsl(0, 0%, 50%);
        box-shadow: 0 3px 0 hsl(0, 0%, 34%);
        &:hover {
            background: hsl(0, 0%, 40%)
        }
    `}
`;

class Button extends React.Component {
    render() {
        return (
            <StyledButton 
                type={this.props.type}
                value={this.props.value}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                delete={this.props.delete}
                margin={this.props.margin}
            >
                {this.props.children}
            </StyledButton>
        )
    }

    onClick = () => {
        console.log(`Clicked ${this.props.value}!`)
    }
}

export default Button;