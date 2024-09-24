import Fullstar from "./../../img/cards/full-star.svg";
import Cleanstar from "./../../img/cards/clean-star.svg";

const Card = ({ img, location, title, price, text, review }) => {
    return (
        <div className="card">
            <img src={img} className="card-img" />
            <div className="card-desc">
                <span className="loc">{location}</span>
                <div className="card-title">
                    <span className="title">{title}</span>
                    <span className="price">
                        {price}
                        <span className="superscript">pp</span>
                    </span>
                </div>
                <p className="card-p">{text}</p>
                <div className="card-review">
                    <div className="stars">
                        <img src={Fullstar} />
                        <img src={Fullstar} />
                        <img src={Fullstar} />
                        <img src={Fullstar} />
                        <img src={Cleanstar} />
                    </div>
                    <span>
                        <span id="reviewCount">{review}</span> reviews
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
