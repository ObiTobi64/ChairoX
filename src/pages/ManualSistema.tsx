import { useState } from 'react';
import {
  Container,
  Paper,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from '@mui/material';
import {
  ExpandMore,
  MenuBook,
  Architecture,
  Code,
  Storage,
  Build,
  Security,
  CloudDownload,
  Settings,
  AccountTree,
  People,
  Description,
  CheckCircle,
  Warning,
  BugReport,
  Support,
  Folder,
  Terminal,
  Dashboard,
  IntegrationInstructions,
  VerifiedUser,
  Assessment,
  Backup,
  Update,
  ContactSupport,
  Schedule,
} from '@mui/icons-material';

export const ManualSistema = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const tecnologias = [
    { nombre: 'Frontend', valor: 'Next.js (React + TypeScript) v14+', color: '#2196F3', icon: <Code /> },
    { nombre: 'Backend', valor: 'Node.js + Express (TypeScript) ≥ v20', color: '#4CAF50', icon: <Terminal /> },
    { nombre: 'BD Transaccional', valor: 'PostgreSQL v16+', color: '#FF9800', icon: <Storage /> },
    { nombre: 'BD Logs/Mensajería', valor: 'MongoDB v7+', color: '#9C27B0', icon: <Storage /> },
    { nombre: 'ORM/ODM', valor: 'Prisma (Postgres) + Mongoose (MongoDB)', color: '#00BCD4', icon: <IntegrationInstructions /> },
    { nombre: 'Autenticación', valor: 'JWT + Passport', color: '#F44336', icon: <Security /> },
    { nombre: 'Contenedores', valor: 'Docker / docker-compose', color: '#3F51B5', icon: <Build /> },
    { nombre: 'Monitoreo', valor: 'Prometheus + Grafana + Sentry', color: '#607D8B', icon: <Assessment /> },
  ];

  const roles = [
    {
      nombre: 'Administrador',
      codigo: 'admin',
      descripcion: 'Acceso total al sistema, gestión de usuarios y configuración crítica',
      color: '#F44336',
      permisos: ['Ver todo', 'Crear todo', 'Editar todo', 'Eliminar todo', 'Configuración avanzada'],
    },
    {
      nombre: 'Editor',
      codigo: 'editor',
      descripcion: 'Gestión de contenido y campañas, sin acceso a configuración crítica',
      color: '#FF9800',
      permisos: ['Ver contenido', 'Crear campañas', 'Editar contenido', 'Gestión de clientes'],
    },
    {
      nombre: 'Agente / Operador',
      codigo: 'agent',
      descripcion: 'Atención al cliente, gestión de bandeja multicanal y reservas',
      color: '#2196F3',
      permisos: ['Ver clientes', 'Bandeja unificada', 'Gestionar reservas', 'Ver historial'],
    },
    {
      nombre: 'Usuario Registrado',
      codigo: 'user',
      descripcion: 'Acceso a perfil propio y programas de fidelización',
      color: '#4CAF50',
      permisos: ['Ver perfil', 'Ver puntos', 'Canjear recompensas', 'Feedback'],
    },
  ];

  const estructuraCarpetas = `/ (root)
├─ README.md
├─ package.json
├─ .env.example
├─ /apps
│  ├─ /frontend-next (Next.js)
│  └─ /api (Express)
├─ /services
│  ├─ /worker (jobs, procesadores)
│  └─ /integrations (WhatsApp, POS connectors)
├─ /infra
│  ├─ docker-compose.yml
│  ├─ Dockerfile.api
│  └─ Dockerfile.frontend
├─ /db
│  ├─ migrations/
│  └─ seeds/
├─ /docs
└─ /scripts`;

  const comandosInstalacion = [
    { paso: 1, comando: 'git clone [URL_REPO]', descripcion: 'Clonar repositorio' },
    { paso: 2, comando: 'cd crm-typica', descripcion: 'Navegar al directorio' },
    { paso: 3, comando: 'cp .env.example .env', descripcion: 'Copiar variables de entorno' },
    { paso: 4, comando: 'docker-compose up --build -d', descripcion: 'Levantar contenedores' },
    { paso: 5, comando: 'npx prisma migrate deploy', descripcion: 'Ejecutar migraciones' },
    { paso: 6, comando: 'npx prisma db seed', descripcion: 'Poblar datos iniciales' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', py: 4 }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          {/* Header */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              p: 4,
              textAlign: 'center',
            }}
          >
            <MenuBook sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Manual de Sistema
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 400, opacity: 0.9 }}>
              CRM Typica – Café & Tostaduría Especializada
            </Typography>
            <Chip
              label="Versión 1.0 - Documentación Técnica"
              sx={{ mt: 2, bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 600 }}
            />
          </Box>

          <Box sx={{ p: 4 }}>
            {/* 1. Introducción */}
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#2196F3', color: 'white', '&:hover': { bgcolor: '#1976D2' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MenuBook />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1. Introducción
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #2196F3' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                          1.1 Objetivo del Manual
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'justify' }}>
                          Este manual tiene por objetivo ofrecer una <strong>guía práctica y técnica</strong> para 
                          administradores, desarrolladores y personal de soporte de CRM Typica: instalación, configuración, 
                          operación, mantenimiento y resolución de incidentes.
                        </Typography>
                        <Alert severity="info" sx={{ mt: 2 }}>
                          <Typography variant="body2">
                            Contiene <strong>instrucciones paso a paso</strong>, criterios técnicos y procedimientos que 
                            permiten operar el CRM en entornos de desarrollo y producción.
                          </Typography>
                        </Alert>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #4CAF50' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                          1.2 Alcance del Sistema
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
                          Cubre los <strong>módulos centrales del CRM</strong> y las decisiones tecnológicas recomendadas:
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Gestión de clientes y fidelización" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Comunicación multicanal" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Integración POS y análisis" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Procesos de despliegue y soporte" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 2. Arquitectura del Sistema */}
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#4CAF50', color: 'white', '&:hover': { bgcolor: '#388E3C' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Architecture />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2. Arquitectura del Sistema
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                {/* 2.1 Tecnologías */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                  2.1 Tecnologías Utilizadas
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {tecnologias.map((tech, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Card sx={{ borderTop: `4px solid ${tech.color}`, height: '100%' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Box sx={{ color: tech.color }}>{tech.icon}</Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                              {tech.nombre}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                            {tech.valor}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Alert severity="success" sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    🎯 Motivo de Elección Técnica
                  </Typography>
                  <Typography variant="body2">
                    Combinar <strong>consistencia transaccional (Postgres)</strong> con <strong>flexibilidad para 
                    eventos/mensajería (MongoDB)</strong> y usar stacks (Next + Express) que facilitan integración y 
                    desarrollo ágil.
                  </Typography>
                </Alert>

                {/* 2.2 Estructura de Carpetas */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                  2.2 Estructura de Carpetas y Archivos
                </Typography>
                <Paper sx={{ bgcolor: '#263238', color: '#00E676', p: 2, mb: 3, fontFamily: 'monospace', overflow: 'auto' }}>
                  <pre style={{ margin: 0, fontSize: '0.85rem' }}>{estructuraCarpetas}</pre>
                </Paper>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#fff3e0' }}>
                      <CardContent>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#FF9800' }}>
                          📁 Archivos Críticos
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon><Folder sx={{ fontSize: 18 }} /></ListItemIcon>
                            <ListItemText 
                              primary=".env" 
                              secondary="Variables sensibles (no versionar)"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><Folder sx={{ fontSize: 18 }} /></ListItemIcon>
                            <ListItemText 
                              primary="docker-compose.yml" 
                              secondary="Despliegue local y staging"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><Folder sx={{ fontSize: 18 }} /></ListItemIcon>
                            <ListItemText 
                              primary="/db/migrations" 
                              secondary="Migraciones Prisma/SQL"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#e3f2fd' }}>
                      <CardContent>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#2196F3' }}>
                          🗄️ Base de Datos - Entidades Principales
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText primary="• organization - Datos de Typica/sucursales" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• user_account - Credenciales y metadata" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• client_profile - Datos del cliente" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• purchase / pos_ticket - Registro de ventas" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• rewards - Saldo y reglas de fidelización" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• campaign - Gestión de campañas" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• message - Bandeja multicanal" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• reservation / event - Reservas" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 3. Instalación y Configuración */}
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#FF9800', color: 'white', '&:hover': { bgcolor: '#F57C00' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CloudDownload />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    3. Instalación y Configuración
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                {/* 3.1 Requisitos */}
                <Card sx={{ mb: 3, bgcolor: '#f3e5f5', border: '2px solid #9C27B0' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#9C27B0' }}>
                      3.1 Requisitos del Sistema
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            🖥️ Hardware (Desarrollo)
                          </Typography>
                          <Typography variant="body2">• 2 vCPU / 4 GB RAM mínimo</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            🚀 Hardware (Producción)
                          </Typography>
                          <Typography variant="body2">• 4+ vCPU / 8+ GB RAM (ajustar según carga)</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                            💿 Software Requerido
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                            <Chip label="Node.js v20+" color="success" size="small" />
                            <Chip label="Docker" color="primary" size="small" />
                            <Chip label="PostgreSQL v16+" color="info" size="small" />
                            <Chip label="MongoDB v7+" color="secondary" size="small" />
                            <Chip label="Ubuntu 20.04+" color="default" size="small" />
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                {/* 3.2 Proceso de Instalación */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                  3.2 Proceso de Instalación (Desarrollo con Docker)
                </Typography>
                <TableContainer component={Paper} sx={{ mb: 3 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#FF9800' }}>
                        <TableCell sx={{ color: 'white', fontWeight: 600 }}>Paso</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: 600 }}>Comando</TableCell>
                        <TableCell sx={{ color: 'white', fontWeight: 600 }}>Descripción</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {comandosInstalacion.map((cmd) => (
                        <TableRow key={cmd.paso}>
                          <TableCell>
                            <Chip label={cmd.paso} color="warning" size="small" />
                          </TableCell>
                          <TableCell>
                            <Box sx={{ bgcolor: '#263238', color: '#00E676', p: 1, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}>
                              {cmd.comando}
                            </Box>
                          </TableCell>
                          <TableCell>{cmd.descripcion}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Alert severity="success">
                  <Typography variant="body2">
                    <strong>URLs de Acceso:</strong><br />
                    • Frontend: <code>http://localhost:3000</code><br />
                    • API: <code>http://localhost:4000</code>
                  </Typography>
                </Alert>

                {/* 3.3 Configuración Inicial */}
                <Card sx={{ mt: 3, bgcolor: '#e8f5e9' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                      3.3 Configuración Inicial
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon><CheckCircle sx={{ color: '#4CAF50' }} /></ListItemIcon>
                        <ListItemText 
                          primary="Crear cuenta de administrador"
                          secondary="Mediante seed/migration o CLI admin-create"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckCircle sx={{ color: '#4CAF50' }} /></ListItemIcon>
                        <ListItemText 
                          primary="Configurar proveedores externos"
                          secondary="WhatsApp Business, SendGrid/Mailgun, proveedor SMS"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><CheckCircle sx={{ color: '#4CAF50' }} /></ListItemIcon>
                        <ListItemText 
                          primary="Configurar almacenamiento"
                          secondary="S3 / MinIO para materiales y multimedia"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>

            {/* 4. Funcionalidades */}
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#9C27B0', color: 'white', '&:hover': { bgcolor: '#7B1FA2' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Dashboard />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    4. Funcionalidades del Sistema
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #2196F3', height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#2196F3' }}>
                          4.1 Gestión de Clientes y Contactos
                        </Typography>
                        <Typography variant="body2">
                          • Registro, edición, eliminación y búsqueda<br />
                          • Historial de interacciones y compras asociado
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #4CAF50', height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#4CAF50' }}>
                          4.2 Fidelización y Recompensas
                        </Typography>
                        <Typography variant="body2">
                          • Acumulación automática de puntos<br />
                          • Niveles (Bronce/Plata/Oro) y canje de bonos
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #FF9800', height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#FF9800' }}>
                          4.3 Comunicación Multicanal
                        </Typography>
                        <Typography variant="body2">
                          • Bandeja unificada (WhatsApp, Instagram, Email, SMS)<br />
                          • Chatbots y transferencia a agente humano
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #F44336', height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#F44336' }}>
                          4.4 Integración con POS
                        </Typography>
                        <Typography variant="body2">
                          • Sincronización en tiempo real<br />
                          • Actualización automática de puntos
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #00BCD4', height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#00BCD4' }}>
                          4.5 Dashboard y Reportes
                        </Typography>
                        <Typography variant="body2">
                          • KPIs en tiempo real<br />
                          • Segmentación avanzada y exportación CSV/XLSX
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #673AB7', height: '100%' }}>
                      <CardContent>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#673AB7' }}>
                          4.6 Reservas, Eventos y Feedback
                        </Typography>
                        <Typography variant="body2">
                          • Gestión de reservas y catas<br />
                          • Formularios de satisfacción y NPS
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 5. Roles y Permisos */}
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#F44336', color: 'white', '&:hover': { bgcolor: '#D32F2F' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <People />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    5. Roles y Permisos
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  {roles.map((rol, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ borderTop: `4px solid ${rol.color}`, height: '100%' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Chip 
                              label={rol.codigo} 
                              sx={{ bgcolor: rol.color, color: 'white', fontWeight: 600 }} 
                              size="small" 
                            />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {rol.nombre}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {rol.descripcion}
                          </Typography>
                          <Divider sx={{ my: 1 }} />
                          <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                            Permisos:
                          </Typography>
                          <List dense>
                            {rol.permisos.map((permiso, idx) => (
                              <ListItem key={idx} sx={{ py: 0 }}>
                                <ListItemIcon sx={{ minWidth: 24 }}>
                                  <CheckCircle sx={{ fontSize: 16, color: rol.color }} />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={permiso} 
                                  primaryTypographyProps={{ variant: 'body2' }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Implementación:</strong> Matriz de permisos con tablas <code>roles</code>, 
                    <code>permissions</code>, <code>role_permissions</code> y <code>user_roles</code>. 
                    Mapear permisos por recurso (ver/crear/editar/eliminar).
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 6. Seguridad */}
            <Accordion
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#F44336', color: 'white', '&:hover': { bgcolor: '#D32F2F' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Security />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    6. Seguridad del Sistema
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#ffebee', height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#F44336' }}>
                          6.1 Protección contra Ataques
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon><VerifiedUser sx={{ fontSize: 18, color: '#F44336' }} /></ListItemIcon>
                            <ListItemText primary="HTTPS/TLS obligatorio" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><VerifiedUser sx={{ fontSize: 18, color: '#F44336' }} /></ListItemIcon>
                            <ListItemText primary="Rate limiting endpoints" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><VerifiedUser sx={{ fontSize: 18, color: '#F44336' }} /></ListItemIcon>
                            <ListItemText primary="Protección CSRF y XSS" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><VerifiedUser sx={{ fontSize: 18, color: '#F44336' }} /></ListItemIcon>
                            <ListItemText primary="WAF / Firewall rules" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#fff3e0', height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                          6.2 Autenticación
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} /></ListItemIcon>
                            <ListItemText primary="Contraseñas 12+ caracteres" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} /></ListItemIcon>
                            <ListItemText primary="Hashing: bcrypt o Argon2" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} /></ListItemIcon>
                            <ListItemText primary="Verificación por email" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><CheckCircle sx={{ fontSize: 18, color: '#FF9800' }} /></ListItemIcon>
                            <ListItemText primary="MFA para administradores" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e8f5e9', height: '100%' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                          6.3 Backups
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon><Backup sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Backups automáticos diarios" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><Backup sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Retención mínima 30 días" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><Backup sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Pruebas de restauración mensuales" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon><Backup sx={{ fontSize: 18, color: '#4CAF50' }} /></ListItemIcon>
                            <ListItemText primary="Documentación de procedimientos" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 7. Mantenimiento */}
            <Accordion
              expanded={expanded === 'panel7'}
              onChange={handleChange('panel7')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#00BCD4', color: 'white', '&:hover': { bgcolor: '#0097A7' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Build />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    7. Mantenimiento y Actualización
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <Card sx={{ borderLeft: '4px solid #2196F3' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                        7.1 Actualización de Contenido
                      </Typography>
                      <Alert severity="info">
                        <Typography variant="body2">
                          <strong>Flujo:</strong> Crear en staging → QA → Aprobar → Deploy a production. 
                          Mantener control de cambios documentado.
                        </Typography>
                      </Alert>
                    </CardContent>
                  </Card>

                  <Card sx={{ borderLeft: '4px solid #4CAF50' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                        7.2 Tareas Periódicas de Mantenimiento
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon><Update sx={{ color: '#4CAF50' }} /></ListItemIcon>
                          <ListItemText 
                            primary="Actualización de dependencias y parches de seguridad"
                            secondary="Revisión semanal de CVEs y actualizaciones"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Settings sx={{ color: '#4CAF50' }} /></ListItemIcon>
                          <ListItemText 
                            primary="Limpieza de logs y mantenimiento de disco"
                            secondary="Automatizar rotación de logs cada 7 días"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><Backup sx={{ color: '#4CAF50' }} /></ListItemIcon>
                          <ListItemText 
                            primary="Verificación y pruebas de backups"
                            secondary="Restauración de prueba mensual"
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>

                  <Card sx={{ borderLeft: '4px solid #FF9800' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                        7.3 Resolución de Problemas Comunes
                      </Typography>
                      <TableContainer component={Paper} sx={{ bgcolor: '#fff3e0' }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ fontWeight: 600 }}>Problema</TableCell>
                              <TableCell sx={{ fontWeight: 600 }}>Solución</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell><BugReport sx={{ fontSize: 18, mr: 1 }} />App no inicia</TableCell>
                              <TableCell>Revisar logs de contenedor (<code>docker logs</code>), env vars y conexión a DB</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell><Warning sx={{ fontSize: 18, mr: 1 }} />Conexión DB fallida</TableCell>
                              <TableCell>Comprobar credenciales, servicio y puertos</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell><BugReport sx={{ fontSize: 18, mr: 1 }} />Incidentes de mensajería</TableCell>
                              <TableCell>Revisar integración con proveedor y límites/SLA</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Stack>
              </AccordionDetails>
            </Accordion>

            {/* 8. Soporte Técnico */}
            <Accordion
              expanded={expanded === 'panel8'}
              onChange={handleChange('panel8')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#673AB7', color: 'white', '&:hover': { bgcolor: '#5E35B1' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Support />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    8. Soporte Técnico
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#f3e5f5', height: '100%' }}>
                      <CardContent>
                        <ContactSupport sx={{ fontSize: 40, color: '#673AB7', mb: 2 }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#673AB7' }}>
                          8.2 Contacto de Soporte
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText 
                              primary="📧 Email" 
                              secondary="soporte@typica.example"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="💬 Canal interno" 
                              secondary="Slack/Teams: #soporte-crm"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="📞 Emergencias" 
                              secondary="Número definido por Typica"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#e8f5e9', height: '100%' }}>
                      <CardContent>
                        <Schedule sx={{ fontSize: 40, color: '#4CAF50', mb: 2 }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                          8.3 Horarios de Atención
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText 
                              primary="Soporte Estándar" 
                              secondary="Lunes–Viernes 09:00–18:00"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Soporte Crítico" 
                              secondary="24/7 para incidencias de producción"
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                          </ListItem>
                        </List>
                        <Alert severity="warning" sx={{ mt: 2 }}>
                          <Typography variant="body2">
                            Según contrato SLA establecido
                          </Typography>
                        </Alert>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: '#fff3e0', height: '100%' }}>
                      <CardContent>
                        <Description sx={{ fontSize: 40, color: '#FF9800', mb: 2 }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                          8.1 Reportar Problemas
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText 
                              primary="1. Verificar estado del sistema"
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="2. Recolectar evidencia (logs, capturas)"
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="3. Abrir ticket con prioridad"
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="4. Asignar componente y responsable"
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                {/* Plantilla de Ticket */}
                <Card sx={{ mt: 3, bgcolor: '#fce4ec' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#E91E63' }}>
                      📋 Plantilla de Ticket de Incidente
                    </Typography>
                    <Paper sx={{ bgcolor: '#fff', p: 2 }}>
                      <List dense>
                        <ListItem>
                          <ListItemText primary="• Título: [Breve resumen]" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="• Descripción: [Detalles + pasos para reproducir]" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="• Prioridad: [Alta/Media/Baja]" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="• Impacto: [Usuarios / Servicios afectados]" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="• Logs adjuntos: [ruta / extracto]" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="• Contacto: [nombre y teléfono]" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="• Acciones tomadas:" />
                        </ListItem>
                      </List>
                    </Paper>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>

            {/* 9. Anexos */}
            <Accordion
              expanded={expanded === 'panel9'}
              onChange={handleChange('panel9')}
              sx={{ mb: 2, boxShadow: 2 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: '#607D8B', color: 'white', '&:hover': { bgcolor: '#546E7A' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Folder />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    9. Anexos
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #2196F3' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                          A. Diagramas y Esquemas
                        </Typography>
                        <Typography variant="body2" paragraph>
                          Los diagramas C4, diagramas de flujo y esquema de BD se generan durante la fase de diseño.
                        </Typography>
                        <Alert severity="info">
                          <Typography variant="body2">
                            📁 Ubicación: <code>/docs/diagrams</code>
                          </Typography>
                        </Alert>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '4px solid #4CAF50' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                          B. Plantillas Útiles
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                          B.1 Plantilla rápida para deploy
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText primary="• Crear branch hotfix/config-YYYYMMDD" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Probar en staging" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Ejecutar migraciones con rollback plan" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="• Desplegar en mantenimiento programado" />
                          </ListItem>
                        </List>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, mt: 2 }}>
                          B.2 Ver Plantilla de ticket (Sección 8.1)
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer */}
            <Alert severity="success" icon={<CheckCircle />}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                ✅ Manual de Sistema Completo
              </Typography>
              <Typography variant="body2">
                Este manual cubre todos los aspectos técnicos necesarios para la instalación, configuración, 
                operación y mantenimiento del CRM Typica. Para soporte adicional, contactar al equipo de 
                desarrollo de ChairuX.
              </Typography>
            </Alert>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};