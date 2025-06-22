// src/components/LanguageSwitcher.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white border px-3 py-2 rounded shadow hover:bg-gray-100"
      >
        <FaGlobe />
        <span className="text-sm font-medium">Language</span>
      </button>

      {open && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white border z-10">
          <button
            onClick={() => changeLanguage('am')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            አማርኛ (Amharic)
          </button>
          <button
            onClick={() => changeLanguage('om')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Afaan Oromo
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
