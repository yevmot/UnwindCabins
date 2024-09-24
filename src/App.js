import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Discover from "./components/Discover/Discover";
import Cards from "./components/cards/Cards";
import Search from "./components/search/Search";
import Inspiration from "./components/inspiration/Inspiration";
import InspirationCards from "./components/inspiration/cards/InspirationCards";
import Experience from "./components/experience/Experience";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Search />
            <Discover />
            <Cards />
            <Inspiration />
            <InspirationCards />
            <Experience />
        </div>
    );
}

export default App;
