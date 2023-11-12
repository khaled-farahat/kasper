import mobile from "../../assets/mobile.png";
import { CgScreen } from "react-icons/cg";
import './Design.css'

export default function Design() {
  return (
    <div className="design">
      <div className="layout">
        <div className="content">
          <h1>OUR DESIGNS COMES WITH...</h1>
          <div className="prop">
            <span className="icon">
              <CgScreen />
            </span>
            Responsive Design
          </div>
          <div className="prop">
            <span className="icon">
              <CgScreen />
            </span>
            Modern And Clean Design
          </div>
          <div className="prop">
            <span className="icon">
              <CgScreen />
            </span>
            Clean Code
          </div>
          <div className="prop">
            <span className="icon">
              <CgScreen />
            </span>
            Browser Friendly
          </div>
        </div>
        <figure className="mobile">
          <img src={mobile} alt="mobile" />
        </figure>
      </div>
    </div>
  );
}
