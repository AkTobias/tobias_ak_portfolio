import myHs from "../img/placeholderHs.jpg";
import tobiasHs from "../img/tobiasHs.jpg";
import CV from "../documents/cv.pdf";

function Home() {
   return (
      <section className="home__section">
         <h1 className="home__header">Welcome to my first react website!</h1>
         <img
            src={tobiasHs}
            alt="picture of me"
            className="home__img"
            height={400}
            width={300}
         />
         <button
            className="home__button"
            rel="noopner noreferrer"
            onClick={() => window.open("https://www.linkedin.com/", "_blank")}
         >
            My linkedIn Page
         </button>
         <button className="home__button">
            <a href={CV} download="cv.pdf">
               Download my CV
            </a>
         </button>
      </section>
   );
}

export default Home;
