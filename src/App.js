import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Discover from "./components/Discover/Discover";
import Search from "./components/search/Search";
import Inspiration from "./components/inspiration/Inspiration";
import Experience from "./components/experience/Experience";
import VideoBlock from "./components/videoBlock/VideoBlock";
import Find from "./components/find/Find";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Search />
            <Discover />
            <Inspiration />
            <Experience />
            <VideoBlock />
            <Find />
        </div>
    );
}

export default App;
