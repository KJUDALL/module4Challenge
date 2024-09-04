// TODO: Create a variable that selects the form element
const formEl = document.querySelector("#form") 
const submitBtn = document.querySelector("#submitBtn")
console.log(formEl);
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function storeData() {
    event.preventDefault()
    console.log("Storing data");
    //create var for each form section
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitBtn.addEventListener("click", storeData);
