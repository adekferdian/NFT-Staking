import React from 'react';
import { Typography } from '@material-ui/core';
// import Ellipse from '../../../assets/ellipse.png';
import Ggg from '../../../assets/ggg.png';
import Close from '../../../assets/Close.png';
import Line from '../../../assets/line.png';
import './walletPopup.css';

export default function WalletPopup({ buttonWallet }) {
    const listWallet = [
        {
            name: "MetaMask",
            logo: Ggg,
            link: "/",
        },
        {
            name: "WalletConnect",
            logo: Ggg,
            link: "/",
        },
        {
            name: "Coinbase Wallet",
            logo: Ggg,
            link: "/",
        },
        {
            name: "Fortmatic",
            logo: Ggg,
            link: "/",
        },
    ];
    return (
        <div className="pop-up">
            <div className="pop-up-content">
                <div className="box-container">
                    <div className="header-box-container">
                        <Typography id="wallet-connect">Connect Wallet</Typography>
                        <div className="close-wallet-modal" onClick={() => buttonWallet(false)}>
                            <div className="border-close-wallet">
                                <img src={Close} alt="" className="logo-close-wallet" />
                            </div>
                            <Typography id="back-wallet">Close</Typography>
                        </div>
                    </div>
                    <img src={Line} alt="" className="divider-wallet" />
                    <div className="large-box">
                        <div className="small-box">
                            {
                                listWallet.map((el, idx) => {
                                    return (
                                        <div className="border-box-wallet" key={idx}>
                                            <div className="wrapper-box-wallet">
                                                <div style={{textAlign: 'center'}}>
                                                    <img src={el.logo} alt="" className="list-logo" />
                                                </div>
                                                <Typography id="title-box-wallet">{el.name}</Typography>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};