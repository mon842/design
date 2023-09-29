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
            "Microsoft Questions.",
            "Atlassian Questions.",
            "Sprinklr Questions.",
            "Every Goddam OA...",
        ],
        loop: {},
        typeSpeed: 20,
        delaySpeed: 50,
    });

    return (
        <div className="wrapper">
            <div className="blackDiv">

                <div className="inlineLanding">
                    <img
                        className="appLogo"
                        src="https://img.freepik.com/premium-vector/modern-letter-c-p-programming-technology-logo-design_568868-467.jpg"
                    />
                    <h1 className="name">GetSet </h1>
                    <h1 className="nameGr">OA.com</h1>
                </div>

                <div className="typeWriter">
                    <h2>
                        <span className="getText">Get</span>{" "}
                        <span className="typeWriterH2">{text}</span>
                        <span className="typeWriterCursor">
                            <Cursor />
                        </span>
                    </h2>
                </div>

                <div className="inline top">
                    <p className="big">Pooling All </p>
                </div>

                <div className="inline">
                    <p className="big ques"> OA Questions</p>
                    <p className="small">from</p>
                </div>

                <div className="inline">
                    <p className="big tier">TIER-1 Colleges</p>
                </div>

                <div className="inline">
                    <p className="small bottom"> across</p>
                    <p className="big india">India</p>
                </div>


                <button className="startBtn" onClick={() => navigator("/auth")}>
                    Start Solving
                </button>

            </div>

            <div className="box1">
                <div className="purpleDiv">
                    <button className="registerBtn" onClick={() => navigator("/auth")}>
                        REGISTER
                    </button>
                    <Player
                        src={animationData}
                        className="player"
                        loop
                        autoplay
                        speed={"2"}
                    // style={{ height: "700px", width: "700px" }}
                    />
                </div>
            </div>

            <Outlet></Outlet>
        </div>
    );
}

export default Landing;