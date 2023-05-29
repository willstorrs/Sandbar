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
        // Get CIKNOZ from URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const ciknoz = urlParams.get('CIKNOZ');

        // Find company in data based on CIKNOZ
        const company = data.find(item => item.CIKNOZ === ciknoz);

        // If company is found, display company information
        if (company) {
            // Assuming 'company-name' is an existing ID in your HTML
            document.getElementById('company-name').textContent = company.name;
        } else {
            // If company is not found, redirect to homepage
            window.location.href = 'index.html';
        }
    })
    .catch(function(error) {
        console.log(error);
    });

// Removed window.onload event as it seemed to be redundant
