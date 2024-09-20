import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Discover from "./components/Discover/Discover";
import Cards from "./components/cards/Cards";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Discover />
            <Cards />
        </div>
    );
}

export default App;
