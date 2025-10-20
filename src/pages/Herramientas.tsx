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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  ExpandMore,
  Code,
  Storage,
  Cloud,
  Extension,
  Security,
  Speed,
  CheckCircle,
  CompareArrows,
  IntegrationInstructions,
  Assignment,
  Gavel,
  Api,
  Dashboard,
  Language,
  Message,
  Email,
  Sms,
  Instagram,
  WhatsApp,
  LocalCafe,
} from '@mui/icons-material';

export default function Herramientas() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const resumenEjecutivo = [
    {
      categoria: 'Frontend',
      herramienta: 'Next.js (React + TypeScript)',
      version: '≥ 14.0',
      motivo: 'Framework moderno con SSR/ISR, óptimo para dashboards e interfaces reactivas.',
      color: '#61DAFB',
      icon: <Code />,
    },
    {
      categoria: 'Backend',
      herramienta: 'Node.js (ExpressJS + TypeScript)',
      version: 'Node ≥ 20.x / Express ≥ 5.x',
      motivo: 'Ligero, flexible y de rápida implementación. Ideal para equipos pequeños y MVPs escalables.',
      color: '#68A063',
      icon: <Storage />,
    },
    {
      categoria: 'Base de Datos',
      herramienta: 'Híbrido: PostgreSQL + MongoDB',
      version: 'Postgres ≥ 16.x / Mongo ≥ 7.x',
      motivo: 'Combina integridad relacional con flexibilidad documental.',
      color: '#336791',
      icon: <Storage />,
    },
    {
      categoria: 'Gestor de Tareas',
      herramienta: 'Taiga',
      version: 'Última estable (SaaS o self-host)',
      motivo: 'Software libre, flexible y adaptable a flujos SCRUM/Kanban.',
      color: '#9C27B0',
      icon: <Assignment />,
    },
    {
      categoria: 'APIs Externas',
      herramienta: 'WhatsApp Business API, Graph API, SendGrid/Mailgun, Twilio',
      version: 'Según proveedor',
      motivo: 'Cumplen con los requisitos de mensajería multicanal establecidos en el TDR.',
      color: '#FF9800',
      icon: <Api />,
    },
  ];

  const comparativaFrontend = [
    {
      criterio: 'Curva de aprendizaje',
      nextjs: 'Media',
      angular: 'Alta',
      vue: 'Media',
    },
    {
      criterio: 'SSR / SEO nativo',
      nextjs: '✅ Excelente',
      angular: 'Parcial',
      vue: '✅ (Nuxt)',
    },
    {
      criterio: 'Ecosistema / comunidad',
      nextjs: 'Muy amplio',
      angular: 'Amplio',
      vue: 'Amplio',
    },
    {
      criterio: 'Integración con APIs REST',
      nextjs: 'Muy buena',
      angular: 'Muy buena',
      vue: 'Buena',
    },
    {
      criterio: 'Performance / optimización',
      nextjs: 'Alta (ISR, SWC)',
      angular: 'Media',
      vue: 'Alta',
    },
    {
      criterio: 'Escalabilidad',
      nextjs: 'Alta',
      angular: 'Alta',
      vue: 'Media-Alta',
    },
    {
      criterio: 'Productividad en CRM',
      nextjs: '✅ Alta',
      angular: '⚪ Media',
      vue: '⚪ Media',
    },
  ];

  const comparativaBackend = [
    {
      criterio: 'Estructura / modularidad',
      express: 'Media (manual)',
      nestjs: 'Alta (nativa)',
      spring: 'Alta',
    },
    {
      criterio: 'Curva de aprendizaje',
      express: 'Baja',
      nestjs: 'Media',
      spring: 'Media',
    },
    {
      criterio: 'Integración con APIs externas',
      express: 'Excelente',
      nestjs: 'Muy buena',
      spring: 'Excelente',
    },
    {
      criterio: 'Escalabilidad',
      express: 'Alta (middlewares)',
      nestjs: 'Alta (microservicios)',
      spring: 'Alta',
    },
    {
      criterio: 'Flexibilidad / personalización',
      express: 'Muy alta',
      nestjs: 'Alta',
      spring: 'Media',
    },
    {
      criterio: 'Comunidad / soporte',
      express: 'Muy amplia',
      nestjs: 'Amplia',
      spring: 'Amplia',
    },
  ];

  const comparativaBaseDatos = [
    {
      criterio: 'Modelo de datos',
      postgres: 'Relacional (ACID)',
      mongo: 'Documental',
      hibrido: 'Mixto',
    },
    {
      criterio: 'Escalabilidad',
      postgres: 'Alta (replicas, Citus)',
      mongo: 'Muy alta (sharding)',
      hibrido: 'Alta',
    },
    {
      criterio: 'Flexibilidad de esquema',
      postgres: 'Media',
      mongo: 'Alta',
      hibrido: 'Alta',
    },
    {
      criterio: 'Transacciones críticas',
      postgres: '✅ Fuerte',
      mongo: 'Limitada',
      hibrido: 'Postgres para core',
    },
    {
      criterio: 'Rendimiento lectura/escritura',
      postgres: 'Muy bueno',
      mongo: 'Excelente',
      hibrido: 'Combinado',
    },
    {
      criterio: 'Complejidad de operación',
      postgres: 'Media',
      mongo: 'Media',
      hibrido: 'Mayor',
    },
  ];

  const apisExternas = [
    {
      servicio: 'WhatsApp Business API',
      proveedor: '360Dialog / Twilio',
      uso: 'Comunicación directa con clientes',
      color: '#25D366',
      icon: <WhatsApp />,
    },
    {
      servicio: 'Facebook / Instagram',
      proveedor: 'Meta Graph API',
      uso: 'Mensajería, gestión de comentarios y DMs',
      color: '#E4405F',
      icon: <Instagram />,
    },
    {
      servicio: 'SendGrid / Mailgun',
      proveedor: 'SMTP y envío masivo',
      uso: 'Notificaciones y campañas por correo',
      color: '#3C99DC',
      icon: <Email />,
    },
    {
      servicio: 'Twilio',
      proveedor: 'SMS / voz',
      uso: 'Comunicación multicanal complementaria',
      color: '#F22F46',
      icon: <Sms />,
    },
  ];

  const licencias = [
    {
      componente: 'Next.js / React',
      licencia: 'MIT',
      uso: 'Uso comercial libre, requiere aviso de atribución.',
      tipo: 'libre',
    },
    {
      componente: 'ExpressJS / Node.js',
      licencia: 'MIT',
      uso: 'Uso libre, sin restricciones comerciales.',
      tipo: 'libre',
    },
    {
      componente: 'Prisma ORM',
      licencia: 'Apache 2.0',
      uso: 'Libre para uso comercial y modificación.',
      tipo: 'libre',
    },
    {
      componente: 'PostgreSQL',
      licencia: 'PostgreSQL License (similar a MIT)',
      uso: 'Totalmente libre y modificable.',
      tipo: 'libre',
    },
    {
      componente: 'MongoDB',
      licencia: 'Server Side Public License (SSPL)',
      uso: 'Libre con obligación de publicar modificaciones del servidor.',
      tipo: 'restringido',
    },
    {
      componente: 'Taiga',
      licencia: 'AGPL v3',
      uso: 'Uso libre, requiere publicar código si se modifica y redistribuye.',
      tipo: 'restringido',
    },
    {
      componente: 'k6',
      licencia: 'AGPL v3',
      uso: 'Libre, requiere compartir código derivado si se modifica.',
      tipo: 'restringido',
    },
    {
      componente: 'Swagger (OpenAPI)',
      licencia: 'Apache 2.0',
      uso: 'Uso comercial y distribución permitida.',
      tipo: 'libre',
    },
    {
      componente: 'SendGrid / Twilio / Meta Graph API',
      licencia: 'Propietaria (Términos de Servicio)',
      uso: 'Requiere registro de desarrollador y cumplimiento de políticas de privacidad.',
      tipo: 'propietario',
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
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
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
                    Definición de Herramientas, Librerías y APIs
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Proyecto CRM Typica – Stack Tecnológico
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<Code />}
                      label="Next.js + React"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Storage />}
                      label="Node.js + Express"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Storage />}
                      label="PostgreSQL + MongoDB"
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
            {/* Resumen Ejecutivo */}
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              defaultExpanded
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#6366F1',
                  color: 'white',
                  '&:hover': { bgcolor: '#4F46E5' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Dashboard />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Resumen Ejecutivo
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    Este documento define el stack tecnológico completo del proyecto CRM Typica, incluyendo justificación 
                    técnica, comparativas y análisis de licencias.
                  </Typography>
                </Alert>

                <Grid container spacing={2}>
                  {resumenEjecutivo.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Card sx={{ borderLeft: `5px solid ${item.color}` }}>
                        <CardContent>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={2}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ color: item.color, display: 'flex' }}>{item.icon}</Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: item.color }}>
                                  {item.categoria}
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {item.herramienta}
                              </Typography>
                              <Chip label={item.version} size="small" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="body2" color="text.secondary">
                                {item.motivo}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 1. Frontend */}
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#61DAFB',
                  color: 'white',
                  '&:hover': { bgcolor: '#4FC3F7' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Language />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1. Frontend - Next.js (React + TypeScript)
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  1.1. Comparativa de Opciones Analizadas
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600 }}>Criterio</TableCell>
                        <TableCell sx={{ fontWeight: 600, bgcolor: '#e3f2fd' }}>Next.js (React)</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Angular</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Vue / Nuxt</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {comparativaFrontend.map((row, index) => (
                        <TableRow key={index} hover>
                          <TableCell sx={{ fontWeight: 600 }}>{row.criterio}</TableCell>
                          <TableCell sx={{ bgcolor: '#f1f8ff' }}>{row.nextjs}</TableCell>
                          <TableCell>{row.angular}</TableCell>
                          <TableCell>{row.vue}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Alert severity="success" sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    ✅ Elección: Next.js (React + TypeScript) v14.0 o superior
                  </Typography>
                  <Typography variant="body2">
                    Provee renderizado híbrido (SSR/ISR) ideal para SEO, dashboards y vistas reactivas del CRM. 
                    Su estructura modular simplifica mantenimiento y su ecosistema garantiza estabilidad a largo plazo.
                  </Typography>
                </Alert>

                <Card sx={{ bgcolor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      📚 Librerías Principales Recomendadas
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="UI: Chakra UI / TailwindCSS / ShadCN UI"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Gestión de estado: Tanstack Query + Zustand"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Formularios: React Hook Form + Zod"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Testing: Jest + Cypress"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>

            {/* 2. Backend */}
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#68A063',
                  color: 'white',
                  '&:hover': { bgcolor: '#5A8F52' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Storage />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2. Backend - Node.js (ExpressJS + TypeScript)
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  2.1. Comparativa de Opciones Analizadas
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600 }}>Criterio</TableCell>
                        <TableCell sx={{ fontWeight: 600, bgcolor: '#e8f5e9' }}>ExpressJS (Node)</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>NestJS (Node)</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Spring Boot (Java)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {comparativaBackend.map((row, index) => (
                        <TableRow key={index} hover>
                          <TableCell sx={{ fontWeight: 600 }}>{row.criterio}</TableCell>
                          <TableCell sx={{ bgcolor: '#f1f8f4' }}>{row.express}</TableCell>
                          <TableCell>{row.nestjs}</TableCell>
                          <TableCell>{row.spring}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Alert severity="success" sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    ✅ Elección: ExpressJS (Node.js + TypeScript) v5.x sobre Node.js v20.x
                  </Typography>
                  <Typography variant="body2">
                    Su simplicidad, rendimiento y curva de aprendizaje baja permiten un desarrollo ágil y modular. 
                    Se alinea con la preferencia del equipo y el objetivo de construir un MVP mantenible y escalable.
                  </Typography>
                </Alert>

                <Card sx={{ bgcolor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      📚 Librerías Complementarias
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="ORM: Prisma (para PostgreSQL)"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Validación: Zod / class-validator"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Autenticación: JWT + Passport"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Testing: Jest + Supertest"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Documentación API: Swagger (OpenAPI 3.0)"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>

            {/* 3. Base de Datos */}
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#336791',
                  color: 'white',
                  '&:hover': { bgcolor: '#2A5479' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Storage />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    3. Base de Datos - PostgreSQL + MongoDB
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  3.1. Comparativa de Opciones Analizadas
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600 }}>Criterio</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>PostgreSQL</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>MongoDB</TableCell>
                        <TableCell sx={{ fontWeight: 600, bgcolor: '#e3f2fd' }}>Híbrido (Ambos)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {comparativaBaseDatos.map((row, index) => (
                        <TableRow key={index} hover>
                          <TableCell sx={{ fontWeight: 600 }}>{row.criterio}</TableCell>
                          <TableCell>{row.postgres}</TableCell>
                          <TableCell>{row.mongo}</TableCell>
                          <TableCell sx={{ bgcolor: '#f1f8ff' }}>{row.hibrido}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Alert severity="success" sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    ✅ Elección: Arquitectura Híbrida — PostgreSQL v16.x + MongoDB v7.x
                  </Typography>
                  <Typography variant="body2">
                    Se prioriza la consistencia e integridad relacional del CRM (clientes, transacciones, puntos de 
                    fidelización), mientras MongoDB almacena logs, eventos y mensajes de bandeja multicanal con 
                    flexibilidad y velocidad.
                  </Typography>
                </Alert>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '5px solid #336791', height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#336791' }}>
                          PostgreSQL
                        </Typography>
                        <Typography variant="body2" paragraph>
                          <strong>Uso:</strong> Datos transaccionales core del CRM
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText primary="• Clientes y contactos" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Transacciones y compras" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Puntos de fidelización" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Campañas y recompensas" />
                          </ListItem>
                        </List>
                        <Chip label="Conector: Prisma ORM" size="small" color="primary" variant="outlined" />
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '5px solid #47A248', height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#47A248' }}>
                          MongoDB
                        </Typography>
                        <Typography variant="body2" paragraph>
                          <strong>Uso:</strong> Datos no estructurados y eventos
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText primary="• Logs del sistema" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Mensajes multicanal" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Eventos y auditoría" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Analytics en tiempo real" />
                          </ListItem>
                        </List>
                        <Chip label="Conector: Mongoose ODM" size="small" color="success" variant="outlined" />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 4. Gestor de Tareas */}
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
                  <Assignment />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    4. Gestor de Tareas - Taiga
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  4.1. Comparativa de Opciones
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '5px solid #9C27B0', height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#9C27B0' }}>
                          ✅ Taiga (Seleccionado)
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50', fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Licencia: Open Source"
                              secondary="Gratuito / self-host"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50', fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="UX / Usabilidad: Buena"
                              secondary="Intuitivo y fácil de adoptar"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50', fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Personalización: Alta"
                              secondary="Adaptable a SCRUM/Kanban"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50', fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Integraciones: Básicas / extensibles"
                              secondary="Git, CI/CD"
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '5px solid #9E9E9E', height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#9E9E9E' }}>
                          Linear (Evaluado)
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText
                              primary="Licencia: Comercial"
                              secondary="Pago (SaaS)"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              primary="UX / Usabilidad: Excelente"
                              secondary="Interfaz moderna y rápida"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              primary="Personalización: Media"
                              secondary="Limitado por modelo SaaS"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              primary="Integraciones: Amplias"
                              secondary="GitHub, Slack, Figma"
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Alert severity="success">
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    ✅ Elección: Taiga (última versión estable)
                  </Typography>
                  <Typography variant="body2">
                    Herramienta open source, compatible con flujos SCRUM/Kanban, personalizable y adaptable a la 
                    metodología del equipo. Favorece la independencia tecnológica y control de datos internos.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 5. APIs Externas */}
            <Accordion
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
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
                  <Api />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    5. APIs Externas y Servicios
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  5.1. APIs de Comunicación
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {apisExternas.map((api, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ borderLeft: `5px solid ${api.color}` }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box sx={{ color: api.color, display: 'flex' }}>{api.icon}</Box>
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {api.servicio}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {api.proveedor}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography variant="body2">
                            <strong>Uso:</strong> {api.uso}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    <strong>Cumplimiento:</strong> Todas las APIs cumplen con los requerimientos del TDR en mensajería 
                    multicanal, soporte de marketing y comunicación transaccional.
                  </Typography>
                </Alert>

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  5.2. APIs Internas y Soporte
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Security sx={{ fontSize: 40, color: '#2196F3', mb: 1 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Autenticación
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        JWT / OAuth2
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Cloud sx={{ fontSize: 40, color: '#4CAF50', mb: 1 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Geolocalización
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Google Maps API
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Message sx={{ fontSize: 40, color: '#FF9800', mb: 1 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Notificaciones Push
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Firebase Cloud Messaging
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Card sx={{ textAlign: 'center', p: 2 }}>
                      <Speed sx={{ fontSize: 40, color: '#9C27B0', mb: 1 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Monitoreo
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Prometheus + Grafana
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 6. Licencias y Cumplimiento */}
            <Accordion
              expanded={expanded === 'panel7'}
              onChange={handleChange('panel7')}
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
                  <Gavel />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    6. Licencias, Cumplimiento y Compatibilidad OSS
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  6.1. Licencias de las Herramientas Seleccionadas
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600 }}>Componente</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Licencia</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Tipo de Uso Permitido</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Estado</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {licencias.map((lic, index) => (
                        <TableRow key={index} hover>
                          <TableCell sx={{ fontWeight: 600 }}>{lic.componente}</TableCell>
                          <TableCell>
                            <Chip
                              label={lic.licencia}
                              size="small"
                              color={lic.tipo === 'libre' ? 'success' : lic.tipo === 'restringido' ? 'warning' : 'error'}
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell>{lic.uso}</TableCell>
                          <TableCell>
                            <Chip
                              label={lic.tipo === 'libre' ? 'LIBRE' : lic.tipo === 'restringido' ? 'RESTRINGIDO' : 'PROPIETARIO'}
                              size="small"
                              color={lic.tipo === 'libre' ? 'success' : lic.tipo === 'restringido' ? 'warning' : 'error'}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  6.2. Consideraciones de Cumplimiento
                </Typography>

                <Stack spacing={2}>
                  <Alert severity="success">
                    <Typography variant="body2">
                      ✅ <strong>MIT / Apache / PostgreSQL:</strong> Pueden integrarse sin restricciones comerciales.
                    </Typography>
                  </Alert>

                  <Alert severity="warning">
                    <Typography variant="body2">
                      ⚠️ <strong>AGPL v3 (Taiga, k6):</strong> Si se modifican y redistribuyen, debe compartirse el código 
                      fuente de dichas modificaciones.
                    </Typography>
                  </Alert>

                  <Alert severity="info">
                    <Typography variant="body2">
                      ℹ️ <strong>APIs Propietarias (Twilio, SendGrid, Meta):</strong> Deben usarse conforme a sus políticas 
                      de uso, privacidad y límites de solicitud.
                    </Typography>
                  </Alert>

                  <Alert severity="info">
                    <Typography variant="body2">
                      📋 <strong>Recomendación:</strong> Mantener un repositorio de licencias dentro del control de versiones 
                      del proyecto para auditorías futuras.
                    </Typography>
                  </Alert>
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, bgcolor: '#e3f2fd' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    🛠️ Stack Tecnológico Final
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Frontend: Next.js 14+ (React + TypeScript)" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Backend: Node.js 20+ (Express 5+ TypeScript)" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="BD: PostgreSQL 16+ + MongoDB 7+" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Gestión: Taiga (Open Source)" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="APIs: WhatsApp, Instagram, SendGrid, Twilio" />
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
};