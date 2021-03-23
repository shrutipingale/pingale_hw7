const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];
  
  const createCountry = document.querySelector("input");
  const createSuggestions = document.getElementById("suggestions");
  const createSuggestion = country => {
    const element = document.createElement("div");
    element.classList.add("suggestion");
    element.textContent = country;
    element.addEventListener("click", e => {
      countryElement.value = e.target.textContent;
      createSuggestions.innerHTML = "";
    });
    return element;
  };
  createCountry.addEventListener("input", () => {
    createSuggestions.innerHTML = "";
    countryList.forEach(country => {
      if (country.startsWith(createCountry.value)) {
        createSuggestions.appendChild(createSuggestion(country));
      }
    });
  });
  