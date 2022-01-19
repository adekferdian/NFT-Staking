import React from 'react';
import { Typography } from '@material-ui/core';
import Expand from '../../../assets/expand.png';
import Line from '../../../assets/line.png';
import GggLogo from '../../../assets/ggg.png';
import Close from '../../../assets/Close.png';
import NftModal from '../nfts_modal/nftModal';
import './stakingDetail.css';

const hasWindow = typeof window !== 'undefined';
function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
        width,
        height,
    };
}

export default function StakingDetail(props) {
    const [, setWindowDimensions] = React.useState(getWindowDimensions());
    const { width } = getWindowDimensions();
    console.log(width);
    const { img, stake } = props.sentProduct;
    const [visibleTime, setVisibleTime] = React.useState(false);
    const [alertSubmit, setAlertSubmit] = React.useState("");
    const [visibleAlertSubmit, ] = React.useState(false);
    const [visibleNft, setVisibleNft] = React.useState(false);
    const [visibleNftUnstake, setVisibleNftUnstake] = React.useState(false);
    const unstakeDuration = [
        {
            title: "30 Days"
        },
        {
            title: "60 Days"
        },
        {
            title: "90 Days"
        },
    ];
    React.useEffect(() => {
        if (hasWindow) {
            function handleResize() {
            setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    const handleClose = () => {
        props.handleCloseDetail(false)
    };
    const handleSubmit = (data, flag, selectedTime) => {
        console.log(data, flag, selectedTime);
        if (flag === "stake") {
            if (data.length <= 1) {
                // setVisibleAlertSubmit(true);
                const message = `You have succesfully stake, now you can unstake on ${selectedTime.title}`
                setAlertSubmit(message);
                props.onSubmit(true, data, selectedTime.title, message);
                setVisibleTime("ok")
                setTimeout(() => {
                    props.handleCloseDetail(false)
                }, 500)
            } else {
                let temp = []
                data.map((el) => {
                    return temp.push(el.name)
                })
                let alert = temp.toString()
                const message = `You have succesfully unstake ${alert}, now you can stake on ${selectedTime.title}`
                setAlertSubmit(message);
                props.onSubmit(true, data, selectedTime.title, message);
                console.log(alert);
            }
        } else if (flag === "unstake") {
            if (data.length <= 1) {
                // setVisibleAlertSubmit(true);
                const message = `You have succesfully unstake, now you can stake on ${selectedTime.title}`
                setAlertSubmit(message);
                props.onSubmit(true, data, selectedTime.title, message);
                setVisibleTime("ok")
                setTimeout(() => {
                    props.handleCloseDetail(false)
                }, 500)
            } else {
                let temp = []
                data.map((el) => {
                    return temp.push(el.name)
                })
                let alert = temp.toString();
                const message = `You have succesfully unstake ${alert}, now you can stake on ${selectedTime.title}`;
                setAlertSubmit(message);
                props.onSubmit(true, data, selectedTime.title, message);
                console.log(alert);
            }
        }
    };

    const handleCloseModal = (data) => {
        setVisibleNft(data)
        setVisibleNftUnstake(data)
    };

    return (
        <div className="staking-detail">
            <div className="wrapper-detail">
                {
                    visibleAlertSubmit ?
                    <div className="alert-submit">
                        <div className="container-alert-submit">
                            <Typography id="alert-submit-title">{alertSubmit}</Typography>
                        </div>
                    </div>
                        :null
                }
                {
                    visibleNft ?
                    <NftModal
                        products={props.products}
                        handleCloseModal={handleCloseModal}
                        flag="stake"
                        handleSubmit={handleSubmit}
                    />
                    :null
                }
                {
                    visibleNftUnstake ?
                    <NftModal
                        products={props.products}
                        handleCloseModal={handleCloseModal}
                        flag="unstake"
                        handleSubmit={handleSubmit}
                    />
                    :null
                }
                <div className="close-staking-detail">
                    <div></div>
                    <div className="close-form" onClick={() => handleClose()}>
                        <div className="border-close">
                            <img src={Close} alt="" className="logo-close" />
                        </div>
                        <Typography id="back">Back</Typography>
                    </div>
                </div>
                <Typography id="staking-detail-text">METAKEY STAKING</Typography>
                <div className="staking-detail-container">
                    <div className="left-detail-container">
                        <img src={img} alt="" className="product-detail-container" />
                        <div className="info-container">
                            <div className="header-info-container">
                                <div className="flex-header">
                                    <Typography id="item-info">Item Info</Typography>
                                    <img src={Expand} alt="" />
                                </div>
                            </div>
                            <div className="detail-item-info">
                                <div className="col-1">
                                    <Typography id="col-1-line1">NFT Contract ID</Typography>
                                    <Typography id="col-1-line2">Token ID</Typography>
                                    <Typography id="col-1-line3">Creator’s Address</Typography>
                                    <Typography id="col-1-line4">Owner Address</Typography>
                                </div>
                                <div className="col-2">
                                    <Typography id="col-2-line-1">:</Typography>
                                    <Typography id="col-2-line-2">:</Typography>
                                    <Typography id="col-2-line-3">:</Typography>
                                    <Typography id="col-2-line-4">:</Typography>
                                </div>
                                <div className="col-3">

                                </div>
                            </div>
                        </div>
                        <div className="collection-info">
                            <div className="header-collection-info">
                                <div className="flex-header-collection-info">
                                    <Typography id="info-collection-title">Collection Info</Typography>
                                    <img src={Expand} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-detail-container">
                        <div className={stake === false ? "detail-description" : "detail-description-unstake"}>
                            <div className="wrapper-detail-description">
                                <Typography id="title-description-detail">Lorem Ipsum</Typography>
                                <Typography id="sub-title-description-detail">Lorem Ipsum</Typography>
                                <Typography id="text-description-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra arcu lacus, imperdiet facilisis bibendum risus, purus ut. Porta mi, duis etiam lectus dis sed fermentum. Mi nunc est arcu, est in pretium bibendum. At tempus, quam tellus placerat libero, morbi pharetra. Vestibulum ut tincidunt gravida diam a amet eget adipiscing.
                                </Typography>
                                {
                                    stake === false ?
                                        <div>
                                            {
                                                visibleTime === false ?
                                                <div className="stake-btn" onClick={() => setVisibleNft(true)}>
                                                    <Typography id="stake-btn-title">Stake</Typography>
                                                </div>
                                                : visibleTime === true ?
                                                <div className="unstake-duration">
                                                    {
                                                        unstakeDuration.map((el, idx) => {
                                                            return (
                                                                <div className="duration-times" key={idx}>
                                                                    <Typography id="duration-time-title">{el.title}</Typography>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                :
                                                <div>
                                                    <div className="button-unstake-1">
                                                        <Typography id="unstake-title-btn-1">Unstake</Typography>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        :
                                        <div className="stake-btn-unstake">
                                            <div className="stake-btn-action-unstake">
                                                <div className="button-unstake" onClick={() => setVisibleNftUnstake(true)}>
                                                    <Typography id="unstake-title-btn">Unstake</Typography>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <Typography id="nft-boost">NFT Boost</Typography>
                        <img src={Line} alt="" className="divider" />
                        <div className="nft-boost-detail">
                            <Typography id="staking-boost">Staking Boost: <span id="value-staking-boost">10%</span></Typography>
                            <Typography id="additional-pool">Additional Pool Weight: <span id="value-additional-pool">10%</span></Typography>
                        </div>
                        <div className="reward-staked-info">
                            <Typography id="reward-staked-title">Reward & Staked</Typography>
                            <img src={Line} alt="" className="divider" />
                            <div className="reward-flex">
                                <div>
                                    <div className="reward-amount">
                                        <Typography id="reward-amount-text">Reward Amount :</Typography>
                                        <Typography id="reward-amount-val">12,445.1</Typography>
                                    </div>
                                    <div className="staked-tokens">
                                        <Typography id="staked-tokens-title">Staked Tokens :</Typography>
                                        <Typography id="staked-tokens-val">4</Typography>
                                    </div>
                                </div>
                                <div className="total-staked">
                                    <Typography id="total-staked-title">Total Staked :</Typography>
                                    <Typography id="total-staked-val">12</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="owner-info">
                            <div className="border-logo-owner">
                                <div className="owner-img">
                                    <img src={GggLogo} alt="" id="logo-owner-info" />
                                </div>
                            </div>
                            <div className="description-company">
                                <Typography id="ggg-owner">GGG</Typography>
                                <Typography id="link-ggg">https://goodgamesguild.com</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};