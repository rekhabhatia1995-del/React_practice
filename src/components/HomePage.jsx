import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage=()=>{
  const navigate=useNavigate()
    const [count,setcount]=useState(900)

    useEffect(()=>{
        console.log(count)

    },[count])

    const handlelogout=()=>{
      localStorage.removeItem("loginuser")
      navigate('/login')
    }
    
    return(
      <>

      <h1 onClick={handlelogout}>Logout</h1>
        <div className="w-40 bg-yellow-400 h-40 flex justify-around items-center mx-auto">
       
          <button onClick={()=>{
            setcount(count +1)
          }}  className="bg-red-500 w-10 h-10 flex items-center justify-center">+</button>
          <h1>count : {count}</h1>
          <button onClick={()=>{
            if(count>0){
 setcount(count -1)
            }
           
          }} className="bg-red-500 w-10 h-10 flex items-center justify-center">-</button>
        </div>

        </>
        
    )
}




export default HomePage;