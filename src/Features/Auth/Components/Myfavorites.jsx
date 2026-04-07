import React from "react";
// Importaciones de Material UI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Iconos
import FavoriteIcon from "@mui/icons-material/Favorite";

// --- CORRECCIÓN DE IMPORTACIÓN ---
// Usamos llaves y subimos los niveles necesarios (suponiendo que está en Auth/Components)
import { UseFavoritos } from "../Hooks/UseFavoritos.jsx";

// Quitamos el default y usamos export nombrado
export const Myfavorites = () => {
  const { favoritos, toggleFavorito } = UseFavoritos();

  // Convertimos el objeto de favoritos en un array para mapearlo
  const listaFavoritos = favoritos ? Object.values(favoritos) : [];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 5 },
        backgroundColor: "#f4ece2",
        minHeight: "100vh"
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 4,
          color: "#5d4037",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.8rem" }
        }}
      >
        Mis Favoritos
      </Typography>

      {listaFavoritos.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", color: "#5d4037", mt: 10 }}>
          No tienes productos guardados en tu lista de deseos.
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
          {listaFavoritos.map((producto) => (
            <Paper
              key={producto.id}
              elevation={3}
              sx={{
                width: { xs: "100%", sm: "45%", md: 320, lg: 350 },
                p: 2,
                borderRadius: 3,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <Box
                component="img"
                src={producto.img}
                alt={producto.nombre}
                sx={{ width: "100%", height: { xs: 170, md: 180 }, objectFit: "cover", borderRadius: 2 }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "#5d4037" }}>
                {producto.nombre}
              </Typography>

              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ color: '#c4a47c', fontWeight: 'bold' }}>
                  ${(producto?.precio ?? 0).toLocaleString()}
                </Typography>

                <Button
                  onClick={() => toggleFavorito(producto)}
                  variant="contained"
                  sx={{
                    bgcolor: "#5d4037",
                    "&:hover": { bgcolor: "#4e342e" },
                    textTransform: 'none',
                    borderRadius: '20px'
                  }}
                  startIcon={<FavoriteIcon />}
                >
                  Quitar
                </Button>
              </Stack>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};