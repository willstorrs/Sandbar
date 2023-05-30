// Fetching details about a company
function fetchCompanyDetails(company) {
    return fetch(`companyDetails/${company}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      });
  }
  
  // Update the page title and header on page load
  window.onload = () => {
    // First, we retrieve the company name from local storage.
    let companyName = localStorage.getItem('selectedCompany');
  
    // If a company name was stored...
    if (companyName) {
      // Update the page title and header.
      document.title = companyName;
      document.querySelector('#company-name').textContent = companyName;
  
      // Then, fetch the company details.
      fetchCompanyDetails(companyName)
        .then(companyDetails => {
          // Assuming your companyDetails is an object with a 'profile' property
          if (companyDetails && companyDetails.profile) {
            document.querySelector('#company-info').textContent = companyDetails.profile;
          }
        })
        .catch(error => console.log(error));
  
      // We can remove the company name from local storage now that we're done with it.
      localStorage.removeItem('selectedCompany');
    }
    else {
      // If no company name was stored, redirect back to the search page.
      window.location.href = 'index.html';
    }
  };
  