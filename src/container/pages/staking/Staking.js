import React, {useReducer} from 'react';
import { Typography } from '@material-ui/core';
import Product1 from '../../../assets/product-1.png';
import Product2 from '../../../assets/product-2.png';
import './staking.css';
import WalletButton from '../../components/connect_wallet/walletButton';
import WalletPopup from '../../components/wallet_popup/walletPopup';
import StakingDetail from '../../components/staking_detail/stakingDetail';

export default function Staking() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [visibleWallet, setVisibleWallet] = React.useState(false);
    const [visibleDetail, setVisibleDetail] = React.useState(false);
    const [visibleAlert, setVisibleAlert] = React.useState(false);
    const [sentProduct, setSentProduct] = React.useState(false);
    const [selectedNft, setSelectedNft] = React.useState([]);
    const [alertLength, setAlertLength] = React.useState(false)
    const [products, ] = React.useState([
        {
            img: Product1,
            stake: false,
            name: "Circinus",
            checked: false
        },
        {
            img: Product2,
            stake: true,
            name: "Andromeda",
            checked: false
        },
        {
            img: Product1,
            stake: false,
            name: "Andromeda",
            checked: false
        },
        {
            img: Product2,
            stake: false,
            name: "Andromeda",
            checked: false
        },
        {
            img: Product2,
            stake: true,
            name: "Andromeda",
            checked: false
        },
    ]);
    const handleClick = (idx) => {
        products.map((el, item) => {
            if (item === idx) {
                setSentProduct(el);
            };
            return 1
        })
        setVisibleDetail(true)
        forceUpdate()
    };

    const buttonWallet = (data) => {
        setVisibleWallet(data)
        forceUpdate()
    };
    
    const handleCloseDetail = (data) => {
        setVisibleDetail(data)
        forceUpdate()
    };

    const onSubmit = (status, data, time, message) => {
        console.log(status, data, time);
        setVisibleAlert(status);
        let temp = []
        if (data.length <= 1) {
            setAlertLength(false)
            setSelectedNft(message);
        } else {
            data.map((el) => {
                return temp.push(el.name);
            });
            setAlertLength(true);
            setSelectedNft(message);
        }
        forceUpdate();
        setTimeout(() => {
            setVisibleAlert(false);
        }, 4000)
    };
    return (
        <div>
            <div className="staking">
                <div className="container">
                </div>
            </div>
            {
                visibleDetail === false ?
                    <div className="staking-content">
                        {
                            visibleAlert === true ?
                                <div className={alertLength === true ? "alert-status" : "alert-status-default"}>
                                    <Typography id="title-alert">{selectedNft}</Typography>
                                </div>
                            :null
                        }
                        <Typography id="metakey-title">METAKEY STAKING</Typography>
                        <div className="metakey-description">
                            <Typography id="desc-1">Join the Metakey to earn rent in BLOK paid monthly</Typography>
                            <Typography id="desc-2">JOBE 38 Consists of an NFT of xxx #98, #99, #100, #108, #109, #110, #111 and #118. Your tenants will be announced shortly.</Typography>
                        </div>
                        <Typography id="metakey-tag">On the 1st of every month, the JOBE is paused for rewards to be added which can be claimed from the 2nd onwards</Typography>
                        <div className="products-wrapper">
                            {
                                products.map((el, idx) => {
                                    return (
                                        <div className="products" key={idx}>
                                            <img src={el.img} alt="" />
                                            <div className={el.stake !== true ? "product-btn-purple" : "product-btn-white"}>
                                                <Typography id="product-text" onClick={() => (handleClick(idx))}>{el.stake === true ? "Unstake" : "Stake"}</Typography>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="wallet-btn-staking">
                            <WalletButton 
                                buttonWallet={buttonWallet}
                            />
                        </div>
                        {
                            visibleWallet === true ?
                                <WalletPopup
                                    buttonWallet={buttonWallet}
                                />
                                : null
                        }
                    </div>
                : 
                    <StakingDetail
                        handleCloseDetail={handleCloseDetail}
                        sentProduct={sentProduct}
                        products={products}
                        onSubmit={onSubmit}
                    />
            }
        </div>
    );
};