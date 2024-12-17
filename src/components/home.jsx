import myHs from "../img/placeholderHs.jpg";

function Home() {
   return (
      <section className="home__section">
         <h1>Welcome to my first react website!</h1>
         <img
            src={myHs}
            alt="picture of me"
            className="home__img"
            height={400}
            width={300}
         />

         <h2>
            add me on linked: <a href=""></a>
         </h2>
      </section>
   );
}

export default Home;
