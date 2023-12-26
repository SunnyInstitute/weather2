import { useContext } from 'react'
import sty from './comp1.module.css'
import { Content } from '../../App'

export default function Comp1() {
   var {details}= useContext(Content)
    return (
        <div className={sty.container}>
            <div className={sty.box}>
                <ol>
                    
                    <li><ion-icon name="cloud-outline"></ion-icon>{"  "+ details.weather[0].main}</li>
                    <li>{details.name+' City'} </li>
                </ol>
            </div>
            <div className={sty.box2}>
                
                <h2>Temp:
                    {" "+details.main.temp+"C"}</h2>
                
            </div>
        </div>
    )
}