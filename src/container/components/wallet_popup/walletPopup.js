import React from 'react';
import { Typography } from '@material-ui/core';
import Ellipse from '../../../assets/ellipse.png';
import './walletPopup.css';

export default function WalletPopup({ buttonWallet }) {
    
    return (
        <div className="pop-up">
            <div className="pop-up-content">
                <div className="box-container">
                    <Typography id="wallet-connect">connect to wallet</Typography>
                    <div className="large-box">
                        <div className="small-box">
                            <div className="round">
                                <img src={Ellipse} alt="" className="ellipse" />
                            </div>
                            <div className="connect-pop-up">
                                <Typography id="connect-pop-up-text">Connect</Typography>
                            </div>
                        </div>
                    </div>
                    <div className="cancel-pop-up" onClick={() => buttonWallet(false)}>
                        <Typography id="cancel-pop-up-text">Cancel</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};