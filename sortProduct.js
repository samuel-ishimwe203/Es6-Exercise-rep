
// You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement 
// a function called sortProducts that sorts the products based on their prices in ascending order. 


  const array =[
       
    {name:'laptop', price:30000},
    {name:'small smartphones', price:12000},
    {name:'small phones', price:10000},
    {name:'Samsang', price:40000},
    {name:'Iphone', price:60000}
  ]

  const sorted=(products)=>{
    return [...products].sort((a,b)=>a.price-b.price)

  }
 

 const sortedOne=sorted(array)
 console.log(sortedOne)