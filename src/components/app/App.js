import React, { Component } from 'react'
import './App.scss'
import Logo from '../../assets/images/logo.png'
import { 
        Jumbotron, 
        Container 
      } from 'reactstrap'
import AddPackage from '../addPackageForm/AddPackage'
import PackageTable from '../packageTable/PackageTable'

class App extends Component {

  state = {
    packages:[
      {code:'WD3231',type:'vanialia',name:'hello world',quatity:2,individualCost:4,totalCost:8}
    ]
  }

  render(){
    return (
      <div className="App">
            <Jumbotron>
                <img src={Logo}></img>
                <p className="lead">SerpiCookies</p>
                <hr className="my-2" /> 
                <div className="lead">
                    <AddPackage />     
                </div>
            </Jumbotron>
            <Container>
              <PackageTable packages={this.state.packages} />
            </Container>   
      </div>
    )
  }
 
}

export default App;
