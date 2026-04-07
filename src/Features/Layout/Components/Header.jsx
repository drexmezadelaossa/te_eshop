import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";

import { styled, alpha } from "@mui/material/styles";

// MUI Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";

// --- IMPORTACIÓN ACTUALIZADA ---
import { UseFavoritos } from "../../Auth/Hooks/UseFavoritos.jsx";

// COLORES
const GOLD = '#c4a47c';
const CREAM = '#f4ece2';
const DARK_CHOCO = '#4e342e';
const MAIN_CHOCO = '#5d4037';

// BUSCADOR ESTILIZADO
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  background: `linear-gradient(145deg, ${alpha('#ffffff', 0.10)}, ${alpha('#ffffff', 0.02)})`,
  border: `1px solid ${alpha(GOLD, 0.4)}`,
  backdropFilter: 'blur(10px)',
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: '220px',
  transition: 'all 0.35s ease',
  '&:hover': {
    backgroundColor: alpha('#fff', 0.18),
    border: `1px solid ${GOLD}`,
    boxShadow: `0 0 14px ${alpha(GOLD, 0.6)}`
  },
  '&:focus-within': {
    boxShadow: `0 0 18px ${alpha(GOLD, 0.8)}`
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    fontSize: '0.85rem',
  },
}));

const WaveDecorator = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: -22,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      zIndex: -1
    }}
  >
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '30px', width: '100%' }}>
      <path
        d="M0,0V46.29c47.29,22,104.29,29,158,17,70-16,136-65,206-70,73-5,142,35,213,55s138,17,206-10c66-27,128-75,196-86,72-11,138,18,221,39V0Z"
        fill={MAIN_CHOCO}
      />
    </svg>
  </Box>
);

// --- CAMBIO A EXPORT NOMBRADO ---
export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { favoritos } = UseFavoritos();
  const contadorFavoritos = favoritos ? Object.keys(favoritos).length : 0;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Inicio', icon: <HomeIcon />, to: '/' },
    { label: 'Artículos', icon: <ArticleIcon />, to: '/articles' },
    { label: 'Ofertas', icon: <LocalOfferIcon />, to: '/offers' },
    { label: 'Mi Cuenta', icon: <AccountBoxIcon />, to: '/myaccount' },
    {
      label: 'Mis Favoritos',
      icon: (
        <Badge badgeContent={contadorFavoritos} color="error">
          <FavoriteIcon
            sx={{
              color: "#ff4d88",
              animation: contadorFavoritos > 0 ? "pulse 0.6s" : "none",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.3)" },
                "100%": { transform: "scale(1)" }
              }
            }}
          />
        </Badge>
      ),
      to: '/myfavorites'
    },
    { label: 'Mis compras', icon: <ShoppingBasketIcon />, to: '/mybuys' },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', bgcolor: MAIN_CHOCO, height: '100%', color: CREAM }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "'Playfair Display', serif", color: GOLD, letterSpacing: 1 }}
      >
        Postres Katiana
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.to}
              sx={{ px: 3, transition: '0.3s', '&:hover': { background: alpha(GOLD, 0.15) } }}
            >
              <ListItemIcon sx={{ color: GOLD, minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: `linear-gradient(135deg, ${MAIN_CHOCO} 0%, ${DARK_CHOCO} 100%)`,
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${alpha(GOLD, 0.3)}`,
          boxShadow: `0 12px 30px ${alpha('#000', 0.5)}`,
          height: { xs: '64px', md: '80px' },
          justifyContent: 'center'
        }}
      >
        <Toolbar sx={{ maxWidth: '1400px', width: '100%', mx: 'auto', px: { xs: 1, md: 3 } }}>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{
              color: GOLD,
              mr: 1,
              display: { lg: 'none' },
              transition: '0.3s',
              '&:hover': { transform: 'rotate(90deg)' }
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ cursor: 'pointer', flexGrow: { xs: 1, lg: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: CREAM,
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.3rem', md: '1.4rem' },
                letterSpacing: '1px',
                textShadow: `0 2px 10px ${alpha('#000', 0.6)}`
              }}
            >
              Postres Katiana
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: GOLD, fontSize: '0.65rem', fontWeight: 600, letterSpacing: 3 }}
            >
              REPOSTERÍA EXCLUSIVA
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', lg: 'flex' }, ml: 2 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.to}
                startIcon={item.icon}
                sx={{
                  color: CREAM,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  borderRadius: '30px',
                  px: 2,
                  py: 0.8,
                  transition: 'all .3s ease',
                  '&:hover': {
                    bgcolor: alpha(GOLD, 0.18),
                    color: GOLD,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 6px 16px ${alpha(GOLD, 0.4)}`
                  },
                  '&.active': { bgcolor: alpha(GOLD, 0.25), color: GOLD }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Search sx={{ display: { xs: 'none', md: 'block' } }}>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: GOLD, fontSize: '1.1rem' }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="¿Qué se te antoja?" />
            </Search>

            <IconButton
              sx={{
                color: DARK_CHOCO,
                bgcolor: GOLD,
                boxShadow: `0 4px 12px ${alpha(GOLD, 0.7)}`,
                '&:hover': {
                  bgcolor: CREAM,
                  transform: 'scale(1.12)',
                  boxShadow: `0 8px 22px ${alpha(GOLD, 0.9)}`
                },
                width: { xs: '36px', sm: '44px' },
                height: { xs: '36px', sm: '44px' },
                transition: 'all .3s ease'
              }}
            >
              <ShoppingBasketIcon sx={{ fontSize: { xs: '1rem', sm: '1.3rem' } }} />
            </IconButton>
          </Stack>
        </Toolbar>
        <WaveDecorator />
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box',width: { xs: 220, sm: 250 }, bgcolor: MAIN_CHOCO }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};