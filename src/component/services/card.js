const Card = (props) => {
    return ( <div className="w-[90%] h-[90%] flex flex-col items-center  rounded-xl border-2 border-white bg-[#D6D0D0] shadow-xl  shadow-gray-400">{props.children}</div> );
}
 
export default Card;