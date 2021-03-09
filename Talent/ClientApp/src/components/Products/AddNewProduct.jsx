import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

/************************************* 
 * Function to Add/Create the Customer
 **************************************/
const AddNewProduct = (props) => {
  const {open, toggleCreateModal, fetchProductData} = props;
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  


  
  useEffect(() => {
    console.log(name+price)
return() => {
  console.log("UnMount a Component using Hook")

}
  },[name,price])
  

/************************************* 
 * Function to Add/Create the Customer using axios
 **************************************/
 const createProduct = () => { 
  var msg =""
  if(name != null && price != null ) {
    if((name.localeCompare("") !== 0 && price > 0.0) ) {
  axios.post('/Products/PostProduct', {
    name: name,
    price: price
  })
  .then(function (res) {
    console.log(res);
    fetchProductData();
    toggleCreateModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleCreateModal();
  });
}else {
  /* Show Alert on blank Sales details */
if(name.localeCompare("") === 0) {
  msg="Product Name field is empty..\n"
} 
if(price === 0.0) {
  msg=msg+"Product Price field is empty..\n"
}
msg=msg+"Please enter the correct Product Details\n"
alert(msg)
 }
} else {
  /* Show Alert on null Sales details */
if(name == null) {
  msg="Product Name field is empty..\n"
} 
if(price == null) {
  msg=msg+"Product Price field is empty..\n"
}
msg=msg+"Please enter the correct Customer Details\n"
alert(msg)
 }
 }

  /************************************* 
 * Using Semantic UI Modal & Form as UI
 **************************************/
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
      <label>Product Name</label>
      <input placeholder='Product Name' value={name} onChange={(e) => setname(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Product Price</label>
      <input placeholder='Product price' onChange={(e) => setprice(e.target.value)} />
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
          onClick={() => createProduct()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AddNewProduct