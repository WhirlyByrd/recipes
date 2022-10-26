import React from "react"
import classes from './RecipeCard.module.css'
import { useNavigate } from "react-router-dom"

const RecipeCard = ({recipe}) => {

    let navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (
        <div className={classes["recipe-card"]}>
            <div className={classes['image']}>
            <img src={recipe.image_url}/>
            </div>

                <div className={classes["recipe-name"]}>
                    <h3>{recipe.recipe_name}</h3>
                </div>
                
            <button className={classes["see-more"]} onClick={handleClick}>See More</button>
        </div>
    )
}

export default RecipeCard