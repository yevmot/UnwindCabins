import Button from "../../buttons/Button.jsx";
import "./style.css";
const FooterForm = () => {
    return (
        <div className="big-container">
            <div className="container">
                <div className="footer-form">
                    <div className="footer-desc">
                        <h1>Sign up to our Newsletter</h1>
                        <p>
                            For a weekly curated collection of 3 things you can
                            watch, read or listen to switch off from the busy
                            everyday.
                        </p>
                    </div>
                    <div className="form-content">
                        <input
                            type="text"
                            className="mail-form"
                            placeholder="james@thegaintpeach.com"
                        />
                        <Button
                            text="Join the mailing list"
                            bgColor="var(--orange)"
                            textColor="var(--dark-green)"
                            hoverColor=""
                        />
                    </div>
                </div>
                <span className="footer-line"></span>
            </div>
        </div>
    );
};

export default FooterForm;
