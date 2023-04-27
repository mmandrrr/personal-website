import { useEffect } from "react"

const Projects = ({changeLoaded}) => {

    useEffect(() => {
        changeLoaded('app loaded-projects')
    },[])

    return(
        <section className="projects">
            <div className="projects__container container">
                <h3 className="projects__subtitle subtitle">
                    Portfolio
                </h3>
                <h2 className="projects__title title">
                    My projects
                </h2>
                <span className="projects__divider divider"></span>
                <div className="projects__wrapper">
                    
                </div>
            </div>
        </section>
    )
}

export default Projects