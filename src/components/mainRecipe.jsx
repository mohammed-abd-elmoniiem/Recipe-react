import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import { API_SEARCH_BY_ID } from '../constants';
import axios from 'axios';
import LoadingCard from './cards/LoadingCard';

function MainRecipe() {
    const parems = useParams();

    function splitInstructions(instructions) {
        const arr = instructions.split('step').map((step, index) => {
            return <li className='border-b-2 border-b-neutral-200 p-2' key={index}> {step.trim()}</li>;
        });

        console.log(arr);

        return arr;
    }

    const [meal, setmeal] = useState(null);
    const ingredients = useRef([]);

     async function getRecipe(params){
        await axios.get( API_SEARCH_BY_ID + params.id)
        .then(response=>{
            console.log(response.data.meals[0]);
        setmeal(response.data.meals[0]);
        let i = 1
        ingredients.current = [];

        while(response.data.meals[0][`strIngredient${i}`] != ''){
            ingredients.current.push({
                ingredient: response.data.meals[0][`strIngredient${i}`],
                measure: response.data.meals[0][`strMeasure${i}`]
            });
            i++;
        }

        console.log(ingredients.current);

        })
        .catch(error=>console.log(error))
    }

    useEffect(()=>{
        getRecipe(parems)

    },[])
    
    console.log(parems);
  return (
    <>

    {
        meal == null ?
        <div className="min-h-screen p-10 ">
            <LoadingCard/>
        </div>
        
        :
         <div className="main-recipe p-10 grid lg:grid-cols-3 gap-5 bg-neutral-100">

        <h2 className="col-start-1 -col-end-1 text-4xl sm:text-7xl bg-linear-to-r from-amber-500 to-red-500 bg-clip-text  text-transparent font-bold">{meal.strMeal}</h2>
        <div className="header flex flex-col items-center gap-2">
            <img src={meal.strMealThumb} alt="" className="rounded-3xl" />

            <div className="links flex gap-4">
                <a href={meal.strSource} className="bg-green-500 px-4 py-1 rounded-xl text-center">
                    <i className="fa fa-globe mr-2"></i>
                    
                    source
                </a>
                <a href={meal.strYoutube} className="bg-red-500 px-4 py-1 rounded-xl text-center">
                    <i className="fa-brands fa-youtube mr-2"></i>
                    youtube
                </a>
            </div>



        </div>

        <div className="instructions">
            <ul className="">
                {splitInstructions(meal?.strInstructions)}
            </ul>
        </div>

        <div className="ingredients bg-white capitalize p-5 rounded-2xl">
            <h3 className="border-b-4 border-neutral-200 text-3xl p-2">ingredients    </h3>
            <ul className="flex flex-col gap-2">
                {
                    ingredients.current.map((ing,index)=>{return <li key={index} className="border-b-2 border-b-neutral-200 p-2 flex justify-between">
                        <span className="">{ing.ingredient}</span>
                        <span className="">{ing.measure}</span>
                    </li>
                })}
            </ul>
        </div>
        </div>
    }

   
    
    </>
    )
}

export default MainRecipe