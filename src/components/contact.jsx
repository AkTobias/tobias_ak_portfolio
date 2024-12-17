function Contact() {
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
}

export default Contact;
