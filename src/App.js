import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Stocks from './pages/stocks/Stocks';
import Favourites from './pages/favourites/Favourites';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/stocks' element={<Stocks />} />
                    <Route path='/fav' element={<Favourites />} />
                    <Route path='/login' element={<Home />} />
                </Routes>
            </BrowserRouter>
                <Footer />
        </div>
    );
}

export default App;
