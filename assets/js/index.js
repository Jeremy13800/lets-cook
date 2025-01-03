console.log("index.js loaded");

const data = fetch(
  "https://dummyjson.com/recipes?limit=12&sortBy=id&order=desc"
);
// console.log("data : ", data)//promise
// selectionner le conteneur des recettes

const container = document.querySelector(".container");
data
  .then((raw) => {
    return raw.json();
  })
  .then((data) => {
    console.log(data);
    //utiliser map
    //     data.recipes.map((element) => {
    //       console.log(element.name);
    //       //utliser create element article
    //       const article = document.createElement("artciles");
    //       //ajouter une classe
    //       article.classList.add("recipes");
    //       //ajouter le contenu html de l'artcle
    //       article.innerHTML = `<h2>${element.name}</h2>
    //       <img class="recipes__image" src="${element.image}">
    //       <p class="recipes__p">${element.ingredients}</p>
    //       <p class="recipes__p">${element.instructions}</p>`;

    //       //ajouter article au DOM dans le conteneur
    //       container.appendChild(article);
    //     });
  });

const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data;
};

const displayData = async () => {
  const data = await fetchData();
  console.log(data);
  data.recipes.map((element) => {
    console.log(element.name);
    //utliser create element article
    const article = document.createElement("article");
    //ajouter une classe
    article.classList.add("recipe");
    //ajouter le contenu html de l'artcle
    article.innerHTML = ` 
          <h2 class="recipe__title">${element.name}</h2>
          <img class="recipe__image" src="${element.image}">
          <p class="recipe__ingredients">${element.ingredients}</p>
          `;

    //ajouter article au DOM dans le conteneur
    container.appendChild(article);
  });
};

displayData();
