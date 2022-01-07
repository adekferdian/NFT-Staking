import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useLocation
} from "react-router-dom";
import Navbar from '../components/navbar/navbar.js';
import Home from '../pages/staking/Staking.js';

export default function MyRoute() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};