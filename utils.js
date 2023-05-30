// Function to fetch the companies data
// This function is separated out to ensure that it can be reused
// It uses the Fetch API to fetch the data from 'companies.json' and returns a Promise
function fetchCompanies() {
    return fetch('companies.json')
        .then(response => {
            // Checks if the HTTP response is successful
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            // If successful, parses the response to JSON
            return response.json();
        });
}
