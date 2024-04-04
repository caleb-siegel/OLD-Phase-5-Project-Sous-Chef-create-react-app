import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tag from "./Tag";
import { Paper } from "@mui/material";

function AddRecipe({ setRecipes, recipes, handleAddRecipe }) {
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

    const [tags, setTags] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/tags")
        .then((response) => response.json())
        .then((data) => setTags(data));
    }, []);

    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (event, newValue) => {
        event.preventDefault();
        setSelectedTags(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let sourceCategoryId = 0;
        sourceCategories.map((source_category) => {
            if (source_category.name === sourceCategoryInput) {
                sourceCategoryId = source_category.id;
            }
            return sourceCategoryId;
        })
        
        const recipeData = {
            name: name,
            picture: picture,
            source_category_id: sourceCategoryId,
            source: sourceName,
            reference: reference,
            instructions: recipeInstructions
        };
        fetch("http://127.0.0.1:5555/recipes", {
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
                
                let recipeId = newRecipeData.id;
                selectedTags && selectedTags.length > 0 && selectedTags.map(tag => {
                    console.log(recipeId)
                    const tagData = {
                        recipe_id: recipeId,
                        tag_id: tag.id,
                    };
                    fetch("http://127.0.0.1:5555/recipetags", {
                        method: "POST",
                        headers: {
                            "Content-Type": "Application/JSON",
                        },
                        body: JSON.stringify(tagData),
                    })
                    .then((response) => response.json())
                    .then((newTagData) => {
                        // console.log("success")
                        setSelectedTags([]);
                    });
                });
                setRecipes([...recipes, newRecipeData]);
                handleAddRecipe(event);
            });
        
        // recipes && recipes.map((recipe) => {
        //     console.log(`the recipe name is ${recipe.name}`)
        //     console.log(`the inputted name is ${name}`)
        //     console.log(`recipe id is ${recipe.id}`)
        //     if (recipe.name === name) {
        //         recipeId = recipe.id;
        //     }
        //     return recipeId;
        // })

        
    };


    return (
        <Paper elevation={3} sx={{ backgroundColor: '#D4D7D5', padding: '20px'}}>
            <h1> Add New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Name" variant="standard" value={name} onChange={(event) => setName(event.target.value)}/>
                <br />
                <TextField id="outlined-basic" label="picture" variant="standard" value={picture} onChange={(event) => setPicture(event.target.value)}/>
                <br />
                <br />
                <InputLabel id="demo-simple-select-label">Source Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sourceCategoryInput}
                        label="Source Category"
                        onChange={(event) => setSourceCategoryInput(event.target.value)}
                    >
                        {sourceCategories.map(sourceCategory => {
                            return <MenuItem key={sourceCategory.id} value={sourceCategory.name}>{sourceCategory.name}</MenuItem>

                        })}
                    </Select>
                <br />
                <TextField id="outlined-basic" label="Source Name" variant="standard" value={sourceName} onChange={(event) => setSourceName(event.target.value)}/>
                <br />
                <TextField id="outlined-basic" label="Reference" variant="standard" value={reference} onChange={(event) => setReference(event.target.value)}/>
                <br />
                <TextField label="Recipe Instructions" variant="standard" multiline maxRows={20} value={recipeInstructions} onChange={(event) => setRecipeInstructions(event.target.value)}/>
                <br />
                <br />
                <Tag tags={tags} selectedTags={selectedTags} handleTagChange={handleTagChange}/>
                <br />
                <Button variant="contained" color="primary" size="small" type="submit">Submit</Button>
            </form>
        </Paper>
    )
}

export default AddRecipe;