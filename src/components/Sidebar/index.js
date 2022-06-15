import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/sLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiHome2Line } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { MdPerson, MdAlternateEmail } from 'react-icons/md';
// import { MdAlternateEmail } from 'react-icons/io'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            {/* <img className='sub-logo' src={LogoSubtitle} alt='logo' /> */}

        </Link>
        <nav>
            <NavLink 
            exact="true" 
            activeclassName="active" 
            to="/">
                <RiHome2Line />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassName="active" 
            className="about-link" to="/about">
                <MdPerson />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassName="active" 
            className="contact-link" to="/contact">
                <MdAlternateEmail />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/sigurdurgur">
                    <FiGithub />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar