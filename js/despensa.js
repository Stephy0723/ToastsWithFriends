
  document.addEventListener("DOMContentLoaded", function() {
    var recipeForm = document.getElementById("recipeForm");
    var recipeList = document.getElementById("recipeList");
  
    recipeForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var recipeName = document.getElementById("recipeName").value;
      var ingredients = document.getElementById("ingredients").value;
      var instructions = document.getElementById("instructions").value;
  
      if (recipeName.trim() === '' || ingredients.trim() === '' || instructions.trim() === '') {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      var recipeItem = document.createElement("div");
      recipeItem.classList.add("recipe-item");
  
      var recipeContent = `
        <h3>${recipeName}</h3>
        <p><strong>Ingredientes:</strong> ${ingredients}</p>
        <p><strong>Instrucciones:</strong> ${instructions}</p>
      `;
  
      recipeItem.innerHTML = recipeContent;
  
      recipeList.appendChild(recipeItem);
  
      recipeForm.reset();
    });
  });
  