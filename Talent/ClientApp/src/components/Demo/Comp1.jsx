//import { Button } from "bootstrap";
import React, { Component } from 'react';
//import { Button } from 'semantic-ui-react'

export default class Comp1 extends Component {

    static displayName = Comp1.name;

    render() {
        return (
            <div>
                <button type="button" onclick="alert('Hello world!')">Click Me!</button>
                <button type="button" onclick="alert('Hello world!')">Click Me Too!</button>
                <h2 className="large"> Hello This is H2. </h2>
            </div>
        );
    }
}