import React, {useReducer} from 'react';
import { Typography } from '@material-ui/core';
import GggLogo from '../../../assets/ggg.png';
import "./navbar.css";

export default function Navbar() {
    
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [menuNav,setMenuNav] = React.useState([
        {
            name: "JOBE",
            active: false,
        },
        {
            name: "STAKING",
            active: false,
        },
        {
            name: "NFT's",
            active: false,
        },
        {
            name: "Lightpaper",
            active: false,
        },
        {
            name: "Contact Us",
            active: false,
        },
    ]);
    
    const handleClick = (idx) => {
        menuNav.map((el, item) => {
            if (item === idx) {
                menuNav[idx].active = true
            } else {
                el.active = false
            };
        })
        console.log(menuNav);
        forceUpdate()
    };
    return (
        <div className="navbar">
            <div className="nav-wrapper">
                <div className="left-side">
                    <img src={GggLogo} alt="" className="ggg-logo" />
                </div>
                <div className="right-side">
                    <div className="right-side-content">
                        {
                            menuNav.map((el, idx) => {
                                return (
                                    <div key={`a-${idx}`}>
                                        <Typography onClick={() => handleClick(idx)} id={el.active === true ? "menu-nav-active" : "menu-nav"}>{el.name}</Typography>
                                    </div>
                                )
                            })
                        }
                        {/* <Typography id="jobe">JOBE</Typography>
                        <Typography id="staking">STAKING</Typography>
                        <Typography id="nft">NFT's</Typography>
                        <Typography id="lightpaper">Lightpaper</Typography>
                        <Typography id="contact-us">Contact Us</Typography> */}
                        <div className="green-btn">
                            <Typography id="launchpad">Launchpad</Typography>
                        </div>
                        <div className="purple-btn">
                            <Typography id="ggl">good game labs</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};