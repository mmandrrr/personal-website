import { useEffect } from "react";

const AboutMe = ({changeLoaded}) => {

    useEffect(() => {
        changeLoaded('app loaded-about')
    }, [])
    

    return(
        <div className="about">
            
        </div>
    )
}

export default AboutMe