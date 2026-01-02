import React from 'react'
import { useNavigate } from 'react-router'

function RecipeCard(props) {
    const navigate = useNavigate()
    console.log(props)
    console.log(props.meal.strMeal)
  return (
    <>
    <div className="py-10 px-3 text-center  h-full bg-neutral-50  rounded-4xl drop-shadow-md flex flex-col items-center justify-end gap-y-2 capitalize hover:scale-110 duration-500 group relative">
         <div className="layer w-3/4  aspect-square mb-4 ">
            

        </div>

        <div className="img bg-neutral-300 absolute -top-4 w-3/4  aspect-square  flex items-center justify-center rounded-full overflow-hidden drop-shadow-2xl   duration-500 group-hover:rotate-360">
            <img src={props.meal.strMealThumb} alt="image" className=" object-cover   w-full  h-full " />

        </div>

        <p className="text-[13px]">{props.meal.strMeal}</p>
        <p className="flex gap-2 items-center">
             <i className="fa fa-earth"></i>
             <span>{props.meal.strArea}</span>
        </p>
        <button className="bg-green-500 text-white px-3 py-1 rounded-full"
        onClick={(e)=>{
            navigate('/recipe/'+props.meal.idMeal)
        }}>
            view recipe
        </button>
    </div>
    
    </>
  )
}

export default RecipeCard