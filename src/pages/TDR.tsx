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

            <Divider sx={{ my: 4 }} />

            {/* Footer */}
            <Grid container spacing={4}>

              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, bgcolor: '#e3f2fd' }}>
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