import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'
import Customers from './Customers';
const UpdateCustomerModal = (props) => {
  const {open, toggleUpdateModal, fetchCustomerData, customer} = props;
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  
  /* const [open, setOpen] = useState(false) */
  
  
  /* useEffect(() => {
    console.log(name+address)
return() => {
  console.log("UnMount a Component using Hook")

}
  },[name,address])
   */

  const test =(e) => {
    console.log(e.target.value);
    e.persist();

  let value = e.target.value;

  this.setState(prevState => ({
    item: { ...prevState.item,  [e.target.name]: value }
  }))
  }

 const updateCustomer = (id) => { 
  axios.put(`/Customers/PutCustomer/${id}`, {
    name: name,
    address: address
  })
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
      {/* <input placeholder='Customer Name' onChange={(e) => setname(e.target.value)} value={customer.name} /> */}
      <input placeholder='Customer Name' onChange={(e) => test(e)} value={customer.name} />
    </Form.Field>
    <Form.Field>
      <label>Customer Address</label>
      <input placeholder='Customer Address' onChange={(e) => setaddress(e.target.value)} value={customer.address} />
    </Form.Field>
  </Form>
        </Modal.Description>
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