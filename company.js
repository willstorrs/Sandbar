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
      let companyData = JSON.parse(localStorage.getItem('selectedCompany'));

      if (companyData) {
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
      }

      localStorage.removeItem('selectedCompany');
  })
  .catch(error => {
      console.log(error);
      alert('An error occurred while fetching companies data. Please try again later.');
  });

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
