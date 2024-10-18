import FooterNav from "./footerNav/FooterNav";
import FooterForm from "./footerForm/FooterForm";
import FooterSoc from "./footerSoc/FooterSoc";
import "./style.css";

const Footer = () => {
    return (
        <footer>
            <FooterNav />
            <FooterForm />
            <FooterSoc />
        </footer>
    );
};

export default Footer;
