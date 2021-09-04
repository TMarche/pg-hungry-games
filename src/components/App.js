/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Form, Field } from "react-final-form";
import {connect} from 'react-redux'
import { v4 as uuid } from 'uuid';

import faker from "faker";
import { getCharacters } from "../selectors";
import { addCharacter, removeCharacter } from "../actions";

import Header from "./Header"
import Button from "./Button"
import Character from "./Character"
import { FlexRow, Container} from "./layout";

import "../styles/styles.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: [],
        }
    }

    render() {
        return (
            <Container background="#333" margin="0" color="white">
                <Header />
                <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={ (event) => {
                        handleSubmit(event);
                        form.reset();
                    }}>
                        <FlexRow>
                            <label>Name</label>
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Name"
                            />
                            <Button
                                type="button"
                                onClick={() => this.generateRandomName(form)}
                            >
                                Generate Random Name
                            </Button>
                        </FlexRow>
                        <FlexRow>
                            <Button type="submit" disabled={submitting || pristine}>
                                Submit
                            </Button>
                            <Button
                                delete={true}
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </Button>
                        </FlexRow>
                    </form>
                    )}
                />
                <Container width="300px" margin="0" padding="0" background="#111">
                    {this.props.characters.valueSeq().map( (x) => <Character key={x.id} character={x} />).toArray()}
                </Container>
            </Container>
        )
    }

    generateRandomName = (form) => {
       form.change("name", faker.name.findName());
    }

    onSubmit = (values) => {
        this.props.addCharacter(values.name, uuid() )
    }

    addName = (name) => {
        this.setState({
            names: [...this.state.names, name]
        })
    }
}

const mapStateToProps = (state) => {
    return {
        characters: getCharacters(state)
    }
}

const mapDispatchToProps = {
    addCharacter,
    removeCharacter,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
