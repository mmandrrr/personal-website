import Education from './Education/Education';
import WorkExperience from './Work Experience/WorkExperience';

const Experience = () => {
    return(
        <div className="exp">
            <h3 className="exp__subtitle subtitle">
                Experience
            </h3>
            <h2 className="exp__title title">
                My Path
            </h2>
            <span className="exp__divider divider"></span>
            <div className="exp__content">
                <Education />
                <WorkExperience />
            </div>
        </div>
    )
}

export default Experience