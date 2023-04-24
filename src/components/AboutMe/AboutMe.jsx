import { useEffect } from "react";
import Introduction from "./Introduction/Introduction";
import Experience from "./Experience/Experience";

const AboutMe = ({changeLoaded}) => {

    useEffect(() => {
        changeLoaded('app loaded-about')
    }, [])
    

    return(
        <section className="about">
            <div className="container">
                <Introduction />
                <Experience />
            </div>
        </section>
    )
}

export default AboutMe