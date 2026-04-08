import React from "react";
// Importaciones de Material UI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GlobalStyles from "@mui/material/GlobalStyles";

// Iconos
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GitHubIcon from "@mui/icons-material/GitHub";

// --- IMPORTACIONES CON LLAVES Y RUTAS CORREGIDAS ---
import { animarFavorito } from "../../../Utils/animarFavorito.jsx";
import { UseFavoritos } from "../../Auth/Hooks/UseFavoritos.jsx";

// 👇 ESTA LÍNEA ES CLAVE
const base = import.meta.env.BASE_URL;

export const Content = () => {

  const productosDestacados = [
    { id: 1, nombre: "Arequipe", precio: 7500, img: `${base}img/Arequipe.webp`, desc: "Rico para compartir en familia." },
    { id: 2, nombre: "Fresa", precio: 7500, img: `${base}img/Torta_fresa.webp`, desc: "Una mezcla de mora, fresa y frambuesa." },
    { id: 3, nombre: "Brownie", precio: 7500, img: `${base}img/Brownie.webp`, desc: "Sabor delicioso e indulgente." },
    { id: 4, nombre: "Maracuya", precio: 7500, img: `${base}img/Maracuya.webp`, desc: "Sabor delicioso e indulgente." },
    { id: 5, nombre: "Milo", precio: 7500, img: `${base}img/Milo.webp`, desc: "Sabor delicioso e indulgente." },
    { id: 6, nombre: "Mora", precio: 7500, img: `${base}img/Mora.webp`, desc: "Sabor delicioso e indulgente." },
    { id: 7, nombre: "Melocoton", precio: 7500, img: `${base}img/Melocoton.webp`, desc: "Sabor delicioso e indulgente." },
    { id: 8, nombre: "Caramelo", precio: 7500, img: `${base}img/Torta_caramelo.webp`, desc: "Sabor delicioso e indulgente." },
    { id: 9, nombre: "Griego", precio: 7500, img: `${base}img/Torta_limon.webp`, desc: "Sabor delicioso e indulgente." },
  ];
  const { favoritos, toggleFavorito } = UseFavoritos();

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0, background: "#f4ece2" } }} />

      <Box sx={{
        p: { xs: 2, md: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#5d4037",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.3rem" }
          }}
        >
          Productos Destacados
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
          {productosDestacados.map((producto) => {
            const esFavorito = !!favoritos[producto.id];

            return (
              <Paper
                key={producto.id}
                elevation={3}
                sx={{
                  width: { xs: "100%", sm: "45%", md: 320, lg: 340 },
                  height: "auto",
                  p: 2,
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}
              >
                <Box
                  component="img"
                  src={producto.img}
                  alt={`Torta sabor ${producto.nombre}`}
                  loading="lazy"
                  sx={{ width: "100%", height: { xs: 170, md: 180 }, objectFit: "cover", borderRadius: 2, mb: 2 }}
                />
                <Typography variant="h6" sx={{ color: "#5d4037", fontWeight: "bold" }}>
                  {producto.nombre}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "text.secondary", minHeight: '40px' }}>
                  {producto.desc}
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="center">
                  <Button
                    variant="contained"
                    onClick={() => {
                      animarFavorito(producto.img);
                      toggleFavorito(producto);
                    }}
                    startIcon={esFavorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    sx={{
                      bgcolor: "#5d4037",
                      borderRadius: '20px',
                      textTransform: 'none',
                      "&:hover": { bgcolor: "#4e342e" }
                    }}
                  >
                    Favorito
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      color: "#5d4037",
                      borderColor: "#5d4037",
                      borderRadius: '20px',
                      textTransform: 'none',
                      "&:hover": { borderColor: "#4e342e", bgcolor: 'rgba(93, 64, 55, 0.04)' }
                    }}
                  >
                    Añadir
                  </Button>
                </Stack>
              </Paper>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
          mb: 4
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
            mb: 4,
            gap: 2, // espacio entre botones
            flexWrap: "wrap" // para que en pantallas pequeñas no se salga
          }}
        >
          {/* Botón GitHub */}
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/drexmezadelaossa/te_eshop.git"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: "linear-gradient(135deg, #24292e, #3b3f45)",
              color: "#fff",
              borderRadius: "40px",
              px: { xs: 3, md: 5 },
              py: { xs: 1.2, md: 1.8 },
              fontSize: { xs: "14px", md: "17px" },
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              transition: "all 0.35s ease",
              display: "flex",
              alignItems: "center",
              gap: 1,

              "&:hover": {
                background: "linear-gradient(135deg, #1b1f23, #2f3338)",
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)"
              },

              "&:active": {
                transform: "scale(0.98)"
              }
            }}
          >
            Ver repositorio en GitHub
          </Button>

          {/* Botón Vercel */}
          <Button
            variant="contained"
            href="https://te-eshop-l5nwlny1w-drexmezadelaossas-projects.vercel.app/" // <--- PON AQUÍ TU LINK DE VERCEL
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: "linear-gradient(135deg, #24292e, #3b3f45)",
              color: "#fff",
              borderRadius: "40px",
              px: { xs: 3, md: 5 },
              py: { xs: 1.2, md: 1.8 },
              fontSize: { xs: "14px", md: "17px" },
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "none",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              transition: "all 0.35s ease",
              display: "flex",
              alignItems: "center",
              gap: 1,

              "&:hover": {
                background: "linear-gradient(135deg, #1b1f23, #2f3338)",
                transform: "translateY(-3px) scale(1.05)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)"
              },

              "&:active": {
                transform: "scale(0.98)"
              }
            }}
          >
            Ver proyecto en Vercel
          </Button>
        </Box>|
      </Box>
    </>
  );
};