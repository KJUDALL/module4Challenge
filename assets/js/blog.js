// TODO: Create a variable that selects the main element, and a variable that selects the back button element
let mainEl;
let formData;

// TODO: Create a function that builds an element and appends it to the DOM
function appendEl(post, mainEl) {
    let article = document.createElement("article");
    article.innerHTML = `
            <h2>${post.title}</h2>
            <blockquote>${post.content}</blockquote>
            <p>${post.username}</p>`;
    mainEl.appendChild(article);
};
function renderBlogList() {
    mainEl = document.querySelector("#blogMain");
    formData = JSON.parse(localStorage.getItem('allBlogPosts')) || [];
    formData.forEach(function (post) {
        appendEl(post, mainEl);
    });
};
// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Create a function that handles the case where there are no blog posts to display
function emptyBlog(formData) {
    if (!formData.username && !formData.title && !formData.content) {
        console.log("No blog posts here!");
    }
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.


// function renderBlogList() {
//     const articles = document.querySelectorAll('article');
//     articles.forEach(function (article, index) {
//         if (formData[index]) {
//             if (formData[index].username && formData[index].title && formData[index].content) {
//                 appendEl(formData[index], mainEl);
//             } else {
//                 emptyBlog(formData[index]);
//             }
//         }
//     });
// }
// renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function previously in logic.js
let redirectURL = '/index.html';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(redirectURL);
};

const backBtnEl = document.querySelector("#back")

backBtnEl.addEventListener('click', function () {
    redirectPage(redirectURL);
});