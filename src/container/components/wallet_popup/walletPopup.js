import React from 'react';
import { Typography } from '@material-ui/core';
// import Ellipse from '../../../assets/ellipse.png';
import Ggg from '../../../assets/ggg.png';
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
        {
            name: "Portis",
            logo: Ggg,
            link: "/",
        },
    ];
    return (
        <div className="pop-up">
            <div className="pop-up-content">
                <div className="box-container">
                    <Typography id="wallet-connect">Connect a Wallet</Typography>
                    <div className="large-box">
                        <div className="small-box">
                            <div className="top-space"></div>
                            {
                                listWallet.map((el, idx) => {
                                    return (
                                        <div className="border-box-wallet" key={idx}>
                                            <div className="wrapper-box-wallet">
                                                <Typography id="title-box-wallet">{el.name}</Typography>
                                                <img src={el.logo} alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="round">
                                <img src={Ellipse} alt="" className="ellipse" />
                            </div> */}
                            {/* <div className="connect-pop-up">
                                <Typography id="connect-pop-up-text">Connect</Typography>
                            </div> */}
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