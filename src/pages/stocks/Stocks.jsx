import React, { useEffect, useState } from 'react';
import ListStock from '../../components/ListStock/ListStock';
import api from '../../service/api';
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';
import './Stocks.css'

const Stocks = () => {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const stocksPerPage = 50;
    const { theme, colors } = useSelector((state) => state.theme);

    useEffect(() => {
        const fetchStocks = async () => {
            setLoading(true);
            try {
                const stocksData = await api.getStocks();
                setData(stocksData);
                setFilteredData(stocksData);
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    if (!filteredData) {
        return <Loader />
    }

    const handleSearch = () => {
        if (data) {
            const term = searchTerm.toLowerCase();
            const filtered = data.filter(
                (stock) =>
                    stock.symbol.toLowerCase().includes(term) ||
                    stock.name.toLowerCase().includes(term)
            );
            setFilteredData(filtered);

            // Reset current page to 1 after search
            setCurrentPage(1);
        }
    };


    const indexOfLastStock = currentPage * stocksPerPage;
    const indexOfFirstStock = indexOfLastStock - stocksPerPage;
    const currentStocks = filteredData.slice(indexOfFirstStock, indexOfLastStock);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(filteredData.length / stocksPerPage)) {
            setCurrentPage(pageNumber);
        }
    };


    return (
        <div className="main mt-5">
            {loading && <Loader />}

            {error && (
                <div className="alert alert-danger" role="alert">
                    Error: {error.message}. Please try again.
                </div>
            )}

            {data && (
                <div className='stockspage' style={{
                    background: colors[theme].background,
                    color: colors[theme].text,
                }}>
                    <div className="mb-3 mt-5 d-flex">
                        <input
                            type="text"
                            className="form-control  me-2"
                            placeholder="Search by symbol or name"
                            aria-label="symbol"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch} className='me-2 btn btn-dark'>
                            Search
                        </button>
                    </div>
                    <div className="table-responsive">


                        <table className={theme === 'light' ? 'table table-sm mt-5' : 'table table-sm mt-5 table-dark' } >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Exchange</th>
                                    <th scope="col">View</th>
                                    <th scope="col">Favourite</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentStocks.map((stock, index) => (
                                    <ListStock stock={stock} key={stock.symbol} index={index + indexOfFirstStock} />
                                ))}
                            </tbody>
                        </table>


                    </div>
                    
                    {/* // Pagination controls */}
                    <div className="pagination mt-3 d-flex justify-content-center">
                        {/* Previous page button */}
                        <button
                            className='btn btn-secondary'
                            disabled={currentPage === 1}
                            onClick={() => paginate(currentPage - 1)}
                        >
                            Previous
                        </button>

                        {/* Current page */}
                        <span className='mx-5'>{currentPage}</span>

                        {/* Next page button */}
                        <button
                            className='btn btn-secondary'
                            disabled={currentPage === Math.ceil(filteredData.length / stocksPerPage)}
                            onClick={() => paginate(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stocks;
