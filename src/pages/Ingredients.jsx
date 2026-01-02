

import React, { useEffect,useState } from 'react'
import LoadingCard from '../components/cards/LoadingCard'
import RecipeCard from '../components/recipeCard'
import MainRecipe from '../components/mainRecipe'
import { API_FILTER_CATEGORY, API_FILTER_INGREDIENT, API_SEARCH_BY_CHAR } from '../constants'

import axios from 'axios'
import gsap from 'gsap'
import { Outlet } from 'react-router'
import Ingredient from '../components/Ingredient'

function Ingredients() {

  
  const categories= [{"strCategory":"Beef"},{"strCategory":"Breakfast"},{"strCategory":"Chicken"},{"strCategory":"Dessert"},{"strCategory":"Goat"},{"strCategory":"Lamb"},{"strCategory":"Miscellaneous"},{"strCategory":"Pasta"},{"strCategory":"Pork"},{"strCategory":"Seafood"},{"strCategory":"Side"},{"strCategory":"Starter"},{"strCategory":"Vegan"},{"strCategory":"Vegetarian"}]


  const [meals, setMeals] = useState(null)

  async function getRandomRecipe(){
    await axios.get(API_SEARCH_BY_CHAR+'a')
    .then(response=>{
      setMeals(response.data.meals);
     
    })
    .catch(error=>console.log(error))
  }

  async function getIngredient(ingredient) {
    await axios.get(API_FILTER_INGREDIENT + ingredient)
      .then(response => {
        setMeals(response.data.meals);
      })
      .catch(error => console.log(error))
  }

  useEffect(()=>{
    getRandomRecipe()


  },[])
  return (
   
    <>

    <section className="flex flex-col gap-5 items-center">
        <h2 className=" bg-linear-to-r from-amber-500 to-red-500 bg-clip-text text-4xl text-transparent w-fit font-bold text-center">Learn, Cook, Eat Your Food</h2>

        <h3 className="text-center text-2xl font-bold bg-linear-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">Ingredients</h3>


       

        {/* <div className=" p-5 w-full">
          <ul className="category flex-wrap hidden items-center justify-center sm:flex gap-2">

            {categories.map((category)=>(<li key={category.strCategory}
            className='border border-neutral-700 p-2 rounded-4xl cursor-pointer '

            onClick={(e) => {
              gsap.to('ul.category li',{
                duration:0.2,
                backgroundColor: 'white'
              })

              gsap.to(e.target,{
                duration:0.2,
                backgroundColor: 'gray'
              })

              console.log(category.strCategory)

              getCategory(category.strCategory)


            }}
            
            >{category.strCategory}</li>))}

          </ul>
          <select name="categories" id="categories" className="bg-white w-full p-2 rounded sm:hidden"
          
                 onClick={(e) => {
                   const selectedCategory = e.target.value;
                   console.log(selectedCategory);
                   getCategory(selectedCategory);
                 }}
          >
            
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div> */}
        <Ingredient getIngredient={getIngredient} />

        {/* <div className="bg-green-700 w-full">
            <LoadingCard/>
        </div> */}

        <div className="bg-neutral-100 p-5 w-full min-h-screen grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-16 justify-center">
         

          {
            meals &&
            meals.map(meal => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))
          }
        

        </div>

        {/* <MainRecipe/> */}


    </section>
    
    </>
  )
}

export default Ingredients