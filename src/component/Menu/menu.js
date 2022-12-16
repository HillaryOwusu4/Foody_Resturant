import { useEffect, useState } from "react";
import '../Menu/menu.css'
import { Link } from "react-router-dom";
const Menu = () => {
    const[items,setItem]=useState()

    const fetchfood = async ()=>{
    const response = await fetch('https://veggie-restuarant-default-rtdb.firebaseio.com/Meals.json')
     const data = await response.json()
    console.log(data)
      
    let loadedData = []
    for(const key in data){
        loadedData.push({
            id: key,
            name: data[key].name,
            Image: data[key].Image,
            Price: data[key].Price,
            Description: data[key].Description,
            Sidedish: data[key].Sidedish
        })
    }

    setItem(loadedData)
    console.log('load',loadedData)
    }

    console.log('loads',items)
useEffect(()=>{
        fetchfood()
    },[])

    return ( <div className="w-[80%] h-[80%] parent_div1 overflow-scroll">
      <div className="grid grid-cols-3 grid-rows-3 mt-2  gap-2">
      {
       items?.map(item=>{
        return(
           <Link to= {`/detailedDescription/${item.id}`} >
            <div className="w-full  h-full flex flex-col mt-3 bg-[#D6D0D0] hover:bg-blend-darken shadow-gray-500 shadow-md items-center rounded-md ">
                <div className="w-full h-[75%] flex justify-center ">
                    <img src={item.Image} alt="" className="w-[70%] brightness-100 contrast-125 mt-2 h-[100%] " /></div>
               <div className="font-semibold mt-2">{item.name}</div>
               <p className="font-semibold">{`${item.Price.toFixed(2)}$`}</p>
                </div>
            
           </Link>
        )
       })
       }
      </div>
    </div> );
}
 
export default Menu;