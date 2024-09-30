import React from 'react'
const Register = () => {
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
        <button class="w-full cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-700
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Register
</button>      </form>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Register