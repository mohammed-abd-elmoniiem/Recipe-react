
import Nav from '../components/navbar/Nav'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'

function MainLayout() {
  return (
    <>

    <main className="relative min-h-screen h-[200vh]">

        <div className="container mx-auto h-full">

            <Nav/>
            <Outlet/>

            <Footer/>

        </div>

        

    </main>
    
    </>
  )
}

export default MainLayout