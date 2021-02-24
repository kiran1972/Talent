import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal, Portal, Segment } from 'semantic-ui-react'
import axios from 'axios'
import Customers from './Customers';
// import Customers from './Customers';
const UpdateCustomerModal = (props) => {
  
    /* const {open, toggleUpdateModal, fetchCustomerData, id, name, address} = props; */
  const {open, toggleUpdateModal, fetchCustomerData, customer} = props; 
  
  const [cid, setcid] = useState(customer.id);
  const [cname, setcname] = useState(customer.name);
  const [caddress, setcaddress] = useState(customer.address);
  // const [open, setOpen] = useState(false) ;

  const copyCustomer = (id) =>  {
    console.log("Customers:copyCustomer")
  setcname(customer.name)
  setcaddress(customer.address)
    }


   useEffect(() => {
    console.log("UpdateCustomers:useEffect:Name: "+cname+" address: "+caddress);
return() => {
  console.log("UpdateCustomer:UnMount a Component using Hook")

}
  },[cname,caddress])
   

   const handleChange = ({target}) => {
   console.log('event.name'+ target.name)
   console.log('event.value'+ target.value)
   
    if(target.name === 'cname')
    // setcname({ [target.name]: target.value });
    setcname(target.value);
    else if(target.name === 'caddress')
    setcaddress({ [target.name]: target.value });
 };



  /* const test =(e) => {
    console.log(e.target.value);
  } 
 */

 const updateCustomer = (ccid) => { 
  
   console.log("UpdateCustomers:updateCustomer:Cid="+ccid+" CName: "+cname+" CAddress: "+caddress);
        
   let customer = {
    id: ccid,
    name: cname,
    address: caddress
   }

  axios.put(`/Customers/PutCustomer/${ccid}`, customer )
  .then(function (res) {
    console.log(res);
    fetchCustomerData();
    toggleUpdateModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleUpdateModal();
  });
 }

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
      <input placeholder='Customer Name' name ='cname' defaultValue={customer.name} onChange={(e) =>  setcname(e.target.value)}  />
      {/* <input placeholder='Customer Name' onChange={(e) => test(e)} value={name}  onChange={(e) => handleChange(e)}/> */}
    </Form.Field>
    <Form.Field>
      <label>Customer Address</label>
      {/* <input placeholder='Customer Address' name ='caddress' value={caddress} onChange={(e) => setcaddress(e.target.value)} /> */}
      <input placeholder='Customer Address' name ='caddress' defaultValue={customer.address} onChange={(e) => setcaddress(e.target.value)} />
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