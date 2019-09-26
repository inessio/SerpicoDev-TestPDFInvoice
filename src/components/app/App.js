import React, { Component } from 'react'
import './App.scss'
import Logo from '../../assets/images/logo.png'
import { Container,Row,Navbar} from 'reactstrap'
import AddPackage from '../addPackageForm/AddPackage'
import PackageTable from '../packageTable/PackageTable'
import AddClient from '../addClient/AddClient'

class App extends Component {

  state = {
    packages:[],
    clientName: '',
    comment:'',
    website:'www.serpicookies.com'

  }
 

  addPackage = (pack) => {
    let packs = [...this.state.packages, pack]
    this.setState({
      packages:packs
    })
  }

  addClient = (name,comment) => {
    console.log('committ')
    this.setState({
      clientName: name,
      comment:comment
    })
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
            <div className="col-sm-6 ">
                <AddPackage addPackage={this.addPackage} packages={packages} /> 
            </div>
            <div className="col-sm-6 cookie-table">
                { packages.length ? <AddClient  invoice={this.state} addClient={this.addClient} /> : ''}
                { packages.length ? <PackageTable packages={packages} /> : <Container><h5 className="m-5">No cookie package added</h5></Container> }
             </div> 
          </Row>
        </Container>   
        
      <footer className="footer">
        <Container>
          <span className="text-muted"> SerpiCookies All rights reserved</span>
        </Container>
      </footer>
      </div>
    )
  }
 
}

export default App