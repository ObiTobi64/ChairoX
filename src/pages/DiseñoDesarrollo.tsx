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
import Caso1 from '../assets/images/Caso1.png'
import Caso2 from '../assets/images/Caso2.png'
import Caso3 from '../assets/images/Caso3.png'
import Caso4 from '../assets/images/Caso4.png'
import Caso5 from '../assets/images/Caso5.png'
import Caso6 from '../assets/images/Caso6.png'
import Caso7 from '../assets/images/Caso7.png'
import Caso8 from '../assets/images/Caso8.png'

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

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 1
                  </Typography>
                </Box>

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
                    src={Caso1} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 2
                  </Typography>
                </Box>

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
                    src={Caso2} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 3
                  </Typography>
                </Box>

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
                    src={Caso3} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 4
                  </Typography>
                </Box>

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
                    src={Caso4} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 5
                  </Typography>
                </Box>

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
                    src={Caso5} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 6
                  </Typography>
                </Box>

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
                    src={Caso6} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 7
                  </Typography>
                </Box>

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
                    src={Caso7} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Preview />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Caso 8
                  </Typography>
                </Box>

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
                    src={Caso8} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>
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
                <Typography variant="body2" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                  La arquitectura del sistema CRM Typica se documenta mediante el modelo C4 (Context, Containers, Components, Code),
                  que permite visualizar el sistema desde diferentes niveles de abstracción. A continuación se presentan los dos
                  primeros niveles: Contexto y Contenedores.
                </Typography>

                <Grid container spacing={3}>
                  {/* Diagrama de Contexto C4 */}
                  <Grid item xs={12}>
                    <Card sx={{ bgcolor: '#f0f7ff', border: '2px solid #2196F3' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                          6.1 Diagrama de Contexto (C4)
                        </Typography>
                        
                        <Paper 
                          sx={{ 
                            p: 3, 
                            bgcolor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: 2,
                            textAlign: 'center',
                            mb: 3
                          }}
                        >
                          <Box
                            component="img"
                            src={C4Diagram}
                            alt="Diagrama de Contexto C4 - Sistema CRM Typica Café"
                            sx={{
                              width: '100%',
                              maxWidth: '100%',
                              height: 'auto',
                              borderRadius: 1,
                            }}
                          />
                        </Paper>

                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#1976D2' }}>
                          📌 Propósito del Diagrama
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ textAlign: 'justify' }}>
                          Posiciona al sistema <strong>Típica CRM</strong> frente a sus actores principales y sistemas externos, 
                          definiendo el perímetro funcional y los intercambios de información de alto nivel.
                        </Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 1 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#2196F3' }}>
                                👥 Actores del Sistema
                              </Typography>
                              <List dense>
                                <ListItem>
                                  <ListItemIcon><Person sx={{ fontSize: 18 }} /></ListItemIcon>
                                  <ListItemText primary="Clientes (consulta perfil/puntos)" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><Engineering sx={{ fontSize: 18 }} /></ListItemIcon>
                                  <ListItemText primary="Empleados/Administradores (gestión)" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><ShoppingCart sx={{ fontSize: 18 }} /></ListItemIcon>
                                  <ListItemText primary="Sistema POS (eventos de venta)" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><Storage sx={{ fontSize: 18 }} /></ListItemIcon>
                                  <ListItemText primary="Base de Datos Corporativa" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><Category sx={{ fontSize: 18 }} /></ListItemIcon>
                                  <ListItemText primary="Plataformas de mensajería (WhatsApp, Email, Instagram)" />
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: '#f3e5f5', p: 2, borderRadius: 1 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#9C27B0' }}>
                                ⚙️ Capacidades Expuestas
                              </Typography>
                              <List dense>
                                <ListItem>
                                  <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                                  <ListItemText primary="Gestión de clientes y perfiles" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                                  <ListItemText primary="Historial de compras y preferencias" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                                  <ListItemText primary="Gestión de puntos de fidelización" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                                  <ListItemText primary="Catálogo de recompensas" />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                                  <ListItemText primary="Orquestación de notificaciones" />
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                        </Grid>

                        <Alert severity="info" sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            🔄 Flujos Principales
                          </Typography>
                          <List dense>
                            <ListItem>
                              <ListItemText 
                                primary="1. Sincronización de ventas → Actualización automática de puntos de fidelización"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText 
                                primary="2. Acciones del empleado → Modificación de perfiles/recompensas y notificaciones al cliente"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText 
                                primary="3. Envío de promociones/alertas mediante canales externos (WhatsApp, Email, Instagram)"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                          </List>
                        </Alert>

                        <Alert severity="warning" sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            ⚠️ Límites y Supuestos
                          </Typography>
                          <Typography variant="body2">
                            El CRM controla la lógica de fidelización e integraciones, pero <strong>no administra la infraestructura del POS</strong> ni 
                            garantiza la entrega de terceros. Se asume disponibilidad de APIs externas y se implementan 
                            <strong> reintentos, colas y mecanismos de consentimiento</strong> para protección de datos.
                          </Typography>
                        </Alert>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Diagrama de Contenedores */}
                  <Grid item xs={12}>
                    <Card sx={{ bgcolor: '#fff3e0', border: '2px solid #FF9800' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                          6.2 Diagrama de Contenedores (C4 - Nivel 2)
                        </Typography>
                        
                        <Paper 
                          sx={{ 
                            p: 3, 
                            bgcolor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: 2,
                            textAlign: 'center',
                            mb: 3
                          }}
                        >
                          <Box
                            component="img"
                            src={ContainerDiagram}
                            alt="Diagrama de Contenedores - Sistema CRM Typica Café"
                            sx={{
                              width: '100%',
                              maxWidth: '100%',
                              height: 'auto',
                              borderRadius: 1,
                            }}
                          />
                        </Paper>

                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#F57C00' }}>
                          📌 Propósito del Diagrama
                        </Typography>
                        <Typography variant="body2" paragraph sx={{ textAlign: 'justify' }}>
                          Detalla los <strong>componentes desplegables</strong> del CRM y sus responsabilidades específicas, 
                          clarificando los límites de despliegue y las rutas de integración entre capas de la arquitectura.
                        </Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                          <Grid item xs={12} md={4}>
                            <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 1, height: '100%' }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#2196F3', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Code /> Frontend Web (React)
                              </Typography>
                              <Typography variant="body2">
                                • Interfaz de empleados/administradores<br/>
                                • Consume API REST para autenticación<br/>
                                • Gestión de clientes y consultas de puntos<br/>
                                • Dashboard analítico y reportes
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={4}>
                            <Box sx={{ bgcolor: '#f1f8e9', p: 2, borderRadius: 1, height: '100%' }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#4CAF50', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Engineering /> API Backend (Node.js)
                              </Typography>
                              <Typography variant="body2">
                                • Orquesta lógica de negocio<br/>
                                • Actualización de historial y puntos<br/>
                                • Envío a módulos especializados<br/>
                                • Gestión de fidelización y campañas
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={4}>
                            <Box sx={{ bgcolor: '#fce4ec', p: 2, borderRadius: 1, height: '100%' }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#F44336', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <ShoppingCart /> Integración POS
                              </Typography>
                              <Typography variant="body2">
                                • Ingresa eventos de venta en tiempo real<br/>
                                • Dispara actualización automática de puntos<br/>
                                • Registra transacciones<br/>
                                • Sincronización bidireccional
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: '#f3e5f5', p: 2, borderRadius: 1, height: '100%' }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#9C27B0', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Category /> Módulo de Notificaciones
                              </Typography>
                              <Typography variant="body2">
                                • Composición y entrega de mensajes multicanal<br/>
                                • APIs externas: WhatsApp, Email, Instagram<br/>
                                • Desacoplamiento de la lógica de negocio<br/>
                                • Sistema de colas para reintentos
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: '#fff9c4', p: 2, borderRadius: 1, height: '100%' }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#F57C00', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Assessment /> Seguridad y Auditoría
                              </Typography>
                              <Typography variant="body2">
                                • Autenticación JWT/OAuth2<br/>
                                • Registros de auditoría para trazabilidad<br/>
                                • Control de acceso basado en roles<br/>
                                • Cumplimiento de normativas de datos
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12}>
                            <Box sx={{ bgcolor: '#e0f2f1', p: 2, borderRadius: 1 }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#00796B', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Storage /> Persistencia Relacional (PostgreSQL)
                              </Typography>
                              <Typography variant="body2">
                                Centraliza datos de clientes, puntos, transacciones y configuraciones. Diseñada para consultas eficientes 
                                y sincronización con integridad referencial.
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>

                        <Alert severity="success" sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            ✅ Consideraciones No Funcionales
                          </Typography>
                          <List dense>
                            <ListItem>
                              <ListItemText 
                                primary="Separación de responsabilidades para facilitar escalado independiente de cada contenedor"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText 
                                primary="Tolerancia a consistencia eventual en sincronización de puntos mediante mensajería asíncrona"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText 
                                primary="Control de acceso y auditoría para cumplimiento de seguridad y protección de datos personales"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText 
                                primary="Implementación de reintentos, circuit breakers y health checks para alta disponibilidad"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                          </List>
                        </Alert>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Arquitectura General:</strong> El sistema utiliza una arquitectura de <strong>microservicios desacoplados</strong> con 
                    patrón RESTful API para la comunicación entre frontend y backend. La separación en contenedores independientes permite 
                    <strong> escalabilidad horizontal, mantenibilidad</strong> y <strong>despliegue continuo</strong> de cada componente sin afectar 
                    al resto del sistema.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 7. Metodología de Desarrollo */}
            <Accordion
              expanded={expanded === 'panel7'}
              onChange={handleChange('panel7')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#673AB7',
                  color: 'white',
                  '&:hover': { bgcolor: '#5E35B1' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccountTree />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    7. Metodología de Desarrollo
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                {/* 7.1 Introducción */}
                <Card sx={{ mb: 3, bgcolor: '#f3e5f5', border: '2px solid #673AB7' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#673AB7' }}>
                      7.1 Introducción
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify' }} paragraph>
                      El desarrollo del sistema CRM Typica – Café & Tostaduría se ejecutará bajo una metodología ágil de tipo 
                      <strong> Scrumban</strong>, que combina la estructura iterativa de <strong>Scrum</strong> con la flexibilidad 
                      de <strong>Kanban</strong>.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify' }} paragraph>
                      Este enfoque responde a la naturaleza evolutiva del proyecto, orientado a la entrega continua de valor y 
                      la adaptación progresiva a los requerimientos funcionales y técnicos del cliente.
                    </Typography>
                    <Alert severity="info">
                      <Typography variant="body2">
                        <strong>Objetivo estratégico:</strong> Construir un sistema CRM integral que optimice la gestión de clientes, 
                        la fidelización y la comunicación multicanal, priorizando la calidad, la trazabilidad de los procesos y la 
                        colaboración efectiva entre las áreas técnicas y de negocio.
                      </Typography>
                    </Alert>
                  </CardContent>
                </Card>

                {/* 7.2 Justificación Metodológica */}
                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#673AB7' }}>
                      7.2 Justificación Metodológica
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify', mb: 2 }}>
                      La elección de <strong>Scrumban</strong> se fundamenta en la necesidad de combinar planificación estructurada 
                      y control visual del flujo de trabajo, lo que permite mantener la cadencia de entregas propias del enfoque Scrum 
                      sin perder la adaptabilidad operativa de Kanban.
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 1, height: '100%' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#2196F3' }}>
                            ✅ Ventajas Clave de Scrumban
                          </Typography>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Flexibilidad adaptativa"
                                secondary="Facilita responder a cambios de prioridad o alcance sin romper el ciclo iterativo"
                                secondaryTypographyProps={{ fontSize: '0.8rem' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Flujo continuo de trabajo"
                                secondary="Gestión de tareas mediante límites WIP (Work In Progress) y políticas de movimiento entre columnas"
                                secondaryTypographyProps={{ fontSize: '0.8rem' }}
                              />
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: '#f1f8e9', p: 2, borderRadius: 1, height: '100%' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#4CAF50' }}>
                            🎯 Beneficios Operativos
                          </Typography>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Visibilidad y trazabilidad"
                                secondary="El tablero Kanban actúa como artefacto central para monitorear progreso, bloqueos y estados"
                                secondaryTypographyProps={{ fontSize: '0.8rem' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Control del ritmo de desarrollo"
                                secondary="Reducción de reuniones formales permite enfocar más tiempo en implementación efectiva"
                                secondaryTypographyProps={{ fontSize: '0.8rem' }}
                              />
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                {/* 7.3 Estructura General */}
                <Card sx={{ mb: 3, bgcolor: '#fff3e0', border: '1px solid #FF9800' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                      7.3 Estructura General de la Metodología
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify', mb: 2 }}>
                      El modelo Scrumban combina los principios de planificación incremental con un flujo de tareas continuo y visible. 
                      Cada ciclo de trabajo incluye las siguientes etapas:
                    </Typography>

                    <Stack spacing={2}>
                      <Card sx={{ borderLeft: '4px solid #2196F3' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Chip label="Etapa 1" sx={{ bgcolor: '#2196F3', color: 'white', fontWeight: 600 }} size="small" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              Planificación de Iteración
                            </Typography>
                          </Box>
                          <Typography variant="body2">
                            Revisión del backlog priorizado, definición de objetivos y selección de tareas por desarrollar.
                          </Typography>
                        </CardContent>
                      </Card>

                      <Card sx={{ borderLeft: '4px solid #4CAF50' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Chip label="Etapa 2" sx={{ bgcolor: '#4CAF50', color: 'white', fontWeight: 600 }} size="small" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              Desarrollo y Control del Flujo
                            </Typography>
                          </Box>
                          <Typography variant="body2" paragraph>
                            Seguimiento mediante tablero Kanban <strong>(To Do / In Progress / Review / Done)</strong> y límites WIP 
                            para evitar sobrecarga.
                          </Typography>
                          <Box sx={{ bgcolor: '#f1f8e9', p: 1.5, borderRadius: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                              Estados del Tablero Kanban:
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              <Chip label="📋 To Do" size="small" variant="outlined" />
                              <Chip label="🔨 In Progress" size="small" variant="outlined" color="primary" />
                              <Chip label="👀 Review" size="small" variant="outlined" color="warning" />
                              <Chip label="✅ Done" size="small" variant="outlined" color="success" />
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>

                      <Card sx={{ borderLeft: '4px solid #9C27B0' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Chip label="Etapa 3" sx={{ bgcolor: '#9C27B0', color: 'white', fontWeight: 600 }} size="small" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                              Revisión y Ajuste Continuo
                            </Typography>
                          </Box>
                          <Typography variant="body2">
                            Análisis del avance y redefinición de prioridades conforme al progreso real y a la retroalimentación obtenida.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Stack>

                    <Alert severity="success" sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        La planificación de iteraciones se mantendrá <strong>flexible</strong>, priorizando hitos funcionales en lugar 
                        de ciclos rígidos de sprint. Las tareas se dividirán en bloques manejables, con criterios de finalización claros 
                        y verificables.
                      </Typography>
                    </Alert>
                  </CardContent>
                </Card>

                {/* 7.4 Variación Metodológica */}
                <Card sx={{ mb: 3, bgcolor: '#fce4ec', border: '2px solid #E91E63' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#E91E63' }}>
                      7.4 Variación Metodológica: Daily cada 2 días
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify', mb: 2 }}>
                      En este proyecto, la reunión diaria <strong>(Daily)</strong> se realizará <strong>cada dos días</strong>.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify', mb: 2 }}>
                      Esta decisión metodológica responde a una adaptación práctica derivada del tamaño del equipo, la naturaleza 
                      técnica de las tareas y la necesidad de optimizar tiempos de desarrollo sin perder seguimiento continuo.
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 1, border: '1px solid #E91E63' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#E91E63' }}>
                            📊 Justificación Técnica
                          </Typography>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircle sx={{ fontSize: 18, color: '#E91E63' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Permite un mayor avance tangible entre reuniones, reduciendo la redundancia informativa"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircle sx={{ fontSize: 18, color: '#E91E63' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Equilibra el control operativo con la autonomía técnica del equipo"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckCircle sx={{ fontSize: 18, color: '#E91E63' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Mantiene visibilidad mediante actualizaciones asincrónicas en el tablero (Taiga)"
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 1, border: '1px solid #E91E63' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#E91E63' }}>
                            🎯 Objetivo de las Reuniones
                          </Typography>
                          <Typography variant="body2" paragraph>
                            La reunión mantiene su objetivo original:
                          </Typography>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <Restaurant sx={{ fontSize: 18, color: '#E91E63' }} />
                              </ListItemIcon>
                              <ListItemText primary="Sincronizar avances" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Restaurant sx={{ fontSize: 18, color: '#E91E63' }} />
                              </ListItemIcon>
                              <ListItemText primary="Identificar obstáculos" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Restaurant sx={{ fontSize: 18, color: '#E91E63' }} />
                              </ListItemIcon>
                              <ListItemText primary="Coordinar dependencias" />
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                    </Grid>

                    <Alert severity="warning" sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        Las actualizaciones diarias se complementarán con <strong>reportes breves en la plataforma de gestión</strong>, 
                        asegurando continuidad informativa entre sesiones.
                      </Typography>
                    </Alert>
                  </CardContent>
                </Card>

                {/* 7.5 Artefactos y Herramientas */}
                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#673AB7' }}>
                      7.5 Artefactos y Herramientas de Soporte
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify', mb: 3 }}>
                      Los artefactos y herramientas seleccionadas fortalecen la trazabilidad, transparencia y comunicación dentro del equipo.
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Card sx={{ borderLeft: '4px solid #00BCD4', height: '100%' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                              <Preview sx={{ color: '#00BCD4', fontSize: 28 }} />
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                Tablero Kanban (Taiga)
                              </Typography>
                            </Box>
                            <Typography variant="body2">
                              Herramienta principal para la gestión de flujo, priorización y control visual del estado de tareas.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Card sx={{ borderLeft: '4px solid #FF5722', height: '100%' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                              <Inventory sx={{ color: '#FF5722', fontSize: 28 }} />
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                Backlog del Producto
                              </Typography>
                            </Box>
                            <Typography variant="body2">
                              Repositorio central de requerimientos, funcionalidades y mejoras planificadas.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Card sx={{ borderLeft: '4px solid #9C27B0', height: '100%' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                              <Code sx={{ color: '#9C27B0', fontSize: 28 }} />
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                Control de Versiones (Git)
                              </Typography>
                            </Box>
                            <Typography variant="body2">
                              Repositorio Git para control de versiones y Notion o equivalente para documentación viva.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Card sx={{ borderLeft: '4px solid #4CAF50', height: '100%' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                              <Engineering sx={{ color: '#4CAF50', fontSize: 28 }} />
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                Integración Continua (CI/CD)
                              </Typography>
                            </Box>
                            <Typography variant="body2">
                              Pipelines automatizados que facilitan el despliegue, pruebas y revisión de calidad.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>

                    <Alert severity="info" sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        El equipo empleará <strong>revisiones de flujo</strong> y <strong>control de tareas en curso (WIP)</strong> como 
                        mecanismos de autorregulación y calidad continua.
                      </Typography>
                    </Alert>
                  </CardContent>
                </Card>

                {/* 7.6 Seguimiento y Mejora Continua */}
                <Card sx={{ bgcolor: '#e8f5e9', border: '2px solid #4CAF50' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                      7.6 Enfoque de Seguimiento y Mejora Continua
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify', mb: 2 }}>
                      El seguimiento del progreso será <strong>cualitativo y colaborativo</strong>, priorizando la comunicación 
                      efectiva sobre los indicadores cuantitativos tradicionales.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'justify', mb: 3 }}>
                      Cada ciclo de revisión permitirá ajustar prioridades, eliminar bloqueos y redefinir las tareas conforme a 
                      los resultados obtenidos.
                    </Typography>

                    <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#4CAF50' }}>
                        🔄 La mejora continua se garantizará mediante:
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: '#4CAF50' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Retroalimentación constante entre las áreas técnicas y funcionales"
                            primaryTypographyProps={{ fontWeight: 500 }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: '#4CAF50' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Adaptación de los flujos según la complejidad emergente"
                            primaryTypographyProps={{ fontWeight: 500 }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: '#4CAF50' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Documentación progresiva y compartida de las buenas prácticas derivadas de cada iteración"
                            primaryTypographyProps={{ fontWeight: 500 }}
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </Card>
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
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Metodología Scrumban Adaptada" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, bgcolor: '#f3e5f5' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#673AB7' }}>
                    🚀 Metodología Ágil
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <AccountTree sx={{ color: '#673AB7' }} />
                      </ListItemIcon>
                      <ListItemText primary="Scrumban: Scrum + Kanban" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Preview sx={{ color: '#00BCD4' }} />
                      </ListItemIcon>
                      <ListItemText primary="Tablero Kanban en Taiga" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Restaurant sx={{ color: '#E91E63' }} />
                      </ListItemIcon>
                      <ListItemText primary="Daily cada 2 días" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Engineering sx={{ color: '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText primary="CI/CD Automatizado" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
 

            <Divider sx={{ my: 4 }} />

          </Box>
        </Paper>
      </Container>
    </Box>
  );
}