import React from "react"

import styled, {css} from 'styled-components'

import { connect } from "react-redux"
import { removeCharacter } from "../actions";
import Button from "./Button";
import {FlexRow} from "./layout"

class Character extends React.Component {
    render() {
        return (
        <FlexRow justifyContent="space-between" background="#333" color="white">
            <div>
                <div>{this.props.character.name}</div>
                <div>Strength: {this.props.character.strength}</div>
                <div>Dexterity: {this.props.character.dexterity}</div>
                <div>Constitution: {this.props.character.constitution}</div>
            </div>
            <div>
                <Button delete onClick={() => this.props.removeCharacter(this.props.character.id)}>DELETE</Button>
            </div>
        </FlexRow>
        )
    }
}


const mapDispatchToProps = {
    removeCharacter,
}

export default connect(undefined, mapDispatchToProps)(Character)