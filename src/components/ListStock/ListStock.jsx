import React from 'react'
import './ListStock.css'
import { Link } from 'react-router-dom'

const ListStock = ({stock,index}) => {


    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{stock.symbol}</td>
            <td>{stock.name.slice(0, 20) + (stock.name.length > 20 ? "..." : "")}</td> 
            <td>{stock.currency}</td>
            <td>{stock.exchange}</td>
            <td><Link to={`/detail?stock=${stock.symbol}`} type="button" className="btn btn-primary btn-sm">View</Link></td>
            <td><button type="button" className="btn btn-danger btn-sm">Favourite</button></td>
        </tr>
    )
}

export default ListStock
