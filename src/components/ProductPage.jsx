import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchProvider";
const ProductPage = () => {

    const [data, setdata] = useState()
    const [loading, setloading] = useState(true)
    // const [search,setsearch]=useState("")
    const {search}=useContext(SearchContext)

    useEffect(() => {
        const my = async () => {
            try {
                const respose = await axios("https://dummyjson.com/products")

                // const result = await respose.json()
                console.log("resulttt", respose)
                setdata(respose.data.products)
                setloading(false)
            }
            catch (error) {
                console.log(error)
            }

        }
        my()
    }, [])



    if (loading) {
        return <p>loading....</p>
    }
    const filterprodict=data.filter((n)=>`${n.title} ${n.description}`.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div>
<h1>Product </h1>
{/* <input value={search} onChange={(e)=>{
    setsearch(e.target.value)
}}  type="search" placeholder="search..." className="border border-black p-2 w-150" /> */}


</div>


            <div className="grid grid-cols-6 gap-4">
                {
                    filterprodict.slice(0, 15).map((item) => (
                        <div className="   mt-4 shadow rounded-lg  p-2 " key={item.id}>
                       <Link to={`/detail/${item.id}`}>   <img className="ml-15 w-30 h-30 border-gray-500" src={item.images[0]} alt="" />
                            <div className="h-40">
                                <h1 className="font-bold">{item.title}</h1>
                                <p className="text-left text-gray-500">{item.description.slice(0, 50)}...</p>
                                <p className="text-blue-950 font-bold">{item.category}</p>
                                <span className="text-green-600 font-bold">{item.price}</span> <br />
                            </div>
                            <div className="flex gap-4 mt-2">
                                <button className="bg-black text-white  w-26 p-2 rounded-xl">Buy now</button>
                                <button className=" text-black border border-black  w-26 p-2 rounded-xl">Add to cart</button>
                            </div>
                            </Link>  
                        </div>

                    ))
                }
            </div>

        </div>

    )
}
export default ProductPage;