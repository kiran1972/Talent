import React, { Component } from 'react';
import { Table, Button, Image, Pagination } from 'semantic-ui-react';
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
            customers: [],
            products: [],
            stores: [], 
            salesloaded: false,
            customersloaded: false,
            productsloaded: false,
            storesloaded: false, 
            openCreateModal: false, 
            openDeleteModal: false, 
            openUpdateModal: false, 
            sale: {},
            totalSalesRec: 0, 
            currentPage: 1,
            totalPages: 1
                   };
        this.fetchSaleData = this.fetchSaleData.bind(this);
        this.fetchCustomerData = this.fetchCustomerData.bind(this);
        this.fetchProductData = this.fetchProductData.bind(this);
        this.fetchCustomerData = this.fetchCustomerData.bind(this);
    }

 /************************************* 
 * Function to Fetch the Sales Data
 **************************************/
    fetchSaleData() {
        console.log("Sales:fetchSaleData")
        axios.get('/Sales/GetSales')
            .then((res) => {
                // handle success
                console.log(res.data);
                this.setState({
                    sales: res.data,
                    salesloaded: true,
                    totalSalesRec: res.data.length,
                    totalPages: Math.ceil(res.data.length/4)
                })
                /* To fix the last Page Refresh on Delete to move to previous page */
                if(((res.data.length % 4) == 0) && (this.state.currentPage > Math.ceil(res.data.length/4))){
                    console.log("Last Page = Current page");
                    this.setState({
                        currentPage: (this.state.currentPage == 1)?1:this.state.currentPage - 1 
                    })
                }
            
            })
            .catch((err) => {
                // handle error
                console.log(err);
                this.setState({salesloaded: false})
            })
            .then(() => {
                // always executed
                console.log("Always Executed");
            });

    }

/************************************* 
 * Function to Fetch the Customer Data
 **************************************/
fetchCustomerData() {
    console.log("Customers:fetchCustomerData")
    axios.get('/Customers/GetCustomer')
        .then( (res) => {
            // handle success
            console.log(res.data);
            this.setState({
                customers: res.data,
                customersloaded: true
            })

        })
        .catch( (err) => {
            // handle error
            console.log(err);
            this.setState({customersloaded: false})
        })
        .then(() =>{
            // always executed
            console.log("Customers:fetchdata Always Executed");
        });

}

/************************************* 
 * Function to Add/Create the Product
 **************************************/
fetchProductData() {
    console.log("Products:fetchProductData")
    axios.get('/Products/GetProduct')
        .then((res) => {
            // handle success
            console.log(res.data);
            this.setState({
                products: res.data,
                productsloaded: true
            })

        })
        .catch((err) => {
            // handle error
            console.log(err);
            this.setState({productsloaded: false})
        })
        .then(() => {
            // always executed
            console.log("Always Executed");
        });

}

/************************************* 
 * Function to Add/Create the Store
 **************************************/
fetchStoreData() {
    console.log("Stores:fetchStoreData")
    axios.get('/Stores/GetStore')
        .then((res) => {
            // handle success
            console.log(res.data);
            this.setState({
                stores: res.data,
                storesloaded: true
            })

        })
        .catch((err) => {
            // handle error
            console.log(err);
            this.setState({storesloaded: false})
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
        this.fetchCustomerData();
        this.fetchProductData();
        this.fetchStoreData();
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
        console.log("Sales:setStateDeleteModal:Saleid: "+sale.customerid+" Product id: "+sale.productid+" Store id: "+sale.storeid+" Sale Time: "+sale.DateSold);
        console.log("Sales:setStateDeleteModal sale" + sale)
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
        console.log("Sales:setStateUpdateeModal:Saleid: "+sale.customerid+" Product id: "+sale.productid+" Store id: "+sale.storeid+" Sale Time: "+sale.dateSold);
        this.toggleUpdateModal();
    }

    

/************************************************************* 
 * Functions pageChange set the Pagination attributes 
 *************************************************************/
pageChange = (e,pagData) => {
    this.setState({currentPage: pagData.activePage,
                    totalPages: pagData.totalPages
                })
    console.log(pagData);
    console.log("Sales:setStateUpdateeModal:Saleid:  Product id:  Store id: Sale Time: ");
}

/************************************* 
 * Using Semantic UI Modal & Form  as UI
 **************************************/

    render() {
        console.log("Sales:render");
        const sales = this.state.sales;
        const customers = this.state.customers;
        const products = this.state.products;
        const stores = this.state.stores;
        const salesloaded = this.state.salesloaded;
        const customersloaded = this.state.customersloaded;
        const productsloaded = this.state.productsloaded;
        const storesloaded = this.state.storesloaded;
        const openCreateModal = this.state.openCreateModal;
        const openDeleteModal = this.state.openDeleteModal;
        const openUpdateModal = this.state.openUpdateModal;
        const sale = this.state.sale;
        const totalSalesRec = this.state.totalSalesRec;
        const currentPage = this.state.currentPage;

        console.log("Sales:render: currentPage "+currentPage+" totalSalesRec "+totalSalesRec+" Saleid: "+sale.customerid+" Product id: "+sale.productid+" Store id: "+sale.storeid+" Sale Time: "+sale.dateSold);
        if (salesloaded && customersloaded && productsloaded && storesloaded) {
            return (
                <div>
                    <AddNewSale 
                    open={openCreateModal} 
                    toggleCreateModal={() => this.toggleCreateModal()} 
                    fetchSaleData={() => this.fetchSaleData()}
                    customers={customers}
                    products={products}
                    stores={stores}
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
                    sale={sale}
                    customers={customers}
                    products={products}
                    stores={stores} />
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
        {sales.map((s,index) => {
                if((index >= ((currentPage*4)-4)) && (index < (currentPage*4))){
                    console.log("inside if: "+index)
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
                
                  )}
        })}
        </Table.Body>

          {/*<Table.Footer>
           <Table.Row>
                <Table.HeaderCell>3 People</Table.HeaderCell>
                <Table.HeaderCell>2 Approved</Table.HeaderCell>
                <Table.HeaderCell />
            </Table.Row>*/}
    
  <Pagination
    boundaryRange={0}
    activePage={currentPage}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={Math.ceil(totalSalesRec/4)}
    onPageChange= {(e,pagData) => this.pageChange(e,pagData)}
  />

        {/* </Table.Footer>  */}
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