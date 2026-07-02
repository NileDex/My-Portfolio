import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

window.addEventListener(
  'error',
  (event) => {
    if (event.message && event.message.includes('ethereum')) {
      console.warn('Environmental noise suppressed.');
      event.preventDefault();
      event.stopPropagation();
    }
  },
  true,
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
