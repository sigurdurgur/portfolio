import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/sLogo.svg'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
// import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 's', 'i', 'g', 'g', 'i']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    return (
        <div className=" container home-page">
            {/* <Logo /> */ }
            <div className="text-zone">
                <h1>
                    <span className={ letterClass }>h</span>
                    <span className={ `${letterClass} _12` }>i,</span>
                    <br />
                    <span className={ `${letterClass} _13` }>i</span>
                    <span className={ `${letterClass} _14` }>'m</span>
                    {/* <img src={LogoTitle} alt= 'developer' /> */ }
                    {/* <Logo /> */ }
                    <AnimatedLetters letterClass={ letterClass }
                        strArray={ nameArray }
                        idx={ 15 } />
                    <br />
                    <AnimatedLetters letterClass={ letterClass }
                        strArray={ jobArray }
                        idx={ 22 } />
                </h1>
                <h2> Fullstack MERN web developer </h2>
                <Link to="contact" className="flat-button">CONTACT ME</Link>
            </div>
            {/* <Logo />   */ }
        </div>
    )
}

export default Home