import imgBg from "./../../img/find-img-bg.jpg";
import "./style.css";

const Find = () => {
    return (
        <div className="big-container">
            <div className="find-wrapper">
                <div className="find-container">
                    <div className="find-gradient-bg">
                        <div class="find-gradient"></div>
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
                    <div className="find-btn">
                        <button type="button" className="button">
                            Find avilable cabins
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Find;
