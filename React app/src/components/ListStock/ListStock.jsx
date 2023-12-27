import React from 'react'
import './ListStock.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setFavourite } from '../../utils/actions';

const ListStock = ({stock,index}) => {

    const dispatch = useDispatch();
    const favourite = useSelector((state) => state.favourite);

    const handleSubmit = (symbol) => {
        if (!favourite.includes(symbol)){
            favourite.push(symbol)
            dispatch(setFavourite(favourite));
        } else {
            return alert("Already a Favourite!")  
        }
    }

    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{stock.symbol}</td>
            <td>{stock.name.slice(0, 20) + (stock.name.length > 20 ? "..." : "")}</td> 
            <td>{stock.currency}</td>
            <td>{stock.exchange}</td>
            <td><Link to={`/detail?stock=${stock.symbol}`} type="button" className="btn btn-primary btn-sm">View</Link></td>
            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => handleSubmit(stock.symbol)}>Favourite</button></td>
        </tr>
    )
}

export default ListStock
