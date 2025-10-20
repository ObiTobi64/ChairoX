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
  Quiz,
  HelpOutline,
  Speed,
  ThumbUp,
  Business,
  CalendarToday,
  Person,
  Group,
  Timeline,
  Assignment,
  CheckCircle,
  Info,
} from '@mui/icons-material';

export default function EvaluacionFeedback() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const preguntasEntrevista = [
    {
      categoria: 'Preguntas de Contexto',
      icon: <Person />,
      preguntas: [
        '¿Qué rol cumples en la organización (administrador, empleado de atención al cliente, cliente frecuente, personal de marketing)?',
        '¿Qué tan familiarizado estás con sistemas similares de gestión de clientes o fidelización?',
      ],
    },
    {
      categoria: 'Experiencia de Uso',
      icon: <Speed />,
      preguntas: [
        '¿Qué tan fácil te resultó navegar en el sistema?',
        '¿Encontraste alguna dificultad para completar tus tareas (ej. registrar un cliente, consultar historial de compras, gestionar puntos de fidelización)?',
        '¿Cómo calificarías la velocidad del sistema al registrar interacciones o enviar campañas?',
      ],
    },
    {
      categoria: 'Satisfacción General',
      icon: <ThumbUp />,
      preguntas: [
        '¿Qué fue lo que más te gustó del sistema?',
        '¿Qué consideras que debería mejorarse con urgencia (ej. diseño, integración con POS, comunicación multicanal)?',
      ],
    },
  ];

  const preguntasEncuesta = [
    {
      pregunta: 'Facilidad de uso',
      descripcion: 'El sistema es fácil de usar y entender.',
      escala: '1 = Muy en desacuerdo, 5 = Muy de acuerdo',
    },
    {
      pregunta: 'Eficiencia',
      descripcion: 'Pude realizar mis tareas (ej. registrar un cliente, ver historial de compras, gestionar puntos) en un tiempo razonable.',
      escala: '1 = Muy en desacuerdo, 5 = Muy de acuerdo',
    },
    {
      pregunta: 'Diseño e interfaz',
      descripcion: 'La apariencia y organización del sistema son agradables y claras.',
      escala: '1 = Muy en desacuerdo, 5 = Muy de acuerdo',
    },
    {
      pregunta: 'Confianza y seguridad',
      descripcion: 'Me siento seguro al ingresar mis datos en el sistema.',
      escala: '1 = Muy en desacuerdo, 5 = Muy de acuerdo',
    },
    {
      pregunta: 'Disponibilidad',
      descripcion: 'El sistema funciona correctamente en el momento que lo necesito.',
      escala: '1 = Muy en desacuerdo, 5 = Muy de acuerdo',
    },
    {
      pregunta: 'Satisfacción general',
      descripcion: 'Estoy satisfecho con el sistema en su conjunto.',
      escala: '1 = Muy en desacuerdo, 5 = Muy de acuerdo',
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
                    Entrevistas y Encuestas de Satisfacción
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
                Objetivo General
              </Typography>
              <Typography variant="body1">
                Identificar la experiencia real de los usuarios (administradores, empleados de Typica, 
                clientes frecuentes y personal de marketing) al interactuar con el sistema CRM, para 
                detectar problemas de usabilidad, rendimiento y confianza.
              </Typography>
            </Alert>

            {/* Sección 1: Modelo de Entrevista */}
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
                  <Quiz />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Modelo de Entrevista a Usuarios
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Card sx={{ mb: 3, bgcolor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      Guía de Entrevista Semiestructurada
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                        📋 Introducción
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle sx={{ fontSize: 18, color: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={
                              <Typography variant="body1">
                                <strong>Explicar el propósito:</strong> "Queremos conocer tu experiencia usando 
                                el sistema CRM de Typica – Café & Tostaduría Especializada para mejorar su calidad."
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle sx={{ fontSize: 18, color: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary="Duración estimada: 20–30 minutos" />
                        </ListItem>
                      </List>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {preguntasEntrevista.map((categoria, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          {categoria.icon}
                          <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main' }}>
                            {categoria.categoria}
                          </Typography>
                        </Box>
                        <List>
                          {categoria.preguntas.map((pregunta, idx) => (
                            <ListItem key={idx} sx={{ alignItems: 'flex-start' }}>
                              <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                                <HelpOutline sx={{ fontSize: 18, color: 'secondary.main' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={pregunta}
                                primaryTypographyProps={{ variant: 'h5' }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    ))}

                    <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 2 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        ✅ Cierre
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle sx={{ fontSize: 18, color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary="Agradecer al participante" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle sx={{ fontSize: 18, color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary="Informar que los resultados serán usados únicamente para mejorar el sistema" />
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>

            {/* Sección 2: Encuesta de Satisfacción */}
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
                  <Assignment />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Encuesta de Satisfacción a Usuarios Finales
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Alert severity="success" sx={{ mb: 3 }}>
                  <Typography variant="body1">
                    <strong>Objetivo:</strong> Recolectar datos cuantitativos y comparables sobre la 
                    percepción general del sistema CRM, complementando las entrevistas.
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    <strong>Formato sugerido:</strong> Google Forms, 5–7 preguntas breves
                  </Typography>
                </Alert>

                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Preguntas de la Encuesta (Escala 1-5)
                </Typography>

                <TableContainer component={Paper} sx={{ mb: 3 }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 600 }}>#</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Dimensión</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Descripción</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Escala</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {preguntasEncuesta.map((item, index) => (
                        <TableRow key={index} hover>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                              {item.pregunta}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="h6">
                              {item.descripcion}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={item.escala} 
                              size="small" 
                              color="secondary" 
                              variant="outlined"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Card sx={{ bgcolor: '#fff3e0', p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    💬 Pregunta Abierta (Opcional)
                  </Typography>
                  <Typography variant="body1">
                    ¿Qué mejorarías en futuras versiones del sistema (ej. integración con canales 
                    digitales, reportes de fidelización, velocidad)?
                  </Typography>
                </Card>
              </AccordionDetails>
            </Accordion>

            {/* Sección 3: Usuarios Objetivo */}
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
                  <Group />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Perfiles de Usuarios a Entrevistar/Encuestar
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  {[
                    {
                      perfil: 'Administradores',
                      descripcion: 'Usuarios con acceso completo al sistema, gestión de usuarios y configuración',
                      cantidad: '2-3 usuarios',
                      color: '#2196F3',
                    },
                    {
                      perfil: 'Empleados de Atención',
                      descripcion: 'Personal que interactúa directamente con clientes y registra información',
                      cantidad: '5-7 usuarios',
                      color: '#4CAF50',
                    },
                    {
                      perfil: 'Personal de Marketing',
                      descripcion: 'Usuarios que gestionan campañas, reportes y análisis de datos',
                      cantidad: '2-3 usuarios',
                      color: '#9C27B0',
                    },
                    {
                      perfil: 'Clientes Frecuentes',
                      descripcion: 'Usuarios finales del programa de fidelización y comunicación',
                      cantidad: '10-15 usuarios',
                      color: '#FF9800',
                    },
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          borderLeft: `4px solid ${item.color}`,
                        }}
                      >
                        <CardContent>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: item.color }}>
                            {item.perfil}
                          </Typography>
                          <Typography variant="h6" color="text.secondary" paragraph>
                            {item.descripcion}
                          </Typography>
                          <Chip 
                            label={item.cantidad}
                            size="small"
                            sx={{ bgcolor: item.color, color: 'white' }}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Sección 4: Metodología */}
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
                  <Timeline />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Metodología de Aplicación
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', bgcolor: '#e3f2fd' }}>
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                          📅 Cronograma Sugerido
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Semana 1-2"
                              secondary="Preparación de instrumentos y convocatoria"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Semana 3-4"
                              secondary="Aplicación de entrevistas presenciales/virtuales"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Semana 5"
                              secondary="Distribución y recolección de encuestas online"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Semana 6"
                              secondary="Análisis de resultados y reporte final"
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card sx={{ height: '100%', bgcolor: '#f3e5f5' }}>
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#9C27B0' }}>
                          🎯 Consideraciones Éticas
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Consentimiento informado de los participantes" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Anonimato y confidencialidad de las respuestas" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Uso exclusivo para mejora del sistema" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#9C27B0' }} />
                            </ListItemIcon>
                            <ListItemText primary="Participación voluntaria sin consecuencias" />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

          </Box>
        </Paper>
      </Container>
    </Box>
  );
}