import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
    const [login,Setlogin]=useState(true)
    const [formdata,setFormdata]=useState({
      name:"",
      email:"",
      number:"",
      password:"",
      // confirmPassword:""
    })

   const handlechange = (e) => {
  const { name, value } = e.target;
  // console.log("name",name)
  // console.log("value",value)

  setFormdata({
    ...formdata,
    [name]: value
  });
};

const handlesumbit =async (e) => {
  e.preventDefault();

  // SIGNUP
  if (!login) {
    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.number ||
      !formdata.password 
    ) {
      alert("All fields are required");
      return;
    }

    // if (formdata.password !== formdata.confirmPassword) {
    //   alert("Password does not match");
    //   return;
    // }

    // let users = JSON.parse(localStorage.getItem("user")) || [];

    // users.push(formdata);

    // localStorage.setItem("user", JSON.stringify(users));



   const response = await axios.post(
  "http://localhost:4000/auth/register",
  {
    name: formdata.name,
    email: formdata.email,
    number: formdata.number,
    password: formdata.password
  }
);
    console.log("respose",response)
    alert("Signup success");
    Setlogin(!login);
  }

  // LOGIN
  else {
    // const getdata = JSON.parse(localStorage.getItem("user")) || [];

    // if (getdata.length === 0) {
    //   alert("User not found");
    //   return;
    // }

    // const user = getdata.find(
    //   (item) =>
    //     item.email === formdata.email &&
    //     item.password === formdata.password
    // );

    // if (!user) {
    //   alert("Invalid email or password");
    //   return;
    // }

    // alert("Login successfully");

    // localStorage.setItem("loginuser", JSON.stringify(user));

    // navigate("/");

    const response=await axios.post("http://localhost:4000/auth/loginwithotp",{
      email:formdata.email,
      password:formdata.password
    })
    
    console.log("resposeelogin",response)
    alert(response.data.message)
    navigate("/otp")
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">


      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-blue-950 text-center mb-2">
         {login ? "Login" : "Register"} 
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Welcome to Ocean Plastic Industries
        </p>

        <form onSubmit={handlesumbit}>
{
    !login && (
        <div className="mb-5">
            <label className="block text-gray-700 font-lg mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handlechange}
              placeholder="Enter your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-900"
            />
          </div>

    )
}

            


          
          <div className="mb-5">
            <label className="block text-gray-700 font-lg mb-2">
              Email
            </label>

            <input
              type="email"
                onChange={handlechange}
              value={formdata.email}
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-900"
            />
          </div>

          {
            !login &&(
                
          
          <div className="mb-5">
            <label className="block text-gray-700 font-lg mb-2">
              Phone
            </label>

            <input
              type="number"
                onChange={handlechange}
              value={formdata.number}
              name="number"
              placeholder="Enter your Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-900"
            />
          </div>

  )
          }
          
          <div className="mb-5">
            <label className="block text-gray-700 font-lg mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
                onChange={handlechange}
              value={formdata.password}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-900"
            />
          </div>
              {/* {
            !login &&(
           <div className="mb-5">
            <label className="block text-gray-700 font-lg mb-2">
            confirm  Password
            </label>

            <input
              type="password"
                onChange={handlechange}
              name="confirmPassword"
              value={formdata.confirmPassword}
              placeholder="Enter your  password"
              className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-900"
            />
          </div>
 )
          } */}
        
          <div className="text-right mb-5">
            <Link
              to="/forgot-password"
              className="text-blue-900 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

        
          <button
            type="submit"
            className="w-full bg-blue-950 text-white p-2 rounded-lg font-semibold hover:bg-blue-800"
          >
            {login ? "Login":"Register"}
          </button>

        </form>


        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}

          <span onClick={()=>{
            Setlogin(!login)
          }}
            className="text-blue-900 font-semibold hover:underline"
          >
         { login ?  "Register":"Login"}
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;