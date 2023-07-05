import React, { useContext, useEffect, useState } from 'react';
import './Righsection.css';
import Post from './post';
import jsonData from './post.json';
import Write from './Write';
import {UserContext} from './App';


export default function Rightsection() {
  const [allpost, setallpost] = useState([]);
  const {islogin,setislogin}=useContext(UserContext);



  // data Fetch from Firebase Realtime database
  useEffect(()=>{                               
     const apicall= async()=>{
      const response =await fetch("https://redittclone-default-rtdb.firebaseio.com/databsepost.json");
      const data=await  response.json();
      const newdata=Object.values(data);
      console.log(newdata);
      setallpost(newdata.reverse());
     }
     apicall();
  },[])

  
  function getwrite(data) {           {/* For Create New Post Function*/}
    setallpost([data, ...allpost]);   
  }

  return (
    <>
      <div className='postarea'>         {/*If login Show Create New Post Area*/}
     {islogin && 
        <Write fun={getwrite} />
        }
        
       
         {/*All New Posts */}
        {allpost.map((data) => (                   
          <Post key={data.id} data={data} />
        ))}
        
        {/*All Json Already Store Posts*/}
        {jsonData.slice(0, 25).map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
