import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import RecipeCard from '../recipeCardComponents/RecipeCard';
import classes from './SearchRecipes.module.css'


const SearchRecipe = ({recipes}) => {


    const [search, setSearch] = useState('')

    const recipeDisplay = recipes
    .filter((recipe) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe) => {
        return <RecipeCard recipe={recipe}/>
    })

    return (
        <div className={classes['display-recipes']}>
        <div className={classes['search-recipes']}>
        <span className={classes['search']}>
            <SearchIcon style={{ color: '#DB7533'}}></SearchIcon>
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
            />
        </span>
        </div>
        <div className={classes['recipes-container']}>{recipeDisplay}</div>
        </div>
    )
}

export default SearchRecipe