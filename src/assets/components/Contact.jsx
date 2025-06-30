import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const containerId = "contactContentSection";
  return (
    <div className="pageContentSection" id={containerId}>
      <h2>Contact</h2>
      <div className="content" id="contactContentContainer">
        <ContactForm />
      </div>
    </div>
  );
};
