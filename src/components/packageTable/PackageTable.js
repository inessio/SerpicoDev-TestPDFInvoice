import React from 'react'
import { Table } from 'reactstrap'
import { doSum } from '../../logic'

const PackageTable =  ({packages}) => {
  const packageList = packages.length ? (
    packages.map(pack => {
      return (
        <tr key = { pack.code }>
          <th scope="row">{ pack.code }</th>
          <td>{ pack.cookieType }</td>
          <td>{ pack.quantity }</td>
          <td>{ pack.totalCost }</td>
        </tr>
      ) 
    })
  ) : null

    const totalCostArr = packages.map(pack => pack.totalCost)  
    const total = doSum(totalCostArr)
    return (
      <div className="PackageTable">
          <Table striped id="my-table">
          <thead>
            <tr>
              <th>CODE</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            { packageList }
            <tr>
            <th ></th>
            <td></td>
            <td></td>
            <td></td>
            </tr>          
            <tr key ="total100" className="mx-4">
            <th ></th>
            <td></td>
            <td></td>
            <td> <strong>Total: ${ total }</strong></td>
            </tr>
          </tbody>
      </Table>
      </div>
    );
}

export default PackageTable