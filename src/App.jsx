import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Technologies from "./components/technologies";
import Footer from "./components/footer";

import "./App.css";

function App() {
   return (
      <Router>
         <Header />
         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="about" element={<About />} />
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
