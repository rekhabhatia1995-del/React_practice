// const a=["apple","abnana","grapes","ksjhdj"]

import { useContext } from "react";
import HomePage from "./HomePage";
import { SearchContext } from "../SearchProvider";

const products = [
  {
    id: 1,
    title: "Plastic Bucket",
    description: "Strong and durable plastic bucket for home and daily use.",
    price: 299,
    category: "Buckets",
    image: "https://picsum.photos/seed/bucket1/400/400",
    stock: 25,
    rating: 4.5,
    brand: "Ocean Plastic"
  },
  {
    id: 2,
    title: "Plastic Mug",
    description: "Lightweight plastic mug with a comfortable handle.",
    price: 99,
    category: "Mugs",
    image: "https://picsum.photos/seed/mug1/400/400",
    stock: 40,
    rating: 4.2,
    brand: "Ocean Plastic"
  },
  {
    id: 3,
    title: "Plastic Tub",
    description: "Large capacity plastic tub suitable for household use.",
    price: 499,
    category: "Tubs",
    image: "https://picsum.photos/seed/tub1/400/400",
    stock: 18,
    rating: 4.6,
    brand: "Ocean Plastic"
  },
  {
    id: 4,
    title: "Plastic Chair",
    description: "Comfortable and durable plastic chair for indoor and outdoor use.",
    price: 899,
    category: "Chairs",
    image: "https://picsum.photos/seed/chair1/400/400",
    stock: 12,
    rating: 4.4,
    brand: "Ocean Plastic"
  },
  {
    id: 5,
    title: "Plastic Basket",
    description: "Multipurpose plastic basket for storage and organization.",
    price: 249,
    category: "Baskets",
    image: "https://picsum.photos/seed/basket1/400/400",
    stock: 30,
    rating: 4.3,
    brand: "Ocean Plastic"
  },
  {
    id: 6,
    title: "Storage Box",
    description: "Durable plastic storage box with a secure lid.",
    price: 599,
    category: "Storage",
    image: "https://picsum.photos/seed/storage1/400/400",
    stock: 20,
    rating: 4.7,
    brand: "Ocean Plastic"
  },
  {
    id: 7,
    title: "Plastic Tray",
    description: "Strong multipurpose tray for serving and organizing items.",
    price: 199,
    category: "Trays",
    image: "https://picsum.photos/seed/tray1/400/400",
    stock: 35,
    rating: 4.1,
    brand: "Ocean Plastic"
  },
  {
    id: 8,
    title: "Water Bottle",
    description: "Reusable plastic water bottle with leak-proof design.",
    price: 179,
    category: "Bottles",
    image: "https://picsum.photos/seed/bottle1/400/400",
    stock: 50,
    rating: 4.5,
    brand: "Ocean Plastic"
  },
  {
    id: 9,
    title: "Laundry Basket",
    description: "Spacious plastic laundry basket with strong handles.",
    price: 449,
    category: "Baskets",
    image: "https://picsum.photos/seed/laundry1/400/400",
    stock: 22,
    rating: 4.6,
    brand: "Ocean Plastic"
  },
  {
    id: 10,
    title: "Dustbin",
    description: "Easy-to-clean plastic dustbin for home and office.",
    price: 349,
    category: "Dustbins",
    image: "https://picsum.photos/seed/dustbin1/400/400",
    stock: 28,
    rating: 4.3,
    brand: "Ocean Plastic"
  },
  {
    id: 11,
    title: "Plastic Stool",
    description: "Strong lightweight plastic stool with stable legs.",
    price: 399,
    category: "Stools",
    image: "https://picsum.photos/seed/stool1/400/400",
    stock: 16,
    rating: 4.4,
    brand: "Ocean Plastic"
  },
  {
    id: 12,
    title: "Plastic Container",
    description: "Airtight plastic container for kitchen and food storage.",
    price: 229,
    category: "Containers",
    image: "https://picsum.photos/seed/container1/400/400",
    stock: 45,
    rating: 4.8,
    brand: "Ocean Plastic"
  },
  {
    id: 13,
    title: "Plastic Plate",
    description: "Reusable and durable plastic plate for everyday meals.",
    price: 79,
    category: "Kitchen",
    image: "https://picsum.photos/seed/plate1/400/400",
    stock: 60,
    rating: 4.2,
    brand: "Ocean Plastic"
  },
  {
    id: 14,
    title: "Plastic Hanger",
    description: "Strong plastic hanger suitable for different types of clothes.",
    price: 49,
    category: "Home",
    image: "https://picsum.photos/seed/hanger1/400/400",
    stock: 100,
    rating: 4.1,
    brand: "Ocean Plastic"
  },
  {
    id: 15,
    title: "Plastic Organizer",
    description: "Compact organizer for keeping small items neatly arranged.",
    price: 299,
    category: "Storage",
    image: "https://picsum.photos/seed/organizer1/400/400",
    stock: 32,
    rating: 4.5,
    brand: "Ocean Plastic"
  },
  {
    id: 16,
    title: "Plastic Water Jug",
    description: "Large capacity water jug with a convenient handle.",
    price: 399,
    category: "Jugs",
    image: "https://picsum.photos/seed/jug1/400/400",
    stock: 24,
    rating: 4.6,
    brand: "Ocean Plastic"
  },
  {
    id: 17,
    title: "Plastic Scoop",
    description: "Durable plastic scoop for kitchen and household use.",
    price: 69,
    category: "Kitchen",
    image: "https://picsum.photos/seed/scoop1/400/400",
    stock: 75,
    rating: 4.0,
    brand: "Ocean Plastic"
  },
  {
    id: 18,
    title: "Plastic Crate",
    description: "Heavy-duty plastic crate for storage and transportation.",
    price: 699,
    category: "Crates",
    image: "https://picsum.photos/seed/crate1/400/400",
    stock: 14,
    rating: 4.7,
    brand: "Ocean Plastic"
  },
  {
    id: 19,
    title: "Plastic Planter",
    description: "Decorative and durable plastic planter for indoor plants.",
    price: 199,
    category: "Garden",
    image: "https://picsum.photos/seed/planter1/400/400",
    stock: 38,
    rating: 4.4,
    brand: "Ocean Plastic"
  },
  {
    id: 20,
    title: "Plastic Dustpan",
    description: "Lightweight dustpan designed for easy household cleaning.",
    price: 89,
    category: "Cleaning",
    image: "https://picsum.photos/seed/dustpan1/400/400",
    stock: 55,
    rating: 4.2,
    brand: "Ocean Plastic"
  }
];



const About=()=>{
  const {search}=useContext(SearchContext)
  const filterproduct=products.filter((n)=>n.title.toLowerCase().includes(search.toLowerCase()))
    return(
        <>
    {/* //     <div> 
    //    {
    //     a.map((item,index)=>(
    //         <h1 key={index}>{item}</h1>

    //     ))
    //    }
            
    //     </div> */}
<h1>products</h1>
<div className=" flex flex-wrap gap-6 p-2 justify-center ">
{
  filterproduct.map((item)=>(
    <div className="shadow-lg w-60 cursor-pointer  p-2" key={item.id}>
        <img className="w-full h-30 rounded-xl "src={item.image} alt="" />
        <h1 className="text-blue-950 font-bold text-lg">{item.title}</h1>
        <p className="  text-gray-500 ">{item.description.slice(0,50)}...</p>
        <span className="text-green-500 font-bold ">{item.stock}</span>
        <p className="text-red-600 font-bold">{item.price}</p>
        <button className=" bg-green-500  ml-10 text-white rounded-xl hover:bg-blue-950 hover:text-white w-32 p-2 cursor-pointer">buy now</button>
        
    </div>

  ))  
}

</div>

<HomePage/>     
    </>
        
    )
}
export default About;