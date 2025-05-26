import React from 'react'

const AuthImagePatten = () => {
  return (
    <div className="bg-gradient-to-r from-stone-900 to-purple-900 flex flex-col justify-center items-start p-8 md:p-12 md:w-1/2 rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl relative">
          <div className="mb-6 flex justify-center items-center">  
              <span className="text-orange-500 text-6xl font-extrabold  text-center">Code Cracker</span>
          </div>
          <img
            className="rounded-2xl w-full max-w-md object-contain"
            src="https://storage.googleapis.com/a1aa/image/edac5f5a-5df5-4d7a-e380-28e79dd31257.jpg"
            alt="Character"
          />
        </div>
  )
}

export default AuthImagePatten