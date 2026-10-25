import { Toaster } from "react-hot-toast"
import Banner from "./component/Banner"
import Nav from "./component/Nav"
import Footer from "./component/Footer"
import TextBeneathBanner from "./component/TextBeneathBanner";
import { Suspense } from "react";
import MainPart from "./component/MainPart";
   const dataPromise = async()=>{
    const res= await fetch("/data.json")
    const data = await res.json()
    return data
   }
function App() {
  

  return (
   <>
   <Nav/>
   <Banner/>
   <TextBeneathBanner/>
   <Suspense fallback={<p>Loading..............</p>}>
   <MainPart dataPromise={dataPromise()}></MainPart>
   </Suspense>
   <Toaster/>
   <Footer/>
   </>
  )
}

export default App
