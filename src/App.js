import Products from "./componants/products";
import {  createContext, useState } from "react";
function App() {
  var [cart,setCart]=useState([])
  var MyContext=createContext()
  return (
    <>
    <MyContext.Provider value={{city:"Bhopal"}}>
      <Products/>
    </MyContext.Provider>
    </> 
  )
}

export default {App,MyContext};
