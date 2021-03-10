import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';

export default class NavBarSemanticUI extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted>
                <Menu.Item
                    as={NavLink} to="/"
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                {/* <Menu.Item
                    as={NavLink} to="/Counter"
                    name='Counter'
                    active={activeItem === 'Counter'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to="/fetch-data"
                    name='Fetch data'
                    active={activeItem === 'fetch-data'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to="/parent"
                    name='Parent'
                    active={activeItem === 'parent'}
                    onClick={this.handleItemClick}
                />*/}
                <Menu.Item
                    as={NavLink} to="/Customers"
                    name='Customers'
                    active={activeItem === 'Customers'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to="/Products"
                    name='Products'
                    active={activeItem === 'Products'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to="/Stores"
                    name='Stores'
                    active={activeItem === 'Stores'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to="/Sales"
                    name='Sales'
                    active={activeItem === 'Sales'}
                    onClick={this.handleItemClick}
                />
      </Menu >
    )
    }
}
