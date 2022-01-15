import React, {useReducer} from 'react';
import { Typography } from '@material-ui/core';
import GggLogo from '../../../assets/ggg.png';
import "./navbar.css";

const hasWindow = typeof window !== 'undefined';
function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
        width,
        height,
    };
}
export default function Navbar() {


    const [, setWindowDimensions] = React.useState(getWindowDimensions());

    React.useEffect(() => {
        if (hasWindow) {
            function handleResize() {
            setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    const { width } = getWindowDimensions();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [sideMenu, setSideMenu] = React.useState(false);
    const [menuNav, ] = React.useState([
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
                return menuNav[idx].active = true
            } else {
                return el.active = false  
            };
        })
        console.log(menuNav);
        forceUpdate()
    };
    const handleNav = () => {
        if (sideMenu === true) {
            setSideMenu(false);
        } else {
            setSideMenu(true);
        }
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
                            width >= 769 ?
                            <div className="common-nav">
                                {
                                    menuNav.map((el, idx) => {
                                        return (
                                            <div key={`a-${idx}`}>
                                                <Typography onClick={() => handleClick(idx)} id={el.active === true ? "menu-nav-active" : "menu-nav"}>{el.name}</Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            : 
                            <div onClick={() => handleNav()}>
                                <img className="burger-menu" src="https://img.icons8.com/ios-filled/50/000000/menu-squared-2.png" alt="" />
                            </div>

                        }
                        <div className="green-btn">
                            <Typography id="launchpad">Launchpad</Typography>
                        </div>
                        <div className="purple-btn">
                            <Typography id="ggl">good game labs</Typography>
                        </div>
                    </div>
                    {
                        sideMenu ?
                        <div className="side-menu-active">
                            {
                                menuNav.map((el, idx) => {
                                    return (
                                        <div key={`a-${idx}`} className="simple-nav">
                                            <Typography onClick={() => handleClick(idx)} id={el.active === true ? "menu-nav-active" : "menu-nav"}>{el.name}</Typography>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    );
};