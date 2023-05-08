
import { formSubmit } from "../../../services/formSubmit"
import Loader from "./Status/Loader"
import Success from "./Status/Success"
import ErrorMessage from "./Status/ErrorMessage"

const Form = () => {

    return(
        <form onSubmit={(e) => formSubmit(e)} className="contact__form">
            <h3>By e-mail</h3>
            <label htmlFor="name">
                Your Name
                <input id="name" type="text" name="name" className="contact_name"/>
            </label>
            <label htmlFor="email">
                Your Email
                <input id="email" type="email" name="email" className="contact_email" />
            </label>
            <label htmlFor="text">
                Your Message
                <textarea id="text" name="text" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Send Letter" className="contact_btn"/>
            <Loader />
            <Success />
            <ErrorMessage />
        </form>
    )
}

export default Form