import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { setTheme } from '../../utils/actions';


import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../utils/actions';

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const { theme, colors } = useSelector((state) => state.theme);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    };

    const navigate = useNavigate();


    return (
        <div className="myHeaderDiv" style={{
            background: colors[theme].header,
            color: colors[theme].text,
        }}>
            <header>
                <nav class="navbar navbar-expand-lg" style={{
                    background: colors[theme].header,
                    color: colors[theme].text,
                }}>
                    <div class="container-fluid">
                        {/* logo */}
                        <Link className="navbar-brand mt-2 mt-lg-0" to='/'>
                            <img
                                src="stocks-logo.png"
                                alt="MDB Logo"
                                loading="lazy"
                                height="30px"
                            />
                        </Link>

                        {/* button */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars" style={{ color: colors[theme].text }}></i>
                        </button>

                        {/* routes */}
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-f">
                                {user && <>
                                    <li class="nav-item">
                                        <Link to='/stocks'>
                                            <div
                                                style={{ color: colors[theme].text,padding:"5px 10px", fontWeight:'500' }}
                                            >
                                                Stocks
                                            </div>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to='/fav'>
                                            <div
                                                style={{ color: colors[theme].text, padding: "5px 10px", fontWeight:'500' }}
                                            >
                                                Favourites
                                            </div>
                                        </Link>
                                    </li>
                                </>}
                            </ul>
                            <div class="d-flex justify-content-end" role="search">
                                <button className='btn btn-danger btn-sm' onClick={toggleTheme}><i class="fas fa-sun"></i></button>

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
                        </div>
                    </div>
                </nav>
            </header>
        </div>


    );
};

export default Header;





{/* <div className="left-menu">
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
                </div> */}