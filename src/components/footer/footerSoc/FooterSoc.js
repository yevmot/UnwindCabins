import Linkedin from ".//../../../img/icons/media/linkedin.svg";
import X from ".//../../../img/icons/media/x-social.svg";
import Facebook from ".//../../../img/icons/media/facebook.svg";
import Instagram from ".//../../../img/icons/media/instagram.svg";
import Youtube from ".//../../../img/icons/media/youtube.svg";
import "./style.css";

const FooterSoc = () => {
    return (
        <div className="big-container">
            <div className="container">
                <div className="footer-soc">
                    <div className="logo">
                        <label className="logo__first-half">Unwind</label>
                        <label className="logo__second-half">Cabins</label>
                    </div>
                    <div className="copyright">© 2023 UnwindCabins</div>
                    <div className="media">
                        <img
                            className="media-img"
                            alt="Linkedin"
                            src={Linkedin}
                        />
                        <img className="media-img" alt="X" src={X} />
                        <img
                            className="media-img"
                            alt="Facebook"
                            src={Facebook}
                        />
                        <img
                            className="media-img"
                            alt="Instagram"
                            src={Instagram}
                        />
                        <img
                            className="media-img"
                            alt="Youtube"
                            src={Youtube}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSoc;
