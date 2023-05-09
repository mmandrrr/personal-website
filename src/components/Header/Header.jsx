import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className="header">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item"><Link to="/"className="menu__link">Home</Link></li>
                    <li className="menu__item"><Link to="about" className="menu__link">About me</Link></li>
                    <li className="menu__item"><Link to="projects" className="menu__link">Projects</Link></li>
                    <li className="menu__item"><Link to="contact" className="menu__link">Contact me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header