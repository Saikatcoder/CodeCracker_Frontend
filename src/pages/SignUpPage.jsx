import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Code, Loader2 } from "lucide-react";
import AuthImagePatten from "../components/AuthImagePatten";
import { useAuthStore } from "../store/useAuthStore.js";

const signUpSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password is too long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      "Password must include uppercase, lowercase, number, and special character"
    )
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {signup, isSigninup}=useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      await signup(data)
      console.log("signup data", data);
      
    } catch (error) {
      console.error("signup failed:",error)
    }
  };

  return (
    <div className="bg-gradient-to-r from-stone-900 to-purple-900  min-h-screen flex items-center justify-center p-4">
      <div
        className="bg-gradient-to-r from-stone-900 to-purple-900  rounded-3xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden "
        style={{ minHeight: 520 }}
      >
        <AuthImagePatten/>

        {/* Right Side Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col relative">
    
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col">

            {/* Name */}
            <label className="block text-sm font-semibold text-white" htmlFor="name">Name</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500">
              <span className="pl-3 pr-2 text-white text-lg flex items-center">
                <Code size={18} />
              </span>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full py-2 px-3 text-sm text-white rounded-r-md focus:outline-none"
              />
            </div>
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}

            {/* Email */}
            <label className="block text-sm font-semibold text-white" htmlFor="email">Email</label>
            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500">
              <span className="pl-3 pr-2  border-orange-500  text-lg flex items-center">
                <Mail size={18} />
              </span>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full py-2 px-3 text-sm text-white rounded-r-md focus:outline-none"
              />
            </div>
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}

            {/* Password */}
            <label className="block text-sm font-semibold text-white" htmlFor="password">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="pl-3 pr-2 text-white flex items-center focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                className="w-full py-2 px-3 text-sm text-white rounded-r-md focus:outline-none"
              />
            </div>
            {errors.password && <p className="text-xs text-rose-600">{errors.password.message}</p>}

            <button
              type="submit"
              disabled={isSigninup}
              className="w-full bg-gradient-to-r from-stone-900 to-orange-600 text-white font-semibold py-3 rounded-md transition-colors duration-200"
            >
              {isSubmitting ?(<><Loader2 className="animate-spin w-5 h-5 mx-auto" />Looding.....</> ): "Sign Up"}
            </button>
          </form>

          {/* Social logins */}
          <div className="mt-8 flex items-center justify-center space-x-3">
            <hr className="border-gray-300 flex-grow" />
            <span className="text-xs text-gray-400">Or Continue With</span>
            <hr className="border-gray-300 flex-grow" />
          </div>
          <div className="mt-6 flex justify-center space-x-6">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" alt="Facebook" className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-6 h-6" />
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline font-semibold">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;







