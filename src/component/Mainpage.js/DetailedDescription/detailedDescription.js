import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useRef } from "react";
import CartContext from "../../store/Context";
import Userform from "../../store/UserForm";
import Authcontext from "../../store/auth-context";

const DetailedDescription = () => {

    const params = useParams()
   const history =useHistory()
   const amountInput = useRef()
   const Cart = useContext(CartContext)
   console.log(params.quoteid)
    

    const [singleItem,setsingleitem]=useState([])

    const fetchId = async ()=>{
        const response = await fetch('https://veggie-restuarant-default-rtdb.firebaseio.com/Meals.json')
        const dataresponse = await response.json()

        let fetchedData = []

        for(const key in dataresponse){
            fetchedData.push({
                id:key,
                name:dataresponse[key].name,
                Image:dataresponse[key].Image,
                Price:dataresponse[key].Price,
                Description:dataresponse[key].Description,
                Sidedish:dataresponse[key].Sidedish

            })
        }
        setsingleitem(fetchedData)
        
    }
   
    useEffect(()=>{
        fetchId()
    },[])

   const BacktoPreviouse=()=>{
   history.push('/')
   }

    const Detailitem = singleItem?.find(item => item.id === params.quoteid)

    console.log(Detailitem)
    
    const SubmitHandler = (event) => {
        
      event.preventDefault()
       const enteredValue = amountInput.current.value
       const AddToContext = (amount)=>{
        Cart.Additem({
            id:Detailitem?.id,
            name:Detailitem?.name,
            Price:Detailitem?.Price,
            amount:amount,
       })
      }

     AddToContext(+enteredValue)
    }
 
    return (
        
         <div className="w-[80%] h-[79%] flex  justify-center items-center ">
      <div className="w-[40%] h-full flex justify-center items-center ">
     <div className="w-[97%] h-[60%] flex mt-6  flex-col">
     <p className="text-[#1a1919] mt-1">VEGETABLE MEALS</p>
     <p className="text-[45px] text-[#1a1919] leading-[40px] mt-2 font-bold">{Detailitem?.name}</p>
     <div className="mt-[22px] text-justify text-[#1a1919] font-sm">{Detailitem?.Description}</div>
     
     <form className="w-full flex flex-col  justify-between h-[50%] items-center "  onSubmit={SubmitHandler}>
           <div className="w-full h-[50%] flex flex-col justify-center">
           <div className="font-semibold text-[18px]">Price:{`${Detailitem?.Price}$`}</div>
            <div className="flex items-end  justify-between">
            <h1>Instock:5</h1>
            <input type="number" max='5' step='1' ref={amountInput} id='amount' defaultValue='1' 
     className='bg-transparent p-2 shadow-sm  shadow-gray-600 h-[90%] w-[18%]'/>
            </div>
           </div>
           <div className="w-full h-[50%] flex items-center items-start justify-between">
       
               <button className="w-[40%] h-[50%] rounded-md border text-red-600 border-red-600 " onClick={BacktoPreviouse}  >Back</button>
               <button className="bg-red-600 w-[50%]  hover:bg-red-800 animate-bounce shadow-md shadow-gray-600 rounded-md h-[50%] text-white" type="submit"> Add To Cart </button>
             
          </div>
       </form>
     
     
     
     
     </div>
      </div>


      <div className="w-[60%] h-full flex justify-center items-center ">
        <img src={Detailitem?.Image} alt='food' className="w-[100%] lg:w-[80%] lg:h-[80%] mb-6 ml-5 contrast-125  brightness-110 h-[70%]" />
        </div>
      
    </div> );
}
 
export default DetailedDescription;



// <div className="w-full h-[40%]  flex justify-center items-center">
// <div className="w-[40%] h-full flex justify-center items-center">
//   <img src={Detailitem?.Image} alt='food' className="w-[80%] brightness-125 h-full" />
// </div>
//         </div>
//         <div className="w-[90%] h-[45%]  ">
//             <h1 className="w-full h-[15%]  text-[30px] font-bold">{Detailitem?.name +' '+ Detailitem?.Sidedish}</h1>
           
//             <h2 className="w-full h-[85%]  text-[17px] pt-4">
//             <span className="text-[22px] font-semibold mt-2">Description:</span>
//                <h3 className="italic">{Detailitem?.Description}</h3></h2>
        
//         </div>
        
//         <form className="w-[90%] h-[25%] " onSubmit={SubmitHandler}>
//             <div className="w-full h-[50%]  ">
//              <div className="font-semibold text-[18px]">Price:{`${Detailitem?.Price}$`}</div>
//              <div className="flex items-end  justify-between">
//               <h1>Instock:5</h1>
//               <input type="number" max='5' step='1'ref={amountInput} id='amount' defaultValue='1' className='bg-transparent  shadow-sm shadow-gray-600 '/>
//              </div>
//             </div>
//             <div className="w-full h-[50%] flex items-start justify-between">
            
//                 <button className="w-[15%] h-[50%] rounded-full border border-black" onClick={BacktoPreviouse}  >Back</button>
                
//                 <button className="w-[15%] h-[50%] rounded-full bg-red-700 border hover:bg-red-800 text-white " type="submit" >AddItem</button>
//             </div>
//         </form>
       
