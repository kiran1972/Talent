import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import Header from './Header';
import Comp1 from './Comp1';
export default class parent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            openUpdateModal: false,
            cus_name: "Kiran R Puttabuddi",
            cus_addr: "3/46 Ngatoto Street",
        };
      this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
      this.setComp1UpdateModal = this.setComp1UpdateModal.bind(this);
      
      console.log("Parent:Constructor:openUpdateModal "+this.state.openUpdateModal+" Name: "+this.state.cus_name+" address: "+this.state.cus_addr);
      
    }

    componentDidMount() {
        console.log("parent:componentDidMount");
    }

    componentWillMount() {
        console.log("parent:componentWillMount");
    }

    componentDidUpdate() {
        console.log("parent:componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("parent:componentWillUnmount");
    }

    setComp1UpdateModal=() => {
        this.setState({ 
            cus_name: "Priya Darshini Moorthy",
            cus_addr: "Shiva Shree 3rd cross Mysore"
        });

        console.log("Parent:setComp1UpdateModal:openUpdateModal "+this.state.openUpdateModal+" Name: "+this.state.cus_name+" address: "+this.state.cus_addr);
        this.toggleUpdateModal();
    }

    

    toggleUpdateModal = () => {
        this.setState({
            openUpdateModal: !this.state.openUpdateModal
        })
        
        console.log("parent:toggleUpdateModal: openUpdateModal " + this.state.openUpdateModal+" Name: "+this.state.cus_name+" address: "+this.state.cus_addr);

    }

    render() {
        console.log("Parent : render: openUpdateModal: "+this.state.openUpdateModal + " Name:"+this.state.cus_name+" addr:  "+this.state.cus_addr) 
        return (
            <div>
                <div>
                    <Header product={this.state.product}/>
                </div>
                <hr/>
                <div>
                    <Comp1 
                    open={this.state.openUpdateModal} 
                    toggleUpdateModal={() => this.toggleUpdateModal()} 
                    cname={this.state.cus_name} 
                    caddr={this.state.cus_addr}/>
                </div>
                <div>
                <Button color='purple' content='Edit' onClick={() => this.setComp1UpdateModal()} />
                </div>
                
            </div>
        );
    }
}