import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import api from '../../service/api';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import { setFavourite } from '../../utils/actions';

const Favourites = () => {
    const [favourite, setMyFavourite] = useState(useSelector((state) => state.favourite));  
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { theme, colors } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchFavs = async () => {
            setLoading(true);
            try {
                const stocksData = await api.getFavStocks(favourite);
                setData(stocksData);
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if(favourite !== 0){
            fetchFavs();
        }
    }, [favourite]);


    const handleDelete = (symbol) => {
        const newFavourite = favourite.filter(stock => stock !== symbol);
        dispatch(setFavourite(newFavourite));
        setMyFavourite(newFavourite);
    }

    return (
        <div className='main mt-5' style={{ minHeight: 'calc(100vh - 300px)' }}>
            {loading && <Loader />}

            {error && (
                <div className="alert alert-danger" role="alert">
                    Error: {error.message}. Please try again.
                </div>
            )}

            {data && data.length === 0 && <div className="container mt-5" ><h1>Your Favourite list is Empty!</h1></div>}

            {data && data.length !== 0 && <div className="container mt-5" >
                <div className="row">
                    {data.map(stock => (
                        <div key={stock.symbol} className="col-md-6 mb-4">
                            <div className={`card`}>
                                <div className="card-body" style={{
                                    background: colors[theme].favCard,
                                    color: colors[theme].text,
                                    minHeight:'230px'
                                }} >
                                    <h5 className="card-title">{stock.companyName} ({stock.symbol})</h5>
                                    <p className="card-text">Price: ${stock.latestPrice.toFixed(2)}</p>
                                    <p className="card-text">
                                        Change: {stock.change >= 0 ? <i className="fas fa-caret-up text-success"></i> : <i className="fas fa-caret-down text-danger"></i>}
                                        $
                                        {stock.change.toFixed(2)} ({(stock.changePercent * 100).toFixed(2)}%)
                                    </p>
                                    {/* Buttons for View and Delete */}
                                    <div className="d-flex justify-content-between mt-4">
                                        <Link to={`/detail?stock=${stock.symbol}`} type="button" className="btn btn-primary btn-sm">View</Link>
                                        <button type="button" className="btn btn-danger  mr-2" onClick={()=>handleDelete(stock.symbol)}><i class="fas fa-trash-can"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>

    )
}

export default Favourites