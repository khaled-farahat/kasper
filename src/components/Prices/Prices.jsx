import "./Prices.css";

export default function Prices() {
  return (
    <section className="prices" id="prices">
      <div className="container">
        <div className="heading">
          <h1>Prices</h1>
          <p>
            Curabitur arcu erat, accumsan id imperdietet, porttitor at sem.
            Mauris blandit aliquet elit eget tincidunt
          </p>
        </div>
        <div className="data">
          <div className="price">
            <div className="price-data">
              <h2>Basic</h2>
              <h1>19</h1>
            </div>
            <div className="features">
              <ul>
                <li>Feature NO 1</li>
                <li>Extra Feature</li>
                <li>Feature NO 2</li>
                <li>Feature</li>
              </ul>
            </div>
            <div className="buy">Buy Now</div>
          </div>
          <div className="price">
            <div className="price-data">
              <h2>PREMIUM</h2>
              <h1>29</h1>
            </div>
            <div className="features">
              <ul>
                <li>Feature NO 1</li>
                <li>Extra Feature</li>
                <li>Feature NO 2</li>
                <li>Feature</li>
              </ul>
            </div>
            <div className="buy">Buy Now</div>
          </div>
          <div className="price">
            <div className="price-data">
              <h2>PRO</h2>
              <h1>39</h1>
            </div>
            <div className="features">
              <ul>
                <li>Feature NO 1</li>
                <li>Extra Feature</li>
                <li>Feature NO 2</li>
                <li>Feature</li>
              </ul>
            </div>
            <div className="buy">Buy Now</div>
          </div>
          <div className="price">
            <div className="price-data">
              <h2>PLATINUM</h2>
              <h1>49</h1>
            </div>
            <div className="features">
              <ul>
                <li>Feature NO 1</li>
                <li>Extra Feature</li>
                <li>Feature NO 2</li>
                <li>Feature</li>
              </ul>
            </div>
            <div className="buy">Buy Now</div>
          </div>
        </div>
        <div className="contact-us">
          <p>Contact us if you have special request</p>
          <button>Contact Us</button>
        </div>
      </div>
    </section>
  );
}
