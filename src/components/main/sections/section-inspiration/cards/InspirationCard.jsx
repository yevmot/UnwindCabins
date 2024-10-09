const Card = ({ img, slogan, title, text }) => {
    return (
        <div className="card insp-card">
            <img src={img} className="card-img" />
            <div className="card-desc">
                <span className="slogan">{slogan}</span>
                <div className="card-title">
                    <span>{title}</span>
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Card;
