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
                <nav className="navbar navbar-expand-lg" style={{
                    background: colors[theme].header,
                    color: colors[theme].text,
                }}>
                    <div className="container-fluid">
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
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" style={{ color: colors[theme].text }}></i>
                        </button>

                        {/* routes */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-f">
                                {user && <>
                                    <li className="nav-item">
                                        <Link to='/stocks'>
                                            <div
                                                style={{ color: colors[theme].text, padding: "5px 10px", fontWeight: '500' }}
                                            >
                                                Stocks
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/fav'>
                                            <div
                                                style={{ color: colors[theme].text, padding: "5px 10px", fontWeight: '500' }}
                                            >
                                                Favourites
                                            </div>
                                        </Link>
                                    </li>
                                </>}
                            </ul>

                            <div className="d-flex justify-content-end" role="search">
                                <button className='btn btn-danger btn-sm' onClick={toggleTheme}><i className="fas fa-sun"></i></button>

                                {!user && <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    data-mdb-ripple-init
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>}

                                {user && <>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        data-mdb-ripple-init
                                        onClick={() => { dispatch(setUser(false)); navigate('/') }}
                                    >
                                        Logout
                                    </button>
                                    <button
                                        className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                        <i className="fas fa-bell"></i>
                                    </button>
                                    <ul className="dropdown-menu w-100" style={{
                                        background: colors[theme].background,
                                        color: colors[theme].text,
                                    }}>
                                        <li className="text-info mt-2 mx-3 mb-2">
                                            <i className="fas fa-circle fa-xs "></i> Christmas Stock Market Holiday, Housing and Manufacturing Data, and More to Watch This Week
                                        </li>
                                        <li className="text-info mt-2 mx-3 mb-2">
                                            <i className="fas fa-circle fa-xs"></i> Why the 60-40 portfolio is poised to make a comeback in 2024
                                        </li>
                                        <li className="text-info border-secondary mt-2 mx-3 mb-2">
                                            <i className="fas fa-circle fa-xs"></i> Community Bank System Board Approves Annual Stock Repurchase Plan                                      
                                        </li>
                                    </ul>
                                </>}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>


    );
};

export default Header;
