import React from 'react'
import FormPageNavigation from './FormPageNavigation'

const FormBuilder = () => {
  return (
    <div className='flex h-full flex-col'>
        <div className='flex-1 rounded-2xl bg-formbuilder'></div>
        <div className='flex-none h-20'>
          <FormPageNavigation />
        </div>
    </div>
  )
}

export default FormBuilder