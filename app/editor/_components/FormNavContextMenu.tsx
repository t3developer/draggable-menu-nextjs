import React from 'react';
import { FormNavPage } from './FormSortablePage';

type FormNavContextMenuProps = {
  page: FormNavPage,
};

const FormNavContextMenu = ({ page }: FormNavContextMenuProps) => {
  return (
    <div className="absolute bottom-full left-0 bg-white border rounded shadow-md z-50 transition-opacity duration-200 opacity-100">
      <button
        className="block px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-100"
      >
        Rename
      </button>
      <button
        className="block px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-100"
      >
        Duplicate
      </button>
      <button
        className="block px-4 py-2 w-full text-left transition-colors duration-200 hover:bg-gray-100"
      >
        Delete
      </button>
    </div>
  );
}

export default FormNavContextMenu;
