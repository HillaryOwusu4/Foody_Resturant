import { useState, useEffect } from 'react'
import '../Mainpage.js/itemlis.css'
import { Link } from 'react-router-dom'
import Userform from '../store/UserForm'
import MoonLoader from "react-spinners/MoonLoader";
import Authcontext from '../store/auth-context';
import { useContext } from 'react';
const Itemlist = ({ShowItemlist}) => {
    const authcontext = useContext(Authcontext)
    const [itemsData, setitemData] = useState([])
    const [loading, setloding] = useState(false)
    const [message, setviewMessage] = useState(true)
    const [error, seterrorMessage] = useState(null)


    const fetchData = async () => {
        setloding(null)
        seterrorMessage(null)
        try {
            setloding(true)

            const response = await fetch('https://veggie-restuarant-default-rtdb.firebaseio.com/Meals.json')
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json()
            let loadedData = []
            for (const key in data) {
                loadedData.push({
                    id: key,
                    name: data[key].name,
                    Image: data[key].Image,
                    Price: data[key].Price,
                    Description: data[key].Description,
                    Sidedish: data[key].Sidedish
                })
            }
            setitemData(loadedData)


        } catch (error) {
         
            seterrorMessage(error.message)
            setviewMessage(false)
        }
        setloding(false)



    }

    useEffect(() => {
        try {
            fetchData()
        } catch {

        }
    }, [])
    const Scrollleft = () => {
        const leftscroll = document.getElementsByClassName('left-arrow')[0]
        leftscroll.scrollLeft = Number(leftscroll.scrollLeft) - 100;
       

    }

    const Scrolllright = () => {
        const leftscroll = document.getElementsByClassName('left-arrow')[0]
        leftscroll.scrollLeft = Number(leftscroll.scrollLeft) + 100;
    

    }
               
      

    return (<div className="w-full  flex justify-center items-end h-[70%]">

        <div className="w-[80%]  h-[95%] flex ">
            <div className="w-[5%] h-full flex items-center justify-center" onClick={Scrollleft}><i className="fa-solid fa-arrow-left w-[80%] items-center flex justify-center text-white rounded-full lg:w-[60%] bg-gray-600 h-10"></i></div>
            <div className={ShowItemlist.join(' ')}>
                {loading &&
                    <div className="w-full h-full flex items-center justify-center">

                        <MoonLoader
                            color={'#c52b22'}
                            loading={loading}
                            size={40}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />

                    </div>
                }
                {!loading && error &&
                    <div className="w-full h-full flex items-center justify-center">
                        <p className='font-semibold '>
                            {error}
                        </p>
                    </div>
                }
                {
                    itemsData.map((item, index) => {
                        let Authchange = !authcontext.isLoggedIn ? '/Signup' : `/detailedDescription/${item.id}`
                        return (
                            <Link to={`/detailedDescription/${item.id}`}>
                                <div className="w-[30%]   h-full ml-5 cards" key={index + 'itemlist'}>

                                    <div className=" bg-[#D6D0D0] item1 shadow-md flex justify-center good  hover:bg-zinc-600 items-center shadow-gray-500 rounded-[35px]">
                                        <div className="w-[80%] h-[90%] flex justify-center items-end ">
                                            <div className="w-[70%] h-[70%] ">
                                                <div className="w-full h-[60%]   ">
                                                    <h1 className='font-bold text-[19px] pt-3 '>{item.name}</h1>
                                                    <p className=' text-[15px] pt-3 text-gray-800 that'>{item.Sidedish}</p>

                                                </div>
                                                <div className="flex pt-4 w-full h-[30%] font-bold text-[15px]  items-center">{`${item.Price.toFixed(2)}$`}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-yellow-400 bg-transparent item2 brightness-100 contrast-125 "><img src={item.Image} alt="" /></div>
                                </div>
                            </Link>
                        )

                    })
                }
            </div>
            <div className="w-[5%] h-full flex items-center justify-center  " onClick={Scrolllright}><i className="fa-solid fa-arrow-right w-[80%] items-center flex justify-center text-white rounded-full bg-red-500 lg:w-[60%] h-10"></i></div>
        </div>
    </div>
    );
}

export default Itemlist;