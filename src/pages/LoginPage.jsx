import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import AuthImagePatten from "../components/AuthImagePatten";
import { useAuthStore } from "../store/useAuthStore.js";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {login,  isLoggingIn} = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data)
      console.log("login success  full",data)
    } catch (error) {
      console.error("faild login:",error)
    }
    // login logic here
  };

  return (
    <div className="bg-gradient-to-r from-stone-900 to-purple-900 via-pink- min-h-screen flex items-center justify-center p-4">
      <div
        className="bg-gradient-to-r from-stone-900 to-purple-900 rounded-3xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden"
        style={{ minHeight: 520 }}
      >
        {/* Left Side Image */}
       <AuthImagePatten/>

        {/* Right Side Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col relative">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8 text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col">

            {/* Email */}
            <label className="block text-sm font-semibold text-white" htmlFor="email">Email</label>
            <div className="flex items-center border border-orange-500 rounded-md focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500">
              <span className="pl-3 pr-2 text-lg flex items-center text-white">
                <Mail size={18} />
              </span>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full py-2 px-3 text-sm text-white rounded-r-md focus:outline-none bg-transparent"
              />
            </div>
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}

            {/* Password */}
            <label className="block text-sm font-semibold text-white" htmlFor="password">Password</label>
            <div className="flex items-center border border-orange-500 rounded-md focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500">
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
                className="w-full py-2 px-3 text-sm text-white rounded-r-md focus:outline-none bg-transparent"
              />
            </div>
            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}

          <button
  type="submit"
  disabled={isLoggingIn}
  className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
>
  {isSubmitting ? (
    <>
      <Loader2 className="animate-spin w-5 h-5" />
      Loading...
    </>
  ) : (
    "Login"
  )}
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
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500 hover:underline font-semibold">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
