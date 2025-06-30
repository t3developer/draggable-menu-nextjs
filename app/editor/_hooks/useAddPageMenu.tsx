import { useEffect, useRef, useState } from 'react'

export function useAddPageMenu() {
  const [isOpen, setIsOpen] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
 
   const toggleMenu = () => setIsOpen((prev) => !prev);
   const closeMenu = () => setIsOpen(false);
 
   useEffect(() => {
     const handleClickOutside = (e: MouseEvent) => {
       if (ref.current && !ref.current.contains(e.target as Node)) {
         closeMenu();
       }
     };
     document.addEventListener('click', handleClickOutside);
     return () => document.removeEventListener('click', handleClickOutside);
   }, []);

   return {
    ref,
    isOpen,
    toggleMenu,
    closeMenu
   };
}