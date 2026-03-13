import React from "react";
// Importaciones directas de Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// Hooks locales - Importaciones desestructuradas
import { UseState, FavoriteColor } from "../Hooks/UseState";
import { UseCallback } from "../Hooks/UseCallback";
import { Timer, UseEffect } from "../Hooks/UseEffect";
import { Component1, UseContext } from "../Hooks/UseContext";
import { UseMemo } from "../Hooks/UseMemo";
import { UseRef } from "../Hooks/UseRef";
import { UseReducer } from "../Hooks/UseReducer";
import { UseOnline } from "../Hooks/UseOnline";

// Cambio a export nombrado para mantener el estándar del proyecto
export const Offers = () => {
  const count = Timer();

  const paperStyle = {
    p: 3,
    width: "100%",
    maxWidth: 900,
    borderRadius: 4,
    background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
    }
  };

  return (
    <Box
      sx={{
        mt: 10,
        px: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#f9fafc",
        py: 5,
        minHeight: "100vh"
      }}
    >
      {/* SECCIÓN DE CONTADOR */}
      <Paper sx={{ ...paperStyle, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="div"
          color="primary"
          fontWeight="bold"
        >
          Se ha contabilizado {count} veces
        </Typography>
      </Paper>

      {/* RENDERIZADO DE HOOKS ACADÉMICOS */}
      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useContext
        </Typography>
        <UseContext />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useEffect
        </Typography>
        <UseEffect />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useRef
        </Typography>
        <UseRef />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useState
        </Typography>
        <UseState />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useReducer
        </Typography>
        <UseReducer />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useCallback
        </Typography>
        <UseCallback />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          Favorite Color
        </Typography>
        <FavoriteColor />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          Component 1
        </Typography>
        <Component1 />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useMemo
        </Typography>
        <UseMemo />
      </Paper>

      <Paper sx={paperStyle}>
        <Typography variant="h6" component="div" mb={2} color="primary">
          useOnline
        </Typography>
        <UseOnline />
      </Paper>
    </Box>
  );
};