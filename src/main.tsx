import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TreeBuilder from './TreeBuilder/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TreeBuilder />
  </StrictMode>
);
