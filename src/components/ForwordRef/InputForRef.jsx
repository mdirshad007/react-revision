import React, { forwardRef } from 'react'

function InputForRef(props,ref) {
  return (
    <div>
        <input ref={ref} type="text" className='border border-black rounded-lg w-[50%] h-14 px-4 py-3'/>
    </div>
  )
}
export default forwardRef(InputForRef) 
