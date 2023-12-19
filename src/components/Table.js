import React from 'react'
import Badge from './Badge'

function Table() {
    return (<div className="container">
    <h1 className="heading">Strategy Performance</h1>
    <table className="table">
        <tr>
          <th>Strategy</th>
          <th>TVL</th>
          <th>Volatility</th>
          <th>Collateral</th>
          <th>PNL</th>
        </tr>
        <tr>
          <td>Strategy 1</td>
          <td>$100,000</td>
          <td><Badge type='low' /></td>
          <td>$1,000</td>
          <td className="profit">+ $100</td>
        </tr>
        <tr>
          <td>Strategy 2</td>
          <td>$12,500</td>
          <td> <Badge type='medium' /></td>
          <td>$1,000</td>
          <td className="loss">- $100</td>
        </tr>
        <tr>
          <td>Strategy 3</td>
          <td>$12,500</td>
          <td><Badge type='medium' /></td>
          <td>$1,000</td>
          <td className="profit">+ $100</td>
        </tr>
        <tr>
          <td>Strategy 4</td>
          <td>$25,000</td>
          <td><Badge type='high' /></td>
          <td>$1,000</td>
          <td className="profit">+ $100</td>
        </tr>
      </table>
      </div>)
}

export default Table