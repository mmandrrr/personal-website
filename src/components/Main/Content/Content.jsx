import { Link } from "react-router-dom"

const Content = () => {
    return(
        <section className="main_content">
            <h1 className="main_title">Max Mandrika</h1>
            <p className="main_description">
                <span>Welcome to my web-site!</span>
                I am Junior Front-End Developer with a passion for code. 
            </p>
            <Link to='/about' className="main_button">Find out! <span></span></Link>
            
            <div className="bitmoji-tag"><span></span></div>
        </section>
    )
}

export default Content