
import '@fortawesome/fontawesome-free/css/all.css'
import { createBrowserRouter } from 'react-router'

import { RouterProvider } from 'react-router'


import MainLayout from './layouts/Main-layout'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Ingredients from './pages/Ingredients'
import Area from './pages/Area'
import NotFound from './pages/NotFound'





const routes = [
    {path:'',element:<MainLayout/>,
      children:[
        {index:true, element:<Home/>},
        {path:'home', element:<Home/>},
        {path:'meals', element:<Meals/>},
        {path:'ingredients', element:<Ingredients/>},
        {path:'area', element:<Area/>},
        {path:'*', element:<NotFound/>},


      ]
    }
]

function App() {

  const routers = createBrowserRouter(routes)

  return (
    <>
     <RouterProvider router={routers} />
    </>
  )
}

export default App
