import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import RelatedImages from "./Pages/RelatedImages";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";
import logo from "./assets/logo-Webappbackground.jpg";

function App() {
  return (
    <div
      className="w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="w-[100%] h-[100%] overflow-hidden flex flex-col justify-between items-center py-2 bg-top bg-cover bg-no-repeat bg-gradient-to-t from-[#000000e0] to-[#0000005f]">
        <div className="w-[100%] h-[91%]  overflow-y-auto scrollbar-hide ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/related" element={<RelatedImages />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>

        <div className="w-[95%] h-[7%] md:w-[70%] sm:w-[70%] lg:-[40%] xl:w-[30%] flex justify-center items-center lg:w-[50%]">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
