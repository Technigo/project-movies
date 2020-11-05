import React from 'react';
import 'styles/loader.css';

export const Loader = () => {
  return (
    <div className="loading-wrapper">
      <img src="https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/200w.webp?cid=ecf05e477geloqem7ijy8rf4am9els1sk9ko69i1arm7z2u3&rid=200w.webp" alt="Loading gif"/>
      <p>The page is loading...</p>
    </div>
  );
};