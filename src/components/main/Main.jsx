import Discover from "./sections/section-discover/Discover";
import Inspiration from "./sections/section-inspiration/Inspiration";
import Experience from "./sections/section-experience/Experience";
import SectionVideo from "./sections/section-video/SectionVideo";
import Find from "./sections/section-find/Find";
import About from "./sections/section-about/About";
import PreFooter from "./sections/section-pre-footer/PreFooter";

const Main = () => {
    return (
        <main>
            <Discover />
            <Inspiration />
            <Experience />
            <SectionVideo />
            <Find />
            <About />
            <PreFooter />
        </main>
    );
};

export default Main;
