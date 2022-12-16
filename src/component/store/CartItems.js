import { useContext, useState } from "react";
import CartContext from "./Context";
import { useHistory } from "react-router-dom";
import '../Mainpage.js/itemlis.css'
import { Link } from "react-router-dom";
import Userform from "./UserForm";
const CartList = () => {
    const history = useHistory
    const Cartlist = useContext(CartContext)
    const RemoveItem = (id) => {
        Cartlist.RemoveItem(id)
    }
    const [showForm, setShowForm] = useState(false)
    const [Showitems, setShowitems] = useState(true)
    const [ShowSucessMessage, setShowSucessMessage] = useState(false)
    // const AddItem = (item) => {
    //     Cartlist.add(item)
    // }
    const onShowitem = () => {
        setShowForm(true)
        setShowitems(false)
    }
    const Viewlist = () => {
        setShowitems(true)
        setShowForm(false)
    }
    const ShowMessage = () => {
        setShowitems(false)
        setShowForm(false)
        setShowSucessMessage(true)
    }
    const Addtoitem = (item) => {
        Cartlist.addtoitem(item)
    }
    const clear = (item) => {
        Cartlist.clear(item)
    }

    const CloseItemHandler = () => {
        history.push('/')
    }
    const Totalamount = Cartlist.TotalAmount
    console.log(Totalamount)
    return (<div className="w-full  h-full flex  justify-center items-start">
        {showForm && <Userform Viewlist={Viewlist} ShowMessage={ShowMessage} />}
       { ShowSucessMessage && <div className="w-full  flex items-center justify-center h-full">
       <p className="text-[30px] text-red-600  ">Ordered successfully!</p>
       <img src="/images/confetti.png" alt="" className="w-[50px] h-[50px]" />
       <img src="/images/laughing.png" alt="" className="w-[50px] h-[50px]"/>
       </div>
       }
        {Showitems && <div className="w-[60%] h-[60%] ">
            <div className="w-full parent_div  flex flex-col overflow-y-scroll h-[80%]">
                {
                    Cartlist.items.map((item, index) => {
                        return (
                            <div className=" w-full items-container  flex border-b-2 border-red-500 h-[32%]" key={index + '-product'}>

                                <div className="w-[30%] h-[100%]">
                                    <div className="w-full h-[60%] flex items-center font-bold text-lg text-gray-800 ">
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="w-full flex justify-between h-[40%]">
                                        <span className="text-red-500 font-semibold">{`${item.Price.toFixed(2)}$`}</span>
                                        <div className="w-[22%] justify-center flex items-center  h-[80%]  border-2 text-sm font-semibold rounded-lg">{`x${item.amount}`}</div>
                                    </div>

                                </div>
                                <div className="w-[70%] flex justify-end h-[100%] font-bold items-center ">
                                    <button className="border text-red-500 border-red-400 rounded w-[12%] h-[35%] mr-2 hover:bg-red-200" onClick={clear.bind(null, item)}>Delete</button>
                                    <button className="border border-red-400 text-red-500 hover:bg-red-200 rounded mr-2 w-[12%] h-[35%] " onClick={RemoveItem.bind(null, item.id)}>-</button>
                                    <button className="border text-red-500 border-red-400 rounded w-[12%] h-[35%] hover:bg-red-200" onClick={Addtoitem.bind(null, item)}>+</button>
                                </div>


                            </div>
                        )

                    })
                }
            </div>
            <div className="w-full h-[20%]  flex flex-col justify-end items-center ">
                <div className="w-full h-[45%] justify-end flex items-center font-bold text-xl text-red-400">
                    {`${Totalamount.toFixed(2)}$`}
                </div>
                <div className="w-full h-[60%] flex justify-end items-end">

                    <Link to='/' className="w-[20%] mr-5 h-[80%] border border-red-400 text-red-500 rounded-full flex justify-center items-center"><button>close</button></Link>
                    <button className="w-[20%] h-[80%] bg-red-500 hover:bg-red-800 justify-center flex items-center rounded-full  text-white" onClick={onShowitem}>order</button>
                </div>
            </div>
        </div>}
    </div>);
}

export default CartList;