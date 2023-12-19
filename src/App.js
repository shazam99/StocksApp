import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Stocks from './pages/stocks/Stocks';
import Favourites from './pages/favourites/Favourites';
import Footer from './components/Footer/Footer';
import Detail from './pages/stocks/Detail';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector((state) => state.user);
    const { theme, colors } = useSelector((state) => state.theme);

    const isAuthenticated = (user) => {
        return user === true;
    };

    return (
        <div className="App" style={{
            background: colors[theme].background,
            color: colors[theme].text,
        }}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/stocks' element={isAuthenticated(user) ? <Stocks /> : <Navigate to="/login" />} />
                    <Route path='/fav' element={isAuthenticated(user) ? <Favourites /> : <Navigate to="/login" />} />
                    <Route path='/detail' element={isAuthenticated(user) ? <Detail /> : <Navigate to="/login" />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
