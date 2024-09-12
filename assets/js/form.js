// TODO: Create a variable that selects the form element
const formEl = document.querySelector("#form")
const username = document.querySelector("#username")
const title = document.querySelector("#title")
const content = document.querySelector("#content")
const submitBtn = document.querySelector("#submitBtn")
console.log(formEl);
//create var for each form section

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function storeData() {
    // If Submit button is hit
    // create var for localStorage 
    const blogPost = {
        // this var will save each sections value
        username: username.value,
        title: title.value,
        content: content.value
    }
    // I need to make this saved data visible by using a JSON stringify
    // this turns JS objects into strings
    // this takes the blogPost var and stringifies it
    const myJSON = JSON.stringify(blogPost)
    // then I need to store the typed data to localStorage
    localStorage.setItem("test", myJSON)

    // then I need to redirect to a new page
    window.location.href = "http://127.0.0.1:5500/blog.html"

    // add an empty array, save items into empty array, push said array into local storage
    // am I doing this right?
    let json_array = {}
    json_array.excludes = []
    console.log(json_array)
    // line 29 helps previous data not be overwritten when hitting submit

    event.preventDefault()
    console.log("Storing data");
    console.log(username.value);
    console.log(title.value);
    console.log(content.value);
    // if (storeData === "") don't know how to do this yet.. 
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitBtn.addEventListener("click", storeData);

// then the new page needs to show each blog title listed in a div. This will be in the blog.js file