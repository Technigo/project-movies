import React from 'react';
import { createRoot } from 'react-dom/client';
import './styling/index.css';
import './styling/singlemovie.css';
import './styling/footer.css'
import './styling/trendinglist.css'
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
