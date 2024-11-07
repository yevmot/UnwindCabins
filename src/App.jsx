import HeaderNav from "./components/header/header-nav/HeaderNav";
import HeaderComps from "./components/header/header-components/HeaderComps";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
// import FormModal from "./components/modals/FormModal";

import "./styles/main.css";

function App() {
    return (
        <div className="App">
            {/* <FormModal /> */}
            <header>
                <HeaderNav />
                <HeaderComps />
            </header>
            <Main />
            <Footer />
        </div>
    );
}

export default App;
