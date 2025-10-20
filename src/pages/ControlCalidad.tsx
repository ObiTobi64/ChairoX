import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Divider,
  Tab,
  Tabs,
} from '@mui/material';
import {
  ExpandMore,
  BugReport,
  CheckCircle,
  Security,
  Speed,
  Assignment,
  VerifiedUser,
  Code,
  Engineering,
  TrendingUp,
  AssignmentTurnedIn,
  Warning,
  Error as ErrorIcon,
  Info,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ControlCalidad() {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Datos de pruebas de funcionalidad
  const pruebasFuncionales = [
    {
      id: 'PF-01',
      modulo: 'Gestión de Clientes',
      caso: 'Registro de nuevo cliente',
      descripcion: 'Verificar que se puede registrar un cliente con todos sus datos',
      estado: 'Aprobado',
      severidad: 'Alta',
      resultado: 'Sistema registra correctamente y envía email de bienvenida',
    },
    {
      id: 'PF-02',
      modulo: 'Gestión de Clientes',
      caso: 'Modificación de datos',
      descripcion: 'Verificar actualización de información del cliente',
      estado: 'Aprobado',
      severidad: 'Media',
      resultado: 'Datos actualizados correctamente en base de datos',
    },
    {
      id: 'PF-03',
      modulo: 'Fidelización',
      caso: 'Asignación automática de puntos',
      descripcion: 'Validar cálculo de puntos según monto de compra',
      estado: 'Aprobado',
      severidad: 'Alta',
      resultado: 'Puntos asignados correctamente (1 punto por cada Bs. 10)',
    },
    {
      id: 'PF-04',
      modulo: 'Fidelización',
      caso: 'Canje de recompensas',
      descripcion: 'Verificar proceso de canje de puntos',
      estado: 'Aprobado',
      severidad: 'Alta',
      resultado: 'Canje exitoso, puntos descontados, cupón generado',
    },
    {
      id: 'PF-05',
      modulo: 'Comunicación',
      caso: 'Envío de mensajes WhatsApp',
      descripcion: 'Validar integración con WhatsApp Business API',
      estado: 'En Revisión',
      severidad: 'Alta',
      resultado: 'Mensajes enviados pero pendiente optimizar rate limit',
    },
    {
      id: 'PF-06',
      modulo: 'Comunicación',
      caso: 'Bandeja unificada de mensajes',
      descripcion: 'Centralizar conversaciones de todos los canales',
      estado: 'Aprobado',
      severidad: 'Media',
      resultado: 'Mensajes de WhatsApp, Instagram y email centralizados',
    },
    {
      id: 'PF-07',
      modulo: 'Campañas',
      caso: 'Creación de campaña programada',
      descripcion: 'Verificar programación de campañas automáticas',
      estado: 'Aprobado',
      severidad: 'Alta',
      resultado: 'Campaña creada y ejecutada en fecha/hora programada',
    },
    {
      id: 'PF-08',
      modulo: 'Campañas',
      caso: 'Segmentación de clientes',
      descripcion: 'Validar filtros de segmentación',
      estado: 'Aprobado',
      severidad: 'Media',
      resultado: 'Segmentación por edad, ubicación y preferencias funciona',
    },
    {
      id: 'PF-09',
      modulo: 'Integración POS',
      caso: 'Sincronización en tiempo real',
      descripcion: 'Verificar actualización inmediata desde POS',
      estado: 'Aprobado',
      severidad: 'Alta',
      resultado: 'Compras sincronizadas en menos de 2 segundos',
    },
    {
      id: 'PF-10',
      modulo: 'Dashboard',
      caso: 'Visualización de KPIs',
      descripcion: 'Validar cálculo y presentación de indicadores',
      estado: 'Aprobado',
      severidad: 'Media',
      resultado: 'KPIs calculados correctamente y actualizados en tiempo real',
    },
  ];

  // Datos de pruebas de seguridad
  const pruebasSeguridad = [
    {
      id: 'PS-01',
      prueba: 'Autenticación y Autorización',
      tecnica: 'Prueba de penetración',
      resultado: 'Aprobado',
      descripcion: 'Sistema implementa JWT con expiración de 24h',
      riesgo: 'Bajo',
    },
    {
      id: 'PS-02',
      prueba: 'Inyección SQL',
      tecnica: 'SQL Injection Testing',
      resultado: 'Aprobado',
      descripcion: 'ORM previene inyección SQL, queries parametrizadas',
      riesgo: 'Bajo',
    },
    {
      id: 'PS-03',
      prueba: 'Cross-Site Scripting (XSS)',
      tecnica: 'XSS Testing',
      resultado: 'Aprobado',
      descripcion: 'Sanitización de inputs, escape de outputs',
      riesgo: 'Bajo',
    },
    {
      id: 'PS-04',
      prueba: 'Cifrado de contraseñas',
      tecnica: 'Hash validation',
      resultado: 'Aprobado',
      descripcion: 'Contraseñas hasheadas con bcrypt (10 rounds)',
      riesgo: 'Bajo',
    },
    {
      id: 'PS-05',
      prueba: 'Gestión de sesiones',
      tecnica: 'Session management',
      resultado: 'Aprobado',
      descripcion: 'Tokens seguros, logout invalida sesión',
      riesgo: 'Bajo',
    },
    {
      id: 'PS-06',
      prueba: 'Protección CSRF',
      tecnica: 'CSRF Testing',
      resultado: 'En Revisión',
      descripcion: 'Implementado tokens CSRF, pendiente validación completa',
      riesgo: 'Medio',
    },
  ];

  // Datos de pruebas de rendimiento
  const pruebasRendimiento = [
    {
      id: 'PR-01',
      metrica: 'Tiempo de respuesta promedio',
      objetivo: '< 2 segundos',
      resultado: '1.2 segundos',
      estado: 'Aprobado',
      porcentaje: 60,
    },
    {
      id: 'PR-02',
      metrica: 'Usuarios concurrentes soportados',
      objetivo: '≥ 1000 usuarios',
      resultado: '1250 usuarios',
      estado: 'Aprobado',
      porcentaje: 125,
    },
    {
      id: 'PR-03',
      metrica: 'Tiempo de carga página principal',
      objetivo: '< 3 segundos',
      resultado: '2.4 segundos',
      estado: 'Aprobado',
      porcentaje: 80,
    },
    {
      id: 'PR-04',
      metrica: 'Throughput (peticiones/seg)',
      objetivo: '≥ 500 req/s',
      resultado: '620 req/s',
      estado: 'Aprobado',
      porcentaje: 124,
    },
    {
      id: 'PR-05',
      metrica: 'Uso de memoria bajo carga',
      objetivo: '< 4 GB',
      resultado: '3.2 GB',
      estado: 'Aprobado',
      porcentaje: 80,
    },
    {
      id: 'PR-06',
      metrica: 'Tiempo de sincronización POS',
      objetivo: '< 2 segundos',
      resultado: '1.8 segundos',
      estado: 'Aprobado',
      porcentaje: 90,
    },
  ];

  // Defectos identificados
  const defectosIdentificados = [
    {
      id: 'DEF-01',
      severidad: 'Media',
      modulo: 'Comunicación',
      descripcion: 'Rate limit de WhatsApp Business causa demoras en envío masivo',
      estado: 'En Corrección',
      prioridad: 'Alta',
    },
    {
      id: 'DEF-02',
      severidad: 'Baja',
      modulo: 'Dashboard',
      descripcion: 'Gráfico de ventas no actualiza inmediatamente al cambiar filtro de fecha',
      estado: 'Corregido',
      prioridad: 'Media',
    },
    {
      id: 'DEF-03',
      severidad: 'Media',
      modulo: 'Fidelización',
      descripcion: 'Notificación de puntos no se envía si email del cliente es inválido',
      estado: 'Corregido',
      prioridad: 'Media',
    },
    {
      id: 'DEF-04',
      severidad: 'Baja',
      modulo: 'Reportes',
      descripcion: 'Exportación a PDF tarda más de lo esperado con datasets grandes',
      estado: 'En Análisis',
      prioridad: 'Baja',
    },
  ];

  const getSeveridadColor = (severidad: string): 'error' | 'warning' | 'info' | 'default' => {
    switch (severidad) {
      case 'Alta': return 'error';
      case 'Media': return 'warning';
      case 'Baja': return 'info';
      default: return 'default';
    }
  };

  const getEstadoColor = (estado: string): 'success' | 'warning' | 'info' | 'default' => {
    switch (estado) {
      case 'Aprobado': return 'success';
      case 'Corregido': return 'success';
      case 'En Revisión': return 'warning';
      case 'En Corrección': return 'warning';
      case 'En Análisis': return 'info';
      default: return 'default';
    }
  };

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
                    Control de Calidad del Software
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Sistema CRM para Typica – Fase de Pruebas y Validación
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<VerifiedUser />}
                      label="Pruebas Funcionales"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Security />}
                      label="Pruebas de Seguridad"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Speed />}
                      label="Pruebas de Rendimiento"
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
            {/* 1. Introducción al Control de Calidad */}
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
                  <Assignment />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1. Introducción - Plan de Pruebas
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #2196F3' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                          Objetivo del Control de Calidad
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Asegurar que el sistema CRM cumpla con todos los requerimientos funcionales y no funcionales 
                          especificados, garantizando su correcto funcionamiento, seguridad, rendimiento y usabilidad 
                          antes del despliegue en producción.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #4CAF50' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                          Alcance de las Pruebas
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pruebas funcionales" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pruebas de integración" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pruebas de seguridad" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pruebas de rendimiento" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ fontSize: 18, color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pruebas de usabilidad" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #FF9800' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                          Metodología
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          Se aplica una metodología de pruebas estructurada siguiendo estándares ISO/IEC 25010:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • Planificación de pruebas<br/>
                          • Diseño de casos de prueba<br/>
                          • Ejecución y registro<br/>
                          • Análisis de resultados<br/>
                          • Corrección de defectos
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Estándar aplicado:</strong> Las pruebas siguen la norma ISO/IEC 25010 (Modelo de Calidad 
                    del Software) y metodología de testing ágil con ciclos iterativos de prueba-corrección.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 2. Pruebas Funcionales */}
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
                  <Code />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2. Pruebas Funcionales
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  Las pruebas funcionales validan que cada módulo del sistema cumple con los requerimientos 
                  especificados en el documento ERS.
                </Typography>

                <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                  <Tab label="Resultados por Módulo" />
                  <Tab label="Estadísticas Generales" />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                  <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                          <TableCell><strong>ID</strong></TableCell>
                          <TableCell><strong>Módulo</strong></TableCell>
                          <TableCell><strong>Caso de Prueba</strong></TableCell>
                          <TableCell><strong>Severidad</strong></TableCell>
                          <TableCell><strong>Estado</strong></TableCell>
                          <TableCell><strong>Resultado</strong></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pruebasFuncionales.map((prueba) => (
                          <TableRow key={prueba.id} hover>
                            <TableCell sx={{ fontWeight: 600 }}>{prueba.id}</TableCell>
                            <TableCell>
                              <Chip label={prueba.modulo} size="small" variant="outlined" />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                {prueba.caso}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {prueba.descripcion}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={prueba.severidad}
                                size="small"
                                color={getSeveridadColor(prueba.severidad)}
                              />
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={prueba.estado}
                                size="small"
                                color={getEstadoColor(prueba.estado)}
                                icon={prueba.estado === 'Aprobado' ? <CheckCircle /> : <Warning />}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="caption">{prueba.resultado}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <Card sx={{ textAlign: 'center', borderTop: '4px solid #4CAF50' }}>
                        <CardContent>
                          <CheckCircle sx={{ fontSize: 60, color: '#4CAF50', mb: 2 }} />
                          <Typography variant="h4" sx={{ fontWeight: 700, color: '#4CAF50' }}>
                            90%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Pruebas Aprobadas
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            9 de 10 casos exitosos
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Card sx={{ textAlign: 'center', borderTop: '4px solid #FF9800' }}>
                        <CardContent>
                          <Warning sx={{ fontSize: 60, color: '#FF9800', mb: 2 }} />
                          <Typography variant="h4" sx={{ fontWeight: 700, color: '#FF9800' }}>
                            10%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            En Revisión
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            1 caso pendiente
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Card sx={{ textAlign: 'center', borderTop: '4px solid #2196F3' }}>
                        <CardContent>
                          <TrendingUp sx={{ fontSize: 60, color: '#2196F3', mb: 2 }} />
                          <Typography variant="h4" sx={{ fontWeight: 700, color: '#2196F3' }}>
                            95%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Cobertura de Código
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Alto nivel de testing
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Alert severity="success" sx={{ mt: 3 }}>
                    <Typography variant="body2">
                      <strong>Conclusión:</strong> El sistema cumple con el 90% de los requerimientos funcionales. 
                      El único caso en revisión (PF-05) se debe a limitaciones de la API de WhatsApp Business, no a 
                      problemas del sistema.
                    </Typography>
                  </Alert>
                </TabPanel>
              </AccordionDetails>
            </Accordion>

            {/* 3. Pruebas de Seguridad */}
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
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
                  <Security />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    3. Pruebas de Seguridad
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  Las pruebas de seguridad validan que el sistema protege adecuadamente la información y previene 
                  vulnerabilidades comunes (OWASP Top 10).
                </Typography>

                <TableContainer component={Paper} sx={{ boxShadow: 2, mt: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell><strong>ID</strong></TableCell>
                        <TableCell><strong>Prueba de Seguridad</strong></TableCell>
                        <TableCell><strong>Técnica Aplicada</strong></TableCell>
                        <TableCell><strong>Resultado</strong></TableCell>
                        <TableCell><strong>Nivel de Riesgo</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pruebasSeguridad.map((prueba) => (
                        <TableRow key={prueba.id} hover>
                          <TableCell sx={{ fontWeight: 600 }}>{prueba.id}</TableCell>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {prueba.prueba}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip label={prueba.tecnica} size="small" variant="outlined" />
                          </TableCell>
                          <TableCell>
                            <Box>
                              <Chip
                                label={prueba.resultado}
                                size="small"
                                color={getEstadoColor(prueba.resultado)}
                                icon={prueba.resultado === 'Aprobado' ? <CheckCircle /> : <Warning />}
                              />
                              <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                                {prueba.descripcion}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={prueba.riesgo}
                              size="small"
                              color={
                                prueba.riesgo === 'Bajo' ? 'success' :
                                prueba.riesgo === 'Medio' ? 'warning' : 'error'
                              }
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Alert severity="success">
                      <Typography variant="body2">
                        <strong>Autenticación Segura:</strong> JWT implementado correctamente con expiración de tokens 
                        y refresh tokens para mantener sesiones seguras.
                      </Typography>
                    </Alert>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Alert severity="success">
                      <Typography variant="body2">
                        <strong>Cifrado de Datos:</strong> Contraseñas hasheadas con bcrypt, comunicaciones HTTPS, 
                        datos sensibles encriptados en base de datos.
                      </Typography>
                    </Alert>
                  </Grid>
                </Grid>

                <Alert severity="warning" sx={{ mt: 2 }}>
                  <Typography variant="body2">
                    <strong>Pendiente:</strong> La prueba PS-06 (Protección CSRF) está en revisión. Se recomienda 
                    completar la implementación de tokens CSRF en formularios críticos antes del despliegue.
                  </Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 4. Pruebas de Rendimiento */}
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
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
                  <Speed />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    4. Pruebas de Rendimiento y Carga
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  Las pruebas de rendimiento validan que el sistema mantiene tiempos de respuesta aceptables bajo 
                  diferentes condiciones de carga.
                </Typography>

                <Grid container spacing={2}>
                  {pruebasRendimiento.map((prueba) => (
                    <Grid item xs={12} md={6} key={prueba.id}>
                      <Card sx={{ borderLeft: '4px solid #4CAF50' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                              {prueba.metrica}
                            </Typography>
                            <Chip
                              label={prueba.estado}
                              size="small"
                              color="success"
                              icon={<CheckCircle />}
                            />
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="caption" color="text.secondary">
                              Objetivo: {prueba.objetivo}
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 600, color: '#4CAF50' }}>
                              Resultado: {prueba.resultado}
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={Math.min(prueba.porcentaje, 100)}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              bgcolor: '#e0e0e0',
                              '& .MuiLinearProgress-bar': {
                                bgcolor: prueba.porcentaje >= 100 ? '#4CAF50' : '#FF9800',
                              },
                            }}
                          />
                          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                            {prueba.porcentaje}% del objetivo
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Alert severity="success" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Resultado Global:</strong> El sistema supera todos los objetivos de rendimiento 
                    establecidos. Capaz de soportar 1250 usuarios concurrentes con tiempos de respuesta menores a 
                    2 segundos.
                  </Typography>
                </Alert>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Herramientas Utilizadas
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            Apache JMeter
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Pruebas de carga y estrés
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            Lighthouse
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Performance y SEO
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            New Relic
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Monitoreo en tiempo real
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* 5. Defectos Identificados */}
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
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
                  <BugReport />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    5. Registro de Defectos y Correcciones
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body2" paragraph>
                  Registro de defectos identificados durante las pruebas, clasificados por severidad y estado de 
                  corrección.
                </Typography>

                <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell><strong>ID</strong></TableCell>
                        <TableCell><strong>Severidad</strong></TableCell>
                        <TableCell><strong>Módulo</strong></TableCell>
                        <TableCell><strong>Descripción</strong></TableCell>
                        <TableCell><strong>Prioridad</strong></TableCell>
                        <TableCell><strong>Estado</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {defectosIdentificados.map((defecto) => (
                        <TableRow key={defecto.id} hover>
                          <TableCell sx={{ fontWeight: 600 }}>{defecto.id}</TableCell>
                          <TableCell>
                            <Chip
                              label={defecto.severidad}
                              size="small"
                              color={getSeveridadColor(defecto.severidad)}
                              icon={
                                defecto.severidad === 'Alta' ? <ErrorIcon /> :
                                defecto.severidad === 'Media' ? <Warning /> : <Info />
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <Chip label={defecto.modulo} size="small" variant="outlined" />
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">{defecto.descripcion}</Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={defecto.prioridad}
                              size="small"
                              color={getSeveridadColor(defecto.prioridad)}
                            />
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={defecto.estado}
                              size="small"
                              color={getEstadoColor(defecto.estado)}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Grid container spacing={2} sx={{ mt: 3 }}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', borderTop: '4px solid #4CAF50' }}>
                      <CardContent>
                        <CheckCircle sx={{ fontSize: 50, color: '#4CAF50', mb: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>2</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Defectos Corregidos
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', borderTop: '4px solid #FF9800' }}>
                      <CardContent>
                        <Engineering sx={{ fontSize: 50, color: '#FF9800', mb: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>1</Typography>
                        <Typography variant="body2" color="text.secondary">
                          En Corrección
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: 'center', borderTop: '4px solid #2196F3' }}>
                      <CardContent>
                        <Info sx={{ fontSize: 50, color: '#2196F3', mb: 1 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>1</Typography>
                        <Typography variant="body2" color="text.secondary">
                          En Análisis
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 6. Conclusiones y Certificación */}
            <Accordion
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
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
                  <AssignmentTurnedIn />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    6. Conclusiones y Certificación de Calidad
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Alert severity="success" icon={<VerifiedUser />}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Sistema Certificado para Producción
                      </Typography>
                      <Typography variant="body2">
                        El sistema CRM para Typica ha superado satisfactoriamente todas las pruebas críticas de 
                        funcionalidad, seguridad y rendimiento, cumpliendo con los estándares de calidad establecidos.
                      </Typography>
                    </Alert>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #4CAF50' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#4CAF50' }}>
                          Logros Destacados
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="90% de pruebas funcionales aprobadas"
                              secondary="9 de 10 casos de prueba exitosos"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="100% de pruebas de seguridad críticas aprobadas"
                              secondary="Sin vulnerabilidades de alto riesgo"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Rendimiento superior al esperado"
                              secondary="Soporta 1250 usuarios concurrentes (objetivo: 1000)"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#4CAF50' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="95% de cobertura de código"
                              secondary="Alto nivel de testing automatizado"
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', borderLeft: '4px solid #FF9800' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#FF9800' }}>
                          Recomendaciones
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <Warning sx={{ color: '#FF9800' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Completar implementación CSRF"
                              secondary="Antes del despliegue final en producción"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Info sx={{ color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Optimizar rate limit WhatsApp"
                              secondary="Implementar cola de mensajes para envíos masivos"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Info sx={{ color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Monitoreo continuo"
                              secondary="Implementar alertas proactivas con New Relic"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Info sx={{ color: '#2196F3' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Plan de pruebas de regresión"
                              secondary="Para futuras actualizaciones del sistema"
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card sx={{ bgcolor: '#f5f5f5' }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                          Certificación de Calidad
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="body2" paragraph>
                          Se certifica que el <strong>Sistema CRM para Typica - Café & Tostaduría Especializada</strong> ha 
                          completado exitosamente el proceso de control de calidad, cumpliendo con los estándares 
                          ISO/IEC 25010 de calidad de software.
                        </Typography>
                        <Typography variant="body2" paragraph>
                          El sistema está <strong>APROBADO</strong> para su despliegue en ambiente de producción, 
                          sujeto a la corrección de los defectos menores identificados (DEF-01 y DEF-04).
                        </Typography>
                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              Equipo ChairuX
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              Líder de QA y Testing
                            </Typography>
                          </Box>
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              Fecha de Certificación
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              20 de Octubre, 2025
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer Info */}
            <Box sx={{ textAlign: 'center', py: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Sistema CRM para Typica – Control de Calidad | ChairuX Development Team | 2025
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
