import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../utils/actions';

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { theme, colors } = useSelector((state) => state.theme);

    const navigate = useNavigate();


    return (
        <div className="myHeaderDiv" style={{
            background: colors[theme].header,
            color: colors[theme].text,
        }}>
            <header >
                    
                <div className="left-menu">
                    <Link className="navbar-brand mt-2 mt-lg-0" to='/'>
                        <img
                            src="stocks-logo.png"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </Link>
                    {user && <>
                        <Link to='/stocks'>
                            <button
                                type="button"
                                className="btn btn-light btn-sm"
                                data-mdb-ripple-init
                                data-mdb-ripple-color="dark"
                                style={{ color: "black" }}
                            >
                                Stocks
                            </button>
                        </Link>
                        <Link to='/fav'>
                            <button
                                type="button"
                                className="btn btn-light btn-sm"
                                data-mdb-ripple-init
                                data-mdb-ripple-color="dark"
                                style={{ color: "black" }}
                            >
                                Favourites
                            </button>
                        </Link>
                    </>}
                </div>


                <div className="right-menu">
                    {!user && <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-mdb-ripple-init
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>}

                    {user && <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        data-mdb-ripple-init
                        onClick={() => { dispatch(setUser(false)); navigate('/') }}
                    >
                        Logout
                    </button>}
                </div>
            </header>
        </div>


    );
};

export default Header;
