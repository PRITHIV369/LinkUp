import React from 'react'
const Login = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-slate-50 flex justify-center items-center'>
        <div className='w-[80vw] h-[70vh] flex flex-col text-blue-600 justify-start items-center'>
            <b className='text-3xl'>
                LinkUp
            </b>
            <div className='h-[100vh] md:w-[50vw] flex justify-center items-center w-[100vw]'>
            <div className="md:h-[80%] md:w-[60%] flex justify-center items-center bg-[#fff] rounded-md shadow-4xl w-[80%] h-[70%] shadow-lg">
      <form className="h-[90%] w-[80%] flex flex-col justify-center items-center gap-3">
        <input type="text" placeholder="name" className="p-3 w-full bg-slate-100 outline-none focus:border-b-2 focus:border-gray-800" />
        <input type="email" placeholder="email" className="p-3 w-full  bg-slate-100 outline-none focus:border-b-2 focus:border-gray-800" />
        <input type="password" placeholder="password" className="p-3 w-full  bg-slate-100 outline-none focus:border-b-2 focus:border-gray-800"/>
        <button type="submit" className="w-full bg-gradient-to-r from-slate-900 to-blue-600 hover:bg-slate-600 text-slate-200 h-[15%] rounded-md font-bold">SUBMIT</button>
      </form>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Login