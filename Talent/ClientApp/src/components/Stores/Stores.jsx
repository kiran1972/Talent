import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';

export default class Stores extends Component {
    static displayName = Stores.name;


    constructor(props) {
        super(props);
        this.state = { Store: [], loaded: false };
        this.fetchStoreData = this.fetchStoreData.bind(this);
    }

    fetchStoreData() {
        console.log("Stores:fetchStoreData")
        axios.get('/Stores/GetStore')
            .then((res) => {
                // handle success
                console.log(res.data);
                this.setState({
                    Store: res.data,
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

    fetchStoreData2 = () => {
        console.log("Stores:fetchStoreData2")
    }

    componentDidMount() {
        console.log("Stores:componentDidMount");

        this.fetchStoreData();
    }

    render() {
        console.log("Stores:render");
        const Store = this.state.Store;
        const loaded = this.state.loaded;
        if (loaded) {
            return (
                <div>
                    <h1> S T O R E S </h1>
                    <Button color='blue' content='Add New Store' />
                    <Table color="teal" inverted>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>STORE NAME</Table.HeaderCell>
                <Table.HeaderCell>STORE ADDRESS</Table.HeaderCell>
                <Table.HeaderCell>ACTION</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {Store.map((s) => {
            return (
            <Table.Row>
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell>{s.name}</Table.Cell>
                <Table.Cell>{s.address}</Table.Cell>
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