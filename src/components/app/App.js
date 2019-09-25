import React, { Component } from 'react'
import './App.scss'
import Logo from '../../assets/images/logo.png'
import { 
        Jumbotron, 
        Container,
        Button,
      } from 'reactstrap'
import AddPackage from '../addPackageForm/AddPackage'
import PackageTable from '../packageTable/PackageTable'
import generateInvoice from '../invoice/Invoice'
import { doSum } from '../../logic'

class App extends Component {

  state = {
    packages:[],
    total:0
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

  async getTotal () {
    let cookies = this.state.packages
    let costArray = await  cookies.map(
      pack => {
        return pack.totalCost
      }
    )
    console.log('total arrray',costArray)
    this.setState({
      total: doSum(costArray)
    })
  }

  render(){
    const { packages,total } = this.state
    console.log(total)
    return (
      <div className="App">
        <Jumbotron>
            <img src={Logo} alt="logo"></img>
            <p className="display-4">SerpiCookies</p>
        </Jumbotron>
        <Container>
          <div className="m-3">
            <div className="d-inline-block mx-5">
              <AddPackage addPackage={this.addPackage} /> 
            </div>
                { packages.length ? <div className="d-inline-block mx-5"> <Button onClick={this.getInvoice}  color="secondary" size= "lg">Generate PDF</Button> </div> : <div className="d-inline-block mx-5"><Button color="secondary" size= "lg" disabled>Generate PDF</Button></div>}  
          </div>

           { packages.length ? <PackageTable packages={packages} total={total}/> : <Container><hr className="my-2" /><h3 className="m-5">No cookie package </h3></Container> }
        </Container>   
      </div>
    )
  }
 
}

export default App;
