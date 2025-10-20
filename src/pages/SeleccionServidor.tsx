import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
} from '@mui/material';
import {
  ExpandMore,
  Cloud,
  Settings,
  RocketLaunch,
  Business,
  CalendarToday,
  CheckCircle,
  Info,
  Storage,
  Security,
  Speed,
  CompareArrows,
  MonitorHeart,
  VerifiedUser,
} from '@mui/icons-material';

export default function EvaluacionFeedback() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const servidores = [
    {
      proveedor: 'HostZealot (VPS Bolivia)',
      tipo: 'VPS dedicado localizado en Bolivia (1–4 GB RAM)',
      costo: 'Desde €6.6 / mes (≈ Bs 50)',
      ventajas: 'Excelente relación costo–rendimiento, baja latencia por ubicación local, escalable según necesidad.',
      desventajas: 'Requiere configuración manual (no incluye panel administrado).',
      evaluacion: 'Seleccionado como opción principal por su equilibrio entre costo, rendimiento y disponibilidad local.',
      color: '#4CAF50',
      selected: true,
    },
    {
      proveedor: 'BoliviaHosting',
      tipo: 'VPS Linux y hosting compartido',
      costo: 'Desde Bs 51 / mes',
      ventajas: 'Muy económico, proveedor local, soporte en español, pagos en moneda nacional.',
      desventajas: 'Planes básicos limitados en CPU y memoria; puede no ser ideal para producción.',
      evaluacion: 'Aprobado para entornos de desarrollo o pruebas. Alternativa accesible para el MVP.',
      color: '#2196F3',
      selected: false,
    },
    {
      proveedor: 'Hosting Bolivia',
      tipo: 'VPS y hosting empresarial',
      costo: 'Desde Bs 290 / mes (plan VPS Premium)',
      ventajas: 'Soporte local, panel administrativo, infraestructura nacional.',
      desventajas: 'Precio más alto en relación a recursos ofrecidos, documentación técnica limitada.',
      evaluacion: 'Evaluado positivamente en soporte, pero no recomendado por costo para este alcance.',
      color: '#FF9800',
      selected: false,
    },
    {
      proveedor: 'AWS (Amazon Web Services)',
      tipo: 'Infraestructura global (EC2, S3, RDS, etc.)',
      costo: 'Desde ≈ $25–$200 USD / mes (dependiendo del uso)',
      ventajas: 'Escalabilidad mundial, alta disponibilidad, herramientas avanzadas de gestión.',
      desventajas: 'Costos elevados para un proyecto local, latencia al no tener data centers en Bolivia, facturación en USD.',
      evaluacion: 'Descartado por no ser rentable en esta etapa del proyecto. Considerado solo para una fase futura de expansión.',
      color: '#9C27B0',
      selected: false,
    },
  ];

  const configuracionSteps = [
    {
      titulo: 'Sistema operativo',
      descripcion: 'Instalación de Ubuntu Server LTS como base del entorno de producción.',
      icon: <Settings />,
    },
    {
      titulo: 'Entorno web',
      descripcion: 'Configuración del stack Node.js + Express para el backend y Nginx como servidor proxy inverso.',
      icon: <Cloud />,
    },
    {
      titulo: 'Base de datos',
      descripcion: 'Instalación de PostgreSQL con políticas de acceso restringidas y backups automáticos semanales.',
      icon: <Storage />,
    },
    {
      titulo: 'Seguridad',
      descripcion: 'Habilitación de firewall (UFW), acceso SSH seguro mediante claves, y certificados SSL generados con Let\'s Encrypt.',
      icon: <Security />,
    },
    {
      titulo: 'Despliegue continuo',
      descripcion: 'Integración con GitHub y automatización básica de despliegues mediante PM2 y Nginx reload hooks.',
      icon: <RocketLaunch />,
    },
    {
      titulo: 'Monitoreo',
      descripcion: 'Implementación de métricas básicas con htop, logrotate y scripts de monitoreo de uptime.',
      icon: <MonitorHeart />,
    },
  ];

  const conclusiones = [
    {
      titulo: 'Servidor recomendado para producción',
      descripcion: 'HostZealot (VPS Bolivia) — por su costo competitivo, recursos escalables y ubicación local, ideal para alojar la API y base de datos del CRM.',
      color: '#4CAF50',
    },
    {
      titulo: 'Servidor recomendado para desarrollo y pruebas',
      descripcion: 'BoliviaHosting, debido a su bajo costo y facilidad de contratación en moneda local.',
      color: '#2196F3',
    },
    {
      titulo: 'Proveedor alternativo (soporte empresarial)',
      descripcion: 'Hosting Bolivia, aunque con costos más altos, cuenta con soporte local confiable.',
      color: '#FF9800',
    },
    {
      titulo: 'Proveedor internacional (no seleccionado)',
      descripcion: 'AWS, descartado en esta fase por su alto costo operativo frente al beneficio esperado.',
      color: '#9C27B0',
    },
  ];

  const fasesLanzamiento = [
    {
      fase: 'Despliegue inicial',
      descripcion: 'Carga del backend (API REST en Node.js) y del frontend (React) en el VPS de HostZealot. Se configuró Nginx para servir el frontend estático y redirigir las peticiones a la API mediante proxy inverso.',
      icon: <RocketLaunch />,
    },
    {
      fase: 'Pruebas en entorno productivo',
      descripcion: 'Validación de las principales funcionalidades del CRM (autenticación, registro de clientes, dashboard de ventas y fidelización). Se ejecutaron pruebas de carga moderadas para verificar la estabilidad del servidor.',
      icon: <VerifiedUser />,
    },
    {
      fase: 'Publicación y monitoreo',
      descripcion: 'Apertura del sistema web al entorno público, con dominio y certificado SSL activos. Se estableció un sistema de monitoreo interno (uptime y logs) para asegurar continuidad del servicio.',
      icon: <MonitorHeart />,
    },
    {
      fase: 'Revisión post-despliegue',
      descripcion: 'Ajuste de parámetros del servidor (RAM, caché de Nginx y PostgreSQL) tras una semana de uso real, optimizando la respuesta del sistema.',
      icon: <Speed />,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f7fa',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #0f3460 0%, #16C79A 100%)',
              color: 'white',
              p: 4,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.1)',
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    Fase de Control de Calidad e Implementación
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Sistema CRM - Typica Café & Tostaduría Especializada
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<CalendarToday />}
                      label="Octubre 2025"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Business />}
                      label="La Paz, Bolivia"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        bgcolor: 'white',
                        borderRadius: 2,
                        mx: 'auto',
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1,
                        boxShadow: 3,
                      }}
                    >
                      <img
                        src="https://www.soysucre.info/wp-content/uploads/2022/03/Typica-Logo.jpg"
                        alt="Typica Café Logo"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Typica Café
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4 }}>
            {/* Introducción */}
            <Alert severity="info" icon={<Info />} sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                Fase de Control de Calidad e Implementación
              </Typography>
              <Typography variant="body1">
                Documentación del proceso de selección de servidor, configuración del entorno 
                y lanzamiento del sistema CRM para Typica – Café & Tostaduría Especializada.
              </Typography>
            </Alert>

            {/* Sección 1: Selección del Servidor */}
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              defaultExpanded
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CompareArrows />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    1. Selección del Servidor
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" paragraph>
                  Durante la fase de planificación, el equipo técnico del proyecto realizó una evaluación 
                  comparativa de distintos proveedores de servidores locales en Bolivia, considerando aspectos 
                  como costo, soporte técnico, rendimiento, latencia y facilidad de administración. También se 
                  incluyó AWS (Amazon Web Services) como referencia internacional, con el fin de determinar su 
                  viabilidad en términos de costo-beneficio frente a las alternativas locales.
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 3, color: 'primary.main' }}>
                  Comparativa de Proveedores
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 900 }}>Proveedor</TableCell>
                        <TableCell sx={{ fontWeight: 900 }}>Tipo de Servicio</TableCell>
                        <TableCell sx={{ fontWeight: 900 }}>Costo Mensual</TableCell>
                        <TableCell sx={{ fontWeight: 900 }}>Ventajas</TableCell>
                        <TableCell sx={{ fontWeight: 900 }}>Desventajas</TableCell>
                        <TableCell sx={{ fontWeight: 900 }}>Evaluación</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {servidores.map((servidor, index) => (
                        <TableRow 
                          key={index} 
                          hover
                          sx={{ 
                            bgcolor: servidor.selected ? 'rgba(76, 175, 80, 0.05)' : 'inherit',
                            borderLeft: servidor.selected ? `4px solid ${servidor.color}` : 'none',
                          }}
                        >
                          <TableCell>
                            <Typography variant="body1" sx={{ fontWeight: 600, color: servidor.color }}>
                              {servidor.proveedor}
                              {servidor.selected && (
                                <Chip 
                                  label="Seleccionado" 
                                  size="small" 
                                  color="success" 
                                  sx={{ ml: 1 }}
                                />
                              )}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h6">{servidor.tipo}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {servidor.costo}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h6" color="success.main">
                              {servidor.ventajas}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h6" color="error.main">
                              {servidor.desventajas}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h6">
                              {servidor.evaluacion}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 3, color: 'primary.main' }}>
                  Conclusiones del Análisis
                </Typography>

                <Typography variant="h6" paragraph>
                  Tras el análisis, el equipo determinó que las alternativas locales ofrecen mejor costo 
                  y latencia para las necesidades actuales del CRM de Typica. El servicio de AWS, aunque 
                  superior en escalabilidad y servicios complementarios, no resulta rentable para el alcance 
                  y tamaño actual del proyecto, debido a su costo mensual y la ausencia de infraestructura en Bolivia.
                </Typography>

                <Grid container spacing={2}>
                  {conclusiones.map((conclusion, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ borderLeft: `4px solid ${conclusion.color}`, height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: conclusion.color }}>
                            {conclusion.titulo}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {conclusion.descripcion}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Sección 2: Configuración del Servidor */}
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'secondary.dark' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Settings />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2. Configuración del Servidor
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  El proceso de configuración se planificó y documentó en los siguientes pasos:
                </Typography>

                <Grid container spacing={3}>
                  {configuracionSteps.map((step, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ height: '100%', bgcolor: '#f8f9fa' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box
                              sx={{
                                bgcolor: 'primary.main',
                                color: 'white',
                                p: 1.5,
                                borderRadius: 2,
                                display: 'flex',
                              }}
                            >
                              {step.icon}
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>
                              {step.titulo}
                            </Typography>
                          </Box>
                          <Typography variant="h6" color="text.secondary">
                            {step.descripcion}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Alert severity="success" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    Estas acciones garantizan que el sistema web esté correctamente configurado, con un 
                    nivel aceptable de seguridad y rendimiento para un entorno de producción.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* Sección 3: Lanzamiento del Sistema */}
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#FF9800',
                  color: 'white',
                  '&:hover': { bgcolor: '#F57C00' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <RocketLaunch />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    3. Lanzamiento del Sistema Web
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  Una vez completadas las pruebas de integración y validación del entorno, el equipo 
                  procedió al lanzamiento del sistema CRM de Typica en el servidor seleccionado.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Fases del Lanzamiento
                </Typography>

                <List>
                  {fasesLanzamiento.map((fase, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        mb: 2,
                        bgcolor: '#f8f9fa',
                        borderRadius: 2,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        p: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Box
                          sx={{
                            bgcolor: '#FF9800',
                            color: 'white',
                            p: 1,
                            borderRadius: 1,
                            display: 'flex',
                          }}
                        >
                          {fase.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {fase.fase}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ pl: 6 }}>
                        {fase.descripcion}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer */}
            <Grid container spacing={4}>

              <Grid item xs={2} md={6}>
                <Card sx={{ p: 3, bgcolor: '#e3f2fd' }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    📊 Resumen del Proyecto
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Servidor seleccionado: HostZealot VPS Bolivia" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Stack: Node.js + React + PostgreSQL" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Seguridad: SSL + Firewall + SSH Keys" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Sistema en producción y operativo" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}