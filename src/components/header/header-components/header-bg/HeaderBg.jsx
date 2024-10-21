import HeaderImg from "./../../../../img/header.jpg";
import "./style.css";

const HeaderBg = () => {
    return (
        <div className="img-gradient">
            <div className="header-bg">
                <div className="header-gradient"></div>
            </div>
            <img src={HeaderImg} alt="header-img" className="header-img" />
        </div>
    );
};

export default HeaderBg;
