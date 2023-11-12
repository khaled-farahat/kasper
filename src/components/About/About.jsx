import "./About.css";
import image from "../../assets/about.png";
import { CiCoffeeCup } from "react-icons/ci";
import { IoMdFolder } from "react-icons/io";
import { IoMedalOutline } from "react-icons/io5";
import { BsEnvelopePaper } from "react-icons/bs";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container title">
        <div className="heading">
          <h1>About Us</h1>
          <p>
            Curabitur arcu erat, accurnsan id imperdietet, porttitor at sem.
            Mauris blandit aliquet elit eget tncidunt
          </p>
        </div>
        <figure>
          <img src={image} alt="tab" />
        </figure>
      </div>
      <div className="stats">
        <div className="container pad">
          <div className="content">
            <div className="stat">
              <span className="icon">
                <CiCoffeeCup />
              </span>
              <h1>1,555</h1>
              <p>Coffee Drinks</p>
            </div>
            <div className="stat">
              <span className="icon">
                <IoMdFolder />
              </span>
              <h1>256</h1>
              <p>Completed Projects</p>
            </div>
            <div className="stat">
              <span className="icon">
                <BsEnvelopePaper />
              </span>
              <h1>1,743</h1>
              <p>Mail Sent</p>
            </div>
            <div className="stat">
              <span className="icon">
                <IoMedalOutline />
              </span>
              <h1>17</h1>
              <p>Awards Received</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
