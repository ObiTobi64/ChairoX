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
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search,
  Notifications,
  AccountCircle,
} from '@mui/icons-material';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

export default function Header({ onMenuClick, sidebarOpen }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'white',
        color: '#1a1a2e',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'width 0.3s',
        width: sidebarOpen ? 'calc(100% - 240px)' : '100%',
        ml: sidebarOpen ? '240px' : 0,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f5f5f5',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            flexGrow: 1,
            maxWidth: 600,
          }}
        >
          <Search sx={{ color: '#aaa', mr: 1 }} />
          <InputBase
            placeholder="Buscar clientes, oportunidades..."
            sx={{ flexGrow: 1 }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>

        <IconButton
          onClick={handleMenu}
          color="inherit"
          sx={{ ml: 1 }}
        >
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#0f3460' }}>
            JD
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Configuración</MenuItem>
          <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}