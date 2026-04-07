import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// Quitamos el export default y usamos export nombrado
export const Mybuys = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2.5, md: 4 },
          maxWidth: 600,
          width: '100%',
          borderRadius: 3,
          textAlign: 'center',
          bgcolor: '#f4ece2'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#5d4037',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" }
          }}
        >
          Mis Compras
        </Typography>
        <Typography variant="body1" sx={{ color: '#c4a47c' }}>
          Aquí podrás ver el historial de tus pedidos realizados.
        </Typography>

        {/* Aquí podrías mapear una lista de compras más adelante */}
        <Box
          sx={{
            mt: 4,
            p: { xs: 1.5, md: 2 },
            border: '1px dashed #c4a47c',
            borderRadius: 2
          }}
        >
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            Aún no tienes pedidos registrados. ¡Anímate a probar nuestros postres!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};