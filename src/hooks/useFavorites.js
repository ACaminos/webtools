import { useCallback, useEffect, useState } from 'react';

const KEY = 'wt-favs';

const read = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
  } catch {
    return new Set();
  }
};

export const useFavorites = () => {
  const [favs, setFavs] = useState(() => read());
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify([...favs])); } catch { void 0; }
  }, [favs]);
  const toggle = useCallback((url) => {
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(url)) next.delete(url);
      else next.add(url);
      return next;
    });
  }, []);
  const has = useCallback((url) => favs.has(url), [favs]);
  return { favs, toggle, has };
};

export const getFavorites = () => read();
