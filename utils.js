function fetchCompanies() {
    return fetch('companies.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            // If response is OK, return the JSON data
            return response.json();
        });
}
