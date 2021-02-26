import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal, Portal, Segment } from 'semantic-ui-react'
import axios from 'axios'
import Sales from './Sales';
// import Sales from './Sales';

/************************************* 
   * Function to Update the Customer
   **************************************/

const UpdateSaleModal = (props) => {
  
    /* const {open, toggleUpdateModal, fetchSaleData, id, name, address} = props; */
  const {open, toggleUpdateModal, fetchSaleData, sale} = props; 
  
  const [updateCidStatus,setupdateCidStatus] =useState(false)
  const [updatePidStatus,setupdatePidStatus] =useState(false)
  const [updateSidStatus,setupdateSidStatus] =useState(false)
  const [updateSdateStatus,setupdateSdateStatus] =useState(false)
  const [cid, setcid] = useState();
  const [pid, setpid] = useState();
  const [sid, setsid] = useState();
  const [sdate, setsdate] = useState();
/* 
  const copySale = (id) =>  {
    console.log("Sales:copySale")
  setcid(sale.customerid)
  setpid(sale.productid)
  setsid(sale.saleid)
  setsdate(sale.dateSold)
    } */


   useEffect(() => {
    console.log("Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)
    return() => {
  console.log("UpdateSale:UnMount a Component using Hook")

}
  },)
   

 /*   const handleChange = ({target}) => {
   console.log('event.name'+ target.name)
   console.log('event.value'+ target.value)
   
    if(target.name === 'cname')
    // setcname({ [target.name]: target.value });
    setcname(target.value);
    else if(target.name === 'caddress')
    setcaddress({ [target.name]: target.value });
 }; */



  /* const test =(e) => {
    console.log(e.target.value);
  } 
 */

  /************************************* 
   * Function to Update the Customerid field
   **************************************/
  const updateCustomerId = (e) =>{
    setcid(e.target.value)
    setupdateCidStatus(true)
    console.log("UpdateSalesModal:updateName:"+e.target.value)
     }
  
     
     
    /************************************* 
     * Function to Update the Productid field
     **************************************/
     const updateProductId = (e) =>{
      setpid(e.target.value)
      setupdatePidStatus(true)
      console.log("UpdateSalesModal:updateAddress:"+e.target.value)
       }

    /************************************* 
     * Function to Update the Storeid field
     **************************************/
     const updateStoreId = (e) =>{
      setsid(e.target.value)
      setupdateSidStatus(true)
      console.log("UpdateSalesModal:updateAddress:"+e.target.value)
       }

    /************************************* 
     * Function to Update the Sale Date field
     **************************************/
     const updateSaleDate = (e) =>{
      setsdate(e.target.value)
      setupdateSdateStatus(true)
      console.log("UpdateSalesModal:updateAddress:"+e.target.value)
       }

/************************************* 
* Function to Update the Customer
**************************************/     
 const updateSale = (ssid) => { 
  
  console.log("Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)

   /* Based on the field update status edited field or Props field is coppied. */    
   let sale1 = {
    customerid: updateCidStatus?cid:sale.Customerid,
    productid: updatePidStatus?pid:sale.Productid,
    storeid: updateSidStatus?sid:sale.Storeid,
    datesold:updateSdateStatus?sdate:sale.DateSold
     }

  axios.put(`/Sales/PutSale/${ssid}`, sale1 )
  .then(function (res) {
    console.log(res);
    fetchSaleData();
    toggleUpdateModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleUpdateModal();
  });
 }


/************************************* 
 * Using Semantic UI Modal & Form  as UI
 **************************************/
  return (
    <Modal
    open={open}
     >
      <Modal.Header>Edit Sale</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_sales.jpg' wrapped />
        <Modal.Description>
          <Header>Sale details</Header>
          
          <Form>
    <Form.Field>
      <label>Customer id</label>
      <input placeholder='Customer id' defaultValue={cid} onChange={(e) => updateCustomerId(e)} />
    </Form.Field>
    <Form.Field>
      <label>Product id</label>
      <input placeholder='Product id' defaultValue={pid} onChange={(e) => updateProductId(e)} />
    </Form.Field>
    <Form.Field>
      <label>Store id</label>
      <input placeholder='Store id' defaultValue={sid} onChange={(e) => updateStoreId(e)} />
    </Form.Field>
    <Form.Field>
    <label>Sale date-time</label>
      <input placeholder='sale date-time' defaultValue={sdate} onChange={(e) => updateSaleDate(e)} />
    </Form.Field>
  </Form></Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleUpdateModal()}>
          Cancel
        </Button>
        <Button
          content="Update"
          labelPosition='right'
          icon='checkmark'
          onClick={() => updateSale(sale.id)}
          positive
        />
      </Modal.Actions>
    </Modal>     
  )
  }

export default UpdateSaleModal