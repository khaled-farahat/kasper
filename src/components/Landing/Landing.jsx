import './Landing.css'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

export default function Landing() {
  return (
    <div className="landing">
      <div className="overlay">
        <div className="content">
          <div className="text">
            <h1>HELLO WORLD! <br /> WE ARE KASPER,WE MAKE ART. </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptates voluptate
              exercitationem quod quos voluptatibus quas doloribus. Quisquam
            </p>
          </div>
        </div>
        <span className="icon left"> <FaAngleLeft /> </span>
        <span className="icon right"> <FaAngleRight /> </span>
        <div className="bullets" >
          <ul>
            <li className="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
