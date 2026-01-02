

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

    // window.addEventListener('click',(e)=>{

    //    gsap.to(ulRef.current,{
    //     delay:0.2,
    //     duration:0.5,
    //     left: -400,
    //     // right: ulRef.current.classList.contains('shown') ?0  : '-100%',

    //     onComplete:()=>{
    //       ulRef.current.classList.toggle('shown')
          
    //     }

    //   })

    // })

    function dispalyNav(){

      toggleIconRef.current.classList.toggle('fa-bars')
      toggleIconRef.current.classList.toggle('fa-close')

    

      gsap.to(ulRef.current,{
        delay:0.2,
        duration:0.2,
        left: ulRef.current.classList.contains('shown') ? -400: '100%',
        // right: ulRef.current.classList.contains('shown') ?0  : '-100%',

        onComplete:()=>{
          ulRef.current.classList.toggle('shown')
          
        }

      })
      
    }
  return (
    <nav  className="sticky top-0   py-2 z-50 h-screen   flex items-start bg-white" >

      {/* dispaly ans hidden nav in mobile */}
        <div
         className="icons sticky top-0   sm:hidden text-gray-500 text-lg w-8 h-8 rounded-full flex justify-center items-center " 
         onClick={(e)=>{
          dispalyNav()

        }
        }
         >
          <i className="fa fa-bars " ref={toggleIconRef} ></i>
         

        </div>



        {/* logo */}

       




        {/* links */}

        <div ref={ulRef}

        onClick={(e)=>{
          if(e.target == ulRef.current){
    
          }
        }}

        className="border-emerald-500  bg-neutral-100 absolute right-full top-0 bottom-0 sm:static  z-40 ">
            <ul  className=" sticky top-0  w-fit h-full flex flex-col gap-4 px-3 bg-neutral-100" >

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