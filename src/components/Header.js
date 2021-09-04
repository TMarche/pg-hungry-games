import React from "react"
import styled from "styled-components"

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                hungry games
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div`
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-family: sans-serif;
    margin: 10px 0;
`

export default Header;