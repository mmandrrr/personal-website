import { useState } from "react";
import { Link } from "react-router-dom";


const Mobile = () => {

    const [className, setClassName] = useState('mobile'),
          [burger, setBurger] = useState('open');

    const showMobileMenu = () => {
        setClassName('mobile mobile__open');
        setBurger('close');
    }

    const hideMobileMenu = () => {
        setClassName('mobile');
        setBurger('open')
    }

    const toggleMobileMenu = () => {
        if(className === 'mobile') {
            showMobileMenu()
        } else {
            hideMobileMenu()
        }
    }

    return(
        <>
        <section className={className}>
            <nav className='mobile__menu'>
                <ul className="mobile__list">
                    <li className="mobile__item"><Link onClick={hideMobileMenu} to="/" className="mobile__link">Home <span></span></Link></li>
                    <li className="mobile__item"><Link onClick={hideMobileMenu} to="about" className="mobile__link">About me <span></span></Link></li>
                    <li className="mobile__item"><Link onClick={hideMobileMenu} to="projects" className="mobile__link">Projects <span></span></Link></li>
                    <li className="mobile__item"><Link onClick={hideMobileMenu} to="contact" className="mobile__link">Contact me <span></span></Link></li>
                </ul>
            </nav>
        </section>
        <div onClick={toggleMobileMenu} className={`mobile__popup ${burger}`}><span></span></div>
        </>
    )
}

export default Mobile