import HeaderBg from "./header-bg/HeaderBg";
import HeaderContent from "./header-content/HeaderContent";
import Search from "./header-search/Search";
import "./style.css";

const HeaderComps = () => {
    return (
        <div className="big-container">
            <div className="header-container">
                <HeaderBg />
                <HeaderContent />
                <Search />
            </div>
        </div>
    );
};

export default HeaderComps;
