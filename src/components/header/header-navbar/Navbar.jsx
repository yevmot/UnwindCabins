import login from "./../../../img/icons/login.svg";
import "./style.css";

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <label className="logo__first-half">Unwind</label>
                    <label className="logo__second-half">Cabins</label>
                </div>
                <div className="menu">
                    <a href="/" className="menu-link">
                        <span>Our cabins</span>
                    </a>
                    <a href="/" className="menu-link">
                        <span>Get inspired</span>
                    </a>
                    <a href="/" className="menu-link">
                        <span>Gift a stay</span>
                    </a>
                    <a href="/" className="menu-link">
                        <span>About us</span>
                    </a>
                    <a className="login">
                        <img src={login} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
