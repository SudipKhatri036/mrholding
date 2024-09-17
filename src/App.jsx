import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
// import Home from "./pages/Home";
// import Chat from "./pages/Chat";
// import Speech from "./pages/Speech";
// import Marketing from "./pages/Marketing";
// import Seminar from "./pages/Seminar";
// import News from "./pages/News";
// import CompanyGuide from "./pages/CompanyGuide";
// import Inquiry from "./pages/Inquiry";
// import PostPage from "./pages/PostPage";
// import PageNotFound from "./pages/PageNotFound";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Speech = lazy(() => import("./pages/Speech"));
const Marketing = lazy(() => import("./pages/Marketing"));
const Seminar = lazy(() => import("./pages/Seminar"));
const News = lazy(() => import("./pages/News"));
const CompanyGuide = lazy(() => import("./pages/CompanyGuide"));
const Inquiry = lazy(() => import("./pages/Inquiry"));
const PostPage = lazy(() => import("./pages/PostPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    location.pathname !== "/" ? setIsHome(false) : setIsHome(true);
  }, []);

  return (
    <div className="app">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/speech" element={<Speech />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/news" element={<News />} />
          <Route path="/newspost" element={<PostPage />} />
          <Route path="/companyguide" element={<CompanyGuide />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
