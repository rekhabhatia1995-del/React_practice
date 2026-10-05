import { useState } from "react";

const product = [
  {
    id: 1,
    title: "plastic bucket",
    image: "https://picsum.photos/seed/bucket1/400/400",
    description: "strong and durable plastic bucket for home and daily use",
    stock: 20,
    price: 250,
  },
  {
    id: 2,
    title: "plastic mug",
    image: "https://picsum.photos/seed/mug1/400/400",
    description: "strong and durable plastic mug for home and daily use",
    stock: 15,
    price: 100,
  },
  {
    id: 3,
    title: "plastic tub",
    image: "https://picsum.photos/seed/tub1/400/400",
    description: "strong and durable plastic tub for home and daily use",
    stock: 10,
    price: 350,
  },
  {
    id: 4,
    title: "plastic basket",
    image: "https://picsum.photos/seed/basket1/400/400",
    description: "strong and durable plastic basket for home and daily use",
    stock: 25,
    price: 200,
  },
];

function Category() {
  const [search, setSearch] = useState("");

  const filterProduct = product.filter((item) =>
    `${item.title} ${item.description}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="p-5">


        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search product..."
          className="border border-black p-2 w-full md:w-150 rounded mb-5" />

        
        <div className="flex flex-wrap gap-5">
          {filterProduct.map((item) => (
            <div
              className="shadow-lg w-60 cursor-pointer p-3 rounded-xl"
              key={item.id}>
              <img className="w-full h-30 object-cover rounded-xl" src={item.image}alt={item.title}/>

              <h1 className="text-blue-950 font-bold text-lg mt-2">
                {item.title}
              </h1>

              <p className="text-gray-500">
                {item.description.slice(0, 50)}...
              </p>

              <span className="text-green-500 font-bold block mt-2">
                Stock: {item.stock}
              </span>

              <p className="text-red-600 font-bold">
                ₹{item.price}
              </p>

              <button
                className="bg-green-500 ml-10 text-white rounded-xl
                hover:bg-blue-950 w-32 p-2 cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>


        {filterProduct.length === 0 && (
          <p className="text-red-500 font-bold mt-5">
            Product not found
          </p>
        )}

      </div>
    </>
  );
}

export default Category;