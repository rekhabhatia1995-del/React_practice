import { useEffect, useState } from "react";


const ContactPage=()=>{
    const [data,setData]=useState()
    const [loading,setloading]=useState(true)

    useEffect(()=>{
        const full=async()=>{
            try{
                const respose=await fetch("http://localhost:4000/api/get")
                console.log("resposee",respose)
                const result=await respose.json()
                console.log("result",result.user)
                setData(result.user)
                setloading(false)

            }
            catch(error){
                console.log(error.message)
            }

        }
        full()
    },[])


    if(loading) {
        return <p>loading......</p>
    }
    return(
        <div>
       
            <h1>Contact Us</h1>

            <div className="grid grid-cols-3">
                {
                    data.map((item)=>(
                        <div key={item._id}>
                            <h1>{item.title}</h1>
                            <p>{item.brand}</p>
                            <span>{item.color}</span>
                            <p>{item.price}</p>

                        </div>
                    ))
                }
            </div>
            
        </div>
        
    )
}
export default ContactPage;