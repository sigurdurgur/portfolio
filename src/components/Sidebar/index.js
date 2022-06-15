import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
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
                <FontAwesomeIcon icon={faHome} color="4d4d4d" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassName="active" 
            className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4d" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassName="active" 
            className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4d" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/sigurdurgur">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar