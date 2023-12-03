const form = document.querySelector('.login-form');
// const emailInput = document.querySelector('.email');
// const passInput = document.querySelector('.password');
let formData = {};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password }, } = event.currentTarget;
    
    if (email.value.trim() === '' || password.value.trim() === '') {
        
        return alert('All form fields must be filled in');
        
    } 

    
    formData.email = email.value;
    formData.password = password.value;
    
    console.log("👀 ~ formData:", formData);
    event.currentTarget.reset();

    // const data = new FormData(event.target);
    // data.forEach((value, key) => {
    //     console.log(value, key);
    // });
});