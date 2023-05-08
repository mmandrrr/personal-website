import emailjs from '@emailjs/browser';
import { resetForm } from './resetForm';

export const formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
    let name = formData.get('name');
    let email = formData.get('email');
    let text = formData.get('text');

    const params = {
        name,
        email,
        text
    }

    console.log(name);

    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, params, publicKey)
        .then(res => {
            console.log(res.status, res.text);
            resetForm(document.getElementById('name'), document.getElementById('email'), document.getElementById('text'))
        })
        .catch(e => {
            console.log(e);
        })
}