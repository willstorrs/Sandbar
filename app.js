function fetchCompanies() {
  return fetch('companies.json')
      .then(response => {
          if (!response.ok) {
              throw new Error("HTTP error " + response.status);
          }
          return response.json();
      });
}

fetchCompanies()
  .then(data => {
      const datalist = document.getElementById('companies');
      
      data.forEach(item => {
          const optionName = document.createElement('option');
          optionName.value = item.name;
          datalist.appendChild(optionName);

          const optionTicker = document.createElement('option');
          optionTicker.value = item.ticker;
          datalist.appendChild(optionTicker);
      });

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
  .catch(error => {
      console.log(error);
      alert('An error occurred while fetching companies data. Please try again later.');
  });
