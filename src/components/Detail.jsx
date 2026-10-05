import axios from "axios";
import { FaLock, FaTruck, FaUndo } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../slice/Cartslice";


const Detail = () => {
  const dispatch=useDispatch()
  const { id } = useParams();
  const naviagte=useNavigate()

  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const my = async () => {
      try {
        const response = await axios(
          `https://dummyjson.com/products/${id}`
        );

        console.log("resulttt", response.data);
        setdata(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    };

    my();
  },[id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-blue-950">
          Loading....
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        
        <div className="bg-white rounded-2xl shadow-md p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

      
          <div>

          
            <div className="h-[400px] md:h-[480px] border rounded-2xl bg-gray-50 flex items-center justify-center">

              <img
                src={data.images[0]}
                alt={data.title}
                className="w-full h-full object-contain p-8"
              />

            </div>

          
            <div className="flex gap-3 mt-4 overflow-x-auto">

              {data.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="w-20 h-20 min-w-20 border rounded-lg p-2 hover:border-blue-900 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={data.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}

            </div>

          </div>

          
          <div className="flex flex-col justify-center">

            
            <p className="text-sm uppercase text-blue-700 font-semibold">
              {data.category}
            </p>

        
            <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              {data.title}
            </h1>

        
            <div className="flex items-center gap-3 mt-4">

              <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                ★ {data.rating}
              </span>

              <span className="text-gray-500 text-sm">
                Customer Reviews
              </span>

            </div>

        
            <div className="mt-6 flex items-center gap-3">

              <span className="text-3xl font-bold text-blue-950">
                ${data.price}
              </span>

              <span className="text-gray-400 ">
                ${Math.round(data.price * 1.2)}
              </span>

              <span className="text-green-600 font-semibold">
                {data.discountPercentage}% OFF
              </span>

            </div>

      
            <p className="text-gray-600  mt-6">
              {data.description}
            </p>

          
            <div className="mt-5">
              {data.stock > 0 ? (
                <span className="text-green-600 font-semibold">
                  ● In Stock ({data.stock} available)
                </span>
              ) : (
                <span className="text-red-600 font-semibold">
                  ● Out of Stock
                </span>
              )}
            </div>
              

    
            <div className="flex items-center gap-4 mt-6">

              <span className="font-semibold text-gray-700">
                Quantity:
              </span>

              <div className="flex items-center shadow rounded-lg">

                <button
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : 1)
                  }
                  className="px-4 py-2 text-xl  cursor-pointer hover:bg-gray-100"> − </button>

                <span className="px-5 py-2  font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-xl cursor-pointer hover:bg-gray-100"> +</button>

              </div>

             

            </div>
             <div className="flex gap-4 mt-8">

              <button onClick={()=>{
                naviagte(`/detail/${Number(id) -1}`)

              }} disabled={data.id==1} className="border-2 w-48 cursor-pointer border-blue-900 text-blue-900 font-semibold py-3 rounded-xl hover:bg-blue-50">
             Previous
              </button>

              <button onClick={()=>{
                naviagte(`/detail/${Number(id) +1}`)

              }}   className=" w-48 bg-blue-950 cursor-pointer text-white font-semibold py-3 rounded-xl hover:bg-blue-900">
                Next
              </button>

            </div>

          
            <div className="flex gap-4 mt-8">

              <button onClick={()=>dispatch(addtocart(data))} className="border-2 w-48 cursor-pointer border-blue-900 text-blue-900 font-semibold py-3 rounded-xl hover:bg-blue-50">
              Add to Cart
              </button>

              <button className=" w-48 bg-blue-950 cursor-pointer text-white font-semibold py-3 rounded-xl hover:bg-blue-900">
                Buy Now
              </button>

            </div>

          
            <div className="grid grid-cols-3 gap-3 mt-8 ">

              <div className="text-center mr-10">
                <FaTruck className="text-2xl text-green-600 ml-16" />
                <p className="text-xs text-gray-600 mt-1">
                  Fast Delivery
                </p>
              </div>

              <div className="text-center">
                <FaLock className="text-2xl text-green-600 ml-16" />
                <p className="text-xs text-gray-600 mt-1">
                  Secure Payment
                </p>
              </div>

              <div className="text-center  ">
                <FaUndo className="text-2xl text-green-600 ml-16" />
                <p className="text-xs text-gray-600 mt-1">
                  Easy Returns
                </p>
              </div>

            </div>

          </div>

        </div>

    
        <div className="bg-white rounded-2xl shadow-md mt-8 p-6 md:p-8">

          <h2 className="text-2xl font-bold text-blue-950  pb-4">
            Product Information
          </h2>

          <p className="text-gray-600  mt-5">
            {data.description}
          </p>

        
          <h2 className="text-2xl font-bold text-blue-950 mt-8  pb-4">
            Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-4">

            <div className="flex justify-between  py-4">
              <span className="font-semibold text-gray-700">
                Brand
              </span>
              <span className="text-gray-600">
                {data.brand || "Premium Brand"}
              </span>
            </div>

            <div className="flex justify-between  py-4">
              <span className="font-semibold text-gray-700">
                Category
              </span>
              <span className="text-gray-600">
                {data.category}
              </span>
            </div>

            <div className="flex justify-between  py-4">
              <span className="font-semibold text-gray-700">
                SKU
              </span>
              <span className="text-gray-600">
                {data.sku}
              </span>
            </div>

            <div className="flex justify-between  py-4">
              <span className="font-semibold text-gray-700">
                Weight
              </span>
              <span className="text-gray-600">
                {data.weight} g
              </span>
            </div>

            <div className="flex justify-between  py-4">
              <span className="font-semibold text-gray-700">
                Warranty
              </span>
              <span className="text-gray-600">
                {data.warrantyInformation}
              </span>
            </div>

            <div className="flex justify-between  py-4">
              <span className="font-semibold text-gray-700">
                Shipping
              </span>
              <span className="text-gray-600">
                {data.shippingInformation}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Detail;