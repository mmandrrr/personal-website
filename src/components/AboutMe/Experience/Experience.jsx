import Education from './Education/Education';
import WorkExperience from './Work Experience/WorkExperience';

import { intersectionObs } from '../../../services/intersectionObs.js';

const Experience = () => {

    let threshold;

    if(innerWidth <= 426) {
        threshold = 0.15
    } else if(innerWidth <= 768) {
        threshold = 0.4
    } else {
        threshold = 0.7
    }

    intersectionObs(threshold, '.exp')

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