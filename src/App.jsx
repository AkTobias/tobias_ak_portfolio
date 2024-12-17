import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

import "./App.css";

function App() {
   return (
      <Router>
         <Header />
         <h1>Hello World</h1>
         <main>
            <Routes>
               <Route path="/" element={<h1> Welcome to my website!</h1>} />
               <Route path="about" element={<About />} />
               <Route path="portfolio" element={<Portfolio />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
         </main>
         <Footer />
      </Router>
   );
}

export default App;
