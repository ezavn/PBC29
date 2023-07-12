import VideoPopup from "./components/commons/VideoPopup";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Social from "./components/Social";
import Trailer from "./components/Trailer";
import { PopupProvider } from "./contexts/popupContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Result from "./components/Result";
import Why from "./components/Why";
import Category from "./components/Category";
import Testi from "./components/Testi";
import Coach from "./components/Coach";
import CoachPopup1 from "./components/commons/CoachPopup1";
import CoachPopup2 from "./components/commons/CoachPopup2";
import CoachPopup3 from "./components/commons/CoachPopup3";
import CoachPopup4 from "./components/commons/CoachPopup4";
import CoachPopup5 from "./components/commons/CoachPopup5";
import CoachPopup6 from "./components/commons/CoachPopup6";
import CoachPopup7 from "./components/commons/CoachPopup7";
import CoachPopup8 from "./components/commons/CoachPopup8";
import CoachPopup9 from "./components/commons/CoachPopup9";
import CoachPopup10 from "./components/commons/CoachPopup10";
import CoachPopup11 from "./components/commons/CoachPopup11";
import CoachPopup12 from "./components/commons/CoachPopup12";
import CoachPopup13 from "./components/commons/CoachPopup13";
import Active from "./components/Active";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import Collection2 from "./components/Collection2";
import Ticket from "./components/Ticket";
import PopupRegister from "./components/commons/PopupRegister";
import PopupDiamond from "./components/commons/PopupDiamond";
import PopupGold from "./components/commons/PopupGold";
import PopupMember from "./components/commons/PopupMember";
import PopupStandard from "./components/commons/PopupStandard";
import Trip from "./components/Trip";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    document.querySelectorAll("img").forEach((img) =>
      img.addEventListener("load", () => {
        AOS.refresh();
      })
    );
  }, []);
  return (
    <div className="overflow-x-hidden">
      <PopupProvider>
        <Social />
        <Header />
        <Hero />
        <Trailer />
        <VideoPopup />
        <Process />
        <Trip />
        <Result />
        <Why />
        <Category />
        <Testi />
        <Coach />
        <Active />
        <Ticket />
        <Collection />
        <Collection2 />
        <Footer />
        <PopupRegister />
        <PopupDiamond />
        <PopupGold />
        <PopupMember />
        <PopupStandard />
        <CoachPopup1 />
        <CoachPopup2 />
        <CoachPopup3 />
        <CoachPopup4 />
        <CoachPopup5 />
        <CoachPopup6 />
        <CoachPopup7 />
        <CoachPopup8 />
        <CoachPopup9 />
        <CoachPopup10 />
        <CoachPopup11 />
        <CoachPopup12 />
        <CoachPopup13 />
      </PopupProvider>
    </div>
  );
}

export default App;
