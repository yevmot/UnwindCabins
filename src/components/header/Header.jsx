import Navbar from "./header-navbar/Navbar";
import HeaderBg from "./header-bg/HeaderBg";
import HeaderContent from "./header-content/HeaderContent";
import Search from "./search/Search";
import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="big-container">
                <div className="header-container">
                    <HeaderBg />
                    <HeaderContent />
                    <Search />
                </div>
            </div>
        </header>
    );
};

export default Header;
