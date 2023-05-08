import emailjs from '@emailjs/browser';
import { resetForm } from './resetForm';

const classChanger = (target) => {
    target.classList.remove('loading');
    target.classList.add('sent');

    setTimeout(() => {
        target.classList.remove('sent');
    },5000)
}

const throwError = (target) => {
    target.classList.remove('loading');
    target.classList.add('errorm');

    setTimeout(() => {
        target.classList.remove('errorm');
    },5000)
}

export const formSubmit = (e) => {
    e.preventDefault();

    e.target.classList.add('loading');

    const formData = new FormData(e.target);
    
    let name = formData.get('name');
    let email = formData.get('email');
    let text = formData.get('text');

    const params = {
        name,
        email,
        text
    }

    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, params, publicKey)
        .then(res => {
            console.log(res.status, res.text);
            resetForm(document.getElementById('name'), document.getElementById('email'), document.getElementById('text'));
            classChanger(e.target);
        })
        .catch(error => {
            console.log(error);
            throwError(e.target);
            resetForm(document.getElementById('name'), document.getElementById('email'), document.getElementById('text'));
        })
}