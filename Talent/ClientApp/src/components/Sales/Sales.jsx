import React, { Component } from 'react';
import { Table, Button, Image } from 'semantic-ui-react';
import axios from 'axios';
import AddNewSale from './AddNewSale';
import DeleteSaleModal from './DeleteSaleModal';
import UpdateSaleModal from './UpdateSaleModal';

/************************************* 
 * Class to CURD the Store data
 **************************************/
export default class Sales extends Component {
    static displayName = Sales.name;


  /***********************Constructor************/ 
  constructor(props) {
        super(props);
        this.state = { 
            sales: [], 
            loaded: false, 
            openCreateModal: false, 
            openDeleteModal: false, 
            openUpdateModal: false, 
            sale: {} 
                   };
        this.fetchSaleData = this.fetchSaleData.bind(this);
    }

 /************************************* 
 * Function to Fetch the Store Data
 **************************************/
    fetchSaleData() {
        console.log("Sales:fetchSaleData")
        axios.get('/Sales/GetSales')
            .then((res) => {
                // handle success
                console.log(res.data);
                this.setState({
                    sales: res.data,
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


/************************************************************* 
 * Functions to Learn about the life Cycle of React components
 *************************************************************/
    componentDidMount() {
        console.log("Sales:componentDidMount");

        this.fetchSaleData();
    }


/************************************************************* 
 * Functions to  toggle the status of openCreateModal between true and false
 * to Open or notopen the Modal(Child Component AddNewStore)
 *************************************************************/
    toggleCreateModal = () => {
        this.setState({openCreateModal: !this.state.openCreateModal})
        console.log("Sales:toggleCreateModal")
    }


/************************************************************* 
 * Functions to  toggle the status of openDeleteModal between true and false
 * to Open or notopen the Modal(Child Component DeleteStoreModal)
 *************************************************************/
    toggleDeleteModal = () => {
        this.setState({
            openDeleteModal: !this.state.openDeleteModal
        })
        
        console.log("Sales:toggleDeleteModal")

    }



/************************************************************* 
 * Functions setStateDeleteModal  copy the Store Row to customer variable which can be passed to
 *  the DeleteStoreModal(Child Component )
 *************************************************************/
    setStateDeleteModal = (sale) => {
        this.setState({sale: sale})
        console.log("Sales:setStateDeleteModal:Saleid: "+sale.customerid+" Product id: "+sale.productid+" Store id: "+sale.storeid+" Sale Time: "+sale.datesold);
        this.toggleDeleteModal();
    }


 /************************************************************* 
 * Functions to  toggle the status of openUpdateModal between true and false
 * to Open or notopen the Modal(Child Component UpdateStoreModal)
 *************************************************************/
    toggleUpdateModal = () => {
        this.setState({
            openUpdateModal: !this.state.openUpdateModal
        })
        
        console.log("Sales:toggleUpdateModal")

    }

/************************************************************* 
 * Functions setStateUpdateModal copy the Store Row to customer variable which can be passed to
 *  the UpdateStoreModal(Child Component )
 *************************************************************/
    setStateUpdateModal = (sale) => {
        this.setState({sale: sale})
        console.log("Sales:setStateDeleteModal:Saleid: "+sale.customerid+" Product id: "+sale.productid+" Store id: "+sale.storeid+" Sale Time: "+sale.datesold);
        this.toggleUpdateModal();
    }

/************************************* 
 * Using Semantic UI Modal & Form  as UI
 **************************************/

    render() {
        console.log("Sales:render");
        const sales = this.state.sales;
        const loaded = this.state.loaded;
        const openCreateModal = this.state.openCreateModal;
        const openDeleteModal = this.state.openDeleteModal;
        const openUpdateModal = this.state.openUpdateModal;
        const sale = this.state.sale;
        console.log("Sales:setStateDeleteModal:Saleid: "+sale.customerid+" Product id: "+sale.productid+" Store id: "+sale.storeid+" Sale Time: "+sale.datesold);
        if (loaded) {
            return (
                <div>
                    <AddNewSale 
                    open={openCreateModal} 
                    toggleCreateModal={() => this.toggleCreateModal()} 
                    fetchSaleData={() => this.fetchSaleData()}
                     />

                    <DeleteSaleModal 
                    open={openDeleteModal} 
                    toggleDeleteModal={() => this.toggleDeleteModal()} 
                    fetchSaleData={() => this.fetchSaleData()} 
                    sale={sale} />
                    
                    <UpdateSaleModal 
                    open={openUpdateModal} 
                    toggleUpdateModal={() => this.toggleUpdateModal()} 
                    fetchSaleData={() => this.fetchSaleData()} 
                    sale={sale} />
                  <h1> S A L E S </h1>
                   <Button color='blue' content='Add New Sales' onClick={this.toggleCreateModal} />
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
        {sales.map((s) => {
            return (
            <Table.Row key={s.id}>
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell>{s.dateSold}</Table.Cell>
                <Table.Cell>{s.customer.name}</Table.Cell>
                <Table.Cell>{s.product.name}</Table.Cell>
                <Table.Cell>{s.store.name}</Table.Cell>
                <Table.Cell>
                  <Button color='purple' content='Edit' onClick={() => this.setStateUpdateModal(s)} />
                  <Button color='red' content='Delete' onClick={() => this.setStateDeleteModal(s)} />
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