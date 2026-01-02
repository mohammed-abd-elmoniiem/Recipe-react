

import React, { useEffect,useState } from 'react'
import LoadingCard from '../components/cards/LoadingCard'
import RecipeCard from '../components/recipeCard'
import MainRecipe from '../components/mainRecipe'
import { API_FILTER_AREA, API_FILTER_CATEGORY, API_SEARCH_BY_CHAR } from '../constants'

import axios from 'axios'
import gsap from 'gsap'
import Loading from '../components/Loading'

function Area() {

  
  const areas= [{"strArea":"Algerian"},{"strArea":"American"},{"strArea":"Argentinian"},{"strArea":"Australian"},{"strArea":"British"},{"strArea":"Canadian"},{"strArea":"Chinese"},{"strArea":"Croatian"},{"strArea":"Dutch"},{"strArea":"Egyptian"},{"strArea":"Filipino"},{"strArea":"French"},{"strArea":"Greek"},{"strArea":"Indian"},{"strArea":"Irish"},{"strArea":"Italian"},{"strArea":"Jamaican"},{"strArea":"Japanese"},{"strArea":"Kenyan"},{"strArea":"Malaysian"},{"strArea":"Mexican"},{"strArea":"Moroccan"},{"strArea":"Norwegian"},{"strArea":"Polish"},{"strArea":"Portuguese"},{"strArea":"Russian"},{"strArea":"Saudi Arabian"},{"strArea":"Slovakian"},{"strArea":"Spanish"},{"strArea":"Syrian"},{"strArea":"Thai"},{"strArea":"Tunisian"},{"strArea":"Turkish"},{"strArea":"Ukrainian"},{"strArea":"Uruguayan"},{"strArea":"Venezulan"},{"strArea":"Vietnamese"}]


  const [meals, setMeals] = useState(null)

  async function getRandomRecipe(){
    await axios.get(API_SEARCH_BY_CHAR+'a')
    .then(response=>{
      setMeals(response.data.meals);
     
    })
    .catch(error=>console.log(error))
  }

  async function getArea(area) {
    await axios.get(API_FILTER_AREA + area)
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

    <section className="flex flex-col gap-5 items-center justify-end ">
        <h2 className=" bg-linear-to-r from-amber-500 to-red-500 bg-clip-text text-4xl text-transparent w-fit font-bold text-center ">Learn, Cook, Eat Your Food</h2>

        <h3 className="text-center text-2xl font-bold bg-linear-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">Area</h3>


       

        <div className=" p-5 w-full">
          <ul className="category flex-wrap hidden items-center justify-center sm:flex gap-2">

            {areas.map((area)=>(<li key={area.strArea}
            className='border border-neutral-200 p-2 rounded-4xl cursor-pointer '

            onClick={(e) => {
              gsap.to('ul.category li',{
                duration:0.2,
                backgroundColor: 'white'
              })

              gsap.to(e.target,{
                duration:0.2,
                backgroundColor: '#ffa230'
              })

              console.log(area.strArea)

              getArea(area.strArea)


            }}

            >{area.strArea}</li>))}

          </ul>
          <select name="areas" id="areas" className="bg-white w-full p-2 rounded sm:hidden"

                 onClick={(e) => {
                   const selectedArea = e.target.value;
                   console.log(selectedArea);
                   getArea(selectedArea);
                 }}
          >

            {areas.map((area) => (
              <option key={area.strArea} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        </div>

       {
         meals == null ?
         <Loading/>
         :
          <div className="bg-neutral-100 p-5 w-full min-h-screen grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-16 justify-center">
         

          {
           
            meals.map(meal => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))
          }
        

        </div>
       }

    

    </section>
    
    </>
  )
}

export default Area