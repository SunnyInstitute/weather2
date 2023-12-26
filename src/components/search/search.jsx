import { useContext,useEffect } from 'react';
import Text from "./search.module.css"
import { Content } from '../../App';
import axios from 'axios';

export default function Search(){

    var {city,setCity,setDetails,details}=useContext(Content)
   var style={
    "fontSize":"30px"
   }

   
    return(
        <>
            <div className={Text.searchBox}>
            <ion-icon style={style} name="search-outline" className={Text.icon}></ion-icon>
            <input type='text' placeholder='Search City' onChange={(e)=>setCity(e.target.value)}/>
            </div>
        </>
    )
}