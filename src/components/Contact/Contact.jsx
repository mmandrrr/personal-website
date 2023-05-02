import { useEffect } from "react";

import linkedin from '../../assets/social-icons/linedin.svg';
import telegram from '../../assets/social-icons/telegram.svg'

const Contact = ({changeLoaded}) => {

    useEffect(() => {
        changeLoaded('app loaded-contact')
    },[])

    return(
        <section className="contact">
            <div className="contact__container container">
                <h3 className="contact__subtitle subtitle">
                    Contacts
                </h3>
                <h2 className="contact__title title">
                    Contact me in any way
                </h2>
                <span className="contact__divider divider"></span>
                <div className="contact__content">
                    <div className="contact__social">
                        <h3>By social</h3>
                        <div className="contact__social-wrapper">
                            <a href="https://www.linkedin.com/in/max-mandrika-6683b21b7/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#c850f2'>
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                LinkedIn
                            </a>
                            <a href="https://t.me/maxZnav" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z" fill="#c850f2"/>
                                </svg>
                                Telegram
                            </a>
                            <a href="https://github.com/mmandrrr" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#c850f2"/>
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                    <form className="contact__form">
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
                        <input type="button" value="Send Letter" className="contact_btn"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact