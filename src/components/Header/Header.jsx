import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className="header">
            <nav className="menu">
                <ul className="menu_list">
                    <li className="menu_item"><Link to="/"className="menu_link">Home</Link></li>
                    <li className="menu_item"><Link to="about" className="menu_link">About me</Link></li>
                    <li className="menu_item"><Link to="#" className="menu_link">Projects</Link></li>
                    <li className="menu_item"><Link to="contact" className="menu_link">Contact me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header