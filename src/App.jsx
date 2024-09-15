import { Route, Routes, useParams } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Speech from "./pages/Speech";
import Marketing from "./pages/Marketing";
import Seminar from "./pages/Seminar";
import News from "./pages/News";
import CompanyGuide from "./pages/CompanyGuide";
import Inquiry from "./pages/Inquiry";
import { useEffect, useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    location.pathname !== "/" ? setIsHome(false) : setIsHome(true);
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/news" element={<News />} />
        <Route path="/companyguide" element={<CompanyGuide />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
