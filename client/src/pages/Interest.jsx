import React from 'react'
const Interest = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-slate-50 flex justify-center items-center'>
        <div className='w-[80vw] h-[80vh] flex flex-col justify-start items-center gap-11'>
            <div className='flex flex-col gap-2 justify-start items-center'>
            <b className='text-3xl text-blue-600'>
            WHAT ARE YOUR INTERESTS?
            </b>
            <p className='text-gray-600'>
            Select up to 4 interest. These will be helpful to find relevant matches.
            </p>
            </div>
            <div id="checklist">
  <input value="1" name="r" type="checkbox" id="01" />
  <label for="01">Gaming</label>
  
  <input value="2" name="r" type="checkbox" id="02" />
  <label for="02">Reading</label>
  
  <input value="3" name="r" type="checkbox" id="03" />
  <label for="03">Programming</label>
  
  <input value="4" name="r" type="checkbox" id="04" />
  <label for="04">Traveling</label>
  
  <input value="5" name="r" type="checkbox" id="05" />
  <label for="05">Music</label>
  
  <input value="6" name="r" type="checkbox" id="06" />
  <label for="06">Science</label>

  <input value="7" name="r" type="checkbox" id="07" />
  <label for="07">Maths</label>
  
  <input value="8" name="r" type="checkbox" id="08" />
  <label for="08">Trading</label>
  
  <input value="9" name="r" type="checkbox" id="09" />
  <label for="09">Bussiness</label>
  
  <input value="10" name="r" type="checkbox" id="10" />
  <label for="10">Investing</label>
  
  <input value="11" name="r" type="checkbox" id="11" />
  <label for="11">Space</label>
  
  <input value="12" name="r" type="checkbox" id="12" />
  <label for="12">Sports</label>
</div>
<div className='text-blue-500 text-sm'>
    TRY YOUR OWN
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
  )
}

export default Interest