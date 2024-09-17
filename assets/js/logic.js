// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// function for savedTheme in localStorage
document.addEventListener('DOMContentLoaded', function (event) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }
});

// function for toggled theme when button is clicked
const button = document.querySelector("#toggle");

button.addEventListener('click', function () {
  if (document.body.classList.contains('dark')) {
    document.body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let allBlogPosts = JSON.parse(localStorage.getItem("allBlogPosts")) || []
  return allBlogPosts;
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(allBlogPosts) {
  const myJSON = JSON.stringify(allBlogPosts)
  localStorage.setItem("allBlogPosts", myJSON)
}