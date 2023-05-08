
import { formSubmit } from "../../../services/formSubmit"

const Form = () => {

    return(
        <form onSubmit={(e) => formSubmit(e)} className="contact__form">
            <h3>By e-mail</h3>
            <label htmlFor="name">
                Your Name
                <input type="text" name="name" className="contact_name"/>
            </label>
            <label htmlFor="email">
                Your Email
                <input type="email" name="email" className="contact_email" />
            </label>
            <label htmlFor="text">
                Your Message
                <textarea name="text" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Send Letter" className="contact_btn"/>
        </form>
    )
}

export default Form