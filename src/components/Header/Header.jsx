import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [user, setUser] = useState(false);

    return (
        <div className="myHeaderDiv">
            {/* if !user */}
            {!user && <header>
                <div className="left-menu">

                    <Link class="navbar-brand mt-2 mt-lg-0" to='/'>
                        <img
                            src="stocks-logo.png"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </Link>
                    <Link to='/stocks'>
                        <button
                            type="button"
                            class="btn btn-link"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="dark"
                            style={{ color: "black" }}
                        >
                            Stocks
                        </button>
                    </Link>
                </div>

                <div className="right-menu">
                    <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        data-mdb-ripple-init
                        onClick={() => setUser(!user)}
                    >
                        Login
                    </button>
                </div>
            </header>}

            {/* if user */}
            {user && <header>
                <div className="left-menu">
                    <Link class="navbar-brand mt-2 mt-lg-0" to='/'>
                        <img
                            src="stocks-logo.png"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </Link>
                    <Link to='/stocks'>
                        <button
                            type="button"
                            class="btn btn-link"
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
                            class="btn btn-link"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="dark"
                            style={{ color: "black" }}
                        >
                            Favourites
                        </button>
                    </Link>
                </div>


                <div className="right-menu">
                    <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        data-mdb-ripple-init
                        onClick={() => setUser(!user)}
                    >
                        Logout
                    </button>
                </div>
            </header>}
        </div>
    );
};

export default Header;
