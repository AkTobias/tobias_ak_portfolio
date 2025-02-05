import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";
import Referrals from "./components/Referrals/Referrals";

import "./App.css";

function App() {
   return (
      <Router>
         <Header />
         <main className="main_main">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="referrals" element={<Referrals />} />
               <Route path="portfolio" element={<Portfolio />} />
               <Route path="technologies" element={<Technologies />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
         </main>
         <Footer />
      </Router>
   );
}

export default App;
