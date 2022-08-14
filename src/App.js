import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/Nav/Nav';
import { Landmarks } from './components/Landmarks/Landmarks';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { AddLandmark } from './components/AddLandmark/AddLandmark';
import { LandmarkDetails } from './components/LandmarkDetails/LandmarkDetails';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className="App">

            <header className="header navbar-fixed-top">
                <Nav />
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/landmarks' element={<Landmarks />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/add' element={<AddLandmark />} />
                <Route path='/landmarks/detail/:landmarkId' element={<LandmarkDetails />} />
            </Routes>
            
            <Footer />

        </div>
    );
}

export default App;
