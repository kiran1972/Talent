import React, {useState, useEffect} from 'react'
import { Label, Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

/************************************* 
 * Function to get approval to Delete the Store
 **************************************/
const DeleteSaleModal = (props) => {
  const {open, toggleDeleteModal, fetchSaleData, sale } = props;
  
  
  useEffect(() => {
    console.log("DeleteSaleModal:UnMount a Component using Hook")
return() => {
  console.log("DeleteSaleModal:UnMount a Component using Hook1")
}
  },[])
  




 /*  const test =(e) => {
    console.log(e.target.value);
  } */

 /* const createSale = () => { 
  axios.post('/Sales/PostSale', {
    name: name,
    address: address
  })
  .then(function (res) {
    console.log(res);
    fetchSaleData();
    toggleModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleModal();
  });
 } */



 /************************************* 
 * Function to Delete the Store
 **************************************/
const deleteSale = (id) =>  {
        console.log("DeleteSaleModal:deleteSale: id=" +id)
        axios.delete(`/Sales/DeleteSales/${id}`)
            .then( function(res)  {
                // handle success
                //console.log(res.data);
                console.log(res);
                fetchSaleData();
                toggleDeleteModal();
            })
            .catch(function(err)  {
                // handle error
                alert(err.response.data)
                console.log(err);
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
      <Modal.Header>Are you sure you want to delete Sale ?</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./electronic-sale.jpg' wrapped />
        <Modal.Description>
          <Header>Sale details</Header>
          <Form>
          <Form.Field>
      <Label as='a' color='red' ribbon>Sale ID</Label>
      <label>{sale.id}</label>
    </Form.Field>
    <Form.Field>
      <Label as='a' color='blue' ribbon>Customer Name</Label>
      <label>{sale.customerid}</label>
    </Form.Field>
    <Form.Field>
      <Label as='a' color='green' ribbon>Product Name</Label>
      <label>{sale.productid}</label>
    </Form.Field>
    <Form.Field>
      <Label as='a' color='green' ribbon>Store Name</Label>
      <label>{sale.storeid}</label>
      <Form.Field>
      <Label as='a' color='green' ribbon>Date-Time Sold</Label>
      <label>{sale.dateSold}</label>
    </Form.Field>
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
          onClick={() => deleteSale(sale.id)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteSaleModal