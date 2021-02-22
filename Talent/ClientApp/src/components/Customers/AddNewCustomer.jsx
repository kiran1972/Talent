import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'
const AddNewCustomer = (props) => {
  const {open, toggleCreateModal, fetchCustomerData} = props;
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  
  /* const [open, setOpen] = useState(false) */
  
  
  useEffect(() => {
    console.log(name+address)
return() => {
  console.log("UnMount a Component using Hook")

}
  },[name,address])
  

  const test =(e) => {
    console.log(e.target.value);
  }

 const createCustomer = () => { 
  axios.post('/Customers/PostCustomer', {
    name: name,
    address: address
  })
  .then(function (res) {
    console.log(res);
    fetchCustomerData();
    toggleCreateModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleCreateModal();
  });
 }
  return (
    <Modal
     open={open}
     >
      <Modal.Header>C U S T O M E R</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_customers.jpg' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <Form>
    <Form.Field>
      <label>Customer Name</label>
      <input placeholder='Customer Name' onChange={(e) => setname(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Customer Address</label>
      <input placeholder='Customer Address' onChange={(e) => setaddress(e.target.value)} />
    </Form.Field>
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleCreateModal()}>
          Cancel
        </Button>
        <Button
          content="Create"
          labelPosition='right'
          icon='checkmark'
          onClick={() => createCustomer()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AddNewCustomer