import sty from './comp3.module.css'
import { useContext } from 'react'
import { Content } from '../../App'


export default function Comp3() {
    var {details}= useContext(Content)
    return (
        
        <div className={sty.container3}>
           
           <div className={sty.box}>
                <ol>
                    
                    <li><ion-icon name="sunny-outline"></ion-icon>
                       {' '} Sunrise:                    
                        {details.sys.sunrise} </li>
                    <li><ion-icon name="partly-sunny-outline"></ion-icon>
                    {' '}Sunset:
                        {details.sys.sunset} </li>
                    <li><ion-icon name="sunny-outline"></ion-icon>
                       {' '} temp_max:                    
                        {details.main.temp_max} </li>
                    <li><ion-icon name="partly-sunny-outline"></ion-icon>
                    {' '}temp_min:
                        {details.main.temp_min} </li>
                </ol>
            </div>
           </div>
    )
}