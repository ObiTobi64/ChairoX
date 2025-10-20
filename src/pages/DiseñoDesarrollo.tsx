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
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Stack,
  Tab,
  Tabs,
} from '@mui/material';
import {
  ExpandMore,
  Code,
  Description,
  AccountTree,
  Storage,
  Category,
  CheckCircle,
  DataObject,
  Schema,
  Engineering,
  Preview,
  LocalCafe,
  Person,
  ShoppingCart,
  Restaurant,
  Inventory,
  Assessment,
  Assignment,
} from '@mui/icons-material';

import C4Diagram from '../assets/images/C4.png'
import ContainerDiagram from '../assets/images/Container.png'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function DiseñoDesarrollo() {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const requerimientosFuncionales = [
    {
      modulo: 'Gestión de Clientes y Contactos',
      codigo: 'RF-01',
      descripcion: 'El sistema debe permitir registrar, modificar, consultar y eliminar información de clientes (nombre, teléfono, email, preferencias)',
      prioridad: 'Alta',
      color: '#2196F3',
    },
    {
      modulo: 'Gestión de Clientes y Contactos',
      codigo: 'RF-02',
      descripcion: 'El sistema debe mantener un historial completo de interacciones con cada cliente',
      prioridad: 'Alta',
      color: '#2196F3',
    },
    {
      modulo: 'Fidelización y Recompensas',
      codigo: 'RF-03',
      descripcion: 'El sistema debe asignar automáticamente puntos de fidelidad por cada compra realizada',
      prioridad: 'Alta',
      color: '#4CAF50',
    },
    {
      modulo: 'Fidelización y Recompensas',
      codigo: 'RF-04',
      descripcion: 'El sistema debe permitir canjear puntos por productos o descuentos',
      prioridad: 'Media',
      color: '#4CAF50',
    },
    {
      modulo: 'Fidelización y Recompensas',
      codigo: 'RF-05',
      descripcion: 'El sistema debe gestionar niveles de cliente (Bronce, Plata, Oro) según puntos acumulados',
      prioridad: 'Media',
      color: '#4CAF50',
    },
    {
      modulo: 'Comunicación Multicanal',
      codigo: 'RF-06',
      descripcion: 'El sistema debe integrar comunicación por WhatsApp, Instagram, correo electrónico y SMS',
      prioridad: 'Alta',
      color: '#FF9800',
    },
    {
      modulo: 'Comunicación Multicanal',
      codigo: 'RF-07',
      descripcion: 'El sistema debe centralizar todas las conversaciones en una bandeja unificada',
      prioridad: 'Alta',
      color: '#FF9800',
    },
    {
      modulo: 'Automatización de Campañas',
      codigo: 'RF-08',
      descripcion: 'El sistema debe permitir crear y programar campañas de marketing automáticas',
      prioridad: 'Alta',
      color: '#9C27B0',
    },
    {
      modulo: 'Automatización de Campañas',
      codigo: 'RF-09',
      descripcion: 'El sistema debe segmentar clientes por preferencias, historial y comportamiento',
      prioridad: 'Media',
      color: '#9C27B0',
    },
    {
      modulo: 'Integración con POS',
      codigo: 'RF-10',
      descripcion: 'El sistema debe sincronizar en tiempo real las compras registradas en el POS',
      prioridad: 'Alta',
      color: '#F44336',
    },
    {
      modulo: 'Integración con POS',
      codigo: 'RF-11',
      descripcion: 'El sistema debe actualizar automáticamente puntos de fidelidad al registrar una venta',
      prioridad: 'Alta',
      color: '#F44336',
    },
    {
      modulo: 'Dashboard de Análisis',
      codigo: 'RF-12',
      descripcion: 'El sistema debe mostrar KPIs de ventas, fidelización y satisfacción del cliente',
      prioridad: 'Alta',
      color: '#00BCD4',
    },
    {
      modulo: 'Dashboard de Análisis',
      codigo: 'RF-13',
      descripcion: 'El sistema debe generar reportes personalizables por periodo, sucursal o producto',
      prioridad: 'Media',
      color: '#00BCD4',
    },
    {
      modulo: 'Feedback, Reservas y Eventos',
      codigo: 'RF-14',
      descripcion: 'El sistema debe permitir a los clientes enviar feedback sobre productos y servicios',
      prioridad: 'Media',
      color: '#673AB7',
    },
    {
      modulo: 'Feedback, Reservas y Eventos',
      codigo: 'RF-15',
      descripcion: 'El sistema debe gestionar reservas de mesas y eventos especiales',
      prioridad: 'Media',
      color: '#673AB7',
    },
  ];

  const requerimientosNoFuncionales = [
    {
      categoria: 'Rendimiento',
      codigo: 'RNF-01',
      descripcion: 'El sistema debe responder a consultas de usuario en menos de 2 segundos',
      color: '#2196F3',
    },
    {
      categoria: 'Rendimiento',
      codigo: 'RNF-02',
      descripcion: 'El sistema debe soportar al menos 1000 usuarios concurrentes sin degradación',
      color: '#2196F3',
    },
    {
      categoria: 'Seguridad',
      codigo: 'RNF-03',
      descripcion: 'El sistema debe implementar autenticación de dos factores para administradores',
      color: '#F44336',
    },
    {
      categoria: 'Seguridad',
      codigo: 'RNF-04',
      descripcion: 'El sistema debe cifrar todas las contraseñas con algoritmo bcrypt',
      color: '#F44336',
    },
    {
      categoria: 'Seguridad',
      codigo: 'RNF-05',
      descripcion: 'El sistema debe cumplir con normativas de protección de datos personales',
      color: '#F44336',
    },
    {
      categoria: 'Disponibilidad',
      codigo: 'RNF-06',
      descripcion: 'El sistema debe garantizar 99.5% de disponibilidad mensual',
      color: '#4CAF50',
    },
    {
      categoria: 'Disponibilidad',
      codigo: 'RNF-07',
      descripcion: 'El sistema debe realizar backups automáticos diarios',
      color: '#4CAF50',
    },
    {
      categoria: 'Escalabilidad',
      codigo: 'RNF-08',
      descripcion: 'El sistema debe permitir agregar nuevas sucursales sin reestructuración mayor',
      color: '#FF9800',
    },
    {
      categoria: 'Usabilidad',
      codigo: 'RNF-09',
      descripcion: 'La interfaz debe ser responsive y compatible con dispositivos móviles',
      color: '#9C27B0',
    },
    {
      categoria: 'Usabilidad',
      codigo: 'RNF-10',
      descripcion: 'El sistema debe ser intuitivo y requerir máximo 2 horas de capacitación',
      color: '#9C27B0',
    },
  ];

  const entidades = [
    {
      nombre: 'Cliente',
      atributos: ['id_cliente (PK)', 'nombre', 'apellido', 'email', 'telefono', 'fecha_registro', 'nivel_fidelidad', 'puntos_acumulados'],
      descripcion: 'Información de los clientes registrados en el CRM',
    },
    {
      nombre: 'Compra',
      atributos: ['id_compra (PK)', 'id_cliente (FK)', 'id_sucursal (FK)', 'fecha_hora', 'total', 'puntos_ganados', 'metodo_pago'],
      descripcion: 'Registro de transacciones realizadas por clientes',
    },
    {
      nombre: 'Producto',
      atributos: ['id_producto (PK)', 'nombre', 'descripcion', 'precio', 'id_categoria (FK)', 'disponible', 'puntos_asignados'],
      descripcion: 'Catálogo de productos y servicios ofrecidos',
    },
    {
      nombre: 'Campaña',
      atributos: ['id_campaña (PK)', 'nombre', 'descripcion', 'fecha_inicio', 'fecha_fin', 'tipo_canal', 'segmento_objetivo', 'estado'],
      descripcion: 'Campañas de marketing y comunicación',
    },
    {
      nombre: 'Interaccion',
      atributos: ['id_interaccion (PK)', 'id_cliente (FK)', 'fecha_hora', 'canal', 'tipo', 'contenido', 'id_usuario_responsable (FK)'],
      descripcion: 'Historial de comunicaciones con clientes',
    },
    {
      nombre: 'Recompensa',
      atributos: ['id_recompensa (PK)', 'nombre', 'descripcion', 'puntos_requeridos', 'tipo', 'vigencia', 'disponible'],
      descripcion: 'Catálogo de recompensas canjeables',
    },
    {
      nombre: 'Canje',
      atributos: ['id_canje (PK)', 'id_cliente (FK)', 'id_recompensa (FK)', 'fecha_canje', 'puntos_utilizados', 'estado'],
      descripcion: 'Registro de canjes realizados por clientes',
    },
    {
      nombre: 'Sucursal',
      atributos: ['id_sucursal (PK)', 'nombre', 'ciudad', 'direccion', 'telefono', 'email', 'fecha_apertura'],
      descripcion: 'Información de las sucursales de Typica',
    },
    {
      nombre: 'Usuario',
      atributos: ['id_usuario (PK)', 'nombre', 'email', 'contraseña_hash', 'id_rol (FK)', 'id_sucursal (FK)', 'activo'],
      descripcion: 'Usuarios del sistema (empleados y administradores)',
    },
    {
      nombre: 'Rol',
      atributos: ['id_rol (PK)', 'nombre', 'descripcion', 'permisos'],
      descripcion: 'Roles y permisos de usuarios del sistema',
    },
  ];

  const casosDeUso = [
    {
      codigo: 'CU-01',
      nombre: 'Registrar Cliente',
      actor: 'Mesero/Barista',
      descripcion: 'Permite registrar un nuevo cliente en el sistema con sus datos básicos y preferencias',
      precondiciones: ['El usuario debe estar autenticado', 'Debe tener permisos de gestión de clientes'],
      postcondiciones: ['El cliente queda registrado con puntos iniciales', 'Se envía email de bienvenida'],
    },
    {
      codigo: 'CU-02',
      nombre: 'Asignar Puntos de Fidelidad',
      actor: 'Sistema POS',
      descripcion: 'Asigna automáticamente puntos al cliente según el monto de compra',
      precondiciones: ['La compra debe estar registrada en el POS', 'El cliente debe estar identificado'],
      postcondiciones: ['Puntos actualizados en cuenta del cliente', 'Notificación enviada al cliente'],
    },
    {
      codigo: 'CU-03',
      nombre: 'Crear Campaña de Marketing',
      actor: 'Administrador de Marketing',
      descripcion: 'Permite crear y programar campañas de marketing dirigidas a segmentos específicos',
      precondiciones: ['El usuario debe tener rol de marketing', 'Debe existir segmentación de clientes'],
      postcondiciones: ['Campaña creada y programada', 'Envíos automáticos configurados'],
    },
    {
      codigo: 'CU-04',
      nombre: 'Canjear Recompensa',
      actor: 'Cliente',
      descripcion: 'Permite al cliente canjear sus puntos por productos o descuentos',
      precondiciones: ['Cliente debe tener puntos suficientes', 'Recompensa debe estar disponible'],
      postcondiciones: ['Puntos descontados', 'Cupón o código generado', 'Registro de canje creado'],
    },
    {
      codigo: 'CU-05',
      nombre: 'Generar Reporte de Ventas',
      actor: 'Administrador',
      descripcion: 'Genera reportes personalizados de ventas, clientes y fidelización',
      precondiciones: ['Usuario con permisos de reportes', 'Rango de fechas válido'],
      postcondiciones: ['Reporte generado en formato PDF/Excel', 'Estadísticas visualizadas en dashboard'],
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
      <Container maxWidth="xl">
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
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                    Especificación de Requerimientos de Software (ERS)
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Sistema CRM para Typica – Café & Tostaduría Especializada
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<Code />}
                      label="Versión 1.0"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Engineering />}
                      label="Desarrollo ChairuX"
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
                        alt="Typica Logo"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4 }}>
            {/* 1. Introducción */}
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              defaultExpanded
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#667eea',
                  color: 'white',
                  '&:hover': { bgcolor: '#5568d3' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Description />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1. Introducción
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #2196F3' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                          1.1 Propósito
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Describir de manera detallada los requerimientos funcionales y no funcionales del sistema CRM 
                          desarrollado para Typica – Café & Tostaduría Especializada, proporcionando una referencia formal 
                          que oriente el diseño, desarrollo e implementación del software.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #4CAF50' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                          1.2 Ámbito del Sistema
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          El sistema CRM permitirá centralizar la información de clientes, automatizar procesos de 
                          comunicación y fidelización, integrando datos del sistema POS y canales digitales. Abarcará 
                          módulos de gestión de clientes, fidelización, campañas, comunicación multicanal, análisis de 
                          datos, feedback y reservas.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #FF9800' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                          1.3 Estructura del Documento
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Introducción y contexto" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Descripción general del sistema" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Requerimientos funcionales" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Requerimientos no funcionales" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Diseño y arquitectura" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Objetivo estratégico:</strong> Fidelización de clientes, automatización de marketing, y 
                    toma de decisiones basada en datos para fortalecer la experiencia del cliente en todas las sucursales 
                    de Typica.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 2. Requerimientos Funcionales */}
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#2196F3',
                  color: 'white',
                  '&:hover': { bgcolor: '#1976D2' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Assignment />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2. Requerimientos Funcionales
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  Los requerimientos funcionales describen las funcionalidades específicas que el sistema debe ofrecer 
                  para satisfacer las necesidades del negocio.
                </Typography>

                <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                  <Tab label="Lista Completa" icon={<Category />} iconPosition="start" />
                  <Tab label="Por Módulo" icon={<DataObject />} iconPosition="start" />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                  <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                          <TableCell sx={{ fontWeight: 600 }}>Código</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Módulo</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Descripción</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Prioridad</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {requerimientosFuncionales.map((req, index) => (
                          <TableRow key={index} hover>
                            <TableCell>
                              <Chip label={req.codigo} size="small" sx={{ bgcolor: req.color, color: 'white' }} />
                            </TableCell>
                            <TableCell sx={{ fontWeight: 500 }}>{req.modulo}</TableCell>
                            <TableCell>{req.descripcion}</TableCell>
                            <TableCell>
                              <Chip
                                label={req.prioridad}
                                size="small"
                                color={req.prioridad === 'Alta' ? 'error' : 'warning'}
                                variant="outlined"
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <Grid container spacing={2}>
                    {Array.from(new Set(requerimientosFuncionales.map(r => r.modulo))).map((modulo, idx) => {
                      const reqs = requerimientosFuncionales.filter(r => r.modulo === modulo);
                      return (
                        <Grid item xs={12} md={6} key={idx}>
                          <Card sx={{ borderLeft: `5px solid ${reqs[0].color}` }}>
                            <CardContent>
                              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: reqs[0].color }}>
                                {modulo}
                              </Typography>
                              <List dense>
                                {reqs.map((req, index) => (
                                  <ListItem key={index}>
                                    <ListItemIcon>
                                      <CheckCircle sx={{ fontSize: 18, color: reqs[0].color }} />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={req.codigo}
                                      secondary={req.descripcion}
                                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.875rem' }}
                                      secondaryTypographyProps={{ fontSize: '0.8rem' }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>
              </AccordionDetails>
            </Accordion>

            {/* 3. Requerimientos No Funcionales */}
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#4CAF50',
                  color: 'white',
                  '&:hover': { bgcolor: '#388E3C' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Engineering />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    3. Requerimientos No Funcionales
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  Los requerimientos no funcionales definen las características de calidad del sistema: rendimiento, 
                  seguridad, disponibilidad, escalabilidad y usabilidad.
                </Typography>

                <Grid container spacing={2}>
                  {Array.from(new Set(requerimientosNoFuncionales.map(r => r.categoria))).map((categoria, idx) => {
                    const reqs = requerimientosNoFuncionales.filter(r => r.categoria === categoria);
                    return (
                      <Grid item xs={12} md={6} key={idx}>
                        <Card sx={{ borderLeft: `5px solid ${reqs[0].color}`, height: '100%' }}>
                          <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: reqs[0].color }}>
                              {categoria}
                            </Typography>
                            <List dense>
                              {reqs.map((req, index) => (
                                <ListItem key={index}>
                                  <ListItemIcon>
                                    <CheckCircle sx={{ fontSize: 18, color: reqs[0].color }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={req.codigo}
                                    secondary={req.descripcion}
                                    primaryTypographyProps={{ fontWeight: 600, fontSize: '0.875rem' }}
                                    secondaryTypographyProps={{ fontSize: '0.8rem' }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>

                <Alert severity="success" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Cumplimiento de estándares:</strong> El sistema cumplirá con las normativas de protección 
                    de datos personales vigentes en Bolivia y estándares internacionales de seguridad de la información.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 4. Modelo de Datos */}
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
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
                  <Storage />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    4. Modelo de Datos
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  4.1 Entidades Principales del Sistema
                </Typography>

                <Grid container spacing={2}>
                  {entidades.map((entidad, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <Schema sx={{ color: '#FF9800', fontSize: 28 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {entidad.nombre}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {entidad.descripcion}
                          </Typography>
                          <Divider sx={{ my: 1 }} />
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            Atributos:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {entidad.atributos.map((attr, idx) => (
                              <Chip
                                key={idx}
                                label={attr}
                                size="small"
                                variant="outlined"
                                sx={{ fontSize: '0.7rem' }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Normalización:</strong> El modelo de datos está diseñado siguiendo principios de normalización 
                    hasta la 3ra Forma Normal (3NF) para garantizar integridad y evitar redundancia.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 5. Casos de Uso */}
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#9C27B0',
                  color: 'white',
                  '&:hover': { bgcolor: '#7B1FA2' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccountTree />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    5. Casos de Uso Principales
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  Los casos de uso describen las interacciones entre los actores (usuarios) y el sistema para lograr 
                  objetivos específicos.
                </Typography>

                <Stack spacing={2}>
                  {casosDeUso.map((caso, index) => (
                    <Card key={index} sx={{ borderLeft: '4px solid #9C27B0' }}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                              <Chip
                                label={caso.codigo}
                                sx={{ bgcolor: '#9C27B0', color: 'white', fontWeight: 600 }}
                              />
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {caso.nombre}
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {caso.descripcion}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box sx={{ bgcolor: '#f3e5f5', p: 2, borderRadius: 1 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                Actor Principal:
                              </Typography>
                              <Chip
                                icon={<Person />}
                                label={caso.actor}
                                size="small"
                                color="secondary"
                              />
                            </Box>
                          </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 1 }}>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 1 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#2196F3' }}>
                                📋 Precondiciones:
                              </Typography>
                              <List dense>
                                {caso.precondiciones.map((pre, idx) => (
                                  <ListItem key={idx} sx={{ py: 0 }}>
                                    <ListItemText
                                      primary={pre}
                                      primaryTypographyProps={{ variant: 'body2' }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: '#f1f8e9', p: 2, borderRadius: 1 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#4CAF50' }}>
                                ✅ Postcondiciones:
                              </Typography>
                              <List dense>
                                {caso.postcondiciones.map((post, idx) => (
                                  <ListItem key={idx} sx={{ py: 0 }}>
                                    <ListItemText
                                      primary={post}
                                      primaryTypographyProps={{ variant: 'body2' }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* 6. Arquitectura del Sistema */}
            <Accordion
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#00BCD4',
                  color: 'white',
                  '&:hover': { bgcolor: '#0097A7' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    6. Arquitectura del Sistema
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Paper 
                  sx={{ 
                    p: 3, 
                    bgcolor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center'
                  }}
                >
                  <Box
                    component="img"
                    src={C4Diagram} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>
                <Paper 
                  sx={{ 
                    p: 3, 
                    bgcolor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    textAlign: 'center'
                  }}
                >
                  <Box
                    component="img"
                    src={ContainerDiagram} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>
                </Grid>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Arquitectura:</strong> El sistema utiliza una arquitectura de tres capas (Presentación, 
                    Lógica de Negocio, Datos) con patrón RESTful API para la comunicación entre frontend y backend.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer */}
            <Grid container spacing={3}>

              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, bgcolor: '#e3f2fd' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    📊 Resumen del Documento
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="15 Requerimientos Funcionales" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="10 Requerimientos No Funcionales" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="10 Entidades del Modelo de Datos" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="5 Casos de Uso Principales" />
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