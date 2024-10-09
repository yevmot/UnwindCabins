import FullStar from "./../../../../../img/cards/full-star.svg";
import CleanStar from "./../../../../../img/cards/clean-star.svg";

const Card = ({ img, location, title, price, text, review }) => {
    return (
        <div className="card">
            <img src={img} className="card-img" />
            <div className="card-desc">
                <span className="loc">{location}</span>
                <div className="card-title">
                    <span>{title}</span>
                    <span className="price">
                        {price}
                        <span className="superscript">pp</span>
                    </span>
                </div>
                <p>{text}</p>
                <div className="card-review">
                    <div className="stars">
                        <img src={FullStar} />
                        <img src={FullStar} />
                        <img src={FullStar} />
                        <img src={FullStar} />
                        <img src={CleanStar} />
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