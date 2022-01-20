import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from '../components/navbar/navbar.js';
import StakingDetail from '../components/staking_detail/stakingDetail.js';
import Home from '../pages/staking/Staking.js';

export default function MyRoute() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route exact path="/staking-detail" element={<StakingDetail />} />
                </Routes>
            </div>
        </Router>
    );
};