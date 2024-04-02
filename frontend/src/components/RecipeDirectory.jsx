import React, { useState, useEffect } from "react";
import AddRecipe from "./AddRecipe";

function RecipeDirectory() {
    
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/recipe")
        .then((response) => response.json())
        .then((data) => setRecipes(data));
    }, []);

    const [addRecipe, setAddRecipe] = useState(false)
    let addRecipeButtonText;
    if (addRecipe) {
        addRecipeButtonText = "Hide Recipe Form"
    } else {
        addRecipeButtonText = "Add New Recipe"
    }

    return (
        <div>
            <button value={addRecipe} onClick={(event) => setAddRecipe(!addRecipe)}>{addRecipeButtonText}</button>
            {addRecipe ? 
                <AddRecipe />
                :
                ""
            }
            
            <h1>Recipe Directory</h1>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <div>{recipe.name}</div>
                    <img className="recipe-directory-image" src={recipe.picture} alt="no image" />
                    <div>{recipe.source_category.name}</div>
                    <div>{recipe.source}</div>
                    {recipe.source_category.name === "Website" ?
                        <a href={recipe.reference}>Link</a>
                        :
                        <div>{recipe.reference}</div>}
                    <div>{recipe.instructions}</div>
                </div>
            ))}
        </div>
    )
}

export default RecipeDirectory;