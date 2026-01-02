
import Nav from '../components/navbar/Nav'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import Loading from '../components/Loading'

function MainLayout() {
  return (
    <>

    <main className="relative min-h-screen bg-neutral-100  ">

        <div className="containe mx-auto h-full flex">

          <div className="relative">
            <Nav/>
          </div>

            
            <div className="grow py-5">

             

                <Outlet/>

            <Footer/>
            </div>


          

        </div>

        

    </main>
    
    </>
  )
}

export default MainLayout