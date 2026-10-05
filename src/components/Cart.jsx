import { useDispatch, useSelector } from "react-redux";
import { addtocart, clearcart, removetocart } from "../slice/Cartslice";


const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.item);

  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = cartItems.length > 0 ? 50 : 0;

  // Total
  const total = subtotal + shipping;

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-2xl p-10 text-center max-w-md w-full">
          <div className="text-6xl mb-5">🛒</div>

          <h1 className="text-3xl font-bold text-gray-800">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-3">
            You haven't added any products to your cart yet.
          </p>

          <button
            onClick={() => window.history.back()}
            className="mt-6 bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            You have {cartItems.length} product
            {cartItems.length > 1 ? "s" : ""} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= CART ITEMS ================= */}
          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row gap-5"
              >

                {/* Product Image */}
                <div className="w-full sm:w-32 h-32 flex-shrink-0">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-lg bg-gray-50"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">

                  <div className="flex justify-between gap-4">

                    <div>
                      <p className="text-sm uppercase text-blue-600 font-semibold">
                        {item.category}
                      </p>

                      <h2 className="text-lg font-semibold text-gray-800 mt-1">
                        {item.title}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.description?.slice(0, 80)}...
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                     onClick={()=>dispatch(removetocart(item.id))}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex flex-wrap items-center justify-between mt-6 gap-4">

                    {/* Quantity */}
                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        Quantity
                      </p>

                      <div className="flex items-center border border-gray-300 rounded-lg w-fit">

                        {/* Minus */}
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch(
                                removetocart(item.id)
                              );

                              dispatch(
                                addtocart({
                                  ...item,
                                  quantity: item.quantity - 1,
                                })
                              );
                            }
                          }}
                          disabled={item.quantity <= 1}
                          className="px-4 py-2 text-xl hover:bg-gray-100 disabled:opacity-40"
                        >
                          −
                        </button>

                        {/* Quantity */}
                        <span className="px-5 py-2 border-x border-gray-300 font-semibold">
                          {item.quantity}
                        </span>

                        {/* Plus */}
                        <button
                          onClick={() =>
                            dispatch(
                              addtocart({
                                ...item,
                                quantity: 1,
                              })
                            )
                          }
                          className="px-4 py-2 text-xl hover:bg-gray-100"
                        >
                          +
                        </button>

                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">

                      <p className="text-xl font-bold text-gray-800">
                        ₹
                        {(
                          item.price * item.quantity
                        ).toFixed(2)}
                      </p>

                      <p className="text-sm text-gray-400">
                        ₹{item.price} each
                      </p>

                    </div>

                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <button
              onClick={() => window.history.back()}
              className="text-blue-600 hover:text-blue-800 font-medium mt-3"
            >
              ← Continue Shopping
            </button>

            {/* Clear Cart */}
            <button
            onClick={()=>dispatch(clearcart())}
              className="ml-6 text-red-500 hover:text-red-700 font-medium"
            >
              Clear Cart
            </button>

          </div>

          {/* ================= ORDER SUMMARY ================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              {/* Subtotal */}
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>

                <span>
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>

                <span>
                  ₹{shipping.toFixed(2)}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t pt-4 flex justify-between">

                <span className="text-lg font-bold text-gray-800">
                  Total
                </span>

                <span className="text-xl font-bold text-blue-600">
                  ₹{total.toFixed(2)}
                </span>

              </div>

            </div>

            {/* Coupon */}
            <div className="mt-6">

              <label className="text-sm font-medium text-gray-700">
                Coupon Code
              </label>

              <div className="flex mt-2">

                <input
                  type="text"
                  placeholder="Enter coupon"
                  className="w-full border border-gray-300 rounded-l-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="bg-gray-800 text-white px-4 rounded-r-lg hover:bg-gray-900">
                  Apply
                </button>

              </div>

            </div>

            {/* Checkout */}
            <button
              onClick={() => alert("Proceeding to checkout...")}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Proceed to Checkout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;