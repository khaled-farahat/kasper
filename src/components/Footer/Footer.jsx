import './Footer.css'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {TiSocialGooglePlus} from 'react-icons/ti'
import {IoBasketballOutline} from 'react-icons/io5'
import logo from '../../assets/logo.png'


export default function Footer() {

  const year = new Date().getFullYear(); // This will get you the current year

  return (
    <footer>
      <div className="container">
        <div className='content'>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <p className='para'>WE are social</p>
          <div className="social">
            <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><FaFacebookF /></a>
            <a href="https://twitter.com/" target='_blank' rel='noreferrer'><FaTwitter /></a>
            <a href="https://www.google.com/" target='_blank' rel='noreferrer'><TiSocialGooglePlus /></a>
            <a href="https://www.google.com/" target='_blank' rel='noreferrer'><IoBasketballOutline /></a>
          </div>
          <p className='copy-right'>
            &copy; {year} - <span>kasper</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
