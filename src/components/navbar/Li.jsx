import { NavLink } from "react-router"

export default function Li({dispalyNav , link}){

    return(<>

                <li 
                    className="capitalize border border-gray-300 rounded-xl px-8 py-2"  key={link}
                    onClick={dispalyNav}
                    
                    >
    
                    <NavLink className=' px-2 py-0.5 rounded-md duration-300 text-black '  to={`${link}`}>
                    <i className="fa-solid fa-utensils text-sm"></i>  {link}
                    </NavLink>

                </li>
                    
                
    </>)
}