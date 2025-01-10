console.log("index.js loaded");

console.log(window.location.href);
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get("id");
console.log(id);
fetch(`https://dummyjson.com/recipes/${id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // // Exemple d'affichage des données sur la page
    const container = document.querySelector(".single");
    container.innerHTML = `
          <h1 class="recip__title1">${data.name}</h1>
          <img class="recip__image1" src="${data.image}" alt="${data.name}">
          <p class="recip__ingredients1"><strong>Ingrédients:</strong> ${data.ingredients}</p>
          <p class="recip__instruction"><strong>Instructions:</strong> ${data.instructions}</p>
        `;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération de la recette:", error);
  });
