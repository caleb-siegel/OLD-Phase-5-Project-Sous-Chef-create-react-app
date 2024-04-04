import React, { useState, useEffect } from "react";
import AddRecipe from "./AddRecipe";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Card, CardHeader, CardMedia, Container } from "@mui/material";
import Chip from "@mui/material/Chip";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter from "./Filter";

function RecipeDirectory() {
    
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/recipes")
        .then((response) => response.json())
        .then((data) => setRecipes(data));
    }, [recipes]);

    const [addRecipe, setAddRecipe] = useState(false)
    let addRecipeButtonText;
    let variantAddRecipe;
    let startIconAddRecipe;
    if (addRecipe) {
        addRecipeButtonText = "Hide Recipe Form"
        variantAddRecipe = "outlined"
        startIconAddRecipe = <RemoveIcon />
    } else {
        addRecipeButtonText = "Add New Recipe"
        variantAddRecipe = "contained"
        startIconAddRecipe = <AddIcon />
    }

    const handleAddRecipe = (event) => {
        event.preventDefault();
        setAddRecipe(!addRecipe);
    };

    const [addFilter, setAddFilter] = useState(false)
    let filterText;
    let variantFilter;
    if (addFilter) {
        filterText = "Hide Filter"
        variantFilter = "outlined"
    } else {
        filterText = "Filter Recipes"
        variantFilter = "contained"
    }
    const handleAddFilter = (event) => {
        event.preventDefault();
        setAddFilter(!addFilter);
    };

    return (
        <Container>
            <Button variant={variantAddRecipe} color="primary" size="small" startIcon={startIconAddRecipe} value={addRecipe} onClick={(event) => handleAddRecipe(event)}>{addRecipeButtonText}</Button>
            {addRecipe ? 
                <AddRecipe recipes={recipes} setRecipes={setRecipes} handleAddRecipe={handleAddRecipe}/>
                :
                ""
            }

            <h1>Recipe Directory</h1>
            <Button variant={variantFilter} color="primary" size="small" startIcon={<FilterAltIcon />} value={addRecipe} onClick={(event) => handleAddFilter(event)}>{filterText}</Button>
            <br />
            {addFilter ? 
                <Filter recipes={recipes} setRecipes={setRecipes} handleAddRecipe={handleAddRecipe}/>
                :
                ""
            }
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {recipes.map((recipe) => (
                    <Card key={recipe.id} sx={{ maxWidth: 345, margin: '10px' }}>
                        <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor:"primary" }} aria-label="recipe">
                        //     R
                        //     </Avatar>
                        // }
                        // action={
                        //     <IconButton aria-label="settings">
                        //     <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title={recipe.name}
                        // subheader=
                        />
                        <CardMedia
                        component="img"
                        height="194"
                        image={recipe.picture}
                        alt={recipe.name}
                        />
                        {recipe.recipe_tags.map(tag => {
                            if (tag && tag.tag) {
                                return <Chip size="small" label={tag.tag.name} color="primary"/>
                            }
                        })}

                        {/* // <CardContent>
                        // <Typography variant="body2" color="text.secondary">
                        //     This impressive paella is a perfect party dish and a fun meal to cook
                        //     together with your guests. Add 1 cup of frozen peas along with the mussels,
                        //     if you like.
                        // </Typography>
                        // </CardContent>
                        // <CardActions disableSpacing>
                        // <IconButton aria-label="add to favorites">
                        //     <FavoriteIcon />
                        // </IconButton>
                        // <IconButton aria-label="share">
                        //     <ShareIcon />
                        // </IconButton>
                        // <ExpandMore
                        //     expand={expanded}
                        //     onClick={handleExpandClick}
                        //     aria-expanded={expanded}
                        //     aria-label="show more"
                        // >
                        //     <ExpandMoreIcon />
                        // </ExpandMore>
                        // </CardActions>
                        // <Collapse in={expanded} timeout="auto" unmountOnExit>
                        // <CardContent>
                        //     <Typography paragraph>Method:</Typography>
                        //     <Typography paragraph>
                        //     Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        //     aside for 10 minutes.
                        //     </Typography>
                        //     <Typography paragraph>
                        //     Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        //     medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        //     occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        //     large plate and set aside, leaving chicken and chorizo in the pan. Add
                        //     pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        //     stirring often until thickened and fragrant, about 10 minutes. Add
                        //     saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        //     </Typography>
                        //     <Typography paragraph>
                        //     Add rice and stir very gently to distribute. Top with artichokes and
                        //     peppers, and cook without stirring, until most of the liquid is absorbed,
                        //     15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        //     mussels, tucking them down into the rice, and cook again without
                        //     stirring, until mussels have opened and rice is just tender, 5 to 7
                        //     minutes more. (Discard any mussels that don&apos;t open.)
                        //     </Typography>
                        //     <Typography>
                        //     Set aside off of the heat to let rest for 10 minutes, and then serve.
                        //     </Typography>
                        // </CardContent>
                        // </Collapse> */}
                    </Card>
                ))}
            </div>
        </Container>
    )
}

export default RecipeDirectory;