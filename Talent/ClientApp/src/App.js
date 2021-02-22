import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import  parent  from './components/Demo/parent';

import './custom.css'
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import Stores from './components/Stores/Stores';
import Sales from './components/Sales/Sales';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
            <Route path='/parent' component={parent} />
            <Route path='/Customers' component={Customers} />
            <Route path='/Products' component={Products} />
            <Route path='/Stores' component={Stores} />
            <Route path='/Sales' component={Sales} />
      </Layout>
    );
  }
}
