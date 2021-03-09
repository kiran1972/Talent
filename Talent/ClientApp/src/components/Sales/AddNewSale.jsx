import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

/************************************* 
 * Function to Add/Create the Store
 **************************************/
const AddNewSale = (props) => {
  const {open, toggleCreateModal, fetchSaleData, customers, products,stores} = props;
  const [cid, setcid] = useState(null);
  const [pid, setpid] = useState(null);
  const [sid, setsid] = useState(null);
  const [sdate, setsdate] = useState(null);
  
  /* const [open, setOpen] = useState(false) */

  
  
  useEffect(() => {
    console.log("Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)
return() => {
  console.log("AddNewSale:UnMount a Component using Hook")
}
  },)
  

/************************************* 
 * Function to Add/Create Store using axios
 **************************************/
 const createSale = () => {
 var msg =""
  if(cid != null && pid != null && sid != null && sdate != null) {
    
  console.log(" AddNewSales:createSale: Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)
  axios.post('/Sales/PostSales', {
    productid: pid,
    customerid: cid,
    storeid: sid,
    datesold:sdate
  })

  .then(function (res) {
    console.log(res);
    fetchSaleData();
    resetNewSalesData();
    toggleCreateModal();
  })
  .catch(function (err) {
    console.log(err);
    resetNewSalesData();
    toggleCreateModal();
  });
}else {
  /* Show Alert on blank Sales details */
if(cid == null) {
  msg="Customer info is empty..\n"
} 
if(pid == null) {
  msg=msg+"Product info is empty..\n"
}
if(sid == null) {
  msg=msg+"Store info is empty..\n"
}
if(sdate == null) {
  msg=msg+"SaleDate info is empty..\n\n"
}
msg=msg+"Please enter the correct Sale Details\n"
alert(msg)
 }
}


 
  /*********************************************************************************** 
   * Function to Update the local state fields to null before exiting the AddNewSale
   ***********************************************************************************/
  const resetNewSalesData = () =>{
    setcid(null)
    setpid(null)
    setsid(null)
    setsdate(null)
    console.log("AddNewSale:resetNewSalesData:Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)
     }

  /*********************************************************************************** 
   * on Cancel, Function to Update the local state fields to null before exiting the AddNewSale
   ***********************************************************************************/
  const resetNewSalesDataOnCancel = () =>{
    resetNewSalesData();
    toggleCreateModal();
    console.log("AddNewSale:resetNewSalesDataOnCancel:Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)
     }


   /*
   const test=(e) => {
  console.log("test:  Product id: "+e.target.value)

} */


  
  /************************************* 
 * Using Semantic UI Modal & Form as UI
 **************************************/
 return (
    <Modal
     open={open}
     >
      <Modal.Header>S A L E S</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_customers.jpg' wrapped />
        <Modal.Description>
          <Header>Add Sale Details</Header>
          <Form>
    <Form.Field>
      <label>Customer Name</label>

      <select class="ui dropdown"  onChange={(e) => setcid(e.target.value)}>
      <option value=''></option>
      {customers.map((c) => {
            return (
              <option value={c.id}>{c.name}</option>
              )
            })}
</select>
      {/* <input placeholder='Customer id' defaultValue={cid} onChange={(e) => setcid(e.target.value)} /> */}
    </Form.Field>
    <Form.Field>
      <label>Product Name</label>
      <select class="ui dropdown" onChange={(e) => setpid(e.target.value)}>
      <option value=''></option>
      {products.map((p) => {
            return (
              <option value={p.id}>{p.name}</option>
              )
            })}
</select>
      {/* <input placeholder='Product id' defaultValue={pid} onChange={(e) => setpid(e.target.value)} /> */}
    </Form.Field>
    <Form.Field>
      <label>Store Name</label>
      <select class="ui dropdown" onChange={(e) => setsid(e.target.value)}>
      <option value=''></option> 
      {stores.map((s) => {
            return (
              <option value={s.id}>{s.name}</option>
              )
            })}
</select>

      {/* <input placeholder='Store id' defaultValue={sid} onChange={(e) => setsid(e.target.value)} /> */}
    </Form.Field>
    <Form.Field>
    <label>Sale date-time</label>
      <input type="datetime-local" placeholder='sale date-time' defaultValue='' onChange={(e) => setsdate(e.target.value)} />
    </Form.Field>
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => resetNewSalesDataOnCancel()}>
          Cancel
        </Button>
        <Button
          content="Create"
          labelPosition='right'
          icon='checkmark'
          onClick={() => createSale()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AddNewSale