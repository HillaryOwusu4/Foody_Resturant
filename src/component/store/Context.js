import React from 'react';


const CartContext = React.createContext(
    {
        items:[],
        TotalAmount:0,
        Additem:(item)=>{},
        RemoveItem:(id)=>{},
        clear:(item)=>{},
        addtoitem:(item)=>{}
        ,Cartclear:()=>{}
    }
)

export default CartContext;