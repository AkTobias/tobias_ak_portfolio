import "./About.css";
function About() {
   return (
      <article id="about" className="about">
         <section className="about__section">
            <h2>About Me</h2>
            <p>
               My name is Tobias Akermark. I'm an aspiring programmer with a
               passion for creating intuitive and efficient solutions. I love to
               learn new technologies and continually improve my skills.
            </p>
         </section>

         <section className="about__section">
            <h3>Background</h3>
            <p>
               I've always had an interest in programming, but now I'm finally
               following my dream and actively working towards becoming a
               programmer. My professional background in the service industry
               and has helped me develop strong problem-solving and
               communication skills, which I now apply to my programming
               journey. I am committed to improving my skills and exploring new
               technologies, with a focus on both frontend and backend
               development.
            </p>
         </section>

         <section className="about__section">
            <h3>Hobbies</h3>
            <p>
               Here are a few things that i like to do with my spare time, not
               counting programming.
            </p>
            <ul>
               <ul>
                  <li>
                     <h4>Gaming</h4>I enjoy exploring virtual worlds and testing
                     my skills in various genres of games and playing with my
                     friends.
                  </li>
                  <li>
                     <h4>Working Out</h4>
                     Going to the gym is essential for me, as it helps
                     strengthen both my mind and body.
                  </li>
                  <li>
                     <h4>Being In Nature</h4>
                     Whether it's hiking, camping, or simply going for a walk, I
                     find peace and inspiration in nature.
                  </li>
               </ul>
            </ul>
         </section>

         <section className="about__section">
            <h3>Goals</h3>
            <p>
               My primary goal is to continue learning and growing as a
               developer. I want to work on real-world projects that can make an
               impact. In the future, I aim to specialize in full-stack
               development and explore machine learning.
            </p>
         </section>
      </article>
   );
}

export default About;
