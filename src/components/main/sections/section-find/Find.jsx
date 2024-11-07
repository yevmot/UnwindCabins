import imgBg from "./../../../../img/find-img-bg.jpg";
import Button from "../../../buttons/Button";
import "./style.css";

const Find = () => {
    return (
        <div className="big-container">
            <div className="find-wrapper">
                <div className="find-container">
                    <div className="find-gradient-bg">
                        <div className="find-gradient"></div>
                    </div>
                    <img className="find-bg" alt="find-bg" src={imgBg} />
                </div>
                <div className="find-content">
                    <div className="title">
                        Nourish the mind, body, and spirit.
                    </div>
                    <p>
                        Many people find that the combination of being in a
                        peaceful natural setting and engaging in activities that
                        nourish the mind, body, and spirit leave them feeling
                        rejuvenated and refreshed.
                    </p>
                    <div className="btn">
                        <Button
                            text="Find avilable cabins"
                            bgColor="var(--orange)"
                            textColor="black"
                            hoverColor=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Find;
