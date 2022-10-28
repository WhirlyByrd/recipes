import React, {useState} from "react";
import classes from "./NewRecipeScreen.module.css";
import { Formik} from "formik";
import axios from "axios";

const NewRecipeScreen = () => {

  // use states for the ingredients
    const [ingredients, setIngredients]= useState([]);
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    //add a new ingredient object to the ingredients array
  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}]);
    setName('');
    setQuantity('');
  };

  // map the ingredients array and return the name and quantity whe even is triggered
  const ingredientDisplay = ingredients.map((e) => {
    return (<li>{e.quantity} {e.name}</li>)
  })


  //initial values to use with Formik
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };


  const onSubmit = (values, {resetForm}) => {
    values.ingredients = ingredients;
    console.log(values);

    axios.post(`https://recipes.devmountain.com/recipes`, values)
    .catch((er) => {
      console.log(er)
    }) 

    resetForm({values: ""})

  };

  

  return (
    <section className={classes["container"]}>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className={classes['formik']} onSubmit={handleSubmit}>
            <div className={classes['row1']}>
              <input
                type="text"
                name="recipeName"
                placeholder="Name"
                value={values.recipeName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="imageURL"
                value={values.imageURL}
                onChange={handleChange}
                placeholder="Image URL"
              />
            </div>

            <div className={classes['row2']}>
              
              <div className={classes['radio-input']}>
              <input type="radio" className={classes['radio']} value={values.cook} name="type" onChange={handleChange}/> <label>Cook</label>
              </div>

              <div className={classes['radio-input']}>
              <input type="radio" className={classes['radio']}  value={values.bake} name="type" onChange={handleChange}/> 
              <label>Bake</label>
              </div>

              <div className={classes['radio-input']}>
              <input type="radio" className={classes['radio']} value={values.drink} name="type" onChange={handleChange}/> 
              <label>Drink</label>
              </div>

            </div>

            <div className={classes['row3']}>
              <input type="text" name="prepTime" value={values.prepTime} placeholder="Prep Time" onChange={handleChange}/>

              <input type="text" name="cookTime" value={values.cookTime} placeholder="Cook Time" onChange={handleChange}/>

              <input type="text" name="serves" value={values.serves} placeholder="Serves" onChange={handleChange}/>
            </div>

            <div className={classes['row4']}>
              
              <div className={classes['ingredient-input']}>
                <input type="text" name="ingredient" placeholder="Ingredient" value={name} onChange={(e) => setName(e.target.value)}/>

                <input type="text" name="quantity" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>

              <div className={classes['ingredients-display']}>
                <ul>
                  {ingredientDisplay}
                </ul>
              </div>
            </div>

            <div className={classes['ingredient-btn']}>
              <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
              >Add Another</button>
              
            </div>
            

            <textarea
              required
              placeholder="What are the instructions?"
              name="instructions"
              value={values.instructions}
              onChange={handleChange}
            />
            <div className={classes['ingredient-btn']}>
            <button 
            type="submit"
            onClick={onSubmit}>Save</button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
