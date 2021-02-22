import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import AddNewCustomer from './AddNewCustomer';
import DeleteCustomerModal from './DeleteCustomerModal';
import UpdateCustomerModal from './UpdateCustomerModal';

export default class Customers extends Component {
    static displayName = Customers.name;


    constructor(props) {
        super(props);
        this.state = { customers: [], loaded: false, openCreateModal: false, openDeleteModal: false, openUpdateModal: false, customer: {} };
        this.fetchCustomerData = this.fetchCustomerData.bind(this);
        }

    fetchCustomerData() {
        console.log("Customers:fetchCustomerData")
        axios.get('/Customers/GetCustomer')
            .then( (res) => {
                // handle success
                console.log(res.data);
                this.setState({
                    customers: res.data,
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
                console.log("Customers:fetchdata Always Executed");
            });

    }

    

    componentDidMount() {
        console.log("Customers:componentDidMount");

        this.fetchCustomerData();
    }

    toggleCreateModal = () => {
        this.setState({openCreateModal: !this.state.openCreateModal})
        console.log("Customers:toggleCreateModal")
    }

    toggleDeleteModal = () => {
        this.setState({
            openDeleteModal: !this.state.openDeleteModal
        })
        
        console.log("Customers:toggleDeleteModal")

    }

    setStateDeleteModal = (customer) => {
        this.setState({customer: customer})
        console.log("Customers:setStateDeleteModal");
        this.toggleDeleteModal();
    }


    toggleUpdateModal = () => {
        this.setState({
            openUpdateModal: !this.state.openUpdateModal
        })
        
        console.log("Customers:toggleUpdateModal")

    }

   
    setStateUpdateModal = (customer) => {
        this.setState({customer: customer})
        console.log("Customers:setStateUpdateModal");
        this.toggleUpdateModal();
    }

    render() {
        console.log("Customers:render");
        const customers = this.state.customers;
        const loaded = this.state.loaded;
        const openCreateModal = this.state.openCreateModal;
        const openDeleteModal = this.state.openDeleteModal;
        const openUpdateModal = this.state.openUpdateModal;
        
        const customer = this.state.customer;
        if (loaded) {
            return (
                <div>
                    <AddNewCustomer open={openCreateModal} toggleCreateModal={() => this.toggleCreateModal()} fetchCustomerData={() => this.fetchCustomerData()}  />
                    <DeleteCustomerModal open={openDeleteModal} toggleDeleteModal={() => this.toggleDeleteModal()} fetchCustomerData={() => this.fetchCustomerData()} customer={customer} />
                    <UpdateCustomerModal open={openUpdateModal} toggleUpdateModal={() => this.toggleUpdateModal()} fetchCustomerData={() => this.fetchCustomerData()} customer={customer} />
                    <h1> C U S T O M E R S...... </h1>
                    <Button color='blue' content='Add New Customer' onClick={this.toggleCreateModal} />
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
        {customers.map((c) => {
            return (
            <Table.Row key={c.id}>
                <Table.Cell>{c.id}</Table.Cell>
                <Table.Cell>{c.name}</Table.Cell>
                <Table.Cell>{c.address}</Table.Cell>
                <Table.Cell>
                    <Button color='purple' content='Edit' onClick={() => this.setStateUpdateModal(c)} />
                    <Button color='red' content='Delete' onClick={() => this.setStateDeleteModal(c)} /> 
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
