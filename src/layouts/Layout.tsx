import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import PrismaticBurst from "../components/Background";
import Iridescence from "../components/Background";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative" }}>
      <CssBaseline />
      {/* Fondo animado */}
      {/* <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />

      </Box> */}
      {/* Navbar y contenido */}
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "100vh",
          position: "relative",
          zIndex: 1, // Para que el contenido esté encima del fondo
          background: "transparent", // Fondo transparente para ver el burst
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};