import React, {useReducer} from 'react';
import './nftModal.css';
import Close from '../../../assets/Close.png';
import { Typography } from '@material-ui/core';

export default function NftModal(props) {
    console.log(props);
    const { products, flag } = props;
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [selectedTime, setSelectedTime] = React.useState(null);
    const [alertError, setAlertError] = React.useState(false);
    const [alertErrorMessage, setAlertErrorMessage] = React.useState("");
    const [selectedNft, setSelectedNft] = React.useState(false);
    const dataModal = [];
    const [unstakeDuration, ] = React.useState([
        {
            title: "30 Days",
            selected: false
        },
        {
            title: "60 Days",
            selected: false
        },
        {
            title: "90 Days",
            selected: false
        },
    ]);
    const handleTime = (item) => {
        unstakeDuration.map((el,idx) => {
            if (item === idx) {
                console.log(el);
                el.selected = true;
                setSelectedTime({
                    title: el.title
                });
            } else {
                el.selected = false;
            }
            setAlertError(false);
            return 1
        })
        forceUpdate()
    };
    const handleClose = () => {
        props.handleCloseModal(false)
    };
    const handleSubmit = (flag) => {
        console.log(flag);
        console.log(selectedTime);
        let temp = []
        if (selectedTime === null) {
            setAlertError(true);
            setAlertErrorMessage("Please select duration");
        } else {
            if (flag === "stake") {
                if (selectedNft) {
                    products.map((el) => {
                        if (el.stake === false && el.checked === true) {
                            el.stake = true
                            temp.push(el);
                            forceUpdate();
                            props.handleSubmit(temp, flag, selectedTime);
                        }
                        return 1
                    })
                } else {
                    setAlertError(true);
                    setAlertErrorMessage("Please select one of NFTs");
                }
            } else {
                if (selectedNft) {
                    products.map((el) => {
                        if (el.stake === true && el.checked === true) {
                            el.stake = false
                            temp.push(el);
                            forceUpdate();
                            props.handleSubmit(temp, flag, selectedTime);
                        }
                        return 1
                    })
                } else {
                    setAlertError(true);
                    setAlertErrorMessage("Please select one of NFTs");
                }
            }
        } 
    };
    return (
        <div className="nft-modal">
            <div className="nft-modal-container">
                <div className="header-section-modal">
                    <Typography id="nft-modal-title">{flag === "stake" ? "Stake" : "Unstake"}</Typography>
                    <div className="close-form-modal" onClick={() => handleClose()}>
                        <div className="border-close">
                            <img src={Close} alt="" className="logo-close-nft-modal" />
                        </div>
                        <Typography id="back">Close</Typography>
                    </div>
                </div>
                {
                    alertError ?
                    <Typography id="error-input">{alertErrorMessage}</Typography>
                    :null
                }
                <div className="nft-products-wrapeer" style={{justifyContent: dataModal.length < 1 ? "space-around" : "space-between"}}>
                    {
                        products.map((el, idx) => {
                            if (el.stake === false && flag === "stake") {
                                dataModal.push(el);
                                return (
                                    <div className="nft-contents" key={idx} onClick={() => {
                                        if (el.checked === false) {
                                            el.checked = true;
                                            setSelectedNft(true);
                                            setAlertError(false);
                                        } else {
                                            el.checked = false;
                                            setSelectedNft(false);
                                            setAlertError(false);
                                        }
                                        forceUpdate();
                                    }}>
                                        <div className="checkbox">
                                            {
                                                el.checked ?
                                                <img className="checked" src="https://img.icons8.com/color/48/000000/checkmark--v1.png" alt=""/>
                                                :null
                                            }
                                        </div>
                                        <img src={el.img} alt="" className="nft-content-logo" />
                                        <Typography id="nft-content-title">{el.name}</Typography>
                                    </div>
                                )
                            } else if (el.stake === true && flag === "unstake") {
                                dataModal.push(el)
                                return (
                                    <div className="nft-contents" key={idx} onClick={() => {
                                        if (el.checked === false) {
                                            el.checked = true;
                                            setSelectedNft(true);
                                            setAlertError(false);
                                        } else {
                                            el.checked = false;
                                            setSelectedNft(false);
                                            setAlertError(false);
                                        }
                                        forceUpdate();
                                    }}>
                                        <div className="checkbox">
                                            {
                                                el.checked ?
                                                <img className="checked" src="https://img.icons8.com/color/48/000000/checkmark--v1.png" alt=""/>
                                                :null
                                            }
                                        </div>
                                        <img src={el.img} alt="" className="nft-content-logo" />
                                        <Typography id="nft-content-title">{el.name}</Typography>
                                    </div>
                                )
                            };
                            return null
                        })
                    }
                </div>
                <div className="nft-time-duration">
                    {
                        unstakeDuration.map((el, idx) => {
                            return (
                                <div className={el.selected === false ? "nft-duration-times" : "nft-duration-times-active"} key={idx} onClick={() => handleTime(idx)}>
                                    <Typography id="duration-time-title">{el.title}</Typography>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="nft-submit-btn" onClick={() => handleSubmit(flag)}>
                    <Typography id="nft-submit-title">Submit</Typography>
                </div>
            </div>
        </div>
    );
};