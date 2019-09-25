import React from 'react'
import { Table } from 'reactstrap'



const PackageTable =  ({packages,total}) => {
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
          </tbody>
      </Table>
          <div className="float-right">
            <strong><p className="display-5 total"> Total: ${ total }</p></strong>
          </div>
      </div>

    );
}

export default PackageTable