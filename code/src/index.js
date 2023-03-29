import React from 'react';
import { createRoot } from 'react-dom/client';
import './CSS/index.css';
import './CSS/MovieList.css'
import './CSS/MovieDetails.css'
import './CSS/NotFound.css'
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
