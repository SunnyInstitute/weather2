import React, {  createContext, useContext, useEffect, useState } from 'react'
import MyContext from "../App"
const Products = () => {
    
    var [products,setProducts]=useState([])
    var [loading,setLoading]=useState(true)

  
  useContext(MyContext)

    useEffect(()=>{
        var temp=getProducts()
        setLoading(!loading)
    },[])

    async function getProducts()
    {
        var raw=await fetch("https://fakestoreapi.com/products")
        var products =await raw.json()
        setProducts(products)
    }

    

    

  return (
    <>

    <div>Products</div>
    {
    loading?<h1>No Porducts</h1>:
    <ol>
       { products.map((item,index) => <li key={index}>{item.title} <br/><button>Add to Cart</button> <hr/></li>) }
    </ol>
    }
    
    </>
  )
}

export default Products