import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

/************************************* 
 * Function to Add/Create the Store
 **************************************/
const AddNewStore = (props) => {
  const {open, toggleCreateModal, fetchStoreData} = props;
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  
  /* const [open, setOpen] = useState(false) */


  
  useEffect(() => {
    console.log(name+address)
return() => {
  console.log("UnMount a Component using Hook")

}
  },[name,address])
  

/************************************* 
 * Function to Add/Create the Store using axios
 **************************************/
 const createStore = () => { 
  axios.post('/Stores/PostStore', {
    name: name,
    address: address
  })
  .then(function (res) {
    console.log(res);
    fetchStoreData();
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
      <label>Store Name</label>
      <input placeholder='Store Name' value={name} onChange={(e) => setname(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Store Address</label>
      <input placeholder='Store Address' onChange={(e) => setaddress(e.target.value)} />
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
          onClick={() => createStore()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AddNewStore