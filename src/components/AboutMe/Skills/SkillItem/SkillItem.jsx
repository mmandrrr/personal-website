
const SkillItem = ({icon, name, text}) => {
    return(
        <div className="skills__item">
            <img src={icon} alt={name} className="skills__item-icon" />
            <h4 className="skills__item-name text_bold-fz14">{name}</h4>
            <p className="skills__item-description text_fz12">{text}</p>
        </div>
    )
}

export default SkillItem