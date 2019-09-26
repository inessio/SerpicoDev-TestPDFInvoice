import React ,{ Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Label,Input } from 'reactstrap';
import './AddClient.scss'
import generateInvoice from '../invoice/Invoice'

class AddClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          clientName:'',
          comment:'',
          errors:{
            clientName:[], 
            comment:[]
          }     
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

     handleClientInfo = (e) => {
        const {value, id} = e.target
        this.setState({
            [id]:value
        })
        this.validate(e);
      }

      validate = (event) => {
        const { name,value } = event.target
        let errors = this.state.errors;
        switch(name){
          case 'clientName':
            errors.clientName = [];
            errors.clientName.push(!value ? 'client name is required' : (value.length > 50 ? 'client name must not be more than 50 characters' : 
            (/^[ \w#-]+$/.test(value) ? 'client name contains invalid characters' : '')));
            break;
          default:
        }
        this.setState({ errors });
        if(errors.clientName[0] === '') {
          this.setState({ formValid: true });
        } else {
          this.setState({ formValid: false });
        }
        return true;
      }


       handleSubmit = async (e) => {
        e.preventDefault()
        await this.props.addClient(this.state.clientName,this.state.comment)
        generateInvoice(this.props.invoice)
        
      }

      errorClass(error) {
        return((error === '') || (error === undefined) ? '' : 'has-error');
      }
    
    
      render() {
          const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    
          return (
          <div className="AddClient">
            <Button color="primary" size="sm" onClick={this.toggle}>Generate PDF</Button>
           
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} close={closeBtn}>Client information</ModalHeader>
              <ModalBody>
                 <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label className="float-left" for="clientName">Client Name <span>*</span></Label>
                        <Input type="text" name="clientName" id="clientName" placeholder="Prince Doe" onChange={this.handleClientInfo} required/>
                        { this.errorClass(this.state.errors.clientName[0]) !== '' ? <small style={{ color: 'red'}}>{this.state.errors.clientName[0]}</small> : null }
                    </FormGroup>
                    <FormGroup>
                        <Label className="float-left" for="comment">Comment</Label>
                        <Input type="textarea" name="comment" id="comment" placeholder="type your comment" onChange={this.handleClientInfo}/>
                    </FormGroup>
                    <Button color="primary" type="submit" onClick={this.toggle}>Submit</Button>
                    </Form>
              </ModalBody>
              <ModalFooter>
               
              </ModalFooter>
            </Modal>
            
          </div>
        );
      }
}

export default AddClient