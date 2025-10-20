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
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  ExpandMore,
  Business,
  CalendarToday,
  Description,
  Timeline as TimelineIcon,
  Check,
  AttachMoney,
  Folder,
  Flag,
  Code,
  Cloud,
  Security,
  Build,
  School,
  Assessment,
  Star,
  LocalCafe,
  Public,
  EmojiEvents,
} from '@mui/icons-material';

export default function TDR() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const fases = [
    {
      fase: 'Fase 1',
      titulo: 'Documento de Especificaciones Técnicas y Funcionales',
      duracion: '4 semanas',
      actividades: [
        'Levantamiento y análisis detallado de requerimientos funcionales y no funcionales',
        'Definición de arquitectura del sistema y selección de tecnologías',
        'Diseño preliminar UI/UX y diagramas de interacción',
      ],
      color: '#2196F3',
    },
    {
      fase: 'Fase 2',
      titulo: 'Desarrollo del Sistema CRM Funcional (Versión Inicial)',
      duracion: '8 semanas',
      actividades: [
        'Implementación de módulos principales: Gestión de Clientes y Contactos, Fidelización y Recompensas, Comunicación Multicanal',
        'Integración inicial con POS y base de datos',
        'Pruebas internas de funcionalidad y seguridad',
      ],
      color: '#4CAF50',
    },
    {
      fase: 'Fase 3',
      titulo: 'Desarrollo Avanzado y Módulos Complementarios',
      duracion: '6 semanas',
      actividades: [
        'Desarrollo de módulos adicionales: Automatización de Campañas, Dashboard Analítico, Feedback, Reservas y Eventos',
        'Integración con APIs externas (WhatsApp, Email, RRSS)',
        'Pruebas de rendimiento y estabilidad',
      ],
      color: '#FF9800',
    },
    {
      fase: 'Fase 4',
      titulo: 'Documentación, Hosting y Capacitación',
      duracion: '4 semanas',
      actividades: [
        'Elaboración de manuales técnicos y de usuario',
        'Configuración del entorno productivo (hosting, seguridad, respaldo, monitoreo)',
        'Ejecución del plan de capacitación al personal de Typica',
      ],
      color: '#9C27B0',
    },
    {
      fase: 'Fase 5',
      titulo: 'Validación Final y Cierre de Proyecto',
      duracion: '2 semanas',
      actividades: [
        'Pruebas finales de aceptación (UAT)',
        'Revisión de reportes de pruebas funcionales, de rendimiento y seguridad',
        'Aprobación final y firma de acta de conformidad',
      ],
      color: '#F44336',
    },
  ];

  const pagos = [
    { hito: 'Inicio del Proyecto (Firma del Contrato)', periodo: 'Inicio', porcentaje: '40%', condicion: 'Aprobación del plan de trabajo, cronograma y constitución del equipo técnico' },
    { hito: 'Entrega de Especificaciones Técnicas y Funcionales', periodo: 'Mes 2', porcentaje: '25%', condicion: 'Entrega y validación del documento técnico y diseño preliminar' },
    { hito: 'Entrega del Sistema CRM Funcional (Versión Inicial)', periodo: 'Mes 4', porcentaje: '20%', condicion: 'Validación funcional de los módulos principales e integración con POS' },
    { hito: 'Entrega Final y Cierre del Proyecto', periodo: 'Mes 6', porcentaje: '15%', condicion: 'Aprobación del entorno productivo, manuales, capacitación finalizada, validación final, pruebas de aceptación y firma de acta de conformidad' },
  ];

  const objetivosEspecificos = [
    'Centralizar la gestión de clientes y contactos mediante un módulo que unifique los datos personales, preferencias, historial de compras e interacciones',
    'Implementar un sistema de fidelización y recompensas que automatice la asignación de puntos, promociones y niveles de cliente',
    'Integrar la comunicación multicanal (WhatsApp, Instagram, correo, SMS) para ofrecer atención rápida, coherente y trazable desde una bandeja unificada',
    'Automatizar campañas de marketing y envíos de mensajes personalizados, vinculando los resultados a indicadores de conversión y desempeño',
    'Conectar el CRM con el sistema POS, para reflejar en tiempo real las compras, hábitos de consumo y recompensas acumuladas',
    'Incorporar herramientas de análisis y reportes, mediante un panel (dashboard) que visualice KPIs de ventas, fidelización y satisfacción del cliente',
    'Facilitar la gestión de feedback, reservas y eventos, permitiendo la retroalimentación continua del cliente y fortaleciendo su participación en actividades de marca',
    'Garantizar la seguridad, disponibilidad y escalabilidad del sistema, cumpliendo con los requerimientos no funcionales definidos para un entorno de operación estable y confiable',
  ];

  const entregables = [
    { titulo: 'Documento de Especificaciones Técnicas y Funcionales', icon: <Description />, descripcion: 'Detalle de requerimientos funcionales, arquitectura, tecnologías y diseño UI/UX' },
    { titulo: 'Sistema CRM Funcional', icon: <Code />, descripcion: 'Plataforma operativa con todos los módulos integrados y compatible con web y móviles' },
    { titulo: 'Documentación Técnica y Manuales', icon: <Folder />, descripcion: 'Manuales de instalación, usuario administrativo y usuario final' },
    { titulo: 'Entorno Productivo y Hosting', icon: <Cloud />, descripcion: 'Infraestructura implementada con seguridad, respaldo y monitoreo activo' },
    { titulo: 'Plan de Capacitación', icon: <School />, descripcion: 'Capacitación práctica al personal y materiales audiovisuales' },
    { titulo: 'Reportes de Pruebas', icon: <Assessment />, descripcion: 'Resultados de pruebas funcionales, de rendimiento y de seguridad' },
    { titulo: 'Soporte y Mantenimiento (12 meses)', icon: <Build />, descripcion: 'Help Desk, atención técnica según SLA y reportes mensuales' },
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
                    Términos de Referencia
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Implementación de un Sistema CRM para Typica – Café & Tostaduría
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<CalendarToday />}
                      label="Duración: 6 meses"
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
            {/* 1. Datos Generales */}
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
                  <Business />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1. Datos Generales
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  <strong>Typica – Café & Tostaduría Especializada</strong> es una empresa boliviana dedicada a la producción, 
                  comercialización y servicio de café de especialidad, combinando gastronomía de autor, ambientación cultural 
                  cuidadosamente diseñada y atención al cliente de alto nivel. Su propuesta abarca todo el ciclo "del grano a 
                  la taza", priorizando la calidad del café nacional y la valorización de identidad cultural en cada espacio.
                </Typography>

                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #2196F3' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <LocalCafe sx={{ color: '#2196F3', fontSize: 30 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Café de Especialidad
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Selección de granos nacionales de alta calidad, diversos métodos de preparación que realzan 
                          perfiles de sabor y funcionamiento de tostaduría propia.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #4CAF50' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Star sx={{ color: '#4CAF50', fontSize: 30 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Experiencia del Cliente
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Menú de autor, ambientes con jardines, decoración vintage, biblioteca, música y espacios 
                          diseñados tanto para relax como para trabajo.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Alert severity="info" icon={<Flag />} sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    MISIÓN / PROPÓSITO
                  </Typography>
                  <Typography variant="body2">
                    "Ofrecer a clientes locales e internacionales una experiencia integral de café de especialidad 
                    boliviano, desde una producción ética y sostenible con productores locales, hasta espacios acogedores 
                    de gastronomía, cultura y servicio, promoviendo la calidad, la identidad nacional y la innovación en 
                    cada detalle."
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 2. Antecedentes y Justificación */}
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
                  <TimelineIcon />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2. Antecedentes y Justificación del Proyecto
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  2.1 Antecedentes
                </Typography>
                <Typography variant="body1" paragraph>
                  Typica – Café & Tostaduría Especializada fue fundada en el año <strong>2015</strong>, inspirada por un 
                  equipo de jóvenes baristas, tostadores y entusiastas del café que identificaron una oportunidad en el 
                  mercado boliviano: brindar una experiencia de café de especialidad que fuera más allá del consumo habitual.
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', p: 2, bgcolor: '#e3f2fd' }}>
                      <Public sx={{ fontSize: 40, color: '#2196F3', mb: 1 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        6 Ciudades
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Presencia nacional
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', p: 2, bgcolor: '#fff3e0' }}>
                      <EmojiEvents sx={{ fontSize: 40, color: '#FF9800', mb: 1 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Reconocimientos
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Competencias internacionales
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', p: 2, bgcolor: '#e8f5e9' }}>
                      <LocalCafe sx={{ fontSize: 40, color: '#4CAF50', mb: 1 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Comercio Justo
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Trabajo con productores locales
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  2.2 Justificación
                </Typography>
                <Typography variant="body1" paragraph>
                  La expansión de Typica a nivel nacional ha incrementado exponencialmente el volumen de clientes, 
                  transacciones y canales de comunicación, generando la necesidad de un sistema unificado que permita 
                  gestionar eficazmente la relación con sus clientes y mantener la coherencia de la experiencia de marca.
                </Typography>

                <Alert severity="warning" sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    <strong>Problemática Actual:</strong> Los procesos de atención, fidelización y análisis comercial 
                    se realizan de forma fragmentada, dificultando la trazabilidad de interacciones, la personalización 
                    de servicios y la toma de decisiones estratégicas basadas en datos.
                  </Typography>
                </Alert>

                <Alert severity="success">
                  <Typography variant="body2">
                    <strong>Solución Propuesta:</strong> El desarrollo e implementación de un Sistema CRM permitirá 
                    centralizar la información de clientes, automatizar campañas de marketing, integrar canales de 
                    comunicación y conectar los sistemas de venta (POS) con herramientas analíticas en tiempo real.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 3. Objetivos del Proyecto */}
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
                  <Flag />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    3. Objetivos del Proyecto
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Card sx={{ bgcolor: '#fff3e0', mb: 3, p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#FF9800' }}>
                    3.1 Objetivo General
                  </Typography>
                  <Typography variant="body1">
                    Diseñar e implementar un sistema CRM integral para Typica – Café & Tostaduría Especializada, que 
                    centralice la información de clientes, automatice los procesos de marketing y comunicación multicanal, 
                    y proporcione herramientas analíticas para la toma de decisiones, fortaleciendo la fidelización y la 
                    experiencia del cliente en todas las sucursales.
                  </Typography>
                </Card>

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  3.2 Objetivos Específicos
                </Typography>
                <List>
                  {objetivosEspecificos.map((objetivo, index) => (
                    <ListItem key={index} sx={{ mb: 1, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                      <ListItemIcon>
                        <Check sx={{ color: '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${index + 1}. ${objetivo}`}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>

            {/* 4. Alcance de los Servicios */}
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
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
                  <Description />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    4. Alcance de los Servicios
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #2196F3' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Code sx={{ color: '#2196F3' }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            4.1 Diseño y Desarrollo
                          </Typography>
                        </Box>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText primary="Análisis funcional y técnico" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText primary="Diseño UI/UX responsive" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText primary="Desarrollo de módulos CRM" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText primary="Integración con APIs externas" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pruebas funcionales y de aceptación" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #4CAF50' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Cloud sx={{ color: '#4CAF50' }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            4.2 Despliegue e Infraestructura
                          </Typography>
                        </Box>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Arquitectura de despliegue" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Disponibilidad y escalabilidad" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Estrategias de respaldo" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Documentación técnica completa" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #FF9800' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Security sx={{ color: '#FF9800' }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            4.3 Hosting y Seguridad
                          </Typography>
                        </Box>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Implementación en cloud" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Certificados SSL y cifrado" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Control de accesos por roles" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Backups automáticos" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText primary="Protección de datos personales" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #9C27B0' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Build sx={{ color: '#9C27B0' }} />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            4.4 Soporte y Mantenimiento
                          </Typography>
                        </Box>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Mantenimiento correctivo y preventivo" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Help Desk con atención prioritaria" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Tiempos de respuesta SLA" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Actualizaciones de seguridad" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Check sx={{ fontSize: 18, color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Reportes mensuales (12 meses)" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 5. Actividades Clave y Cronograma */}
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#F44336',
                  color: 'white',
                  '&:hover': { bgcolor: '#D32F2F' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarToday />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    5. Actividades Clave y Cronograma
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    El desarrollo del sistema CRM se ejecutará en un periodo aproximado de <strong>6 meses</strong>, 
                    distribuidos en 5 fases principales.
                  </Typography>
                </Alert>

                <Timeline position="alternate">
                  {fases.map((fase, index) => (
                    <TimelineItem key={index}>
                      <TimelineOppositeContent color="text.secondary">
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {fase.duracion}
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: fase.color }}>
                          {index + 1}
                        </TimelineDot>
                        {index < fases.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Card sx={{ borderLeft: `4px solid ${fase.color}` }}>
                          <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: fase.color, mb: 1 }}>
                              {fase.fase}: {fase.titulo}
                            </Typography>
                            <List dense>
                              {fase.actividades.map((actividad, idx) => (
                                <ListItem key={idx}>
                                  <ListItemIcon>
                                    <Check sx={{ fontSize: 16, color: fase.color }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={actividad}
                                    primaryTypographyProps={{ variant: 'body2' }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>
                        </Card>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  5.2 Propuesta de Pagos
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Los pagos se realizarán cada <strong>2 meses</strong>, en función del cumplimiento de hitos técnicos.
                </Typography>

                <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600 }}>Hito / Entregable</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Periodo</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Porcentaje</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Condición de Desembolso</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pagos.map((pago, index) => (
                        <TableRow key={index} hover>
                          <TableCell>{pago.hito}</TableCell>
                          <TableCell>
                            <Chip label={pago.periodo} size="small" color="primary" />
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#4CAF50' }}>
                              {pago.porcentaje}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">{pago.condicion}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>

            {/* 6. Productos y Entregables */}
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
                  <Folder />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    6. Productos y Entregables Esperados
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  {entregables.map((entregable, index) => (
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
                              {entregable.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {entregable.titulo}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {entregable.descripcion}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 7. Carta de Aceptación */}
            <Accordion
              expanded={expanded === 'panel7'}
              onChange={handleChange('panel7')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#1565C0',
                  color: 'white',
                  '&:hover': { bgcolor: '#0D47A1' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Description />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    7. Carta / Acta de Aceptación e Inicio de Proyecto
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 4 }}>
                <Paper sx={{ p: 4, bgcolor: '#fafafa', border: '2px solid #1565C0' }}>
                  {/* Encabezado */}
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1565C0', mb: 1 }}>
                      CARTA / ACTA DE ACEPTACIÓN E INICIO DE PROYECTO
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#666' }}>
                      Proyecto: Sistema de Gestión de Relaciones con Clientes – CRM Typica
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  {/* Entre las partes */}
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1565C0' }}>
                    ENTRE:
                  </Typography>
                  
                  <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ borderLeft: '4px solid #4CAF50', bgcolor: '#f1f8f4' }}>
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                            LA CONTRATANTE
                          </Typography>
                          <Typography variant="body2" paragraph>
                            <strong>Typica – Café & Tostaduría Especializada</strong>, con domicilio en La Paz, 
                            Estado Plurinacional de Bolivia.
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Business sx={{ fontSize: 20, color: '#4CAF50' }} />
                            <Typography variant="body2">
                              <strong>Representante:</strong> María Pérez
                            </Typography>
                          </Box>
                          <Typography variant="body2">
                            <strong>Cargo:</strong> Gerente General
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Card sx={{ borderLeft: '4px solid #2196F3', bgcolor: '#f0f7ff' }}>
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                            LA DESARROLLADORA
                          </Typography>
                          <Typography variant="body2" paragraph>
                            <strong>ChairuX – Desarrollo de Software</strong>, con domicilio en La Paz, 
                            Estado Plurinacional de Bolivia.
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Business sx={{ fontSize: 20, color: '#2196F3' }} />
                            <Typography variant="body2">
                              <strong>Representante:</strong> Alexander Cruz
                            </Typography>
                          </Box>
                          <Typography variant="body2">
                            <strong>Cargo:</strong> Representante Legal
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  {/* 1. OBJETO */}
                  <Card sx={{ mb: 3, bgcolor: '#fff' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1565C0', mb: 2 }}>
                        1. OBJETO
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                        El presente documento constituye el acto bilateral y vinculante mediante el cual 
                        <strong> Typica – Café & Tostaduría Especializada</strong> acepta formalmente la propuesta 
                        técnica y económica presentada por <strong>ChairuX – Desarrollo de Software</strong>, y ambas 
                        partes declaran el inicio formal del Proyecto denominado 
                        <strong> "Sistema de Gestión de Relaciones con Clientes – CRM Typica"</strong>.
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* 2. IDENTIFICACIÓN DE REPRESENTANTES */}
                  <Card sx={{ mb: 3, bgcolor: '#fff' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1565C0', mb: 2 }}>
                        2. IDENTIFICACIÓN DE REPRESENTANTES Y DECLARACIONES
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                        <strong>Typica</strong> declara que la persona que firma, <strong>María Pérez</strong> (nombre 
                        genérico), actúa en representación de la empresa con las facultades necesarias. 
                        <strong> ChairuX</strong> declara que <strong>Alexander Curz</strong> es su representante legal. 
                        Ambas partes declaran haber recibido y revisado los Términos de Referencia, el Cronograma propuesto, 
                        el Documento de Gestión de Riesgos y los Requerimientos funcionales y no funcionales.
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* 3. VALOR CONTRACTUAL */}
                  <Card sx={{ mb: 3, bgcolor: '#fff3e0', border: '2px solid #FF9800' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#FF9800', mb: 2 }}>
                        3. VALOR CONTRACTUAL Y PLAN DE PAGOS
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#FF9800', mb: 1 }}>
                          USD $27,977.09
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Forma de pago: Transferencias bancarias a la cuenta designada por La Desarrolladora
                        </Typography>
                      </Box>

                      <TableContainer component={Paper} sx={{ mt: 2 }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow sx={{ bgcolor: '#FF9800' }}>
                              <TableCell sx={{ fontWeight: 600, color: 'white' }}>Hito</TableCell>
                              <TableCell sx={{ fontWeight: 600, color: 'white' }}>%</TableCell>
                              <TableCell sx={{ fontWeight: 600, color: 'white' }}>Monto (USD)</TableCell>
                              <TableCell sx={{ fontWeight: 600, color: 'white' }}>Condición de Desembolso</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>Hito 1 - Inicio del Proyecto</TableCell>
                              <TableCell><Chip label="40%" color="warning" size="small" /></TableCell>
                              <TableCell sx={{ fontWeight: 600 }}>$11,190.84</TableCell>
                              <TableCell>Presentación y aprobación del Plan de Trabajo y cronograma detallado</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Hito 2 - Especificaciones Técnicas</TableCell>
                              <TableCell><Chip label="25%" color="info" size="small" /></TableCell>
                              <TableCell sx={{ fontWeight: 600 }}>$6,994.27</TableCell>
                              <TableCell>Entrega y validación del documento técnico y diseño UI/UX</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Hito 3 - Sistema CRM Funcional</TableCell>
                              <TableCell><Chip label="20%" color="success" size="small" /></TableCell>
                              <TableCell sx={{ fontWeight: 600 }}>$5,595.42</TableCell>
                              <TableCell>Validación funcional de módulos principales e integración con POS</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Hito 4 - Entrega Final</TableCell>
                              <TableCell><Chip label="15%" color="primary" size="small" /></TableCell>
                              <TableCell sx={{ fontWeight: 600 }}>$4,196.56</TableCell>
                              <TableCell>Aprobación final, entorno productivo, manuales y capacitación completada</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>

                      <Alert severity="error" sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                          Cláusula de Protección por Impago
                        </Typography>
                        <Typography variant="body2">
                          Si La Contratante incumple cualquier pago, La Desarrolladora podrá suspender las labores 
                          relacionadas con el hito impago hasta la regularización. Si el impago se prolonga por más de 
                          30 días, La Desarrolladora podrá resolver el contrato y exigir indemnización por servicios 
                          realizados, intereses moratorios y costos de gestión de cobro.
                        </Typography>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* 4. CRONOGRAMA */}
                  <Card sx={{ mb: 3, bgcolor: '#fff' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1565C0', mb: 2 }}>
                        4. CRONOGRAMA (ANEXO I)
                      </Typography>
                      <Typography variant="body2" paragraph sx={{ textAlign: 'justify' }}>
                        El Cronograma propuesto presentado por La Desarrolladora y contenido en el Anexo I se considera 
                        cronograma oficial propuesto para la ejecución del Proyecto. Las fechas específicas serán ajustadas 
                        de mutuo acuerdo en un acta complementaria dentro de los cinco (5) días hábiles siguientes a la 
                        firma del presente documento.
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                        Resumen de Fases y Duraciones:
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon><Check sx={{ color: '#2196F3' }} /></ListItemIcon>
                          <ListItemText primary="Fase 1 – Especificaciones Técnicas y Funcionales: 4 semanas" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Check sx={{ color: '#4CAF50' }} /></ListItemIcon>
                          <ListItemText primary="Fase 2 – Desarrollo del Sistema CRM Funcional: 8 semanas" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Check sx={{ color: '#FF9800' }} /></ListItemIcon>
                          <ListItemText primary="Fase 3 – Desarrollo Avanzado y Módulos Complementarios: 6 semanas" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Check sx={{ color: '#9C27B0' }} /></ListItemIcon>
                          <ListItemText primary="Fase 4 – Documentación, Hosting y Capacitación: 4 semanas" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Check sx={{ color: '#F44336' }} /></ListItemIcon>
                          <ListItemText primary="Fase 5 – Validación Final y Cierre del Proyecto: 2 semanas" />
                        </ListItem>
                      </List>
                      <Alert severity="info" sx={{ mt: 2 }}>
                        <Typography variant="body2">
                          <strong>Duración total estimada:</strong> 6 meses desde la fecha de inicio
                        </Typography>
                      </Alert>
                    </CardContent>
                  </Card>

                  {/* 5-13. Cláusulas Adicionales */}
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#e3f2fd' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            5. ALCANCE FUNCIONAL
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Especificaciones técnicas, sistema CRM funcional, manuales, entorno productivo y capacitación. 
                            Cambios mediante orden de cambio formal.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#f3e5f5' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            6. TECNOLOGÍAS
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Next.js (React + TypeScript), Node.js, PostgreSQL, MongoDB. Integraciones: WhatsApp, Meta, SendGrid, Twilio.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#fff3e0' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            7. GESTIÓN DE RIESGOS
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Backups diarios, cifrado, alta disponibilidad, auditorías mensuales y plan de contingencia.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#e8f5e9' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            8. CONFIDENCIALIDAD
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Obligación de confidencialidad por 5 años tras finalización sobre información técnica y comercial.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#fce4ec' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            9. PROPIEDAD INTELECTUAL
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Titularidad: ChairuX. Licencia perpetua no exclusiva para Typica (uso interno).
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#e0f2f1' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            10. PRUEBAS Y ACEPTACIÓN
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Pruebas según planes, aceptación por acta firmada, plazo para subsanar observaciones.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#fff9c4' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            11. GARANTÍAS
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            ChairuX garantiza entrega conforme. Typica proporciona recursos y feedback. Sin responsabilidad por daños indirectos.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#ffebee' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            12. RESOLUCIÓN DEL CONTRATO
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Por incumplimiento grave, impago prolongado, insolvencia o fuerza mayor. Con indemnización por daños.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ height: '100%', bgcolor: '#e1f5fe' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            13. LEGISLACIÓN Y JURISDICCIÓN
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                            Regulado por leyes del Estado Plurinacional de Bolivia. Jurisdicción: La Paz.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  {/* 14. ENTRADA EN VIGENCIA */}
                  <Alert severity="success" sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      14. ENTRADA EN VIGENCIA
                    </Typography>
                    <Typography variant="body2">
                      El presente documento surtirá efectos desde la fecha de su firma y será considerado como 
                      <strong> acta de inicio del Proyecto CRM Typica</strong>.
                    </Typography>
                  </Alert>

                  {/* 15. ANEXOS */}
                  <Card sx={{ mb: 3, bgcolor: '#fff' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1565C0', mb: 2 }}>
                        15. ANEXOS
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon><Folder sx={{ color: '#2196F3' }} /></ListItemIcon>
                          <ListItemText primary="Anexo I: Cronograma propuesto" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Folder sx={{ color: '#2196F3' }} /></ListItemIcon>
                          <ListItemText primary="Anexo II: Documento de Gestión de Riesgos" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Folder sx={{ color: '#2196F3' }} /></ListItemIcon>
                          <ListItemText primary="Anexo III: Especificaciones Técnicas y Funcionales" />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>

                  {/* 16. FIRMAS */}
                  <Card sx={{ bgcolor: '#f5f5f5', border: '2px dashed #1565C0' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1565C0', mb: 3, textAlign: 'center' }}>
                        16. FIRMAS
                      </Typography>
                      <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                          <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'white', borderRadius: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                              Por Typica – Café & Tostaduría Especializada
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ my: 3, py: 2, borderBottom: '2px solid #000' }}>
                              <Typography variant="caption" color="text.secondary">
                                Firma
                              </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              <strong>Nombre:</strong> María Pérez
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              <strong>Cargo:</strong> Gerente General
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lugar y Fecha: La Paz, _____ de ________ de 2025
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'white', borderRadius: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                              Por ChairuX – Desarrollo de Software
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ my: 3, py: 2, borderBottom: '2px solid #000' }}>
                              <Typography variant="caption" color="text.secondary">
                                Firma
                              </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              <strong>Nombre:</strong> Alexander Curz
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                              <strong>Cargo:</strong> Representante Legal
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lugar y Fecha: La Paz, _____ de ________ de 2025
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Paper>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />


            {/* Footer */}
            <Grid container spacing={4}>

              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, bgcolor: '#e3f2fd', position: 'relative' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    📋 Resumen del Proyecto
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <AttachMoney sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Duración: 6 meses" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarToday sx={{ color: 'primary.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="5 Fases de desarrollo" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Build sx={{ color: 'warning.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Soporte: 12 meses incluido" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Check sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Pagos escalonados por hitos" />
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