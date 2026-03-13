import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// --- IMPORTACIÓN ACTUALIZADA CON LLAVES ---
// Importamos App como export nombrado desde su archivo
import  App  from './App';

const rootElement = document.getElementById('root');

// Verificación de seguridad para el elemento raíz
if (!rootElement) throw new Error("No se encontró el elemento 'root' en el HTML");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);