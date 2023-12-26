import Comp1 from './comp1/comp1'
import Comp2 from './comp2/comp2'
import Comp3 from './comp3/comp3'
import Search from './search/search'
import Style from './style.module.css'

export default function Main()
{
    
    return(
        <>
            <div className={Style.container} >
                {/* <img src="Task/02.jpg" /> */}
            <div className={Style.image}>
                <Search/>
                <Comp1/>
                <Comp2/>
                <Comp3/>
            </div>
            </div>

        </>
    )
}