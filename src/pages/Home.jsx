

import React, { useEffect,useState } from 'react'
import LoadingCard from '../components/cards/LoadingCard'
import RecipeCard from '../components/recipeCard'
import MainRecipe from '../components/mainRecipe'
import { API_SEARCH_BY_CHAR } from '../constants'

import axios from 'axios'

function Home() {

  const [meals, setMeals] = useState(null)

  async function getRandomRecipe(){
    await axios.get(API_SEARCH_BY_CHAR)
    .then(response=>{
      setMeals(response.data.meals);
     
    })
    .catch(error=>console.log(error))
  }

  useEffect(()=>{
    getRandomRecipe()


  },[])
  return (
   
    <>

    <section className="flex flex-col items-center">
        <h2 className=" bg-linear-to-r from-amber-500 to-red-500 bg-clip-text text-4xl text-transparent w-fit font-bold ">Learn, Cook, Eat Your Food</h2>

        {/* <div className="bg-green-700 w-full">
            <LoadingCard/>
        </div> */}

        <div className="bg-neutral-100 p-5 w-full min-h-screen grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-16">
         

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

export default Home