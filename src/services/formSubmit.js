export const formSubmit = (e) => {
    e.preventDefault();

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
    
        return await res.text();
    };

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const text = formData.get('text');

    const data = {
        name,
        email,
        text
    }

    postData('smart.php',data)
        .then(res => console.log(res));
}