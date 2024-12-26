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
         <input type="yourName" name="yourName" />
         <ValidationError
            prefix="YourName"
            field="yourName"
            errors={state.errors}
         />

         <label htmlFor="subject">Subject</label>
         <input type="subject" name="subject" required />
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

export default Contact;
