import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading">
          <h1>Contact Us</h1>
          <p>
            Curabitur arcu erat, accumsan id imperdietet, porttitor at sem.
            Mauris blandit aliquet elit eget tincidunt
          </p>
        </div>

        <div className="input">
          <div className="take-input">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name=""
              cols={30}
              rows={5}
              placeholder="Message"
              defaultValue={""}
            />
            <div className="submit">
              <button>Send message</button>
            </div>
          </div>
          <div className="our-contacts">
            <div className="number">
              <h4>Get in touch</h4>
              <p>+1 234 567 89 10</p>
            </div>
            <div className="address">
              <h4>WHERE WE ARE</h4>
              <p>Awesome Address 17</p>
              <p>New York,NYC</p>
              <p>123-4567-890</p>
              <p>USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
