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

  const costArray = packages.map(
    pack => {
      return pack.totalCost 
    }
  )

  const total = doSum(costArray)
  
    return (
      <div>
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
            <p className="display-4"> Total: { total }</p>
          </div>
      </div>

    );
}

export default PackageTable