import myHs from "../img/placeholderHs.jpg";
import tobiasHs from "../img/tobiasHs.jpg";
import CV from "../documents/cv.pdf";
import hero from "../img/hero.jpg";

function Home() {
   return (
      <>
         <section className="hero__home">
            <h1 className="home__header">Welcome to my first react website!</h1>
            <img className="hero__img" src={hero} alt="picture of mountans" />
         </section>

         <section className="home__section">
            <img
               src={tobiasHs}
               alt="picture of me"
               className="home__img"
               height={400}
               width={300}
            />
            <a
               className="home__button"
               href="https://se.linkedin.com/in/tobias-akermark-605887295?trk=people-guest_people_search-card"
               target="_blank"
               rel="noopener noreferrer"
            >
               My LinkedIn Page
            </a>
            <a
               className="home__button"
               href={CV}
               download="cv.pdf"
               rel="noopener noreferrer"
            >
               Download my CV
            </a>
         </section>
      </>
   );
}

export default Home;
