import React, { useState, useEffect } from "react";

function AddRecipe() {
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [sourceCategoryInput, setSourceCategoryInput] = useState("");
    const [sourceName, setSourceName] = useState("");
    const [reference, setReference] = useState("");
    const [recipeInstructions, setRecipeInstructions] = useState("");
    
    const [sourceCategories, setSourceCategories] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/sourcecategories")
        .then((response) => response.json())
        .then((data) => setSourceCategories(data));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let sourceCategoryId = 0
        sourceCategories.map((sourceCategory) => {
            if (sourceCategory.name === sourceCategoryInput) {
                sourceCategoryId = sourceCategory.id;
            };
            return sourceCategoryId;
        });
        
        const recipeData = {
            name: name,
            picture: picture,
            source_category_id: sourceCategoryId,
            source: sourceName,
            reference: reference,
            instructions: recipeInstructions
        };
        console.log(name)
        console.log(picture)
        console.log(sourceCategoryId)
        console.log(sourceName)
        console.log(reference)
        console.log(recipeInstructions)
        fetch("http://127.0.0.1:5555/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(recipeData),
            })
            .then((response) => response.json())
            .then((newRecipeData) => {
                setName("");
                setPicture("");
                setSourceCategoryInput("");
                setSourceName("");
                setReference("");
                setRecipeInstructions("");
            });
    };

    return (
        <div>
            <h1> Add New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
                <br />
                <label>Picture</label>
                <input type="text" value={picture} onChange={(event) => setPicture(event.target.value)}></input>
                <br />
                <label>Source Category</label>
                <select value={sourceCategoryInput} onChange={(event) => setSourceCategoryInput(event.target.value)}>
                    <option>Select Category</option>
                    {sourceCategories.map((sourceCategory => {
                        return <option key={sourceCategory.id}>{sourceCategory.name}</option>
                    }))}
                </select>
                <br />
                <label>Source Name</label>
                <input type="text" value={sourceName} onChange={(event) => setSourceName(event.target.value)}></input>
                <br />
                <label>Reference</label>
                <input type="text" value={reference} onChange={(event) => setReference(event.target.value)}></input>
                <br />
                <label>Recipe Instructions</label>
                <input type="text" value={recipeInstructions} onChange={(event) => setRecipeInstructions(event.target.value)}></input>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddRecipe;