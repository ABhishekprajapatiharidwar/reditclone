import { useState ,useContext} from 'react'
import Signup from '../Signup'
import NestedList from './Leftlist'
import './leftslider.css'
import { UserContext } from "../App";
export default function Leftslider()
{
    const [join,setjoin]=useState(false);
    const { islogin, setislogin, closebtnlogin, setclosebtnlogin ,usernamef,setusernamef } =
    useContext(UserContext);

    return(
        <>
        {/* Feed and Topic Left Slider */}

       <div className="leftslider_left">              
        <NestedList/>                      {/*Component from Meterial UI */}

     {islogin?<h3 id="welcome">Welcome @{usernamef}</h3>:
        <p onClick={()=>{setjoin(true)}}  className='joiningbtn'>Join Reddit</p>        
     }
       </div>

       {join?<Signup/>:false}

        </>
    )
}