import React from 'react'
import FormNav from './FormNav'

const FormBuilder = () => {
  return (
    <div className='flex h-full flex-col'>
        <div className='flex-1 rounded-2xl bg-slate-800 mb-5'></div>
        <div className='flex-none bg-white/50 rounded-2xl p-4'>
          <FormNav />
        </div>
    </div>
  )
}

export default FormBuilder