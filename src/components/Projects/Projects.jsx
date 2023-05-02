import { useEffect } from "react";

import ProjectItem from "./ProjectItem/ProjectItem";

import { projectImg } from "./projectsImgData";


const Projects = ({changeLoaded}) => {

    useEffect(() => {
        changeLoaded('app loaded-projects')
    },[])

    const projectList = projectImg.map(({image,idName,link},i) => {
        return(
            <ProjectItem
                image = {image}
                idName = {idName}
                link = {link}
                key={i}
             />
        )
    })

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
                    {projectList}
                </div>
            </div>
        </section>
    )
}

export default Projects