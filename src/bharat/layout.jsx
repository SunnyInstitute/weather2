

import { useContext } from 'react'
import Comp1 from '../components/comp1/comp1'
import Comp2 from '../components/comp2/comp2'
import Comp3 from '../components/comp3/comp3'
import Search from '../components/search/search'
import style from './layout.module.css'
import { Content } from '../App'
export default function Layout()
{   
    var{details}=useContext(Content)
    return (
        <>
            <div className={style.container}>
                <div className={style.row1}>
                        
                       <Search/> 
                        
                </div>
                <div className={style.row2}>
                    <div className={style.col1}>
                        {(details.weather)?<Comp1/>:""}
                    </div>
                    <div className={style.col2}>
                    {(details.weather)?<Comp2/>:""}
                    </div>
                    <div className={style.col3}>
                    {(details.weather)?<Comp3/>:""}
                    </div>
                </div>
            </div>
        </>
    )
}