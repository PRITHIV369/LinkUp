import React from 'react'

const AddAbout = () => {
  return (
    <div>
        <div className='w-[100%] h-[100vh] bg-slate-50 flex justify-center items-center'>
        <div className='w-[80vw] h-[80vh] flex flex-col justify-start items-center gap-11'>
            <div className='flex flex-col gap-2 justify-start items-center'>
            <b className='text-3xl text-blue-600'>
            DESCRIBE ABOUT YOURSELF!
            </b>
            <p className='text-gray-600'>
            Your matches can know about you and your environment. It will be useful.
            </p>
            </div>
            
<div className="w-full max-w-xs p-5 bg-white rounded-lg font-mono shadow-lg">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unique-input">About</label>
  <textarea className="h-50 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" placeholder="Enter text here" type="area" id="unique-input" rows={7} cols={50}/>
</div>
<div className="flex flex-row gap-5">
<button class="w-40 cursor-pointer transition-all bg-blue-300 text-white px-6 py-2 rounded-lg
border-blue-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Pervious
</button> 
<button class="w-40 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Next
</button>
</div>
    </div>
    </div>
    </div>
  )
}

export default AddAbout