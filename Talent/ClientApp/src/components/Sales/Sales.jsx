import React, { Component } from 'react';
import { Table, Button, Image } from 'semantic-ui-react';
import axios from 'axios';


export default class Sales extends Component {
    static displayName = Sales.name;


    constructor(props) {
        super(props);
        this.state = { Sale: [], loaded: false };
        this.fetchSaleData = this.fetchSaleData.bind(this);
    }

    fetchSaleData() {
        console.log("Sales:fetchSaleData")
        axios.get('/Sales/GetSales')
            .then((res) => {
                // handle success
                console.log(res.data);
                this.setState({
                    Sale: res.data,
                    loaded: true
                })

            })
            .catch((err) => {
                // handle error
                console.log(err);
            })
            .then(() => {
                // always executed
                console.log("Always Executed");
            });

    }

    fetchSaleData2 = () => {
        console.log("Sales:fetchSaleData2")
    }

    componentDidMount() {
        console.log("Sales:componentDidMount");

        this.fetchSaleData();
    }

    render() {
        console.log("Sales:render");
        const Sale = this.state.Sale;
        const loaded = this.state.loaded;
        if (loaded) {
            return (
                <div>
                    <h1> S A L E S </h1>
                   <Button color='blue' content='Add New Sales' />
                    <br />
                    {/* <Table inverted> */}
                    <Table color="grey" inverted>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>DATE-TIME</Table.HeaderCell>
                <Table.HeaderCell>CUSTOMER NAME</Table.HeaderCell>
                <Table.HeaderCell>PRODUCT NAME</Table.HeaderCell>
                <Table.HeaderCell>STORE NAME</Table.HeaderCell>
                <Table.HeaderCell>ACTION</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {Sale.map((s) => {
            return (
            <Table.Row>
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell>{s.dateSold}</Table.Cell>
                <Table.Cell>{s.customer.name}</Table.Cell>
                <Table.Cell>{s.product.name}</Table.Cell>
                <Table.Cell>{s.store.name}</Table.Cell>
                <Table.Cell>
                  <Button color='purple' content='Edit' />
                  <Button color='red' content='Delete' />
                </Table.Cell>
            </Table.Row>
                  )
        })}
        </Table.Body>

       {/*  <Table.Footer>
            <Table.Row>
                <Table.HeaderCell>3 People</Table.HeaderCell>
                <Table.HeaderCell>2 Approved</Table.HeaderCell>
                <Table.HeaderCell />
            </Table.Row>
        </Table.Footer> */}
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