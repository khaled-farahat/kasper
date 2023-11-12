import "./Skills.css";
import prof1 from '../../assets/skills-01.jpg'
import prof2 from '../../assets/skills-02.jpg'

export default function Skills() {
  return (
    <section className="main">
      <div className="container">
        <div className="testimonials">
          <div className="title">
            <h2>testimonials</h2>
            <p>
              Curabitur arcu erat, accurnsan id imperdiet et, porttitor at sem.
              Macris blandit aliquet eLit, eget tjncidunt
            </p>
          </div>
          <div className="test-content">
            <div className="testimonial">
              <figure>
                <img src={prof1} alt="prof1" />
              </figure>
              <div className="text">
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt.
                </p>
                <h3>John Doe,CEO</h3>
              </div>
            </div>
            <div className="testimonial">
              <figure>
                <img src={prof2} alt="prof2" />
              </figure>
              <div className="text">
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt.
                </p>
                <h3>John Doe,CEO</h3>
              </div>
            </div>
            <div className="bullets">
              <ul>
                <li></li>
                <li className="active"></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="title">
            <h2>Skills</h2>
            <p>
              Curabitur arcu erat, accurnsan id imperdiet et, porttitor at sem.
              Macris blandit aliquet eLit, eget tjncidunt
            </p>
          </div>
          <div className="skills-content">
            <div className="skill">
              <h3>Adobe</h3>
              <div className="prog-holder">
                <span className="prog" style={{width:'90%'}} data-progress = "90%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>Adobe</h3>
              <div className="prog-holder">
                <span className="prog" style={{width:'93%'}} data-progress = "93%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>Adobe</h3>
              <div className="prog-holder">
                <span className="prog" style={{width:'85%'}} data-progress = "85%"></span>
              </div>
            </div>
            <div className="skill">
              <h3>Adobe</h3>
              <div className="prog-holder">
                <span className="prog" style={{width:'87%'}} data-progress = "87%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
