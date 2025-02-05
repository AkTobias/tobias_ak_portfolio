import "./Technologies.css";

function Technologies() {
   return (
      <section className="technologies section">
         <h1 className="technologies__header">
            Technologies I've worked with so far
         </h1>
         <div className="technology__container">
            <div className="tech__item">
               <h3 className="technologies__h3">HTML</h3>
               <div className="progress__bar">
                  <div className="progress" style={{ width: "60%" }}></div>
               </div>
               <h3 className="technologies__h3">JavaScript</h3>
               <div className="progress__bar">
                  <div className="progress" style={{ width: "65%" }}></div>
               </div>
               <h3 className="technologies__h3">CSS</h3>
               <div className="progress__bar">
                  <div className="progress" style={{ width: "75%" }}></div>
               </div>
               <h3 className="technologies__h3">React</h3>
               <div className="progress__bar">
                  <div className="progress" style={{ width: "60%" }}></div>
               </div>
               <h3 className="technologies__h3">C#</h3>
               <div className="progress__bar">
                  <div className="progress" style={{ width: "70%" }}></div>
               </div>
               <h3 className="technologies__h3">SQL</h3>
               <div className="progress__bar">
                  <div className="progress" style={{ width: "65%" }}></div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Technologies;
