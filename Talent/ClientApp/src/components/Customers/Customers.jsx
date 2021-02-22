import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import AddNewCustomer from './AddNewCustomer';

export default class Customers extends Component {
    static displayName = Customers.name;


    constructor(props) {
        super(props);
        this.state = { customer: [], loaded: false,openCreatModel: false };
        this.fetchCustomerData = this.fetchCustomerData.bind(this);
        }

    fetchCustomerData() {
        console.log("Customers:fetchCustomerData")
        axios.get('/Customers/GetCustomer')
            .then( (res) => {
                // handle success
                console.log(res.data);
                this.setState({
                    customer: res.data,
                    loaded: true
                })

            })
            .catch( (err) => {
                // handle error
                console.log(err);
                this.setState({loaded: false})
            })
            .then(() =>{
                // always executed
                console.log("Customers:Always Executed");
            });

    }

    

    componentDidMount() {
        console.log("Customers:componentDidMount");

        this.fetchCustomerData();
        //this.render();
    }

    toggleModel = () => {
        this.setState({openCreatModel: !this.state.openCreatModel})
        console.log("Customers:toggleModel")
    }

    render() {
        console.log("Customers:render");
        const customer = this.state.customer;
        const loaded = this.state.loaded;
        const openCreatModel = this.state.openCreatModel;

        if (loaded) {
            return (
                <div>
                    <AddNewCustomer open={openCreatModel} toggleModel={() => this.toggleModel()} fetchCustomerData={() => this.fetchCustomerData()}  />
                    <h1> C U S T O M E R S...... </h1>
                    <Button color='blue' content='Add New Customer' onClick={this.toggleModel} />
                    <Button color='green' content='Refresh' onClick={this.fetchCustomerData} />
                    <Table inverted>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>CUSTOMER NAME</Table.HeaderCell>
                <Table.HeaderCell>CUSTOMER ADDRESS</Table.HeaderCell>
                <Table.HeaderCell>ACTION</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {customer.map((c) => {
            return (
            <Table.Row>
                <Table.Cell>{c.id}</Table.Cell>
                <Table.Cell>{c.name}</Table.Cell>
                <Table.Cell>{c.address}</Table.Cell>
                <Table.Cell>
                    <Button color='purple' content='Edit' />
                    <Button color='red' content='Delete' />
                </Table.Cell>
            </Table.Row>
                  )
        })}
        </Table.Body>
    </Table>
                </div>
            );
        } else {
            return (
                <div>
                    <h2> L O A D I N G .....</h2>
                </div>);
        }
    }
}
