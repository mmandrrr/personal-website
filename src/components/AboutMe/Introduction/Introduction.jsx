import intro from '../../../assets/Bitmoji/greeting.webp'

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error excepturi minus fugit doloremque est soluta vero porro optio laborum, consequuntur, laboriosam saepe. A, eligendi!
                </p>
            </div>
        </div>
    )
}

export default Introduction