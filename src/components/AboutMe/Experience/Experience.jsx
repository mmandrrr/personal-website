import university from '../../../assets/experience/university-icon.svg'

const Experience = () => {
    return(
        <div className="exp">
            <h3 className="exp__subtitle subtitle">
                Experience
            </h3>
            <h2 className="exp__title title">
                    My name is Maxim
            </h2>
            <span className="exp__divider divider"></span>
            <div className="exp__content">
                <div className="exp__block">
                    <h4>Education</h4>  
                    <ul>
                        <li>
                            <div className="exp__item">
                                <div className="exp__item-header">
                                    <img src={university} alt="university" />
                                    <div className="exp__item-title">
                                        <div className="text_bold-fz14">IFNTUOG</div>
                                        <div className="text_fz12">Geology of Oil and Gas (2015-2020)</div>
                                    </div>
                                </div>
                                <div className="exp__item-content text_fz12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit molestiae repellat possimus fuga minus architecto tempora, vitae excepturi id.</div>
                            </div>
                        </li>
                    </ul>          
                </div>
                <div className="exp__block">
                    <h4>Work Experience</h4>
                    <ul>
                        <li>
                            <div className="exp__item">
                                <div className="exp__item-header">
                                    <img src={university} alt="university" />
                                    <div className="exp__item-title">
                                        <div className="text_bold-fz14">IFNTUOG</div>
                                        <div className="text_fz12">Geology of Oil and Gas (2015-2020)</div>
                                    </div>
                                </div>
                                <div className="exp__item-content text_fz12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit molestiae repellat possimus fuga minus architecto tempora, vitae excepturi id.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience