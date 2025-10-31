import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  useScrollTrigger,          // +++
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search,
  Notifications,
} from '@mui/icons-material';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

export default function Header({ onMenuClick, sidebarOpen }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const scrolled = useScrollTrigger({ threshold: 24, disableHysteresis: true }); // fondo cambia al hacer scroll

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed" // antes: sticky
      sx={{
        color: '#fff',
        background: scrolled
          ? 'rgba(10, 18, 30, 0.6)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))',
        backdropFilter: scrolled ? 'blur(10px) saturate(120%)' : 'none',
        boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
        transition: 'all .25s ease',
        width: sidebarOpen ? 'calc(100% - 240px)' : '100%',
        ml: sidebarOpen ? '240px' : 0,
      }}
    >
      <Toolbar sx={{ minHeight: 72 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{
            mr: 2,
            bgcolor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Buscador glass */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            flexGrow: 1,
            maxWidth: 600,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Search sx={{ color: 'rgba(255,255,255,0.8)', mr: 1 }} />
          <InputBase
            placeholder="Buscar clientes, oportunidades..."
            sx={{
              flexGrow: 1,
              color: 'white',
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(255,255,255,0.75)',
                opacity: 1,
              },
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Notificaciones */}
        <IconButton color="inherit" sx={{ mr: 1 }}>
          <Badge
            badgeContent={4}
            sx={{
              '& .MuiBadge-badge': {
                bgcolor: '#16C79A',
                color: '#0b1f2e',
                fontWeight: 700,
              },
            }}
          >
            <Notifications />
          </Badge>
        </IconButton>

        {/* Usuario */}
        <IconButton onClick={handleMenu} color="inherit">
          <Avatar
            sx={{
              width: 34,
              height: 34,
              bgcolor: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.35)',
              fontWeight: 700,
            }}
          >
            JD
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1,
              bgcolor: '#0b1f2e',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Configuración</MenuItem>
          <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}