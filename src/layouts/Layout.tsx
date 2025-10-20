import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './SideBar';
import Header from './Header';


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <CssBaseline />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          transition: 'margin 0.3s',
          marginLeft: sidebarOpen ? '240px' : '0px',
        }}
      >
        <Header onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}