// grab all the elements we need
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let companyLink = document.querySelector("#company-link");
let homeLink = document.querySelector("#home-link");
let companyNav = document.querySelector("#company-nav");
let companyContent = document.querySelector("#company-content");
let dataList = document.querySelector("#companies");

// function to fetch companies data
function fetchCompanies() {
  return fetch('companies.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    });
}

// function to populate datalist for search input
function populateDataList(data) {
  data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.ticker;
    option.innerText = item.name;
    dataList.appendChild(option);
  });
}

// Fetch company data from JSON file
fetchCompanies()
  .then(data => populateDataList(data))
  .catch(error => console.log(error));

// Search form submit event
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchTerm = searchInput.value;
  // here you can implement your search logic

  console.log(`Search for: ${searchTerm}`);
});

// Link to company page click event
companyLink.addEventListener("click", function () {
  // Here, you might want to fetch and display company information
  // For now, just logging the click event
  console.log("Navigating to company page");
});

// Home link click event
homeLink.addEventListener("click", function () {
  // Here, you might want to navigate back to the home page and display original content
  // For now, just logging the click event
  console.log("Navigating to home page");
});

// Implement the function to fetch and display company details
function displayCompanyDetails() {
  // fetch data from your API

  // then populate the #company-nav and #company-content with fetched data
}

window.addEventListener('load', (event) => {
  console.log('The page has fully loaded');
});
