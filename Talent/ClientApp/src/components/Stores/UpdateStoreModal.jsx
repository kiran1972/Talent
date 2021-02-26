import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal, Portal, Segment } from 'semantic-ui-react'
import axios from 'axios'


/************************************* 
   * Function to Update the Store
   **************************************/

const UpdateStoreModal = (props) => {
  
    /* const {open, toggleUpdateModal, fetchStoreData, id, name, address} = props; */
  const {open, toggleUpdateModal, fetchStoreData, store} = props; 
  
  const [updateNameStatus,setupdateNameStatus] =useState(false)
  const [updateAddressStatus,setupdateAddressStatus] =useState(false)
  const [sname, setsname] = useState("");
  const [saddress, setsaddress] = useState(props.store.name);
  
  
  /* const copyStore = (id) =>  {
  console.log("updateStoreModal:copyStore")
  setsname(store.name)
  setsaddress(store.address)
    }
 */

   useEffect(() => {
     console.log("UpdateStores:useEffect:Name: "+sname+" address: "+saddress);
     
  return() => {
  console.log("UpdateStore:UnMount a Component using Hook")
  }
   })
   

   /* const handleChange = ({target}) => {
   console.log('event.name'+ target.name)
   console.log('event.value'+ target.value)
   
    if(target.name === 'sname')
    // setsname({ [target.name]: target.value });
    setsname(target.value);
    else if(target.name === 'saddress')
    setsaddress({ [target.name]: target.value });
 }; */



  /* const test =(e) => {
    console.log(e.target.value);
  } 
 */

/************************************* 
 * Function to Update the Store
 **************************************/
  const updateName = (e) =>{
    setsname(e.target.value)
    setupdateNameStatus(true)
    console.log("UpdateStoreModal:updateName:"+e.target.value)
     }
  
     
     
    /************************************* 
     * Function to Update the Address field
     **************************************/
     const updateAddress = (e) =>{
      setsaddress(e.target.value)
      setupdateAddressStatus(true)
      console.log("UpdateStoreModal:updateAddress:"+e.target.value)
       }
   

 /************************************* 
 * Function to Update the Store
 **************************************/
 const updateStore = (ccid) => { 
  
   console.log("UpdateStores:updateStore:Cid="+ccid+" CName: "+sname+" CAddress: "+saddress);
        
   let store1 = {
    id: ccid,
    name: updateNameStatus?sname:store.name,
    address: updateAddressStatus?saddress:store.address
   }

  axios.put(`/Stores/PutStore/${ccid}`, store1 )
  .then(function (res) {
    console.log(res);
    fetchStoreData();
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
 * Using Semantic UI Portal & Form  as UI
 **************************************/

  return (
      
    <Portal open={open}>
    <Segment
      style={{
        left: '40%',
        position: 'fixed',
        top: '50%',
        zIndex: 1000,
      }}
    >
      <Header>Store details</Header>
      <Form>
    <Form.Field>
      <label>Store Name</label>
      <input placeholder='Store Name' name ='sname' defaultValue={store.name} onChange={(e) =>  updateName(e)}  />
     </Form.Field>
    <Form.Field>
      <label>Store Address</label>
      <input placeholder='Store Address' name ='saddress' defaultValue={store.address} onChange={(e) => updateAddress(e)} />
    </Form.Field>
  </Form>

      <Button
        content='cancel'
        negative
        onClick={() => toggleUpdateModal()}
      />

      <Button
          content="Update"
          labelPosition='right'
          icon='checkmark'
          onClick={() => updateStore(store.id)}
          positive
        />
    </Segment>
  </Portal>

  )
  }

export default UpdateStoreModal