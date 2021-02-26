//import { Button } from "bootstrap";
import React, { Component } from 'react';
import { Form, Button, Header, Image, Modal, } from 'semantic-ui-react'

export default class Comp1 extends Component {
    static displayName = Comp1.name;

    constructor(props) {
        super(props);
        this.state = {open: this.props.open, name: this.props.cname, addr: this.props.caddr};
         
        this.updateName = this.updateName.bind(this);
        this.updateaddress = this.updateaddress.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
        this.updateFinal = this.updateFinal.bind(this);
        
        console.log("Comp1: Starting Constructor: Open: "+this.state.open + " Name:"+this.state.name+" addr:  "+this.state.addr) 
         
    }

    componentDidMount() {
        console.log("Comp1:componentDidMount");
    }

    componentWillMount() {
        console.log("Comp1:componentWillMount");
    }

    componentDidUpdate() {
        console.log("Comp1:componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Comp1:componentWillUnmount");
    }

    updateName(e){
   this.setState({name: e.target.value, addr:this.props.caddr})
   console.log("Comp1:updateName:"+e.target.value)
    }

    
    updateaddress(e){
        this.setState({name:this.props.cname, addr: e.target.value})
        console.log("Comp1:updateAddress:"+e.target.value)
         }


   updateFinal(nm,ad){
            console.log("Comp1:updateCustomer: "+nm+"  "+ad)  
            this.props.toggleUpdateModal()   
         }

    updateCustomer(){
         this.setState({ 
            open: this.props.open,
            name: this.props.cname,
            addr: this.props.caddr
        });

        console.log("Comp1:updateCustomer: Open: "+this.state.open + " Name:"+this.state.name+" addr:  "+this.state.addr) 
    
    }

    render() {
        console.log("Comp1:render: Open: "+this.state.open + " Name:"+this.state.name+" addr:  "+this.state.addr) 
        return (
            <div>
                <Modal
    open={this.props.open}
    onOpen = {() =>  this.updateCustomer()}
     >
      <Modal.Header>Edit Customer</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='./online_customers.jpg' wrapped />
        <Modal.Description>
          <Header>Customer details</Header>
          
          <Form>
    <Form.Field>
      <label>Customer Name</label>
      <input placeholder='Customer Name' name ='cname' defaultValue={this.props.cname} onChange={(e) =>  this.updateName(e)}  />
      {/* <input placeholder='Customer Name' onChange={(e) => test(e)} value={name}  onChange={(e) => handleChange(e)}/> */}
    </Form.Field>
    <Form.Field>
      <label>Customer Address</label>
      {/* <input placeholder='Customer Address' name ='caddress' value={caddress} onChange={(e) => setcaddress(e.target.value)} /> */}
      <input placeholder='Customer Address' name ='caddress' defaultValue={this.props.caddr} onChange={(e) => this.updateaddress(e)} />
    </Form.Field>
  </Form></Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => this.props.toggleUpdateModal()}>
          Cancel
        </Button>
        <Button
          content="Update"
          labelPosition='right'
          icon='checkmark'
          onClick={() => this.updateFinal(this.state.name,this.state.addr)}
          positive
        />
      </Modal.Actions>
    </Modal>     
            </div>
        );
    }
}