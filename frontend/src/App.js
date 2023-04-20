import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import ApiDoc from "./pages/Api"
import Contact from "./pages/Contact"



function App() {
  return (<>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/apiDoc" element={<ApiDoc/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
  </>


  );
}

export default App;