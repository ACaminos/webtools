import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ value, onChange, placeholder = 'Buscar…', autoFocus = false }) => {
  const [inner, setInner] = useState(value ?? '');
  useEffect(() => setInner(value ?? ''), [value]);
  useEffect(() => {
    const t = setTimeout(() => { if (inner !== (value ?? '')) onChange(inner); }, 200);
    return () => clearTimeout(t);
  }, [inner, value, onChange]);
  return (
    <div className="relative w-full max-w-md">
      <svg aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 110-16 8 8 0 010 16z" />
      </svg>
      <input
        type="search"
        role="searchbox"
        aria-label={placeholder}
        autoFocus={autoFocus}
        value={inner}
        onChange={(e) => setInner(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-8 py-2 text-sm rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
      />
      {inner && (
        <button type="button" aria-label="Limpiar búsqueda" onClick={() => { setInner(''); onChange(''); }} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white">
          ✕
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
};
