import React from 'react'
import EditorAddOns from './_components/EditorAddOns'
import FormBuilder from './_components/FormBuilder'

const EditorPage = () => {
  return (
    <div className="flex h-full justify-center gap-5">
      <div className='w-1/4 flex-none bg-white/80 rounded-2xl p-4'>
        <EditorAddOns />
      </div>
      <div className='flex-1 overflow-hidden'>
        <FormBuilder />
      </div>
    </div>
  )
}

export default EditorPage