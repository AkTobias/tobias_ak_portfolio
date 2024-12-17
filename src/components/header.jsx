import { Link } from "react-router-dom";

function Header() {
   return (
      <header className="header">
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/portfolio">Portfolio</Link>
                  <Link to="/contact">Contact</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}
export default Header;
