

import React, { useRef } from 'react'
import Li from './Li'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router';

function Nav() {

  gsap.registerPlugin(useGSAP)

    const links = ['home','meals','ingredients','area'];
    const ulRef = useRef();
    const toggleIconRef = useRef()

    function dispalyNav(){

      

      

      gsap.to(ulRef.current,{
        delay:0.2,
        duration:0.5,
        translateX: ulRef.current.classList.contains('-translate-x-full')?0:'-100%',
        onComplete:()=>{
          ulRef.current.classList.toggle('-translate-x-full')
          
        }

      })
      
    }
  return (
    <nav  className="sticky top-0  py-2  w-fill    bg-[#ffffff15] flex items-center " >

      {/* dispaly ans hidden nav in mobile */}
        <div
         className="icons  text-gray-500 text-lg w-12 h-12 rounded-full flex justify-center items-center  "
         onClick={dispalyNav}
        
        >
          <i className="fa fa-bars"></i>
        </div>



        {/* logo */}

       




        {/* links */}

        <div ref={ulRef}

        onClick={(e)=>{
          if(e.target == ulRef.current){
          dispalyNav()
          }
        }}
        
        className=" backdrop-blur-lg absolute top-0 h-screen -translate-x-full sm:translate-x-0 z-20  w-full">
            <ul  className=" bg-white w-fit h-full flex flex-col gap-4 px-3" >

                <li className="">
                        
                    
                  <Link to={'home'}>
                    <div className="w-52">
                      <img className=' drop-shadow-2xl drop-shadow-amber-400 ' src="/images/logorecipe.png" alt="" />
                    </div>
                  </Link>
                    
                </li>

                  {links.map(link=> <Li dispalyNav = {dispalyNav}  link={link}/>)}

              </ul>

        </div>

        

    
    </nav>
  )
}

export default Nav