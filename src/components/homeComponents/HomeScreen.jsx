import React, {useState, useEffect} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios';
import SearchRecipe from './SearchRecipes';



const HomeScreen = () => {  

  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get(`https://recipes.devmountain.com/recipes`)
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
    .catch((er) => {
      console.log(er)
    })  
  }  

    useEffect(() => {
      getRecipes()
    }, []) 

  return (
    <div>
      <AdBanner />
      <SearchRecipe recipes={recipes}/>
      
    
    </div>
  )
}

export default HomeScreen