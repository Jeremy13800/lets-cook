console.log("index.js loaded");

// 🛠️ Sélection des éléments HTML
const searchBar = document.querySelector(".search-bar");
const filter = document.querySelector("#filter"); // Correction du sélecteur
const sortSelector = document.querySelector("#sort"); // Correction du sélecteur
const container = document.querySelector(".container");

// Variables globales
let keyWord = "";
let currentLimit = 10; // Par défaut : 10 plats
let currentSort = "name-asc"; // Par défaut : tri A-Z
let currentTag = "";

// 📥 Fonction pour récupérer les données depuis l'API
const fetchData = async (kw = "", tag = "") => {
  try {
    tag = currentTag;
    const query = kw ? `/search?q=${kw}` : "";
    const query2 = tag ? `/tag/${tag}` : "";
    const url = `https://dummyjson.com/recipes${query}${query2}`;
    console.log(`Fetching data from: ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data.recipes || [];
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
};

// 🔄 Fonction pour trier les données
const sortData = (data, sortType) => {
  return data.sort((a, b) => {
    if (sortType === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
};

// 🎲 Fonction pour afficher les données avec filtres et tri
const displayData = async () => {
  container.innerHTML = "<strong>Chargement en cours...</strong>";

  // Récupérer les données
  let data = await fetchData(keyWord);

  // Appliquer le tri
  data = sortData(data, currentSort);

  // Appliquer la limitation
  data = data.slice(0, currentLimit);

  // Afficher les données
  container.innerHTML = ""; // Nettoyer le conteneur

  data.forEach((element) => {
    const article = document.createElement("article");
    article.classList.add("recipe");
    article.innerHTML = ` 
      <img class="recipe__image" src="${element.image}" alt="${element.name}">
      <h2 class="recipe__title">${element.name}</h2>
      <p class="recipe__ingredients">${element.ingredients}</p>
      <a href="recette.html?id=${element.id}" class="recipe__link">En savoir plus</a>
    `;
    container.appendChild(article);
  });
};

// 🔍 Barre de recherche
searchBar.addEventListener("input", (e) => {
  keyWord = e.target.value;
  displayData();
});

// 🎚️ Sélecteur de limite
filter.addEventListener("change", (e) => {
  currentLimit = parseInt(e.target.value, 10);
  displayData();
});

// 🧩 Sélecteur de tri
sortSelector.addEventListener("change", (e) => {
  currentSort = e.target.value;
  displayData();
});

// 🚀 Affichage initial
displayData();

fetch("https://dummyjson.com/recipes/tags")
  .then((res) => res.json())
  .then(console.log);

//tri par tags

const tagsFilter = document.querySelector("#tagsFilter"); // Correction du sélecteur

// 🏷️ Récupération dynamique des tags depuis l'API
const fetchTags = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/tags`);
    const data = await response.json();
    const tags = data.tags || [];

    // Ajouter les tags dans le sélecteur
    data.forEach((tags) => {
      const option = document.createElement("option");
      option.classList.add("tag");
      option.value = tags;
      option.textContent = tags.charAt(0).toUpperCase() + tags.slice(1); // Majuscule initiale
      tagsFilter.appendChild(option);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des tags :", error);
  }
};

// Charger les tags au démarrage
fetchTags();

// selecteur de tri

tagsFilter.addEventListener("change", (e) => {
  value = e.target.value;
  console.log(value);
  currentTag = value;
  displayData();
});
