import { useContext } from 'react'
import { Content } from '../../App'

import sty from './comp2.module.css'


export default function Comp2() {
    var {details}= useContext(Content)
    return (
        <div className={sty.container1}>
            <div className={sty.box1}>
                <ol>
                    <li><ion-icon name="water-outline"></ion-icon>
                    {" "}Humidity
                    {': '+details.main.humidity+"%"}</li>
                    <li><ion-icon name="cloud-outline"></ion-icon>
                    Air pressure :
                        {details.main.pressure}</li>

                    {/* <li><ion-icon name="rainy-outline"></ion-icon> */}
                  
                  <li> <ion-icon name="happy-outline"></ion-icon>
                      Feels Like :
                        {" "+details.main.feels_like}</li>
                    <li>Wind Speed :
                        {" "+details.wind.speed+"Km/h"}</li>
                </ol>
            </div>
        </div>
    )
}