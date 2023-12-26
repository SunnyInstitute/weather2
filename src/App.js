import { useState,useEffect } from "react";
import Main from "./components/main";
import { createContext } from "react";
import Layout from "./bharat/layout";


export var Content = createContext()

export default function App()
{
  var [details,setDetails]=useState([])
  var [city,setCity]=useState("bhopal")
  
  async function getWeather()
   {
      var raw = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=41a514610e0980b3fa9eb468c85960e8&units=metric")
      var data=await raw.json()
      setDetails(data)
      
   }

   useEffect(()=>{
    getWeather()
   },[city])


  
  return(<>
      <Content.Provider value={{details,city,setCity,setDetails,details}}>
        {/* <Main/> */}
        {console.log(details)}
        <Layout/>
        
        </Content.Provider>
  </>)
}