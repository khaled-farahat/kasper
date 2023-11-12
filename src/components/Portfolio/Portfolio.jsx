import "./Portfolio.css";
import shuffle1 from '../../assets/shuffle-01.jpg'
import shuffle2 from '../../assets/shuffle-02.jpg'
import shuffle3 from '../../assets/shuffle-03.jpg'
import shuffle4 from '../../assets/shuffle-04.jpg'
import shuffle5 from '../../assets/shuffle-05.jpg'
import shuffle6 from '../../assets/shuffle-06.jpg'
import shuffle7 from '../../assets/shuffle-07.jpg'
import shuffle8 from '../../assets/shuffle-08.jpg'

export default function Portfolio() {
  return (
    <section className="port" id="portfolio">
      <div className="container">
        <div className="heading">
          <h1>Portfolio</h1>
          <p>
            Curabitur arcu erat, accurnsan id imperdietet, porttitor at sem.
            Mauris blandit aliquet elit eget tncidunt
          </p>
        </div>
        <div className="types">
          <ul>
            <li className="active">All</li>
            <li> App</li>
            <li>Photography</li>
            <li>Web </li>
            <li>print</li>
          </ul>
        </div>
      </div>
      <div className="projs">
        <figure className="proj">
          <img src={shuffle1} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
        <figure className="proj">
          <img src={shuffle2} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
        <figure className="proj">
          <img src={shuffle3} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
        <figure className="proj">
          <img src={shuffle4} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
        <figure className="proj">
          <img src={shuffle5} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
        <figure className="proj">
          <img src={shuffle6} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
        <figure className="proj">
          <img src={shuffle7} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
        <figure className="proj">
          <img src={shuffle8} alt="proj1" />
          <figcaption>
            <h1>Awesome Image</h1>
            <p>Photography</p>
          </figcaption>
        </figure>
      </div>
      <div className="more">
        <button>More</button>
      </div>
    </section>
  );
}
