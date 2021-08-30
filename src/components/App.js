/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from "react";
import { Form, Field } from "react-final-form";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import faker from "faker";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const newOnSubmit = (values, current, setter) => {
    setter([...current, values.name])
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: [],
        }
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={ (event) => {
                        handleSubmit(event);
                        form.reset();
                    }}>
                        <div>
                        <label>Name</label>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                        <button
                            type="button"
                            onClick={() => this.generateRandomName(form)}
                        >
                            Generate Random Name
                        </button>
                        </div>
                        <div>
                            <button type="submit" disabled={submitting || pristine}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                    )}
                />
                {this.state.names.map( x => <div>{x}</div>)}
            </div>
        )
    }

    generateRandomName = (form) => {
       form.change("name", faker.name.findName());
    }

    onSubmit = (values) => {
        this.addName(values.name)
    }

    addName = (name) => {
        this.setState({
            names: [...this.state.names, name]
        })
    }
}

export default App
