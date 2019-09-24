import React from 'react'
import { Table } from 'reactstrap'

const PackageTable =  ({packages}) => {

  const packageList = packages.length ? (
    packages.map(pack => {
      return (
        <tr key = { pack.code }>
        <th scope="row">{ pack.code }</th>
        <td>{ pack.type }</td>
        <td>{ pack.name }</td>
        <td>{ pack.quantity }</td>
      </tr>
      ) 
    })
  ) : (
  <p className="center">No package added</p>
  )
    return (
      <Table striped>
        <thead>
          <tr>
            <th>CODE</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
         {packageList}
        </tbody>
      </Table>
    );
}

export default PackageTable