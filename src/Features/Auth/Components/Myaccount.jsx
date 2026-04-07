import React, { useState } from "react";
// Importaciones directas de Material UI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";

// Iconos
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";

// Quitamos el 'default' y exportamos con nombre
export const Myaccount = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [errores, setErrores] = useState({});

  const validar = () => {
    let nuevosErrores = {};

    if (!correo) {
      nuevosErrores.correo = "El correo es obligatorio";
    } else if (!correo.includes("@")) {
      nuevosErrores.correo = "Correo no válido";
    }

    if (!password) {
      nuevosErrores.password = "La contraseña es obligatoria";
    } else if (password.length < 8) {
      nuevosErrores.password = "Debe tener mínimo 8 caracteres";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Inicio de sesión correcto");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#5d4037,#3e2723)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2
      }}
    >
      <Fade in timeout={800}>
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, md: 5 },
            width: { xs: "100%", sm: 360 },
            borderRadius: 4,
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Avatar */}
          <Avatar
            sx={{
              mx: "auto",
              mb: 2,
              bgcolor: "#3e2723",
              width: { xs: 50, md: 60 },
              height: { xs: 50, md: 60 }
            }}
          >
            <PersonIcon />
          </Avatar>

          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "#5d4037",
              fontSize: { xs: "1.8rem", md: "2.2rem" }
            }}
          >
            Iniciar Sesión
          </Typography>

          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField
              fullWidth
              label="Correo electrónico"
              placeholder="correo@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              margin="normal"
              error={!!errores.correo}
              helperText={errores.correo}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type={mostrarPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              error={!!errores.password}
              helperText={errores.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setMostrarPassword(!mostrarPassword)}
                      edge="end"
                    >
                      {mostrarPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: { xs: 1, md: 1.2 },
                bgcolor: "#5d4037",
                "&:hover": {
                  bgcolor: "#3e2723"
                },
                borderRadius: 2,
                fontWeight: "bold"
              }}
            >
              Ingresar
            </Button>

            <Box sx={{ mt: 2 }}>
              <Link href="#" underline="hover" sx={{ fontSize: 14 }}>
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </Box>
  );
};