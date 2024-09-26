import React from 'react'

const Interest = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-slate-50 flex justify-center items-center'>
        <div className='w-[80vw] h-[70vh] flex flex-col justify-start items-center gap-11'>
            <div className='flex flex-col gap-2 justify-start items-center'>
            <b className='text-3xl text-blue-600'>
            WHAT ARE YOUR INTERESTS?
            </b>
            <p className='text-gray-600'>
            Select up to 3 interest. These will be helpful to find relevant matches.
            </p>
            </div>
            <div id="checklist">
  <input value="1" name="r" type="checkbox" id="01" />
  <label for="01">Gaming</label>
  <input value="2" name="r" type="checkbox" id="02" />
  <label for="02">Programming</label>
  <input value="3" name="r" type="checkbox" id="03" />
  <label for="03">Traveling</label>
                
</div>



        </div>
    </div>
  )
}

export default Interest