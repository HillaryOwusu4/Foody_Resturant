import '../store/Userform.css'
import { useState } from 'react';
import Userinfo from '../hooks/userHooks';
import { Link } from 'react-router-dom';
import CartContext from './Context';
import { useContext } from 'react';


const Userform = ({Viewlist,ShowMessage}) => {
    const Datacontest = useContext(CartContext)
    const [submited,setsubmited] =useState(false)
    const [didsubmited,didsetsubmited] =useState(false)
    // const [Formisvalid,setFomvalid] = useState(false)
    const { value: inputedValue, inputHaserrors: inputedError, InputChangeHandler: nameChangehandler, InputBlurHandler: nameOnblurhandler, InputValidation: inputIsValid, rest:restForm } = Userinfo(value => value.trim() !== '')

    const { value: inputedStreet, inputHaserrors: inputedstreetError, InputChangeHandler: StreetChangehandler, InputBlurHandler: StreetOnblurhandler, InputValidation: inputStreerIsValid, rest:streetrestForm } = Userinfo(value => value.trim() !== '')

    const { value: inputedCity, inputHaserrors: inputedCityError, InputChangeHandler: CityChangehandler, InputBlurHandler: CityOnblurhandler, InputValidation: inputCityIsValid, rest:CityrestForm } = Userinfo(value => value.trim() !== '')

    const { value: inputedPostal, inputHaserrors: inputedPostalError, InputChangeHandler: PostalChangehandler, InputBlurHandler: PostalOnblurhandler, InputValidation: inputPostalIsValid, rest:PostalrestForm } = Userinfo(value => value.trim() !== '')

   let Formisvalid = false;

   if (inputIsValid && inputStreerIsValid && inputCityIsValid && inputPostalIsValid ) {
       Formisvalid = true
   }
    

    const SubmitHandler = (event) => {

        event.preventDefault()
        fetch('https://veggie-restuarant-default-rtdb.firebaseio.com/orders.json',
        {
            method:'POST',
            body:JSON.stringify({
                User:{
                    Name:inputedValue,
                    Street:inputedStreet,
                    Postalcode:inputedPostal,
                    City:inputedCity
                },
                orderedItems:Datacontest.items

            }),
           
       
        })
        setsubmited(true)
        didsetsubmited(true)
        ShowMessage()
        restForm()
        streetrestForm()
        CityrestForm()
        PostalrestForm()
        Datacontest.Cartclear()
        
    }
    const inputChangeStyle = inputedError ? 'form-control invalid' : 'form-control'
    const streetchangeStyle = inputedstreetError ? 'form-control invalid' : 'form-control'
    
    const CitychangeStyle = inputedCityError ? 'form-control invalid' : 'form-control'
    const PostalchangeStyle = inputedPostalError ? 'form-control invalid' : 'form-control'

    return (
        <div className="w-[80%] h-[60%] flex flex-col justify-center items-center">
           <form onSubmit={SubmitHandler} className='w-[60%] h-[95%] rounded-md bg-gray-100 flex flex-col justify-center items-center'>
                <div className="w-full h-[80%] flex flex-col justify-center items-center">
                    <div className={inputChangeStyle}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' value={inputedValue} onChange={nameChangehandler} onBlur={nameOnblurhandler} />
                        {inputedError && <p className='error-text'>Please enter a valid first name</p>}
                    </div>

                    <div className={streetchangeStyle}>
                        <label htmlFor='name'>Street</label>
                        <input type='text' id='street' value={inputedStreet} onChange={StreetChangehandler} onBlur={StreetOnblurhandler}  />
                        { inputedstreetError && <p className='error-text'>Please enter a valid Street name</p>
                    }
                    </div>

                    <div className={PostalchangeStyle}>
                        <label htmlFor='name'>Postal code</label>
                        <input type='text' id='Postal code' value={inputedPostal} onChange={PostalChangehandler} onBlur={PostalOnblurhandler}/>
                        {inputedPostalError && <p>Please enter a valid Postal code</p>}
                    </div>

                    <div className={CitychangeStyle}>
                        <label htmlFor='email'>City</label>
                        <input type='text' id='city'  value={inputedCity} onChange={CityChangehandler} onBlur={CityOnblurhandler}  />
                        
                        {inputedCityError && <p className='error-text'> Please enter a valid City name</p>}

                    </div>
                </div>
                <div className='w-full h-[20%] flex  justify-center items-center'>
                   <div className="w-[55%] h-full  flex justify-between items-center">
                   <button className='button flex justify-center items-center' onClick={Viewlist}>Cancel</button>
                    <button className='buttons w-[40%] h-[49%] bg-none border text-red-400 rounded-full hover:bg-red-600 hover:text-white border-red-600' disabled={!Formisvalid} type='submit'>Submit</button>
                   </div>

                </div>
            </form>
        </div>

    )
}

export default Userform;