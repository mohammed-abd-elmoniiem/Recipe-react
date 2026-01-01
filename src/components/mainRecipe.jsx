import React from 'react'

function MainRecipe() {
  return (
    <>

    <div className="main-recipe p-10 grid lg:grid-cols-3 gap-5 bg-neutral-100">

        <h2 className="col-start-1 -col-end-1">burger</h2>
        <div className="header flex flex-col items-center gap-2">
            <img src="./images/rr.jpg" alt="" className="rounded-3xl" />

            <div className="links flex gap-4">
                <a href="" className="bg-green-500 px-4 py-1 rounded-xl">
                    <i className="fa fa-globe mr-2"></i>
                    
                    source
                </a>
                <a href="" className="bg-red-500 px-4 py-1 rounded-xl">
                    <i className="fa-brands fa-youtube mr-2"></i>
                    youtube
                </a>
            </div>



        </div>

        <div className="instructions">
            <p className="">    
                "STEP 1\r\nHeat the butter in a casserole dish until sizzling, then fry the pork for 2-3 mins on each side until browned. Remove from the pan.\r\n\r\nSTEP 2\r\nTip the bacon, carrot, potatoes and swede into the pan, then gently fry until slightly coloured. Stir in the cabbage, sit the chops back on top, add the bay leaf, then pour over the cider and stock. Cover the pan, then leave everything to gently simmer for 20 mins until the pork is cooked through and the vegetables are tender.\r\n\r\nSTEP 3\r\nServe at the table spooned straight from the dish."
            </p>
        </div>

        <div className="ingredients bg-white capitalize p-5 rounded-2xl">
            <h3 className="border-b-4 border-neutral-200 text-3xl p-2">ingredients    </h3>
            <ul className="flex flex-col gap-2">
                <li className="border-b-2 border-b-neutral-200 p-2 flex justify-between">
                    <span className="">sugar</span>
                    <span className="">100g</span>

                </li>
                <li className="">ing 1</li>
                <li className="">ing 1</li>
                <li className="">ing 1</li>
                <li className="">ing 1</li>

            </ul>
        </div>
    </div>
    
    </>
    )
}

export default MainRecipe