import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div>
        <h1 className="contact-title">CONTACT ME:</h1>
        <ul className="social-icons">
          <li className="icon icon--linkedin">
            <a href="https://www.linkedin.com/in/gisela-claure/">
              <span className="icon__name">LinkedIn</span>
            </a>
          </li>
          <li className="icon icon--github">
            <a href="https://github.com/GiselaClaure">
              <span className="icon__name">GitHub</span>
            </a>
          </li>
          <li className="icon icon--email">
            <a href="mailto:giselaclaure@gmail.com">
              <span className="icon__name">Email</span>
            </a>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default Contact;
