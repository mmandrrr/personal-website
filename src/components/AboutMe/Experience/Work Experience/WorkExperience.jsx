
import { workExp } from './workExp'

const WorkExperience = () => {

    const workList = workExp.map(({id,icon, title, subtitle, description},i) => {
        return(
            <li key={i}>
                <div className="exp__item">
                    <div className="exp__item-header">
                        <img src={icon} alt={title} id={id}/>
                        <div className="exp__item-title">
                            <div className="text_bold-fz14">{title}</div>
                            <div className="text_fz12">{subtitle}</div>
                        </div>
                    </div>
                    <div className="exp__item-content text_fz12">{description}</div>
                </div>
            </li>
        )
    })

    return(
        <div className="exp__block">
            <h4>Work Experience</h4>
            <ul>
                {workList}
            </ul>
        </div>
    )
}

export default WorkExperience