import React from 'react';
import { useAddPageMenu } from '../_hooks/useAddPageMenu';
import FormNavAddPageMenu from './FormNavAddPageMenu';

interface Props {
  hover?: boolean
};

const FormNavGap = ({ hover }: Props) => {
  const { ref, isOpen, closeMenu, toggleMenu } = useAddPageMenu();

  return (
    <div
      ref={ref}
      className={`
      ${!hover ? '' : 'cursor-pointer hover:w-12'}
      flex group relative justify-center items-center w-5 h-10 transition-[width] transition-discrete ease-in delay-50`}
      onClick={toggleMenu}
      onMouseLeave={closeMenu}>
      
      {hover && (
        <div className='opacity-0 z-20 mt-1 group-hover:opacity-100 transition-opacity ease-in-out delay-50'>
          <div>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dd_1_25)">
              <path d="M3 10C3 5.58172 6.58172 2 11 2C15.4183 2 19 5.58172 19 10C19 14.4183 15.4183 18 11 18C6.58172 18 3 14.4183 3 10Z" fill="white"/>
              <path d="M11 2.25C15.2802 2.25 18.75 5.71979 18.75 10C18.75 14.2802 15.2802 17.75 11 17.75C6.71979 17.75 3.25 14.2802 3.25 10C3.25 5.71979 6.71979 2.25 11 2.25Z" stroke="#E1E1E1" strokeWidth="0.5"/>
              <g clipPath="url(#clip0_1_25)">
              <path d="M11 7.16667V10M11 10V12.8333M11 10H8.16666M11 10H13.8333" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </g>
              <defs>
              <filter id="filter0_dd_1_25" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="1"/>
              <feGaussianBlur stdDeviation="1.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_25"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="1"/>
              <feGaussianBlur stdDeviation="0.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
              <feBlend mode="normal" in2="effect1_dropShadow_1_25" result="effect2_dropShadow_1_25"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_25" result="shape"/>
              </filter>
              <clipPath id="clip0_1_25">
              <rect width="8" height="8" fill="white" transform="translate(7 6)"/>
              </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      )}

      {isOpen && (
        <FormNavAddPageMenu />
      )}

    </div>
  );
};

export default FormNavGap;