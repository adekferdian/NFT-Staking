import React from 'react';
import { Typography } from '@material-ui/core';
import Expand from '../../../assets/expand.png';
import Line from '../../../assets/line.png';
import GggLogo from '../../../assets/ggg.png';
import Close from '../../../assets/Close.png';
import './stakingDetail.css';

export default function StakingDetail(props) {
    console.log(props);
    const { img, stake } = props.sentProduct;
    const [visibleTime, setVisibleTime] = React.useState(false);
    const [alertSubmit, setAlertSubmit] = React.useState("")
    const [visibleAlertSubmit, setVisibleAlertSubmit] = React.useState(false)
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
    const handleClose = () => {
        props.handleCloseDetail(false)
    };
    const handleSubmit = (el, idx) => {
        setVisibleAlertSubmit(true);
        setAlertSubmit(`You have succesfully stake, now you can unstake on ${el.title}`);
        setVisibleTime("ok")
    };

    return (
        <div className="staking-detail">
            {
                visibleAlertSubmit ?
                <div className="alert-submit">
                    <div className="container-alert-submit">
                        <Typography id="alert-submit-title">{alertSubmit}</Typography>
                    </div>
                </div>
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
                                            <div className="stake-btn" onClick={() => setVisibleTime(true)}>
                                                <Typography id="stake-btn-title">Stake</Typography>
                                            </div>
                                            : visibleTime === true ?
                                            <div className="unstake-duration">
                                                {
                                                    unstakeDuration.map((el, idx) => {
                                                        return (
                                                            <div className="duration-times" key={idx} onClick={() => handleSubmit(el, idx)}>
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
                                            <div className="button-unstake">
                                                <Typography id="unstake-title-btn">Unstake</Typography>
                                            </div>
                                            <div className="border-button-unstake">
                                                <div className="wrapper-close-logo-unstake">
                                                    <img src={Close} alt="" className="close-button-unstake" />
                                                </div>
                                            </div>
                                        </div>
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
                                    </div>
                            }
                        </div>
                    </div>
                    <Typography id="nft-boost">NFT Boost</Typography>
                    <img src={Line} alt="" />
                    <div className="nft-boost-detail">
                        <Typography id="staking-boost">Staking Boost: <span id="value-staking-boost">10%</span></Typography>
                        <Typography id="additional-pool">Additional Pool Weight: <span id="value-additional-pool">10%</span></Typography>
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
    );
};