import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/sLogo.svg'
import { RiHome2Line } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { MdPerson, MdAlternateEmail } from 'react-icons/md';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
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
        <div className='links'>
            
                <a target="_blank" rel="noreferrer" href="https://github.com/sigurdurgur">
                    <FiGithub />
                </a>
            
        </div>

    </div>
)

export default Sidebar