import React ,{ Component } from 'react'
import {  validate } from '../../validation';
import { 
         Button, 
         Modal, 
         ModalBody, 
         ModalFooter,
         ModalHeader, 
         Label, 
         Input, 
         FormGroup, 
         Form,
         Row,
         Col, 
        } from 'reactstrap';

class AddPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          code:null,
          cookieType:null,
          clientName:null,
          individualCost:0,
          quantity:0,
          totalCost:0,
          errors:{
              code:[],
              cookieType:[],
              clientName:[],
              individualCost:[],
              quantity:[]
          }
        };
    
        this.toggle = this.toggle.bind(this);
      }

    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      handleChange = (e) => {
        this.setState({
          [e.target.id]:e.target.value
        }) 
      }

      handleSubmit = (e) => {
        e.preventDefault()
        console.log()
      }
    
      render() {
        return (
          <div>
            <Button color="primary" size= "lg" onClick={this.toggle}>Add New Package</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Cookie</ModalHeader>
              <ModalBody>
                <Form>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="cookieCode">Cookie code</Label>
                        <Input type="text" name="code" id="code" placeholder="DEVCOOK023" onChange={this.handleChange}/>
                        <span>{this.state.errors.code}</span>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="cookieType">Cookie Type</Label>
                        <Input type="select" name="cookieType" id="cookieType" placeholder="password placeholder" defaultValue={'DEFAULT'} onChange={this.handleChange}>
                            <option value="DEFAULT" disabled>Select</option>
                            <option value="Chocolate">Chocolate</option>
                            <option value="Vainilla">Vainilla</option>
                            <option value="Strawberry">Strawberry</option>
                        </Input>
                        </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup>
                    <Label for="clientName">Client Name</Label>
                    <Input type="text" name="clientName" id="clientName" placeholder="Prince Doe" onChange={this.handleChange}/>
                    </FormGroup>
                    <Row form>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="quantity">Quantity</Label>
                        <Input type="number" name="quantity" id="quantity" onChange={this.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="individualCost">Individual Cost</Label>
                        <Input type="number" name="individualCost" id="individualCost" onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="totalCost">Total Cost</Label>
                        <Input type="number" value={this.state.totalCost} name="totalCost" id="totalCost" readOnly/>
                        </FormGroup>  
                    </Col>
                    </Row>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" size="lg" onClick={this.toggle} block>Add</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
}

export default AddPackage