import cards from "../portfolio_cards.json";

function Portfolio() {
   const backupImg = (e) => {
      e.target.onerror = null;
      e.target.src = "https://via.placeholder.com/300";
   };
   return (
      <section id="portfolio" className="portfolio">
         <h2 className="portfolio__header">My Projects</h2>
         <div className="portfolio__main">
            {cards.map((card) => (
               <a
                  href={card.link}
                  target="_blank"
                  className="project__link"
                  rel="noopner noreferrer" // => prevents malicious pages from accessing the original page
               >
                  <div key={card.id} className="portfolio__card">
                     <img
                        src={card.image}
                        alt={card.title}
                        className="card__img"
                        height={300}
                        width={300}
                        onError={backupImg}
                     />
                     <h3 className="portfolio__h3">{card.title}</h3>
                     {/* <p className="portfolio__p">{card.description}</p> */}
                  </div>
               </a>
            ))}
         </div>
      </section>
   );
}

export default Portfolio;
