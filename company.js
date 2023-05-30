// Fetches the company data from a json file.
// It uses the Fetch API to get the data and returns a Promise.
const fetchCompanies = () => {
    return fetch('companies.json')
        .then(response => {
            // Checking if the HTTP request was successful.
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            // If successful, parse the response to JSON.
            return response.json();
        });
}

// Function to set company details in HTML
const setCompanyDetails = (data, companyData) => {
    const company = data.find(item => item.CIKNOZ === companyData.CIKNOZ);
    if (company) {
        document.getElementById('company-name').textContent = company.name;
        const info = document.getElementById('company-info');
        Object.keys(company).forEach(key => {
            if (key !== 'name') {
                const p = document.createElement('p');
                p.textContent = `${key}: ${company[key]}`;
                info.appendChild(p);
            }
        });
    } else {
        window.location.href = 'index.html';
    }
};

// Fetches company data and updates the HTML based on it.
fetchCompanies()
    .then(data => {
        let companyData = JSON.parse(localStorage.getItem('selectedCompany'));
        if (companyData) {
            setCompanyDetails(data, companyData);
        }
        localStorage.removeItem('selectedCompany');
    })
    .catch(error => {
        console.log(error);
        alert('An error occurred while fetching companies data. Please try again later.');
    });

// Update the page title and header on page load
window.onload = () => {
    let companyData = JSON.parse(localStorage.getItem('selectedCompany'));
    if (companyData) {
        document.title = `${companyData.name} - Company Info`;
        let header = document.querySelector('header h1');
        if (header) {
            header.textContent = `${companyData.name} - Company Info`;
        }
    } else {
        window.location.href = 'index.html';
    }
};
