import React, { Component } from 'react';

import Header from './Header';
import Comp1 from './Comp1';
export default class parent extends Component {


    componentDidMount() {
        console.log("parent:componentDidMount");
    }

    componentWillMount() {
        console.log("parent:componentWillMount");
    }

    componentDidUpdate() {
        console.log("parent:componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("parent:componentWillUnmount");
    }

    render() {
        console.log("parent:render");
        return (
            <div>
                <div>
                    <Header />
                </div>
                <hr/>
                <div>
                    <Comp1 />
                </div>
            </div>
        );
    }
}