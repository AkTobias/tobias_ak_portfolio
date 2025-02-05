import quotes from "../../quotes.json";
import "./Referrals.css";

function Referrals() {
   return (
      <>
         <section>
            <div className="card__container">
               {quotes.map((item, index) => (
                  <div
                     key={index}
                     className={`card__box ${
                        index % 2 === 0 ? "align-right" : "align-left"
                     }`}
                  >
                     <p className="card__quote">"{item.quote}"</p>
                     <h2 className="card__name">-{item.name}</h2>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
}

export default Referrals;
