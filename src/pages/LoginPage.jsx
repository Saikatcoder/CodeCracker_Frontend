import React from 'react'

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden shadow-lg" style={{ minHeight: '480px' }}>
        {/* Left side with image and logo */}
        <div className="bg-pink-100 flex flex-col justify-center items-start p-8 md:p-12 md:w-1/2 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl relative">
          <div className="mb-6">
            <span className="text-pink-600 font-extrabold text-lg select-none">Moxfitask.</span>
          </div>
          <img
            src="https://storage.googleapis.com/a1aa/image/1a71afb2-9851-4db7-55d2-2b9d0747bcb0.jpg"
            alt="Cartoon character"
            className="rounded-2xl w-full max-w-md object-contain"
            width="400"
            height="400"
          />
        </div>

        {/* Right side with form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col relative">
          {/* Close icon */}
          <button aria-label="Close" className="absolute top-6 right-6 text-gray-700 hover:text-gray-900 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 select-none">Login</h2>

          <form className="space-y-6 flex flex-col">
            {/* Email */}
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
            <div className="flex items-center border border-yellow-300 rounded-md focus-within:ring-1 focus-within:ring-yellow-400 focus-within:border-yellow-400">
              <span className="pl-3 pr-2 text-yellow-700 text-lg select-none flex items-center">
                <i className="fas fa-envelope" />
              </span>
              <input
                type="email"
                id="email"
                autoComplete="email"
                className="w-full py-2 px-3 text-sm text-gray-900 rounded-r-md focus:outline-none"
                defaultValue="daniel21fisher@gmail.com"
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-yellow-400 focus-within:border-yellow-400">
              <button type="button" aria-label="Toggle password visibility" className="pl-3 pr-2 text-gray-600 text-lg select-none flex items-center focus:outline-none">
                <i className="fas fa-eye" />
              </button>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                className="w-full py-2 px-3 text-sm text-gray-900 rounded-r-md focus:outline-none"
                defaultValue="********"
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-xs text-yellow-500 hover:underline font-semibold select-none">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-md transition-colors duration-200 select-none">
              Log In
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-3">
            <hr className="border-gray-300 flex-grow" />
            <span className="text-xs text-gray-400 select-none">Or Continue With</span>
            <hr className="border-gray-300 flex-grow" />
          </div>

          <div aria-label="Social login options" className="mt-6 flex justify-center space-x-6 select-none">
            <button aria-label="Login with Google" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md transition-shadow">
              <img src="https://storage.googleapis.com/a1aa/image/d43d23c9-f435-467d-c89d-6e37b3211259.jpg" alt="Google logo" className="w-6 h-6" />
            </button>
            <button aria-label="Login with Facebook" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md transition-shadow">
              <img src="https://storage.googleapis.com/a1aa/image/62abb40b-9e88-47c7-fe61-829a4a5625ac.jpg" alt="Facebook logo" className="w-6 h-6" />
            </button>
            <button aria-label="Login with Apple" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md transition-shadow">
              <img src="https://storage.googleapis.com/a1aa/image/bf65c9ca-bc14-44d3-c45e-5436548e3cae.jpg" alt="Apple logo" className="w-6 h-6" />
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-700 select-none">
            Don’t have an account? <a href="#" className="text-gray-500 hover:underline font-semibold">Sign Up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage