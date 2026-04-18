import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import './index.css';
import CreateLigue from './pages/CreateLigue';
import CreateUser from './pages/CreateUser';
import GuessThePlayer from './pages/GuessThePlayer';
import Login from './pages/Login';
import Profil from './pages/Profil';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/liguedescopains">
            <div className="main">
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/createUser" element={<CreateUser />} />
                    <Route path="/createLigue" element={<CreateLigue />} />

                    <Route
                        path="/guesstheplayer"
                        element={<GuessThePlayer />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
