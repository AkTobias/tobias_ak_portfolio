import { Link } from "react-router-dom";

function Header() {
   return (
      <header className="header">
         <nav>
            <ul className="header__ul">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/portfolio">Portfolio</Link>
               </li>
               <li>
                  <Link to="/technologies">Technologies</Link>
               </li>
               <li>
                  <Link to="/contact">Contact</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}
export default Header;
