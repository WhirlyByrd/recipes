import React, {useState} from "react";
import classes from "./NewRecipeScreen.module.css";
import { Formik } from "formik";

const NewRecipeScreen = () => {

    const [ingredients, setIngredients]= useState([]);
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)

  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}]);
    setName('');
    setQuantity('');
  };

  const ingredientDisplay = ingredients.map((e) => {
    return (<li>{e.name} {e.quantity}</li>)
  })

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

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
  };

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
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

            <div>
              <input type="radio" value={values.cook} name="type" onChange={handleChange}/> Cook
              <input type="radio" value={values.bake} name="type" onChange={handleChange}/> Bake
              <input type="radio" value={values.drink} name="type" onChange={handleChange}/> Drink
            </div>

            <div>
              <input type="text" name="prepTime" value={values.prepTime} placeholder="Prep Time" onChange={handleChange}/>

              <input type="text" name="cookTime" value={values.cookTime} placeholder="Cook Time" onChange={handleChange}/>

              <input type="text" name="serves" value={values.serves} placeholder="Serves" onChange={handleChange}/>
            </div>

            <div>
              <div>
                <input type="text" name="ingredient" placeholder="Ingredient" value={name} onChange={(e) => setName(e.target.value)}/>

                <input type="number" name="quantity" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <div>
                <ul>
                  {ingredientDisplay}
                </ul>
              </div>

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

            <button onClick={onSubmit}>Save</button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
