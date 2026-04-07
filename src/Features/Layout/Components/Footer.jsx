import React from "react";
// Importaciones directas de Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { alpha } from "@mui/material/styles"; // este sí usa llaves

// Iconos
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const GOLD = "#c4a47c";
const CREAM = "#f4ece2";
const MAIN_CHOCO = "#5d4037";
const DARK_CHOCO = "#4e342e";

// Cambiado a export nombrado
export const Footer = () => {
  return (
    <Box component="footer" sx={{ width: "100%", mt: "auto" }}>

      {/* SECCIÓN PRINCIPAL */}
      <Box
        sx={{
          background: `linear-gradient(180deg, ${MAIN_CHOCO} 0%, ${DARK_CHOCO} 100%)`,
          color: CREAM,
          pt: { xs: 12, md: 16 },
          pb: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",

          /* textura suave */
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 20% 20%, ${alpha(GOLD, 0.08)}, transparent 60%)`,
            pointerEvents: "none"
          },

          /* ONDA SUPERIOR */
          "&::before": {
            content: '""',
            position: "absolute",
            top: -1,
            left: 0,
            width: "100%",
            height: "120px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23f4ece2' fill-opacity='1' d='M0,160C120,192,240,224,360,218.7C480,213,600,171,720,160C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`
          }
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 6, md: 8 }}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "flex-start" }}
          >

            {/* CONTACTO */}
            <Stack alignItems={{ xs: "center", md: "flex-start" }} spacing={2.5}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: GOLD,
                  textTransform: "uppercase"
                }}
              >
                Contacto
              </Typography>

              <Divider
                sx={{
                  bgcolor: GOLD,
                  width: 60,
                  height: 3,
                  borderRadius: 5,
                  boxShadow: `0 0 8px ${alpha(GOLD, 0.7)}`
                }}
              />

              <Typography variant="body2" sx={{ fontFamily: "'Montserrat', sans-serif", opacity: 0.85 }}>
                📞 +57 301 541 4781
              </Typography>

              <Typography variant="body2" sx={{ fontFamily: "'Montserrat', sans-serif", opacity: 0.85 }}>
                ✉️ andresmauriciomeza300@gmail.com
              </Typography>
            </Stack>

            {/* LOGO */}
            <Stack alignItems="center" sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: 1.5,
                  fontSize: { xs: "1.8rem", md: "2.2rem" }
                }}
              >
                Postres Katiana
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: GOLD, letterSpacing: 5, fontWeight: 600, mt: 0.5, mb: 2 }}
              >
                REPOSTERÍA EXCLUSIVA
              </Typography>

              <Box
                sx={{
                  fontSize: { xs: 40, md: 50 },
                  transition: "all 0.4s ease",
                  filter: "drop-shadow(0px 8px 8px rgba(0,0,0,0.5))",
                  "&:hover": { transform: "scale(1.2) rotate(-6deg)" }
                }}
              >
                🧁
              </Box>
            </Stack>

            {/* REDES */}
            <Stack alignItems={{ xs: "center", md: "flex-end" }} spacing={2.5}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: GOLD,
                  textTransform: "uppercase"
                }}
              >
                Síguenos
              </Typography>

              <Stack direction="row" spacing={2}>
                {[FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: CREAM,
                      border: `1px solid ${alpha(CREAM, 0.25)}`,
                      backdropFilter: "blur(6px)",
                      transition: "all .35s",
                      background: alpha(CREAM, 0.02),
                      "&:hover": {
                        bgcolor: GOLD,
                        color: DARK_CHOCO,
                        transform: "translateY(-8px) scale(1.1)",
                        borderColor: GOLD,
                        boxShadow: `0 8px 20px ${alpha(GOLD, 0.5)}`
                      }
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Stack>

              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  opacity: 0.7,
                  textAlign: { xs: "center", md: "right" },
                  lineHeight: 1.6
                }}
              >
                Postres Katiana © 2026
                <br />
                Andrés Mauricio Meza
                <br />
                Todos los derechos reservados.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* BARRA FINAL */}
      <Box
        sx={{
          background: `linear-gradient(90deg, ${GOLD} 0%, #e0c9a6 50%, ${GOLD} 100%)`,
          py: 2,
          textAlign: "center",
          boxShadow: "0px -6px 12px rgba(0,0,0,0.2)"
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          spacing={{ xs: 1.5, sm: 7 }}
          sx={{ color: DARK_CHOCO }}
        >
          {["Política de Privacidad", "Términos y Condiciones", "Cumplimiento"].map((text) => (
            <Typography
              key={text}
              variant="caption"
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                cursor: "pointer",
                transition: "all .3s",
                "&:hover": { color: "#fff", transform: "scale(1.15)" }
              }}
            >
              {text}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};