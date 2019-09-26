import React ,{ Component } from 'react'
import { Button, CardTitle,Label, Input, FormGroup, Form,Row,Col,Card,Container } from 'reactstrap';

class AddPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          code:'',
          cookieType:'',
          individualCost:0,
          quantity:0,
          totalCost:0,
          errors:{
            code:[],
            cookieType:[],
            clientName:[],
            individualCost:[],
            quantity:[]
          },
          formValid: false,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      async handleChange(e) {
        await this.setState({
          [e.target.id]: e.target.value
        });
        let totalCost = Math.round((this.state.individualCost * this.state.quantity)*100) / 100
        this.setState({
          totalCost: totalCost
        })
        this.validate(e);
      }

      handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPackage(this.state)
        this.setState({
          code:'',
          cookieType:'',
          individualCost:0,
          quantity:0,
          totalCost:0,

        })
      }

      validate = (event) => {
        const { name,value } = event.target
        let errors = this.state.errors;
        switch(name){
          case 'code':
            errors.code = [];
            const itemFound = this.props.packages.find((item) => {  return item.code === value; });
            errors.code.push(!value ? 'cookie code is required' : (value.length > 10 ? 'cookie code must not be more than 10 characters' : 
            (/[^0-9a-zA-Z]/.test(value) ? 'cookie code contains invalid characters' : (itemFound !== undefined ? 'cookie code already exists' : ''))));
            break;
          case 'cookieType':
            errors.cookieType = [];
            errors.cookieType.push(!value ? 'cookie type is required' : (value === '' ? 'cookie type is required' : ''));
            break;
          case 'quantity':
            errors.quantity = [];
            errors.quantity.push(!value ? 'quantity is required' : (/[^0-9]/.test(value) ? 'quantity can be numbers only' : ''));
            break;
          case 'individualCost':
            errors.individualCost = [];
            errors.individualCost.push(!value ? 'individual cost is required' : '');
            break;
          default:
        }
        this.setState({ errors });
        if(errors.code[0] === '' && errors.cookieType[0] === '' && errors.quantity[0] === '' && errors.individualCost[0] === '') {
          this.setState({ formValid: true });
        } else {
          this.setState({ formValid: false });
        }
        return true;
      }

      errorClass(error) {
        return((error === '') || (error === undefined) ? '' : 'has-error');
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
                    <Input type="text" name="code" value={this.state.code} id="code" placeholder="DEVCOOK023" onChange={(event) => {event.persist();this.handleChange(event)}} required/>
                    { this.errorClass(this.state.errors.code[0]) !== '' ? <small style={{ color: 'red'}}>{this.state.errors.code[0]}</small> : null }
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label className="float-left" for="cookieType">Cookie Type</Label>
                    <Input type="select" value={this.state.cookieType} name="cookieType" id="cookieType" placeholder="password placeholder" defaultValue={'DEFAULT'} onChange={(event) => {event.persist();this.handleChange(event)}} required>
                        <option value="DEFAULT" disabled>Select</option>
                        <option value="Chocolate" >Chocolate</option>
                        <option value="Vainilla" >Vainilla</option>
                        <option value="Strawberry">Strawberry</option>
                    </Input>
                   
                    { this.errorClass(this.state.errors.cookieType[0]) !== '' ? <small style={{ color: 'red'}}>{this.state.errors.cookieType[0]}</small> : null }
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label className="float-left" for="quantity">Quantity</Label>
                    <Input type="number" name="quantity" value={this.state.quantity} id="quantity" onChange={(event) => {event.persist();this.handleChange(event)}} required/>
                    { this.errorClass(this.state.errors.quantity[0]) !== '' ? <small style={{ color: 'red'}}>{this.state.errors.quantity[0]}</small> : null }
                  </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                  <Label className="float-left" for="individualCost">Individual Cost</Label>
                  <Input type="number" name="individualCost" value={this.state.individualCost} onChange={(event) => {event.persist();this.handleChange(event)}} id="individualCost" step=".01" required/>
                  { this.errorClass(this.state.errors.individualCost[0]) !== '' ? <small style={{ color: 'red'}}>{this.state.errors.individualCost[0]}</small> : null }
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                  <Label className="float-left" for="totalCost">Total Cost</Label>
                  <Input type="number" name="totalCost" value={this.state.totalCost} id="totalCost" step=".01" readOnly/>
                </FormGroup>  
                </Col>
              </Row>
              <Button 
              color="primary" 
              ize="lg" 
              type="submit"
                block 
                disabled={ !this.state.formValid }
                style={{ cursor: this.state.formValid ? 'pointer' : 'not-allowed' }}
                title={ this.state.formValid ? 'Click to add package' : 'Please fill the form to continue' }>add new Package 
                <i className="fa fa-user"></i></Button>
            </Card>
             
          </Form>  
        </Container>
        );
      }
}
export default AddPackage
