import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="fa fa-more"></div>
                <span className="title">Timeline</span>
                <input type="text" className="searchInput" placeholder="Search..." />
                <div className="fa fa-search searchIcon"></div>
                <button type="button" onclick="alert('Hello world!')">Click Me Too!</button>
            </div>
        );
    }
}