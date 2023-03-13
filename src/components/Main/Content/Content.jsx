import { Link } from "react-router-dom"

const Content = () => {
    return(
        <div className="main_content">
            <h1 className="main_title">Max Mandrika</h1>
            <p className="main_description">
                <span>Welcome to my web-site!</span>
                I am Junior Front-End Developer with a passion for code. 
            </p>
            <Link to='/about' className="main_button">Let's Go! <span></span></Link>
            
            <div className="bitmoji-tag"><span></span></div>
        </div>
    )
}

export default Content