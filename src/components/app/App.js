import React, { Component } from 'react'
import './App.scss'
import Logo from '../../assets/images/logo.png'
import { 
        Jumbotron, 
        Container,
        Row,
        Button,
        Navbar
        
      } from 'reactstrap'
import AddPackage from '../addPackageForm/AddPackage'
import PackageTable from '../packageTable/PackageTable'
import generateInvoice from '../invoice/Invoice'

class App extends Component {

  state = {
    packages:[]
  }
 

  addPackage = (pack) => {
    let packs = [...this.state.packages, pack]
    this.setState({
      packages:packs
    })
  }

  getInvoice = (cookies) =>{
    cookies = this.state.packages
    generateInvoice(cookies)
  }

  render(){
    const { packages } = this.state
    return (
      <div className="App">
      
        <Navbar color="light" light expand="md" className="h-25 p-3">
              
        </Navbar>

        <Container className="mt-4">
          <div className="">
            <img src={Logo} alt="logo"></img>
            <h2 className="mb-4">SerpiCookies</h2>
          </div>
          <hr className="my-2" />
          <Row className="mt-2">
            <div className="col-sm-6 overflow-auto">
                <AddPackage addPackage={this.addPackage} /> 
            </div>
            <div className="col-sm-6 overflow-auto">
                { packages.length ? <PackageTable packages={packages} /> : <Container><h3 className="m-5">No cookie package </h3></Container> }
             </div> 
          </Row>
        </Container>   
      </div>
    )
  }
 
}

export default App;

// { packages.length ? <div className="d-inline-block mx-5"> <Button onClick={() => {generateInvoice(packages)}}  color="secondary" size= "lg">Generate PDF</Button> </div> : <div className="d-inline-block mx-5"><Button color="secondary" size= "lg" disabled>Generate PDF</Button></div>}  