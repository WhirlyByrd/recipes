import React, {useState, useEffect} from 'react'
import classes from './DetailScreen.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const DetailScreen = () => {  

  const [recipe, setRecipe] = useState([])

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      setRecipe(res.data)
      console.log(res.data)
    .catch((er) => {
        console.log(er)
      })
    })
  }, [])

  return (
    <section className={classes["details-page"]}>
      <section className={classes["image-container"]}>
        <h1 className={classes["recipe-title"]}>{recipe.recipe_name}</h1>
      </section>

      <div className={classes["details-container"]}>
        <div className={classes["ingredient-container"]}>
          <div className={classes["top-info"]}>
            <h2>Recipe</h2>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
          </div>

          <div className={classes["ingredients"]}>
            <h2>Ingredients</h2>
            <div>
              {recipe.ingredients &&
                recipe.ingredients.map((ing, index) => {
                  return (
                    <h4>
                      {ing.quantity} {ing.ingredient}
                    </h4>
                  );
                })}
            </div>
          </div>
        </div>

        <div className={classes["instructions"]}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
