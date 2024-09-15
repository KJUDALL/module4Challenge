// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main")
const backBtnEl = document.querySelector("#back")
const blogPost = document.querySelector(".blog-post");

// TODO: Create a function that builds an element and appends it to the DOM
function appendEl() {
    for (let i = 0; i < blogPost.length; i++) {
        const buildEl = document.createElement("article");
        buildEl.textContent = blogPost[i];
        mainEl.appendChild(buildEl);
        // const buildEl = document.body.appendChild(document.createElement("article"))
        // buildEl.textContent = ("test123")
    }
}
appendEl()

// TODO: Create a function that handles the case where there are no blog posts to display
function emptyBlog() {

}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// function renderBlogList() {
//     // if blog posts exist, then render the list
//     if () {

//     } else {
//         // else call the no posts function  
//         emptyBlog()
//     }
// };

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let redirectURL = '/index.html';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(redirectURL);
};