import Review1 from "./../../../../img/revies/client-1.jpg";
import Review2 from "./../../../../img/revies/client-2.jpg";
import Review3 from "./../../../../img/revies/client-3.jpg";
import Review4 from "./../../../../img/revies/client-4.jpg";
import Review5 from "./../../../../img/revies/client-5.jpg";
import Star from "./../../../../img/icons/star.svg";
import Truspilot from "./../../../../img/icons/trustpilot.svg";

import "./style.css";

const HeaderContent = () => {
    return (
        <div className="header-content">
            <h1 className="title">
                Leave the office behind and{" "}
                <span className="highlight">unwind</span>
            </h1>
            <p className="header-text">
                Welcome to our cozy cabin nestled in the heart of the mountains!
                Our cabin is the perfect getaway for those seeking peace and
                relaxation in a natural setting.
            </p>
            <div className="header-reviews">
                <div className="review-imgs">
                    <div className="review-img review-1">
                        <img src={Review1} />
                    </div>
                    <div className="review-img review-2">
                        <img src={Review2} />
                    </div>
                    <div className="review-img review-3">
                        <img src={Review3} />
                    </div>
                    <div className="review-img review-4">
                        <img src={Review4} />
                    </div>
                    <div className="review-img review-5">
                        <img src={Review5} />
                    </div>
                </div>
                <div className="review-stars">
                    <img src={Truspilot} className="truspilot" />
                    <div className="stars">
                        <div className="star">
                            <img src={Star} />
                        </div>
                        <div className="star">
                            <img src={Star} />
                        </div>
                        <div className="star">
                            <img src={Star} />
                        </div>
                        <div className="star">
                            <img src={Star} />
                        </div>
                        <div className="star">
                            <img src={Star} />
                        </div>
                    </div>
                    <span className="points">4.5 / 5</span>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;
