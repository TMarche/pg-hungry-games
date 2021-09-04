import styled, {css} from 'styled-components'


export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${props => props.gap ? props.gap : "1em"};
    align-items: center;
    
    padding: ${props => props.padding ? props.padding : "1em"};
    width: ${props => props.width};
    margin: ${props => props.margin};
    justify-content: ${props => props.justifyContent};
    color: ${props => props.color};
    background: ${props => props.background};
`

export const Container = styled.div`
    width: ${props => props.width};
    margin: ${props => props.margin ? props.margin : "1em"};
    padding: ${props => props.padding ? props.padding: "1em"};
    color: ${props => props.color};
    background: ${props => props.background};
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap ? props.gap : "1em"};
    align-items: center;
    
    padding: ${props => props.padding ? props.padding : "1em"};
    width: ${props => props.width};
    margin: ${props => props.margin};
    justify-content: ${props => props.justifyContent};
    color: ${props => props.color};
    background: ${props => props.background};
`