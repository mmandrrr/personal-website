import intro from '../../../assets/Bitmoji/greeting.webp';

const Introduction = () => {
    return(
        <div className="intro">
            <img src={intro} alt="greeting" className="intro__img" />
            <div className="intro__content">
                <h3 className="intro__subtitle subtitle">
                    About Me
                </h3>
                <h2 className="intro__title title">
                    My name is Maxim
                </h2>
                <span className="intro__divider divider"></span>
                <p className="intro__description text_fz14">
                    I am a result-oriented developer whoose main goals are self-improvement and endless learning. My theoretical knowledge and technical skills were tested by pet-projects. This means that I`m ready for new challenges and new achievements. And I look forward to these opportunities with great enthusiasm
                </p>
            </div>
        </div>
    )
}

export default Introduction