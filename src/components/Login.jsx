/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../assets/lotties/login.json';


// import css
import './Login.css';

export default function Login() {
    const google = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    };
    const github = () => {
        window.open("http://localhost:4000/auth/github", "_self");
    };

    return (
        <div className="loginTop">

            <nav>
                <div className="logo">
                    <img
                        className="appLogo"
                        src="https://res.cloudinary.com/dfrntsanb/image/upload/f_auto,q_auto/v1/GetSetOA.com/aqecjxdpowshtfr5tper"
                    />
                    <h1 className="name">GetSet </h1>
                    <h1 className="nameGr">OA.com</h1>
                </div>
            </nav>


            <div className="loginWrapper">
                <div className="Lcontainer">
                    <Player
                        src={animationData}
                        className="playerb"
                        loop
                        autoplay
                        speed={"2"}
                    // style={{ height: "50px", width: "50px" }}
                    />
                    <div className="btnDiv">

                        <button className="googleBtn btn" onClick={google}>
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            />{" "}
                            <p className="google-btn-text">Login with Google</p>
                        </button>


                        <button className="gitBtn btn" onClick={github}>
                            <img
                                className="git-icon"
                                src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
                            />{" "}

                            <p className="git-btn-text">Login with Github</p>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
}