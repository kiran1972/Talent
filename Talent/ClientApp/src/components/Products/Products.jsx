import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';

export default class Products extends Component {
    static displayName = Products.name;


    constructor(props) {
        super(props);
        this.state = { Product: [], loaded: false };
        this.fetchProductData = this.fetchProductData.bind(this);
    }

    fetchProductData() {
        console.log("Products:fetchProductData")
        axios.get('/Products/GetProduct')
            .then((res) => {
                // handle success
                console.log(res.data);
                this.setState({
                    Product: res.data,
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

    fetchProductData2 = () => {
        console.log("Products:fetchProductData2")
    }

    componentDidMount() {
        console.log("Products:componentDidMount");

        this.fetchProductData();
    }

    render() {
        console.log("Products:render");
        const Product = this.state.Product;
        const loaded = this.state.loaded;
        if (loaded) {
            return (
                <div>
                    <h1> P R O D U C T S </h1>
                    <Button color='blue' content='Add New Product' />
                    <Table color="violet" inverted>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>PRODUCT NAME</Table.HeaderCell>
                <Table.HeaderCell>PRODUCT PRICE</Table.HeaderCell>
                <Table.HeaderCell>ACTION</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {Product.map((p) => {
            return (
            <Table.Row>
                <Table.Cell>{p.id}</Table.Cell>
                <Table.Cell>{p.name}</Table.Cell>
                <Table.Cell>{p.price}</Table.Cell>
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