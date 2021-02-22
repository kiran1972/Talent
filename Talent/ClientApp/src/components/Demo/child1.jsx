import React, { Component } from 'react';
export default class child1 extends Component {
    render() {
        return (
            <div className="child1">
                <button type="button" onclick="alert('Hello world!')">Click Me!</button>
                <button type="button" onclick="alert('Hello world!')">Click Me Too!</button>
                <h2> Hello This is H2</h2>
            </div>
        );
    }
}