
import './App.css';

import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { UserDataContext } from './context/UserData';

import { Nav } from './components/Nav/Nav';
import { Landmarks } from './components/Landmarks/Landmarks';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { AddLandmark } from './components/AddLandmark/AddLandmark';
import { LandmarkDetails } from './components/LandmarkDetails/LandmarkDetails';
import { Footer } from './components/Footer/Footer';
import { Edit } from './components/Edit/Edit';

import { PrivateRoute } from './components/common/PrivateRoute';
import { PublicRoute } from './components/common/PublicRoute';


function App() {

    const [user, setUser] = useState();


    const userLogin = (userData) => {
        setUser(userData);
    }

    const userLogout = () => {
        setUser({});
    }
    return (
        <UserDataContext.Provider value={{ user, userLogin, userLogout }}>
            <div className="App">

                <header className="header navbar-fixed-top">
                    <Nav />
                </header>

                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                    </Route>
                    <Route path='/' element={<Home />} />
                    <Route path='/landmarks' element={<Landmarks />} />
                    <Route path='/logout' element={<PrivateRoute><Logout /></PrivateRoute>} />
                    <Route path='/add' element={<PrivateRoute><AddLandmark /></PrivateRoute>} />
                    <Route path='/landmarks/details/:landmarkId' element={<LandmarkDetails />} />
                    <Route path='/landmarks/details/:landmarkId/edit' element={<PrivateRoute><Edit /></PrivateRoute>} />

                </Routes>

                <Footer />
            </div>
        </UserDataContext.Provider>
    );
}

export default App;
