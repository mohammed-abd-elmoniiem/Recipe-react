import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { API_INGREDIENTS } from '../constants'
import gsap from 'gsap'

function Ingredient({getIngredient}) {
    


    const [Ingredients, setIngredients] = useState(null)

    async function getIngredients(){


        await axios(API_INGREDIENTS)
        .then(response=>{
          console.log(response.data);
          setIngredients(response.data.meals.slice(0, 40))
        })
        .catch(error=>{
          console.log(error);
        });
    }

    useEffect(()=>{
       getIngredients();
    }, [])
  return (
    <div className='w-full '>

      

        <ul className="ing sm:flex flex-wrap gap-2 justify-center items-center hidden"
    
        >
          {Ingredients && Ingredients.map(ingredient => (
            <li className='p-1 px-2 rounded-4xl cursor-pointer drop-shadow-sm drop-shadow-amber-200' key={ingredient.idIngredient}
            onClick={(e) => {
              getIngredient(ingredient.strIngredient);

              gsap.to('ul.ing li',{
                duration:0.2,
                backgroundColor: 'white'
              })

              gsap.to(e.target,{
                duration:0.2,
                backgroundColor: '#ffa230e5'
              })
              
            }}
            >{ingredient.strIngredient}</li>
          ))}
        </ul>

         <select name="ingredients" id="ingredients" className="bg-white w-full p-2 rounded sm:hidden"

                 onClick={(e) => {
                   const selectedIngredient = e.target.value;
                   console.log(selectedIngredient);
                   getIngredient(selectedIngredient);
                 }}
          >

            { Ingredients && Ingredients.map((ingredient) => (
              <option key={ingredient.idIngredient} value={ingredient.strIngredient}>
                {ingredient.strIngredient}
              </option>
            ))}
          </select>
    </div>

  )
}

export default Ingredient