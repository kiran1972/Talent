import React, {useState, useEffect} from 'react'
import { Label, Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

/************************************* 
 * Function to get approval to Delete the Customer
 **************************************/

const DeleteCustomerModal = (props) => {
  const {open, toggleDeleteModal, fetchCustomerData, customer } = props;
  
  
  useEffect(() => {
    console.log("UnMount a Component using Hook")
return() => {
  console.log("UnMount a Component using Hook1")
}
  },[])
  

 /*  const test =(e) => {
    console.log(e.target.value);
  } */

 /* const createCustomer = () => { 
  axios.post('/Customers/PostCustomer', {
    name: name,
    address: address
  })
  .then(function (res) {
    console.log(res);
    fetchCustomerData();
    toggleModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleModal();
  });
 } */



 /************************************* 
 * Function to Delete the Customer
 **************************************/
const deleteCustomer = (id) =>  {
        
        console.log("Customers:deleteCustomer")
        axios.delete(`/Customers/DeleteCustomer/${id}`)
            .then( function(res)  {
                console.log(res);
                fetchCustomerData();
                toggleDeleteModal();
            })
            .catch(function(err)  {

                // handle error
                alert(err.response.data)
                console.log(err.response.data);
                toggleDeleteModal();
            })

    }


/************************************* 
 * Using Semantic UI Modal & ribbon Labels as UI
 **************************************/
  return (
    <Modal
     open={open}
     >
      <Modal.Header>Are you sure you want to delete Customer ?</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_customers.jpg' wrapped />
        <Modal.Description>
          <Header>Customer details</Header>
          <Form>
          <Form.Field>
      <Label as='a' color='red' ribbon>Customer ID</Label>
      <label>{customer.id}</label>
    </Form.Field>
    <Form.Field>
      <Label as='a' color='blue' ribbon>Customer Name</Label>
      <label>{customer.name}</label>
    </Form.Field>
    <Form.Field>
      <Label as='a' color='green' ribbon>Customer Address       </Label>
      <label>{customer.address}</label>
    </Form.Field>
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDeleteModal()}>
          Cancel
        </Button>
        <Button
          content="Yes"
          color='black'
          icon='checkmark'
          onClick={() => deleteCustomer(customer.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteCustomerModal