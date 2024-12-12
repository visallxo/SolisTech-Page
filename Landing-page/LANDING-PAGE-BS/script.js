fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(countries => {
            const dropdown = document.getElementById("countryDropdown");
            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

            countries.forEach(country => {
                const option = document.createElement("option");
                option.value = country.cca2; 
                option.textContent = country.name.common;
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching country data:", error));