import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage"
import AgeGate from "./components/pages/AgeCheckPage";
import SteamHeader from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NewReleases from "./components/pages/ExploreNewPage";

export function App() {
  
  
  return (
    <div className="flex flex-col">
      <SteamHeader/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agegate" element={<AgeGate/>}/>
        <Route path="/explore" element={<NewReleases/>} />
      
      </Routes>


      <Footer/>

    </div>
  )
}

export default App
