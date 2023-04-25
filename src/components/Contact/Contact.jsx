import { useEffect } from "react"




const Contact = ({changeLoaded}) => {

    useEffect(() => {
        changeLoaded('app loaded-contact')
    },[])

    return(
        <section className="contact">
            <div className="contact_container">
                <form className="contact_form">
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
                    <input type="button" value="Send Letter" className="contact_btn"/>
                </form>
            </div>
        </section>
    )
}

export default Contact