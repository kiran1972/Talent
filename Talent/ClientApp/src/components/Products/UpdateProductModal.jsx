import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal, Portal, Segment } from 'semantic-ui-react'
import axios from 'axios'


/************************************* 
   * Function to Update the Product
**************************************/
const UpdateProductModal = (props) => {
  
    /* const {open, toggleUpdateModal, fetchProductData, id, name, price} = props; */
  const {open, toggleUpdateModal, fetchProductData, product} = props; 
  
  const [updateNameStatus,setupdateNameStatus] =useState(false)
  const [updatePriceStatus,setupdatePriceStatus] =useState(false)
  const [pid, setpid] = useState(product.id);
  const [pname, setpname] = useState(product.name);
  const [pprice, setpprice] = useState(product.price);

  // const [open, setOpen] = useState(false) ;

  /* const copyProduct = (id) =>  {
    console.log("Products:copyProduct")
  setpname(product.name)
  setpprice(product.price)
    } */


   useEffect(() => {
    console.log("UpdateProducts:useEffect:Name: "+pname+" price: "+pprice);
return() => {
  console.log("UpdateProduct:UnMount a Component using Hook")

}
  },[pname,pprice])
   

 /*   const handleChange = ({target}) => {
   console.log('event.name'+ target.name)
   console.log('event.value'+ target.value)
   
    if(target.name === 'pname')
    // setpname({ [target.name]: target.value });
    setpname(target.value);
    else if(target.name === 'pprice')
    setpprice({ [target.name]: target.value });
 }; */



  /* const test =(e) => {
    console.log(e.target.value);
  } 
 */


 
 /************************************* 
   * Function to Update the Product Name field
   **************************************/
  const updateName = (e) =>{
    setpname(e.target.value)
    setupdateNameStatus(true)
    console.log("Comp1:updateName:"+e.target.value)
     }
  
     
     
    /************************************* 
     * Function to Update the Product Price field
     **************************************/
     const updatePrice = (e) =>{
      setpprice(e.target.value)
      setupdatePriceStatus(true)
      console.log("Comp1:updateAddress:"+e.target.value)
       }
    

   /************************************* 
    * Function to Update the Product
    **************************************/      
 const updateProduct = (ccid) => { 
  
   console.log("UpdateProducts:updateProduct:Cid="+ccid+" CName: "+pname+" Cprice: "+pprice);
        
   let product1 = {
    id: ccid,
    name:updateNameStatus?pname:product.name,
    price: updatePriceStatus?pprice:product.price
   }

  axios.put(`/Products/PutProduct/${ccid}`, product1 )
  .then(function (res) {
    console.log(res);
    fetchProductData();
    toggleUpdateModal();
})
  .catch(function (err) {
    console.log(err);
    setupdateNameStatus(false)
    setupdatePriceStatus(false)
    toggleUpdateModal();
  });
 }

 /************************************* 
 * Using Semantic UI Modal & Form as UI
 **************************************/
  return (
    <Modal
    open={open}
     >
      <Modal.Header>Edit Product</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_customers.jpg' wrapped />
        <Modal.Description>
          <Header>Product details</Header>
          
    <Form>
    <Form.Field>
      <label>Product Name</label>
      <input placeholder='Product Name' name ='pname' defaultValue={product.name} onChange={(e) =>  updateName(e)}  />
      </Form.Field>
    <Form.Field>
      <label>Product Price</label>
      <input placeholder='Product Price' name ='pprice' defaultValue={product.price} onChange={(e) => updatePrice(e)} />
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
          onClick={() => updateProduct(product.id)}
          positive
        />
      </Modal.Actions>
    </Modal>     
  )
  }

export default UpdateProductModal