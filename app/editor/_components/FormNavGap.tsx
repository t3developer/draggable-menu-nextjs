import React from 'react';
import FormNavAddPage, { FormNavAddPageDisplay } from './FormNavAddPage';

interface Props {
  hover?: boolean,
  addNewPage?: () => {}, 
};

const FormNavGap = ({ hover, addNewPage }: Props) => {

  return (
    <div
      className={`
      ${!hover ? '' : 'cursor-pointer hover:w-12'}
      flex group justify-center items-center w-5 h-10 transition-all transition-discrete ease-in`}>
        {hover && (
          <div className='hidden relative z-20 mt-2 group-hover:block'>
            <FormNavAddPage display={FormNavAddPageDisplay.ICON} />
          </div>
        )}
    </div>
  );
}

export default FormNavGap;