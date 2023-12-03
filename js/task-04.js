// const form = document.querySelector('.login-form');
// let formData = {};


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const { elements: { email, password }, } = event.currentTarget;
    
//     if (email.value.trim() === '' || password.value.trim() === '') {
        
//         return alert('All form fields must be filled in');
        
//     } 

    
//     formData.email = email.value;
//     formData.password = password.value;
    
//     console.log("👀 ~ formData:", formData);
//     event.currentTarget.reset();

//     const data = new FormData(event.target);
//     data.forEach((value, key) => {
//         console.log(value, key);
//     });
// });

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();


    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }


    const formData = {
        email: emailValue,
        password: passwordValue,
    };


    console.log(formData);

    
    form.reset();
});