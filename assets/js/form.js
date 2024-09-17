// TODO: Create a variable that selects the form element
const formEl = document.querySelector("#form");
const username = document.querySelector("#username");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const submitBtn = document.querySelector("#submitBtn");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function storeData() {
    event.preventDefault()
    // add an empty array, save items into empty array, push said array into local storage
    let allBlogPosts = JSON.parse(localStorage.getItem("allBlogPosts")) || []
    // In other words, if localStorage already has data, parse it, otherwise it is null and we need to return an empty array

    const formData = {
        username: username.value,
        title: title.value,
        content: content.value
    }

    // If the form is submitted with missing data, display an error message to the user.
    function errMsg() {
        if (!formData.username || !formData.title || !formData.content) {
            document.getElementById("error").style.display = 'block';
            console.log('Error: All fields must be filled out!');
            return true;
        }
        return false;
    }
    if (errMsg()) {
        return;
    }

    // then I need to redirect to a new page
    let redirectURL = '/blog.html';

    const redirectPage = function (url) {
        redirectURL = '/blog.html';
        location.assign(url);
    };
    // I need to make this saved data visible in localStorage by using a JSON stringify
    allBlogPosts.push(formData);
    console.log(allBlogPosts);
    const myJSON = JSON.stringify(allBlogPosts)
    localStorage.setItem("allBlogPosts", myJSON)

    redirectPage(redirectURL);
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitBtn.addEventListener("click", storeData);

// then the new page needs to show each blog title listed in a div. This will be in the blog.js file