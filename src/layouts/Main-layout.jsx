
import Nav from '../components/navbar/Nav'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

function MainLayout() {
  return (
    <>

    <main className="relative min-h-screen bg-neutral-100 py-3 ">

        <div className="containe mx-auto h-full flex">

          <div className="relative">
            <Nav/>
          </div>

            
            <div className="grow">
                <Outlet/>

            <Footer/>
            </div>


          

        </div>

        

    </main>
    
    </>
  )
}

export default MainLayout