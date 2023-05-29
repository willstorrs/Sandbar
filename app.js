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
                window.location.href = `company.html?CIKNOZ=${company.CIKNOZ}`;
            }
        });
    })
    .catch(function(error) {
        console.log(error);
    });
