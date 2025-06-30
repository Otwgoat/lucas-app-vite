import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbkjkek");
  const [buttonMessage, setButtonMessage] = useState("Envoyer");
  useEffect(() => {
    if (state.succeeded) {
      setButtonMessage("Message reçu !");
    }
  }, [state.succeeded]);
  return (
    <form onSubmit={handleSubmit} id="contactForm">
      <label htmlFor="firstName">Prénom</label>
      <input
        type="text"
        className="basicInput"
        id="firstName"
        name="firstName"
      />
      <label htmlFor="lastName">Nom</label>
      <input type="text" className="basicInput" id="lastName" name="lastName" />
      <label htmlFor="email">Adresse mail</label>
      <input className="basicInput" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Votre message</label>
      <textarea className="basicInput" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className={state.succeeded ? "succeeded" : " "}
        disabled={state.submitting}
      >
        {buttonMessage}
      </button>
    </form>
  );
};
