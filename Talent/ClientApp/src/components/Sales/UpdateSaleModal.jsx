import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'
//import Sales from './Sales';
// import Sales from './Sales';

/************************************* 
   * Function to Update the Customer
   **************************************/

const UpdateSaleModal = (props) => {
  
    /* const {open, toggleUpdateModal, fetchSaleData, id, name, address} = props; */
  const {open, toggleUpdateModal, fetchSaleData, sale, customers, products, stores} = props; 
  
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

    console.log("UpdateSaleModal:useEffect:sale:"+ sale +" Customer id: "+props.sale.customerid+" Product id: "+props.sale.productid+" Store id: "+props.sale.storeid+" Sale date: "+props.sale.dateSold)
    
    return() => {
  console.log("UpdateSaleModal:useEffect:UnMount a Component using Hook")

}
  },)
   

 /*  
 useEffect(() => {

    if (Object.keys(customer).length !== 0 && customer.constructor === Object && !loaded) {
      setname(
customer.name
);
      setaddress(customer.address);
      setloaded(true);
    }
  }); const handleChange = ({target}) => {
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
    console.log("UpdateSalesModal:updateCustomerId:"+e.target.value)
     }
  
     
     
    /************************************* 
     * Function to Update the Productid field
     **************************************/
     const updateProductId = (e) =>{
      setpid(e.target.value)
      setupdatePidStatus(true)
      console.log("UpdateSalesModal:updateProductId:"+e.target.value)
       }

    /************************************* 
     * Function to Update the Storeid field
     **************************************/
     const updateStoreId = (e) =>{
      setsid(e.target.value)
      setupdateSidStatus(true)
      console.log("UpdateSalesModal:updateStoreid:"+e.target.value)
       }

    /************************************* 
     * Function to Update the Sale Date field
     **************************************/
     const updateSaleDate = (e) =>{
      setsdate(e.target.value)
      setupdateSdateStatus(true)
      console.log("UpdateSalesModal:updateSaleDate:"+e.target.value)
       }

/************************************* 
* Function to Update the Customer
**************************************/     
 const updateSale = (ssid) => { 
  
  console.log("UpdateSaleModal:updateSale:Salesid "+ssid+" Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)

   /* Based on the field update status edited field or Props field is coppied. */    
   let sale1 = {
    Id:ssid,
    Customerid: updateCidStatus?cid:sale.customerid,
    Productid: updatePidStatus?pid:sale.productid,
    Storeid: updateSidStatus?sid:sale.storeid,
    DateSold:updateSdateStatus?sdate:sale.dateSold
     }

     console.log("UpdateSaleModal:updateSale:Salesid "+ssid+" sale1.customerid: "+sale1.Customerid+" sale1.productid: "+sale1.Productid+" sale1.storeid: "+sale1.Storeid+" sale1.dateSold: "+sale1.DateSold)

  axios.put(`/Sales/PutSales/${ssid}`, sale1 )
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
      <select class="ui dropdown"  defaultValue={sale.customerid} onChange={(e) => updateCustomerId(e)}>
      <option value=''></option>
      {customers.map((c) => {
            return (
              <option value={c.id}>{c.name}</option>
              )
            })}
</select>
    </Form.Field>
    <Form.Field>
      <label>Product id</label>
      <select class="ui dropdown" defaultValue={sale.productid} onChange={(e) => updateProductId(e)}>
      {products.map((p) => {
            return (
              <option value={p.id}>{p.name}</option>
              )
            })}
</select>
    </Form.Field>
    <Form.Field>
      <label>Store id</label>
      <select class="ui dropdown" defaultValue={sale.storeid} onChange={(e) => updateStoreId(e)}>
      {stores.map((s) => {
            return (
              <option value={s.id}>{s.name}</option>
              )
            })}
</select>
 </Form.Field>
    <Form.Field>
    <label>Sale date-time</label>
      <input placeholder='sale date-time' defaultValue={sale.dateSold} onChange={(e) => updateSaleDate(e)} />
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