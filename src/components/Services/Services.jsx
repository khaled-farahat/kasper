import "./Services.css";
import { CgScreen } from "react-icons/cg";
import {BsGear, BsCamera} from 'react-icons/bs'
import {RiPencilRuler2Line} from 'react-icons/ri'

export default function Services() {
  return (
    <section className="serv" id="services">
      <div className="container">
        <div className="heading">
          <h1>Services</h1>
          <p>
            Curabitur arcu erat, accurnsan id imperdietet, porttitor at sem.
            Mauris blandit aliquet elit eget tncidunt
          </p>
        </div>
        <div className="services">
          <div className="service">
            <span className="icon">
              <CgScreen />
            </span>
            <div className="text">
              <h3 className="title">Vorem amet intuitive</h3>
              <p className="description">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a,
                Curabitur aliquet quam,
              </p>
            </div>
          </div>
          <div className="service">
            <span className="icon">
              <BsGear />
            </span>
            <div className="text">
              <h3 className="title">Vorem amet intuitive</h3>
              <p className="description">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a,
                Curabitur aliquet quam,
              </p>
            </div>
          </div>
          <div className="service">
            <span className="icon">
              <RiPencilRuler2Line />
            </span>
            <div className="text">
              <h3 className="title">Vorem amet intuitive</h3>
              <p className="description">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a,
                Curabitur aliquet quam,
              </p>
            </div>
          </div>
          <div className="service">
            <span className="icon">
              <BsCamera />
            </span>
            <div className="text">
              <h3 className="title">Vorem amet intuitive</h3>
              <p className="description">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a,
                Curabitur aliquet quam,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
