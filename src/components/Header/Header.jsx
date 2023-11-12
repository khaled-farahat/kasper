import logo from '../../assets/logo.png'
import {BsSearch} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="#" ><img src={logo} alt="logo" /></a>
        <nav>
          <span className='ham-icon'><RxHamburgerMenu /></span>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#prices">pricing</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

            <form>
              <input type="text" placeholder="Search" style={{display: "none"}} />
              <span className='icon'><BsSearch /></span>
            </form>
        </nav>
      </div>
    </header>
  )
}
