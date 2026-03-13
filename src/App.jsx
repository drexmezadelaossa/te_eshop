import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Material UI - Importaciones directas CORREGIDAS (sin llaves)
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// --- IMPORTACIONES DE COMPONENTES ---
// Quitamos extensiones para evitar el error 500 de resolución de Vite
import { Header } from "./Features/Layout/Components/Header";
import { Content } from "./Features/Layout/Components/Content";
import { Footer } from "./Features/Layout/Components/Footer";

// Auth Components
import { Myaccount } from "./Features/Auth/Components/Myaccount";
import { Mybuys } from "./Features/Auth/Components/Mybuys";
import { Myfavorites } from "./Features/Auth/Components/Myfavorites";

// View Components
import { Articles } from "./Features/View/Components/Articles";
import { Offers } from "./Features/View/Components/Offers";

const App = () => {
  return (
    <HashRouter>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Componente de Navegación Superior */}
        <Header />

        {/* Espaciador para el AppBar (80px) */}
        <Toolbar sx={{ minHeight: "80px" }} />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/mybuys" element={<Mybuys />} />
            <Route path="/myfavorites" element={<Myfavorites />} />
            {/* Redirección por defecto */}
            <Route path="*" element={<Content />} />
          </Routes>
        </Box>

        {/* Componente de Pie de Página */}
        <Footer />
        
      </Box>
    </HashRouter>
  );
};

export default App;