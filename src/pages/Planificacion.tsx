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
} from '@mui/material';
import {
  ExpandMore,
  Business,
  CalendarToday,
  Code,
  Warning,
  CheckCircle,
  Build,
  Timeline,
  CompareArrows,
  Security,
  Cloud,
  Storage,
  Speed,
  Error,
  Shield,
  Gavel,
  LocalCafe,
} from '@mui/icons-material';

export default function Planificacion() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const datosProyecto = [
    { aspecto: 'Nombre del proyecto', descripcion: 'CRM Cafetería Typica' },
    { aspecto: 'Duración estimada', descripcion: '6 meses' },
    { aspecto: 'Fecha de inicio', descripcion: '01/11/2025 (estimada)' },
    { aspecto: 'Fecha de finalización', descripcion: '30/04/2026 (estimada)' },
    { aspecto: 'Metodología de desarrollo', descripcion: 'Ágil (Scrum)' },
    { aspecto: 'Equipo de trabajo', descripcion: '1 Líder de Proyecto, 2 Desarrolladores Backend, 2 Desarrolladores Frontend, 1 Analista de Datos, 1 QA Tester, 1 UX/UI Designer' },
    { aspecto: 'Tecnologías previstas', descripcion: 'Backend: Node.js / Frontend: React / Base de Datos: PostgreSQL / Integraciones: API de mensajería y notificaciones' },
    { aspecto: 'Objetivos principales', descripcion: 'Desarrollar un CRM funcional que permita la gestión integral de clientes y la implementación de estrategias de fidelización' },
  ];

  const cronograma = [
    { fase: '1. Planificación', duracion: '2 semanas', periodo: 'Mes 1', descripcion: 'Definición de alcance, requerimientos, equipo y tecnologías.', color: '#2196F3' },
    { fase: '2. Diseño del sistema', duracion: '1 mes', periodo: 'Mes 1–2', descripcion: 'Diseño de arquitectura, diagramas C4, prototipos UI/UX.', color: '#4CAF50' },
    { fase: '3. Desarrollo (codificación)', duracion: '3 meses', periodo: 'Mes 2–5', descripcion: 'Implementación del backend, frontend y base de datos.', color: '#FF9800' },
    { fase: '4. Extracción de features y validaciones', duracion: '2 meses', periodo: 'Mes 5–6', descripcion: 'Integración de datos, pruebas unitarias, validaciones de funcionalidad y rendimiento.', color: '#9C27B0' },
    { fase: '5. Pruebas finales y despliegue', duracion: '2 semanas', periodo: 'Final de mes 6', descripcion: 'Pruebas de aceptación, documentación final y entrega.', color: '#F44336' },
  ];

  const frameworksFrontend = [
    {
      framework: 'React',
      ventajas: 'Ecosistema amplio, soporte empresarial, gran comunidad, fácil integración con APIs REST y GraphQL, compatible con múltiples librerías de interfaz (Material UI, Tailwind).',
      desventajas: 'Requiere configuración inicial y conocimientos en herramientas de build.',
      evaluacion: 'Seleccionado. Considerado el más maduro, flexible y con mayor documentación.',
      seleccionado: true,
    },
    {
      framework: 'Vue.js',
      ventajas: 'Curva de aprendizaje más corta, buena reactividad, ideal para proyectos pequeños.',
      desventajas: 'Comunidad y recursos algo menores comparados con React.',
      evaluacion: 'Evaluado positivamente, pero descartado por menor integración con herramientas de terceros.',
      seleccionado: false,
    },
    {
      framework: 'Angular',
      ventajas: 'Framework completo con TypeScript integrado, ideal para equipos grandes.',
      desventajas: 'Curva de aprendizaje elevada, menor flexibilidad para prototipos rápidos.',
      evaluacion: 'No recomendado para este proyecto por sobrecarga estructural.',
      seleccionado: false,
    },
  ];

  const backendFrameworks = [
    {
      stack: 'Node.js + Express',
      ventajas: 'Permite desarrollo rápido de APIs REST, integración fluida con frontend React, gran comunidad y soporte.',
      desventajas: 'Menor rendimiento en tareas CPU-intensivas.',
      evaluacion: 'Seleccionado. Destacado por su facilidad de integración con el frontend y su amplia documentación.',
      seleccionado: true,
    },
    {
      stack: 'Django (Python)',
      ventajas: 'Framework completo con ORM y panel administrativo incluido.',
      desventajas: 'Más monolítico y pesado para un CRM ligero.',
      evaluacion: 'Evaluado positivamente, pero descartado por requerir mayor curva de aprendizaje del equipo.',
      seleccionado: false,
    },
    {
      stack: 'Laravel (PHP)',
      ventajas: 'Estructura clara y potente ORM.',
      desventajas: 'Requiere servidor PHP y conocimientos específicos.',
      evaluacion: 'No seleccionado por la falta de experiencia del equipo en PHP.',
      seleccionado: false,
    },
  ];

  const servidores = [
    {
      proveedor: 'HostZealot (VPS Bolivia)',
      tipo: 'VPS dedicado (1–4 GB RAM)',
      costo: 'Desde €1.2/mes',
      ventajas: 'Buena relación costo/rendimiento, disponibilidad de VPS en Bolivia, soporte estable.',
      desventajas: 'Algunos planes requieren configuración avanzada.',
      evaluacion: 'Seleccionado. Mejor equilibrio entre costo y rendimiento.',
      seleccionado: true,
    },
    {
      proveedor: 'Bolivia Hosting',
      tipo: 'Hosting compartido y VPS',
      costo: 'Desde 4 Bs/mes',
      ventajas: 'Proveedor local con soporte y pagos nacionales.',
      desventajas: 'Hosting compartido con limitaciones para APIs.',
      evaluacion: 'Aprobado solo para entornos de prueba.',
      seleccionado: false,
    },
    {
      proveedor: 'BoliviaHost',
      tipo: 'VPS y Cloud Hosting',
      costo: 'Planes variables',
      ventajas: 'Soporte local y variedad de planes empresariales.',
      desventajas: 'Costos más altos para entornos productivos.',
      evaluacion: 'Considerado viable, pero superado en costo por HostZealot.',
      seleccionado: false,
    },
  ];

  const riesgos = [
    {
      categoria: '1. Riesgos Técnicos',
      color: '#2196F3',
      items: [
        {
          riesgo: '1.1 Integración con POS y Canales Externos',
          descripcion: 'La conexión con sistemas POS y plataformas como WhatsApp, Instagram o correo electrónico puede presentar incompatibilidades o cambios de API.',
          mitigacion: 'Definir conectores estandarizados y pruebas de integración por fases; documentar dependencias externas.',
          contingencia: 'Implementar versiones locales de respaldo o conectores alternos en caso de fallas o actualizaciones forzadas.',
        },
        {
          riesgo: '1.2 Interoperabilidad entre Módulos',
          descripcion: 'El intercambio de información entre módulos puede generar inconsistencias si los contratos de datos no están correctamente definidos.',
          mitigacion: 'Establecer esquemas de datos unificados y pruebas de integración continua.',
          contingencia: 'Habilitar auditorías de sincronización automáticas y validaciones periódicas del flujo de datos.',
        },
        {
          riesgo: '1.3 Dependencia de Servicios Cloud o Externos',
          descripcion: 'El uso de servicios de terceros implica riesgos por caídas, costos o cambios de políticas.',
          mitigacion: 'Evaluar SLA de proveedores y diseñar un modelo híbrido de despliegue.',
          contingencia: 'Migrar temporalmente servicios a infraestructura local o alternativa cloud.',
        },
      ],
    },
    {
      categoria: '2. Riesgos de Desarrollo',
      color: '#4CAF50',
      items: [
        {
          riesgo: '2.1 Cambios de Alcance (Scope Creep)',
          descripcion: 'Solicitudes no previstas pueden afectar tiempos, costos y compromisos de entrega establecidos.',
          mitigacion: 'Implementar control formal de cambios mediante un comité de revisión y documentación contractual.',
          contingencia: 'Ejecutar revisiones legales y contractuales (anexos o adendas) para redefinir alcance y plazos en consenso con el cliente.',
        },
        {
          riesgo: '2.2 Desbalance del Cronograma',
          descripcion: 'El periodo estimado de seis meses puede verse comprometido por retrasos en aprobaciones o dependencias técnicas.',
          mitigacion: 'Establecer hitos mensuales y reportes de avance técnico.',
          contingencia: 'Reestructurar el plan de trabajo, priorizando módulos esenciales y extendiendo plazos con justificación técnica.',
        },
      ],
    },
    {
      categoria: '3. Riesgos de Gestión y Coordinación',
      color: '#FF9800',
      items: [
        {
          riesgo: '3.1 Desalineación con los Objetivos del Negocio',
          descripcion: 'El CRM podría no reflejar adecuadamente los procesos reales o las estrategias de fidelización de Typica.',
          mitigacion: 'Mantener sesiones de validación funcional con áreas clave (marketing, ventas y atención al cliente).',
          contingencia: 'Ajustar los flujos de negocio mediante iteraciones controladas y pruebas piloto antes de la entrega final.',
        },
      ],
    },
    {
      categoria: '4. Riesgos de Infraestructura y Hosting',
      color: '#9C27B0',
      items: [
        {
          riesgo: '4.1 Configuración Inadecuada del Hosting',
          descripcion: 'Errores en la infraestructura podrían afectar la disponibilidad y el rendimiento del sistema.',
          mitigacion: 'Validar la configuración del entorno productivo mediante pruebas de estrés y rendimiento.',
          contingencia: 'Reconfigurar recursos o migrar temporalmente a un entorno espejo mientras se corrige la incidencia.',
        },
        {
          riesgo: '4.2 Gestión de Backups y Restauración',
          descripcion: 'Una mala gestión de copias de seguridad podría conllevar pérdida de datos críticos.',
          mitigacion: 'Implementar backups automáticos y verificación diaria de integridad de los archivos.',
          contingencia: 'Restaurar desde el último punto válido y generar auditorías del proceso para prevenir recurrencias.',
        },
        {
          riesgo: '4.3 Fallas de Seguridad en Despliegue',
          descripcion: 'Vulnerabilidades en la infraestructura podrían exponer el sistema a accesos no autorizados.',
          mitigacion: 'Auditar periódicamente los servidores, certificados SSL y políticas de acceso.',
          contingencia: 'Aplicar parches de seguridad inmediatos y restringir accesos hasta resolver la vulnerabilidad.',
        },
      ],
    },
    {
      categoria: '5. Riesgos Operativos y de Uso',
      color: '#F44336',
      items: [
        {
          riesgo: '5.1 Datos Incompletos o Erróneos en la Carga Inicial',
          descripcion: 'Errores durante la migración pueden afectar reportes, segmentaciones o automatizaciones del CRM.',
          mitigacion: 'Realizar pruebas de importación y validación de datos antes de la carga definitiva.',
          contingencia: 'Reprocesar la carga desde respaldos previos verificando la integridad de los registros.',
        },
        {
          riesgo: '5.2 Sobrecarga de Tareas Automáticas',
          descripcion: 'El envío excesivo de notificaciones podría saturar los canales o afectar la percepción del cliente.',
          mitigacion: 'Configurar reglas de frecuencia, límites de envío y validaciones por canal.',
          contingencia: 'Desactivar temporalmente flujos automáticos y ejecutar revisión manual hasta estabilizar el sistema.',
        },
        {
          riesgo: '5.3 Gestión Ineficiente de Incidencias',
          descripcion: 'La falta de atención oportuna a fallas técnicas puede afectar la continuidad de operaciones.',
          mitigacion: 'Establecer una mesa de ayuda (Help Desk) con niveles de atención definidos (SLA).',
          contingencia: 'Escalar casos críticos al equipo de desarrollo y activar soporte de emergencia.',
        },
      ],
    },
    {
      categoria: '6. Riesgos Legales y Contractuales',
      color: '#00BCD4',
      items: [
        {
          riesgo: '6.1 Propiedad Intelectual del CRM',
          descripcion: 'La falta de claridad sobre la titularidad del código fuente podría generar disputas posteriores.',
          mitigacion: 'Establecer desde el inicio contractual la cesión o licencia de uso según el modelo acordado con el cliente.',
          contingencia: 'Revisar cláusulas de propiedad intelectual y generar adendas correctivas en caso de ambigüedades.',
        },
      ],
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
                    Fase de Planificación
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Plan de Proyecto, Cronograma y Gestión de Riesgos
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<CalendarToday />}
                      label="Duración: 6 meses"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Business />}
                      label="Metodología: Scrum"
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
                      CRM Typica Café
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4 }}>
            {/* 1. Plan de Proyecto */}
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
                  <LocalCafe />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1. Plan de Proyecto y Cronograma
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    El proyecto consiste en el desarrollo de un sistema CRM para la cafetería Typica, con el objetivo de 
                    fidelizar clientes, gestionar promociones, y optimizar la comunicación con los consumidores frecuentes.
                  </Typography>
                </Alert>

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Información General del Proyecto
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 4, boxShadow: 2 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600, width: '30%' }}>Aspecto</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Descripción</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {datosProyecto.map((dato, index) => (
                        <TableRow key={index} hover>
                          <TableCell sx={{ fontWeight: 600 }}>{dato.aspecto}</TableCell>
                          <TableCell>{dato.descripcion}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Cronograma de Fases
                </Typography>

                <Grid container spacing={2}>
                  {cronograma.map((fase, index) => (
                    <Grid item xs={12} key={index}>
                      <Card sx={{ borderLeft: `5px solid ${fase.color}` }}>
                        <CardContent>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={3}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: fase.color }}>
                                {fase.fase}
                              </Typography>
                            </Grid>
                            <Grid item xs={6} md={2}>
                              <Chip
                                icon={<Timeline />}
                                label={fase.duracion}
                                size="small"
                                sx={{ bgcolor: fase.color, color: 'white' }}
                              />
                            </Grid>
                            <Grid item xs={6} md={2}>
                              <Chip
                                icon={<CalendarToday />}
                                label={fase.periodo}
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            </Grid>
                            <Grid item xs={12} md={5}>
                              <Typography variant="body2" color="text.secondary">
                                {fase.descripcion}
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

            {/* 2. Comparativa de Tecnologías */}
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
                  <CompareArrows />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2. Comparativa de Tecnologías
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                {/* Frameworks Frontend */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  a) Frameworks Frontend
                </Typography>

                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {frameworksFrontend.map((fw, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        sx={{
                          borderLeft: fw.seleccionado ? '5px solid #4CAF50' : '5px solid #9E9E9E',
                          bgcolor: fw.seleccionado ? '#f1f8e9' : 'white',
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Code sx={{ fontSize: 30, color: fw.seleccionado ? '#4CAF50' : '#9E9E9E' }} />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {fw.framework}
                            </Typography>
                            {fw.seleccionado && (
                              <Chip
                                icon={<CheckCircle />}
                                label="SELECCIONADO"
                                size="small"
                                sx={{ bgcolor: '#4CAF50', color: 'white', fontWeight: 600 }}
                              />
                            )}
                          </Box>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#2196F3', mb: 1 }}>
                                ✓ Ventajas
                              </Typography>
                              <Typography variant="body2">{fw.ventajas}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#F44336', mb: 1 }}>
                                ✗ Desventajas
                              </Typography>
                              <Typography variant="body2">{fw.desventajas}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#FF9800', mb: 1 }}>
                                📊 Evaluación
                              </Typography>
                              <Typography variant="body2">{fw.evaluacion}</Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Backend / API */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  b) Backend / API
                </Typography>

                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {backendFrameworks.map((backend, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        sx={{
                          borderLeft: backend.seleccionado ? '5px solid #4CAF50' : '5px solid #9E9E9E',
                          bgcolor: backend.seleccionado ? '#f1f8e9' : 'white',
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Storage sx={{ fontSize: 30, color: backend.seleccionado ? '#4CAF50' : '#9E9E9E' }} />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {backend.stack}
                            </Typography>
                            {backend.seleccionado && (
                              <Chip
                                icon={<CheckCircle />}
                                label="SELECCIONADO"
                                size="small"
                                sx={{ bgcolor: '#4CAF50', color: 'white', fontWeight: 600 }}
                              />
                            )}
                          </Box>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#2196F3', mb: 1 }}>
                                ✓ Ventajas
                              </Typography>
                              <Typography variant="body2">{backend.ventajas}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#F44336', mb: 1 }}>
                                ✗ Desventajas
                              </Typography>
                              <Typography variant="body2">{backend.desventajas}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#FF9800', mb: 1 }}>
                                📊 Evaluación
                              </Typography>
                              <Typography variant="body2">{backend.evaluacion}</Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Servidores Locales */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  c) Servidores Locales (Bolivia)
                </Typography>

                <Alert severity="info" sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    El equipo evaluó varias alternativas para el alojamiento del CRM en servidores locales, priorizando 
                    costos bajos, soporte técnico en Bolivia y latencia reducida.
                  </Typography>
                </Alert>

                <Grid container spacing={2}>
                  {servidores.map((servidor, index) => (
                    <Grid item xs={12} key={index}>
                      <Card
                        sx={{
                          borderLeft: servidor.seleccionado ? '5px solid #4CAF50' : '5px solid #9E9E9E',
                          bgcolor: servidor.seleccionado ? '#f1f8e9' : 'white',
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Cloud sx={{ fontSize: 30, color: servidor.seleccionado ? '#4CAF50' : '#9E9E9E' }} />
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {servidor.proveedor}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {servidor.tipo} • {servidor.costo}
                              </Typography>
                            </Box>
                            {servidor.seleccionado && (
                              <Chip
                                icon={<CheckCircle />}
                                label="SELECCIONADO"
                                size="small"
                                sx={{ bgcolor: '#4CAF50', color: 'white', fontWeight: 600 }}
                              />
                            )}
                          </Box>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#2196F3', mb: 1 }}>
                                ✓ Ventajas
                              </Typography>
                              <Typography variant="body2">{servidor.ventajas}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#F44336', mb: 1 }}>
                                ✗ Desventajas
                              </Typography>
                              <Typography variant="body2">{servidor.desventajas}</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#FF9800', mb: 1 }}>
                                📊 Evaluación
                              </Typography>
                              <Typography variant="body2">{servidor.evaluacion}</Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 3. Gestión de Riesgos */}
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
                  <Warning />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    3. Gestión de Riesgos
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Alert severity="warning" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    El presente documento identifica, clasifica y propone estrategias de mitigación y contingencia ante 
                    los riesgos asociados al diseño, desarrollo e implementación del sistema CRM.
                  </Typography>
                </Alert>

                <Stack spacing={3}>
                  {riesgos.map((categoria, catIndex) => (
                    <Box key={catIndex}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: categoria.color,
                          borderBottom: `3px solid ${categoria.color}`,
                          pb: 1,
                        }}
                      >
                        {categoria.categoria}
                      </Typography>

                      <Stack spacing={2}>
                        {categoria.items.map((item, itemIndex) => (
                          <Card key={itemIndex} sx={{ borderLeft: `4px solid ${categoria.color}` }}>
                            <CardContent>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: categoria.color }}>
                                {item.riesgo}
                              </Typography>
                              <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                                {item.descripcion}
                              </Typography>

                              <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                  <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                      <Shield sx={{ color: '#2196F3', fontSize: 20 }} />
                                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#2196F3' }}>
                                        Plan de Mitigación
                                      </Typography>
                                    </Box>
                                    <Typography variant="body2">{item.mitigacion}</Typography>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Box sx={{ bgcolor: '#fff3e0', p: 2, borderRadius: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                      <Build sx={{ color: '#FF9800', fontSize: 20 }} />
                                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#FF9800' }}>
                                        Plan de Contingencia
                                      </Typography>
                                    </Box>
                                    <Typography variant="body2">{item.contingencia}</Typography>
                                  </Box>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        ))}
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer */}
            <Grid container spacing={3}>
              

              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, bgcolor: '#e3f2fd' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    📋 Resumen de la Planificación
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Frontend: React + Material UI" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Backend: Node.js + Express" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Hosting: HostZealot VPS Bolivia" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: 'success.main' }} />
                      </ListItemIcon>
                      <ListItemText primary="Metodología: Scrum (6 meses)" />
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