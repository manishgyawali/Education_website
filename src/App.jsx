import "./App.css";
import Home from "./components/pages/Home";
import Head from "./components/common/header/Head";
import { Route, Routes } from "react-router";
import Header from "./components/common/header/nav";
import Footer from "./components/common/footer/Footer";
import Footerlast from "./components/common/footer/footerlast";
import Team from "./components/pages/Team";
import Allcourse from "./components/pages/Allcourse";
import About from "./components/pages/About";
import Newsletter from "./components/newsletter/Newsletter";
import Contact from "./components/pages/Contact";
import Pricing from "./components/pages/Pricing";
import Journal from "./components/pages/Journal";

function App() {
  return (
    <div className="relative bg-gray-100">
      <div className="relative z-10">
        <Head />
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcourse" element={<Allcourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="pt-6">
        <Newsletter />
      </div>
      <div className="w-10/12 py-10   grid gap-14 mx-auto">
        <Footer />
      </div>
      <Footerlast />
    </div>
  );
}
export default App;
