import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Dashboard,
  People,
  BusinessCenter,
  Task,
  CalendarMonth,
  Assessment,
  Settings,
  TrendingUp,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  { text: 'Analisis', icon: <People />, path: '/analisis' },
  { text: 'TDR', icon: <TrendingUp />, path: '/tdr' },
  { text: 'Planificación', icon: <CalendarMonth />, path: '/planificacion' },
  { text: 'Diseño y Desarrollo', icon: <Assessment />, path: '/disenoDesarrollo' },
  { text: 'Herramientas', icon: <BusinessCenter />, path: '/herramientas' },
  { text: 'Manual del Sistema', icon: <Task />, path: '/manualSistema' },
  { text: 'Seleccion Servidor', icon: <Settings />, path: '/seleccionServidor' },
  { text: 'Evaluación - Feedback', icon: <Assessment />, path: '/evaluacionFeedback' },
  { text: 'Carta de Entrega', icon: <Settings />, path: '/cartaEntrega' },
];

export default function Sidebar({ open }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 'full',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: '#1a1a2e',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: '#0f3460' }}>CX</Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            ChairuX
          </Typography>
          <Typography variant="caption" sx={{ color: '#aaa' }}>
            CRM System
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: '#0f3460' }} />

      <List sx={{ px: 1, mt: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive ? '#0f3460' : 'transparent',
                  '&:hover': {
                    bgcolor: isActive ? '#0f3460' : 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: isActive ? '#16C79A' : '#aaa', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}