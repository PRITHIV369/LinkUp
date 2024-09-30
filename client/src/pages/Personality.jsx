import React from 'react'
const Personality = () => {
  return (
    <div>
        <div className='w-[100%] h-[100vh] bg-slate-50 flex justify-center items-center'>
        <div className='w-[80vw] h-[80vh] flex flex-col justify-start items-center gap-11'>
            <div className='flex flex-col gap-2 justify-start items-center'>
            <b className='text-3xl text-blue-600'>
            WHAT IS YOUR PERSONALITY TRAIT?
            </b>
            <p className='text-gray-600'>
            Your matches can know about you and your personality. It will be useful.
            </p>
            </div>
        <div className="px-10 py-6 bg-white shadow-lg h-fit min-w-72 rounded-md flex flex-col justify-center items-center">
        <div className="flex flex-col gap-y-3">
  <div className="flex">
    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-vertical-group-1" />
    <label htmlFor="hs-radio-vertical-group-1" className="text-sm text-gray-500 ms-2">Analytical</label>
  </div>
  <div className="flex">
    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-vertical-group-2" />
    <label htmlFor="hs-radio-vertical-group-2" className="text-sm text-gray-500 ms-2">Creative</label>
  </div>
  <div className="flex">
    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-vertical-group-3" />
    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2">Pragmatic</label>
  </div>
  <div className="flex">
    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-vertical-group-4" />
    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2">Pessimistic</label>
  </div>
  <div className="flex">
    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-vertical-group-5" />
    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2">Introvert</label>
  </div>
  <div className="flex">
    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-vertical-group-6" />
    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2">Ambivert</label>
  </div>
  <div className="flex">
    <input type="radio" name="hs-radio-vertical-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-vertical-group-7" />
    <label htmlFor="hs-radio-vertical-group-3" className="text-sm text-gray-500 ms-2">Extrovert</label>
  </div>
</div>
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

export default Personality