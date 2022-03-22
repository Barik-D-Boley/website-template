const formInfo = {
    name: document.getElementById("register-name-input").input,
    email: document.getElementById("register-email-input").input,
    password1: document.getElementById("register-password1-input").input,
    password2: document.getElementById("register-password2-input").input,
}
console.log(formInfo);

// // Form
// formDOM.addEventListener('submit', async (e) => {
//     e.preventDefault(); // Prevents the submit button from refreshing the page

//     const name = nameInputDOM.value;
//     const price = priceInputDOM.value;
//     const rating = ratingInputDOM.value;
//     const company = companyInputDOM.value;
//     const featured = featuredInputDOM.checked;

//     try {
//         await axios.post('/api/v1/products', { name, price, rating, company, featured });
//         showProducts();
//         formAlertDOM.style.display = 'block';
//         formAlertDOM.textContent = 'Successfully added product';
//         formAlertDOM.classList.add('text-success');
//     } catch (error) {
//         console.log(error.response.data);
//         formAlertDOM.style.display = 'block';
//         formAlertDOM.innerHTML = `An error occurred, please try again.`;
//     }
//     setTimeout(() => {
//         formAlertDOM.style.display = 'none';
//         formAlertDOM.classList.remove('text-success');
//     }, 3000)
// })