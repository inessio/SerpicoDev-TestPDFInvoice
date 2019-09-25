import React ,{ Component } from 'react'
// import {  validate } from '../../validation';
import { 
         Button, 
         CardTitle,
         Label, 
         Input, 
         FormGroup, 
         Form,
         Row,
         Col,
         Card,
         Container 
        } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clientName:'',
          comment:'',
          cookies:[{code:'',cookieType:'',individualCost:0.00,quantity:0,totalCost:0.00}],
          errors:{
              code:[],
              cookieType:[],
              clientName:[],
              individualCost:[],
              quantity:[]
          }
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

       async handleChange(e) {
        await this.setState({
            [e.target.id]:e.target.value
          }) 
        let multiply = this.state.cookies.map(cookie => { return Math.round((cookie.quantity * cookie.totalCost)*100 / 100)})
        let totalCost = Math.round(multiply * 100) / 100
        this.setState({
          totalCost: totalCost
        })
      }

      // handleDynamicChange = idx => evt => {
      //   const newShareholders = this.state.cookies.map((shareholder, sidx) => {
          
      //     if (idx !== sidx) return shareholder;
      //     console.log({...shareholder, [evt.target.id]: evt.target.value})
      //     return { ...shareholder, code: evt.target.value };
      //   });
        
      //   this.setState({ cookies: newShareholders });
      //   console.log(this.state)
       
      // };

      handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPackage(this.state)
        this.setState({
          totalCost:0.00
        })
      }

      addCat = (e) =>{
        this.setState((prevState) => ({
          cats: [...prevState.cookies, {code:'',cookieType:'',individualCost:0.00,quantity:0,totalCost:0.00}],
        }));
      }
    
      render() {
        return (
          <Container className="text-center">
           <Form onSubmit={this.handleSubmit}>
              <Card body>
              <CardTitle>Package information</CardTitle>
                <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label className="float-left" for="cookieCode">Cookie code</Label>
                    <Input type="text" name="code" id="code" placeholder="DEVCOOK023" required/>
                    <span>{this.state.errors.code}</span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className="float-left" for="cookieType">Cookie Type</Label>
                    <Input type="select" name="cookieType" id="cookieType" placeholder="password placeholder" defaultValue={'DEFAULT'} required>
                        <option value="DEFAULT" disabled>Select</option>
                        <option value="Chocolate" >Chocolate</option>
                        <option value="Vainilla" >Vainilla</option>
                        <option value="Strawberry">Strawberry</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label className="float-left" for="quantity">Quantity</Label>
                    <Input type="number" name="quantity" id="quantity"  required/>
                  </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                  <Label className="float-left" for="individualCost">Individual Cost</Label>
                  <Input type="number" name="individualCost" id="individualCost" step=".01" required/>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                  <Label className="float-left" for="totalCost">Total Cost</Label>
                  <Input type="number" name="totalCost" id="totalCost" step=".01" readOnly/>
                </FormGroup>  
                </Col>
              </Row>
              <Button color="info" onClick={this.addCat}>add new Package</Button>
            </Card>
              <Card body className="mt-4">
              <CardTitle>Client information</CardTitle>
              <FormGroup>
                  <Label className="float-left" for="clientName">Client Name</Label>
                  <Input type="text" name="clientName" id="clientName" placeholder="Prince Doe" onChange={this.handleChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label className="float-left" for="Comment">Comment</Label>
                    <Input type="textarea" name="Comment" id="Comment" placeholder="type your comment" onChange={this.handleChange}/>
                </FormGroup>
             </Card>
              <Button color="primary" size="lg" type="submit" className="mt-4" block>Add</Button>
          </Form>  
        </Container>
        );
      }
}

export default AddPackage