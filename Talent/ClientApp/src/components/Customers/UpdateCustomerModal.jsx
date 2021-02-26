import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal, Portal, Segment } from 'semantic-ui-react'
import axios from 'axios'

 /************************************* 
   * Function to Update the Customer
   **************************************/

const UpdateCustomerModal = (props) => {
  
   const {open, toggleUpdateModal, fetchCustomerData, customer} = props; 
  
  const [updateNameStatus,setupdateNameStatus] =useState(false)
  const [updateAddressStatus,setupdateAddressStatus] =useState(false)
  const [cname, setcname] = useState(customer.name);
  const [caddress, setcaddress] = useState(customer.address);
  

   useEffect(() => {
    console.log("UpdateCustomers:useEffect:Name: "+cname+" address: "+caddress);
return() => {
  console.log("UpdateCustomer:UnMount a Component using Hook")

}
  },[cname,caddress])
   

   /* const handleChange = ({target}) => {
   console.log('event.name'+ target.name)
   console.log('event.value'+ target.value)
   
    if(target.name === 'cname')
    setcname(target.value);
    else if(target.name === 'caddress')
    setcaddress({ [target.name]: target.value });
 }; */

 /************************************* 
   * Function to Update the Customer
   **************************************/
 const updateName = (e) =>{
  setcname(e.target.value)
  setupdateNameStatus(true)
  console.log("Comp1:updateName:"+e.target.value)
   }

   
   
  /************************************* 
   * Function to Update the Address field
   **************************************/
   const updateAddress = (e) =>{
    setcaddress(e.target.value)
    setupdateAddressStatus(true)
    console.log("Comp1:updateAddress:"+e.target.value)
     }
  

     /************************************* 
      * Function to Update the Customer
     **************************************/
 const updateCustomer = (ccid) => { 
   console.log("UpdateCustomers:updateCustomer:Cid="+ccid+" CName: "+cname+" CAddress: "+caddress);
   
    /* Based on the field update status edited Name or Props Name is coppied. */    
   let customer1 = {
    id: ccid,
    name: updateNameStatus?cname:customer.name,
    address: updateAddressStatus?caddress:customer.address
   }
   console.log("UpdateCustomers:updateCustomer:customer1:Cid="+customer1.id+" CName: "+customer1.name+" CAddress: "+customer1.address);
   
  axios.put(`/Customers/PutCustomer/${ccid}`, customer1 )
  .then(function (res) {
    console.log(res);
    fetchCustomerData();
    setupdateNameStatus(false)
    setupdateAddressStatus(false)
    toggleUpdateModal();

  })
  .catch(function (err) {
    console.log(err);
    setupdateNameStatus(false)
    setupdateAddressStatus(false)
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
      <Modal.Header>Edit Customer</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_customers.jpg' wrapped />
        <Modal.Description>
          <Header>Customer details</Header>
          
          <Form>
    <Form.Field>
      <label>Customer Name</label>
      <input placeholder='Customer Name' name ='cname' defaultValue={customer.name} id="myInput" onChange={(e) =>  updateName(e)}  />
      </Form.Field>
    <Form.Field>
      <label>Customer Address</label>
      <input placeholder='Customer Address' name ='caddress' defaultValue={customer.address} onChange={(e) => updateAddress(e)} />
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
          onClick={() => updateCustomer(customer.id)}
          positive
        />
      </Modal.Actions>
    </Modal>     
  )
  }

export default UpdateCustomerModal