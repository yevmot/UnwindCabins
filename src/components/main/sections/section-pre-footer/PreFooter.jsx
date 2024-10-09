import BgImg from "./../../../../img/pre-footer-bg.jpg";
import Shadow from "./../../../../img/pre-footer-shadow.png";
import "./style.css";

const PreFooter = () => {
    return (
        <div className="big-container">
            <div className="exp-container">
                <img src={BgImg} alt="BgImg" className="bg-footer" />
                <div className="pre-footer-content">
                    <div className="title">Escape from endless Zoom calls</div>
                    <p>
                        Discover the wonders of spending time offline and away
                        from the office with our 3 day weekend getaway cabin
                        retreats.
                    </p>
                    <div className="pre-footer-btn">
                        <button type="button">Find the perfect getaway</button>
                    </div>
                </div>
                <img className="shadow" src={Shadow} alt="shadow" />
            </div>
        </div>
    );
};

export default PreFooter;
