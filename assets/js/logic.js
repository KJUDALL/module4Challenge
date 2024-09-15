// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

document.addEventListener('DOMContentLoaded', function (event) {
  let button = document.getElementById("toggle");

  button.addEventListener("click", function (event) {
    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem("theme", 'dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem("theme", 'light');
    }
  });

  let defaultTheme = localStorage.getItem("theme") || 'light'
  document.body.classList.add(defaultTheme);
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage() {
  let allBlogPosts = JSON.parse(localStorage.getItem("readLocalStorage")) || []
  return allBlogPosts;
  readLocalStorage();
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(allBlogPosts) {
  const myJSON = JSON.stringify(allBlogPosts)
  localStorage.setItem("storeLocalStorage", myJSON)
  storeLocalStorage();
}

// ! Use the following function whenever you need to redirect to a different page
// let redirectURL = '';

// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };