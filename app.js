// grab all the elements we need
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let companyLink = document.querySelector("#company-link");
let homeLink = document.querySelector("#home-link");
let companyNav = document.querySelector("#company-nav");
let companyContent = document.querySelector("#company-content");

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

// Here you can add more JavaScript logic to your application
// For instance, you might want to fetch some initial data when the page loads

window.addEventListener('load', (event) => {
  console.log('The page has fully loaded');
  // you can call any function that fetches data here.
});
// Fetch company data from JSON file
fetch('companies.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        // If response is OK, return the JSON data
        return response.json();
    })
    .then(data => {
        // Get datalist element
        const datalist = document.getElementById('companies');
        
        // Populate datalist with company names and tickers
        data.forEach(item => {
            // Add company name option
            const optionName = document.createElement('option');
            optionName.value = item.name;
            datalist.appendChild(optionName);

            // Add ticker option
            const optionTicker = document.createElement('option');
            optionTicker.value = item.ticker;
            datalist.appendChild(optionTicker);
        });

        // Add event listener to form submission
        document.getElementById('search-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const searchQuery = document.getElementById('search-input').value;
            const company = data.find(item => item.name.toLowerCase() === searchQuery.toLowerCase() || item.ticker.toLowerCase() === searchQuery.toLowerCase());
            if (company) {
                localStorage.setItem('selectedCompany', JSON.stringify(company));
                window.location.href = 'company.html';
            }
        });
    })
    .catch(function(error) {
        console.log(error);
    });
