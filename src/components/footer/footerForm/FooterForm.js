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
                            class="mail-form"
                            placeholder="james@thegaintpeach.com"
                        />
                        <button type="button">Join the mailing list</button>
                    </div>
                </div>
                <span className="footer-line"></span>
            </div>
        </div>
    );
};

export default FooterForm;
