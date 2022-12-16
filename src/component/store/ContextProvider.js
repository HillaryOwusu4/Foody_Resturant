import CartContext from "./Context";
import { useReducer } from "react";

const defaultSate = {
    items:[],
    TotalAmount:0
}
 const CartActions = (state,action)=>{
    if(action.type === 'add'){
 
     
     const updatedTotalAmount = state.TotalAmount+action.item.Price * action.item.amount
       const findUpdatedIndex = state.items.findIndex(item=>item.id === action.item.id)
       const existingCartitem = state.items[findUpdatedIndex]
      
        
       let updateditem;
   
       if(existingCartitem){
        const existingcontent={
            ...existingCartitem,
           amount:existingCartitem.amount + action.item.amount
        }
        updateditem=[...state.items]
        updateditem[findUpdatedIndex]=existingcontent
       }
       else{
         updateditem = state.items.concat(action.item)
       }


        return {
            items:updateditem,
            TotalAmount:updatedTotalAmount
    
        }

    }
    
    if(action.type === 'Remove'){
        const findexisitingIndex = state.items.findIndex(item=>item.id===action.id)
        const existingitem = state.items[findexisitingIndex]
        const UpdatedTotalAmount = state.TotalAmount-existingitem.Price
        let updateditem ;

        if(existingitem.amount === 1){
            updateditem = state.items.filter(item=>item.id !== action.id)
        }
        else{
            const ReduceAmount = {
                ...existingitem,
                amount:existingitem.amount-1
            }
            updateditem=[...state.items]
            updateditem[findexisitingIndex]=ReduceAmount

        }
        return{
            items:updateditem
            ,TotalAmount:UpdatedTotalAmount
        }
    }
    if(action.type=='Delete'){
        const Clearitem = state.items.filter(item => item.id !== action.item.id)
const updateTotal = state.TotalAmount - action.item.Price*action.item.amount
        return{
            items:Clearitem
            ,TotalAmount:updateTotal
        }
    }
    if(action.type === 'addtoexistingitem'){
        const updatedTotalAmount = state.TotalAmount+action.item.Price 
       const findUpdatedIndex = state.items.findIndex(item=>item.id === action.item.id)
       const existingCartitem = state.items[findUpdatedIndex]
    
        
       let updateditem;
    
       if(existingCartitem){
        const existingcontent={
            ...existingCartitem,
           amount:existingCartitem.amount + 1
        }
        updateditem=[...state.items]
        updateditem[findUpdatedIndex]=existingcontent
       }
       


        return {
            items:updateditem,
            TotalAmount:updatedTotalAmount
    
        }

    }
       if(action.type == 'ClearCart'){
        return defaultSate
       }

   return defaultSate;
 }

const CartProvider = (probs) => {
    const [CartState, dispatchCartAction] = useReducer(CartActions,defaultSate)

     const AdditemsToCart = (item)=>{
        dispatchCartAction({type:'add', item:item}) 
        
     }
     const RemoveItemFromCart = (id) =>{
        dispatchCartAction({type:'Remove', id:id}) 
     }
     const ClearData=(item)=>{
        dispatchCartAction({type:'Delete', item:item}) 
     }
     const addToExistingItem=(item)=>{
        dispatchCartAction({type:'addtoexistingitem', item:item}) 
     }
     const ClearCart=()=>{
        dispatchCartAction({type:'ClearCart'}) 
     }
     const context = {
        items:CartState.items,
        TotalAmount:CartState.TotalAmount,
        Additem:AdditemsToCart,
        RemoveItem:RemoveItemFromCart,
        clear:ClearData,
        addtoitem:addToExistingItem,
        Cartclear:ClearCart
     }
 
   

    return ( <CartContext.Provider value={context}>
              {probs.children}
    </CartContext.Provider> );
}
 
export default CartProvider;