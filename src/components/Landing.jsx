import { Outlet, useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../assets/lotties/landing.json';

// css import 
import './Landing.css';

function Landing() {
    let navigator = useNavigate();

    const [text] = useTypewriter({
        words: [
            "Google Questions.",
            "Sprinklr Questions.",
            "Every Goddam OA.",
        ],
        loop: {},
        typeSpeed: 20,
        delaySpeed: 50,
    });

    return (
        <div>
            <nav>
                <div className="inlineLanding">
                    <img
                        className="appLogo"
                        src="https://res.cloudinary.com/dfrntsanb/image/upload/f_auto,q_auto/v1/GetSetOA.com/aqecjxdpowshtfr5tper"
                    />
                    <h1 className="name">GetSet </h1>
                    <h1 className="nameGr">OA.com</h1>
                </div>

                <div>
                    <button className="regis button" onClick={() => navigator("/auth")}>
                        REGISTER
                    </button>
                </div>


            </nav>
            <div className="wrapper">

                <div className="blackDiv">

                    <div className="typeWriter inline">
                        <h2>
                            <span className="getText">Get ,</span>{" "}
                            <span className="typeWriterH2">{text}</span>
                            <span className="typeWriterCursor">
                                <Cursor />
                            </span>
                        </h2>
                    </div>

                    <div className="inline top">
                        <p className="big poll">Pooling All </p>
                    </div>

                    <div className="inline">
                        <p className="big ques"> OA Questions</p>
                        <p className="small">from</p>
                    </div>

                    <div className="inline">
                        <p className="big tier ">TIER-1 Colleges</p>
                    </div>

                    <div className="inline">
                        <p className="small bottom"> across</p>
                        <p className="big india poll">India</p>
                    </div>


                    <button className="startBtn " onClick={() => navigator("/auth")}>
                        Start Solving
                    </button>

                </div>

                <div className="heroimg">
                    <img src="https://fresources.tech/images/home_banner.svg" alt="" />
                </div>

                <Outlet></Outlet>
            </div>
        </div>

    );
}

export default Landing;