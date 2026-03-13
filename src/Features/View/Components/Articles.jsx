import React from "react";
// Material UI
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

// --- IMPORTACIONES ACTUALIZADAS CON LLAVES ---
import { animarFavorito } from "../../../Utils/animarFavorito.jsx";
import { UseFavoritos } from "../../Auth/Hooks/UseFavoritos.jsx";

const listadoProductos = [
  { id: 1, nombre: "Cafe", precio: 7500, img: "/img/Torta_cafe.webp", desc: "Perfecta para los amantes del café." },
  { id: 2, nombre: "Fresa", precio: 7500, img: "/img/Torta_fresa.webp", desc: "Una mezcla de mora, fresa y frambuesa." },
  { id: 3, nombre: "Manzana", precio: 7500, img: "/img/Torta_manzana.webp", desc: "Un sabor reconfortante y tradicional." },
  { id: 4, nombre: "Naranja", precio: 7500, img: "/img/Torta_naranja.webp", desc: "Aporta un toque cítrico diferente al de limón." },
  { id: 5, nombre: "Pistachos", precio: 7500, img: "/img/Torta_pistachos.webp", desc: "Muy tendencia en la repostería actual." },
  { id: 6, nombre: "Red Velvet", precio: 7500, img: "/img/Torta_red.webp", desc: "Muy popular por su color rojo vibrante y sabor a cacao ligero." },
  { id: 7, nombre: "Selva", precio: 7500, img: "/img/Torta_selva.webp", desc: "Combinación clásica de chocolate, cerezas y crema." },
  { id: 8, nombre: "Zanahoria", precio: 7500, img: "/img/Torta_zanahoria.webp", desc: "Clásica torta de zanahoria con toque casero." },
  { id: 9, nombre: "Caramelo", precio: 7500, img: "/img/Torta_caramelo.webp", desc: "El equilibrio perfecto entre dulce y salado." },
  { id: 10, nombre: "Lavanda", precio: 7500, img: "/img/Torta_lavanda.webp", desc: "Torta de Lavanda y Miel." },
  { id: 11, nombre: "Piña", precio: 7500, img: "/img/torta_piña.webp", desc: "Rica torta de piña." },
  { id: 12, nombre: "Champaña", precio: 7500, img: "/img/Torta_champaña.webp", desc: "Muy utilizada en bodas o eventos elegantes." },
  { id: 13, nombre: "Lulo", precio: 7500, img: "/img/Torta_lulo.webp", desc: "Opción ácida y refrescante." },
  { id: 14, nombre: "Mantequilla", precio: 7500, img: "/img/Torta_mantequilla_converted.webp", desc: "Perfecta para los amantes del café." },
  { id: 15, nombre: "Natilla", precio: 7500, img: "/img/Torta_natilla.webp", desc: "Un sabor rico para fin de año." },
  { id: 16, nombre: "Origen", precio: 7500, img: "/img/Torta_origen.webp", desc: "Buen sabor para compartir." },
  { id: 17, nombre: "Calabaza", precio: 7500, img: "/img/Torta_calabaza.webp", desc: "Sabor para darle un buen gusto." },
  { id: 18, nombre: "Arequipe", precio: 7500, img: "/img/Arequipe.webp", desc: "Rico para compartir en familia." },
  { id: 19, nombre: "Borojo", precio: 7500, img: "/img/Torta_borojo.webp", desc: "Sabor único y delicioso." },
  { id: 20, nombre: "Yogurt", precio: 7500, img: "/img/Torta_griego.webp", desc: "Sabor delicioso y saludable." },
  { id: 21, nombre: "Mandarina", precio: 7500, img: "/img/Torta_Mandarina.webp", desc: "Sabor cítrico y refrescante." },
  { id: 22, nombre: "Brownie", precio: 7500, img: "/img/Brownie.webp", desc: "Sabor delicioso e indulgente." },
  { id: 23, nombre: "Milo", precio: 7500, img: "/img/Milo.webp", desc: "Sabor delicioso y refrescante." },
  { id: 24, nombre: "Mora", precio: 7500, img: "/img/Mora.webp", desc: "Rico en vitaminas." },
];

// --- CAMBIO A EXPORT NOMBRADO ---
export const Articles = () => {
  const { favoritos, toggleFavorito } = UseFavoritos();

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0, background: "#f4ece2" } }} />
      <Box sx={{ width: "100%", minHeight: "100vh", background: "#f4ece2", display: "flex", flexDirection: "column", pt: 10 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, p: 5 }}>
          {listadoProductos.map(producto => {
            const esFavorito = !!favoritos[producto.id];
            return (
              <Paper
                key={producto.id}
                elevation={3}
                sx={{
                  width: { xs: "100%", sm: 350, md: 400 },
                  height: 350,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)" }
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 220,
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover img": { transform: "scale(1.08)" },
                    "&:hover .overlay": { opacity: 1 }
                  }}
                >
                  <Box
                    component="img"
                    src={producto.img}
                    alt={`Torta sabor ${producto.nombre}`}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "0.5s ease"
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      px: 3,
                      background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3))",
                      color: "white",
                      opacity: 0,
                      transition: "0.4s"
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>{producto.nombre}</Typography>
                    <Typography variant="body2" sx={{ maxWidth: "80%", opacity: 0.9 }}>{producto.desc}</Typography>
                  </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", color: "#5d4037", mb: 1 }}>{producto.nombre}</Typography>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>${producto.precio.toLocaleString()}</Typography>
                    <Stack direction="row" spacing={1}>
                      <Button
                        onClick={() => { animarFavorito(producto.img); toggleFavorito(producto); }}
                        variant="outlined"
                        startIcon={esFavorito ? <FavoriteIcon sx={{ color: "#ff4d88" }} /> : <FavoriteBorderIcon />}
                        sx={{ borderRadius: 10, textTransform: "none", borderColor: "#5d4037", color: "#5d4037", fontWeight: "bold" }}
                      >
                        Favorito
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<ShoppingCartIcon />}
                        sx={{ borderRadius: 10, color: "#5d4037", borderColor: "#5d4037", textTransform: "none", fontWeight: "bold" }}
                      >
                        Añadir
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </>
  );
};