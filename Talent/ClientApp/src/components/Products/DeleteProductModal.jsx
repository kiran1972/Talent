import React, {useState, useEffect} from 'react'
import { Label, Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

/************************************* 
 * Function to get approval to Delete the Product
 **************************************/
 const DeleteProductModal = (props) => {
  const {open, toggleDeleteModal, fetchProductData, product } = props;

  useEffect(() => {
    console.log("UnMount a Component using Hook")
return() => {
  console.log("UnMount a Component using Hook1")
}
  },[])

 /*  const test =(e) => {
    console.log(e.target.value);
  } */

 /* const createProduct = () => { 
  axios.post('/Products/PostProduct', {
    name: name,
    price: price
  })
  .then(function (res) {
    console.log(res);
    fetchProductData();
    toggleModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleModal();
  });
 } */


 /************************************* 
 * Function to Delete the Product
 **************************************/
const deleteProduct = (id) =>  {
        console.log("Products:deleteProduct")
        axios.delete(`/Products/DeleteProduct/${id}`)
            .then( function(res)  {
                // handle success
                //console.log(res.data);
                console.log(res);
                fetchProductData();
                toggleDeleteModal();
            })
            .catch(function(err)  {
                // handle error
                
                console.log(err);
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
      <Modal.Header>Are you sure you want to delete Product ?</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_customers.jpg' wrapped />
        <Modal.Description>
          <Header>Product details</Header>
          <Form>
          <Form.Field>
      <Label as='a' color='red' ribbon>Product ID</Label>
      <label>{product.id}</label>
    </Form.Field>
    <Form.Field>
      <Label as='a' color='blue' ribbon>Product Name</Label>
      <label>{product.name}</label>
    </Form.Field>
    <Form.Field>
      <Label as='a' color='green' ribbon>product price       </Label>
      <label>{product.price}</label>
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
          onClick={() => deleteProduct(product.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteProductModal