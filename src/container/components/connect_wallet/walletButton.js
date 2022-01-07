import React from 'react';
import { Typography } from '@material-ui/core';
import './walletButton.css';

export default function WalletButton({ buttonWallet }) {
    const [buttonActive, setButtonActive] = React.useState(false)
    const handleClick = () => {
        setButtonActive(buttonActive === false ? true : false)
        buttonWallet(true)
    }
    return (
        <div className="btn-wallet" onClick={() => handleClick()}>
            <Typography id="btn-wallet-text">Connect Wallet</Typography>
        </div>
    );
};