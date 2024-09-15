// TODO: Create a variable that selects the form element
const formEl = document.querySelector("#form")
const username = document.querySelector("#username")
const title = document.querySelector("#title")
const content = document.querySelector("#content")
const submitBtn = document.querySelector("#submitBtn")

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function storeData() {
    // add an empty array, save items into empty array, push said array into local storage
    let allBlogPosts = JSON.parse(localStorage.getItem("allBlogPosts")) || []
    // In other words, if localStorage already has data, parse it, otherwise it is null and we need to return an empty array

    // If Submit button is hit, create var for localStorage 
    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value
    }
    allBlogPosts.push(blogPost);

    // I need to make this saved data visible by using a JSON stringify
    const myJSON = JSON.stringify(allBlogPosts)
    // then I need to store the typed data to localStorage
    localStorage.setItem("allBlogPosts", myJSON)

    // If the form is submitted with missing data, display an error message to the user.
    function errMsg() {
        if (!blogPost.username || !blogPost.title || !blogPost.content) {
            document.getElementById("error").style.display = 'block';
            console.log('Error: All fields must be filled out');
            return;
        }
}
    window.location.href = "/blog.html"
    event.preventDefault()
}

    // then I need to redirect to a new page
    let redirectURL = '/blog.html';

    const redirectPage = function (url) {
        redirectURL = '/blog.html';
        location.assign(url);
    };

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitBtn.addEventListener("click", storeData);

// then the new page needs to show each blog title listed in a div. This will be in the blog.js file