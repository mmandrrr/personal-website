import { Link } from "react-router-dom";

const Content = () => {
    return(
        <section className="main__content">
            <h1 className="main__title">Max Mandrika</h1>
            <p className="main__description">
                <span>Welcome to my web-site!</span>
                I am Junior Front-End Developer with a passion for code. 
            </p>
            <Link to='/about' className="main__button">Find out! <span></span></Link>
            
            <div className="bitmoji-tag"><span></span></div>
        </section>
    )
}

export default Content