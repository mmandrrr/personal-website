import SkillItem from "./SkillItem/SkillItem";
import { skillList } from "./skillsList";
import { intersectionObs } from "../../../services/intersectionObs";

const Skills = () => {

    intersectionObs(0.1, '.skills');

    const skillsList = skillList.map(({icon, name, text},i) => {
        return(
            <SkillItem 
                icon = {icon}
                name = {name}
                text = {text}
                key={i}
            />
        )
    })

    return(
        <div className="skills">
            <h3 className="skills__subtitle subtitle">
                Skills
            </h3>
            <h2 className="skills__title title">
                What do I use
            </h2>
            <span className="skills__divider divider"></span>
            <div className="skills__wrapper">
                {skillsList}
            </div>
        </div>
    )
}

export default Skills