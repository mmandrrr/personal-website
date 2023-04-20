import { useState } from "react";
import { Link } from "react-router-dom";


const Mobile = () => {

    const [className, setClassName] = useState('mobile'),
          [burger, setBurger] = useState('open');

    const showMobileMenu = () => {
        setClassName('mobile mobile_open');
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
            <nav className='mobile_menu'>
                <ul className="mobile_list">
                    <li className="mobile_item"><Link onClick={hideMobileMenu} to="/" className="mobile_link">Home <span></span></Link></li>
                    <li className="mobile_item"><Link onClick={hideMobileMenu} to="about" className="mobile_link">About me <span></span></Link></li>
                    <li className="mobile_item"><a href="#" className="mobile_link">Projects <span></span></a></li>
                    <li className="mobile_item"><a href="#" className="mobile_link">Contact me <span></span></a></li>
                </ul>
            </nav>
        </section>
        <div onClick={toggleMobileMenu} className={`mobile_popup ${burger}`}><span></span></div>
        </>
    )
}

export default Mobile