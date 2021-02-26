import React, {useState, useEffect} from 'react'
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

/************************************* 
 * Function to Add/Create the Store
 **************************************/
const AddNewSale = (props) => {
  const {open, toggleCreateModal, fetchSaleData} = props;
  const [cid, setcid] = useState();
  const [pid, setpid] = useState();
  const [sid, setsid] = useState();
  const [sdate, setsdate] = useState();
  
  /* const [open, setOpen] = useState(false) */


  
  useEffect(() => {
    console.log("Customer id: "+cid+" Product id: "+pid+" Store id: "+sid+" Sale date: "+sdate)
return() => {
  console.log("UnMount a Component using Hook")

}
  },)
  

/************************************* 
 * Function to Add/Create Store using axios
 **************************************/
 const createSale = () => { 
  axios.post('/Sales/PostSale', {
    productid: pid,
    customerid: cid,
    storeid: sid,
    datesold:sdate
  })
  .then(function (res) {
    console.log(res);
    fetchSaleData();
    toggleCreateModal();
  })
  .catch(function (err) {
    console.log(err);
    toggleCreateModal();
  });
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
      <label>Customer id</label>
      <input placeholder='Customer id' defaultValue={cid} onChange={(e) => setcid(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Product id</label>
      <input placeholder='Product id' defaultValue={pid} onChange={(e) => setpid(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Store id</label>
      <input placeholder='Store id' defaultValue={sid} onChange={(e) => setsid(e.target.value)} />
    </Form.Field>
    <Form.Field>
    <label>Sale date-time</label>
      <input placeholder='sale date-time' defaultValue={sdate} onChange={(e) => setsdate(e.target.value)} />
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
          onClick={() => createSale()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default AddNewSale