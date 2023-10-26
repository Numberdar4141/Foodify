import React from "react";
import "./App.css";
import{BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./component/Home";
import Food from "./component/Food"
import Signup from "./component/Signup";
import Error from "./component/Error";
import Show from "./component/Show"
import Payment from "./component/Payment";
import Mycart from "./component/Mycart"
import Nidhi from "./component/Nidhi"

function App() {
  return (
   <main>
    <div>
      

    <BrowserRouter>
       <Routes>
        <Route path="/" element ={ <Home/>}/>
        <Route path="Food" element ={ <Food/>}/>
        <Route path="Signup" element ={ <Signup/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="Show" element={<Show/>}/>
        <Route path="Payment" element={<Payment/>}/>
        <Route path="Mycart" element={<Mycart/>}/>
        <Route path="Nidhi" element={<Nidhi/>}/>
        
     
       </Routes>
    </BrowserRouter>
      

    </div>



   </main>
  );
}

export default App;
