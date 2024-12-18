import { useForm, ValidationError } from "@formspree/react";
import formspreeLogo from "../img/formspreeLogo.jpeg";

function Contact() {
   const [state, handleSubmit] = useForm("meoqbdol");
   if (state.succeeded) {
      return <p>Thanks for sending me an email!</p>;
   }

   return (
      <form onSubmit={handleSubmit} className="contact__main">
         <label htmlFor="email">Email Address</label>
         <input id="email" type="email" name="email" />
         <ValidationError prefix="Email" field="email" errors={state.errors} />

         <label htmlFor="yourName">Name</label>
         <input type="text" name="yourName" />
         <ValidationError
            prefix="YourName"
            field="yourName"
            errors={state.errors}
         />

         <label htmlFor="subject">Subject</label>
         <input type="text" name="subject" required />
         <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
         />

         <label htmlFor="message">Message</label>
         <textarea id="message" name="message" cols={30} rows={10} />
         <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
         />
         <button
            className="home__button"
            type="submit"
            disabled={state.submitting}
         >
            Submit
         </button>

         <p className="contact__p">
            Powered by <img src={formspreeLogo} alt="formspree logo" />
         </p>
      </form>
   );
}

// old
/* function Contact() {
   return (
      <section className="contact__section">
         <form className="contact__form" action="">
            <h2>Contact me </h2>
            <h3>Name </h3>

            <input type="text" />
            <h3>Email </h3>

            <input type="text" />
            <h3>Subject</h3>

            <input type="text" />

            <h3>Message</h3>
            <textarea name="text" id="" cols={40} rows={10}></textarea>
            <button type="submit">Send me an email</button>
         </form>
      </section>
   );
} */

export default Contact;
