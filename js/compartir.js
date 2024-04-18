document.addEventListener("DOMContentLoaded", function() {
    var newRecipeForm = document.getElementById("newRecipeForm");
    var recipes = []; 
  
    newRecipeForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      var title = document.getElementById("recipeTitle").value;
      var author = document.getElementById("recipeAuthor").value;
      var date = document.getElementById("recipeDate").value;
      var description = document.getElementById("recipeDescription").value;
  
      var recipe = {
        title: title,
        author: author,
        date: date,
        description: description
      };
  
      recipes.push(recipe);
  
      displayRecipe(recipe);
  
      newRecipeForm.reset();
    });
  
    function displayRecipe(recipe) {
      var newSection = document.createElement("section");
      newSection.classList.add("recipe");
      newSection.innerHTML = `
        <h2>${recipe.title}</h2>
        <p>Creada por: <span class="author">${recipe.author}</span></p>
        <p>Fecha: <span class="date">${recipe.date}</span></p>
        <p>${recipe.description}</p>
        <button class="share-button">Compartir</button>
      `;
  
      var container = document.querySelector(".container");
      container.insertBefore(newSection, newRecipeForm);
  
      var shareButton = newSection.querySelector(".share-button");
      shareButton.addEventListener("click", function() {
        shareRecipe(recipe);
      });
    }
  
    function shareRecipe(recipe) {
      alert("¡Compartir receta: " + recipe.title + "!");
    }
  });
  