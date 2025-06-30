import React from 'react'
import FormNav from './FormNav'

const FormBuilder = () => {
  return (
    <div className='flex h-full flex-col'>
        <div className='flex-1 rounded-2xl bg-formbuilder'></div>
        <div className='flex-none h-20 pt-5 px-5'>
          <FormNav />
        </div>
    </div>
  )
}

export default FormBuilder