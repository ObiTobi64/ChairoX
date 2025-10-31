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
  CheckCircle,
  Assignment,
  Dashboard,
  Language,
  Whatshot,                // PyTorch
  PrecisionManufacturing,  // ROS
  Slideshow,               // Gradio
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
    // NUEVO bloque AI/Robótica
    {
      categoria: 'AI / Robótica',
      herramienta: 'PyTorch + ROS 2 + Gradio',
      version: 'PyTorch ≥ 2.x / ROS 2 Humble+ / Gradio ≥ 4.x',
      motivo: 'Entrenamiento/serving de visión 3D (PyTorch), orquestación de sensores/SLAM (ROS 2) y UIs rápidas (Gradio).',
      color: '#EF5350',
      icon: <Whatshot />,
    },
  ];

  const comparativaFrontend = [
    { criterio: 'Curva de aprendizaje', nextjs: 'Media', angular: 'Alta', vue: 'Media' },
    { criterio: 'SSR / SEO nativo', nextjs: '✅ Excelente', angular: 'Parcial', vue: '✅ (Nuxt)' },
    { criterio: 'Ecosistema / comunidad', nextjs: 'Muy amplio', angular: 'Amplio', vue: 'Amplio' },
    { criterio: 'Integración con APIs REST', nextjs: 'Muy buena', angular: 'Muy buena', vue: 'Buena' },
    { criterio: 'Performance / optimización', nextjs: 'Alta (ISR, SWC)', angular: 'Media', vue: 'Alta' },
    { criterio: 'Escalabilidad', nextjs: 'Alta', angular: 'Alta', vue: 'Media-Alta' },
    { criterio: 'Productividad en CRM', nextjs: '✅ Alta', angular: '⚪ Media', vue: '⚪ Media' },
  ];

  const comparativaBackend = [
    { criterio: 'Estructura / modularidad', express: 'Media (manual)', nestjs: 'Alta (nativa)', spring: 'Alta' },
    { criterio: 'Curva de aprendizaje', express: 'Baja', nestjs: 'Media', spring: 'Media' },
    { criterio: 'Integración con APIs externas', express: 'Excelente', nestjs: 'Muy buena', spring: 'Excelente' },
    { criterio: 'Escalabilidad', express: 'Alta (middlewares)', nestjs: 'Alta (microservicios)', spring: 'Alta' },
    { criterio: 'Flexibilidad / personalización', express: 'Muy alta', nestjs: 'Alta', spring: 'Media' },
    { criterio: 'Comunidad / soporte', express: 'Muy amplia', nestjs: 'Amplia', spring: 'Amplia' },
  ];

  const comparativaBaseDatos = [
    { criterio: 'Modelo de datos', postgres: 'Relacional (ACID)', mongo: 'Documental', hibrido: 'Mixto' },
    { criterio: 'Escalabilidad', postgres: 'Alta (replicas, Citus)', mongo: 'Muy alta (sharding)', hibrido: 'Alta' },
    { criterio: 'Flexibilidad de esquema', postgres: 'Media', mongo: 'Alta', hibrido: 'Alta' },
    { criterio: 'Transacciones críticas', postgres: '✅ Fuerte', mongo: 'Limitada', hibrido: 'Postgres para core' },
    { criterio: 'Rendimiento lectura/escritura', postgres: 'Muy bueno', mongo: 'Excelente', hibrido: 'Combinado' },
    { criterio: 'Complejidad de operación', postgres: 'Media', mongo: 'Media', hibrido: 'Mayor' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', py: 4 }}>
      
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          {/* Header */}
          <Box sx={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', color: 'white', p: 4, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    Definición de Herramientas, Librerías y Frameworks
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Stack Tecnológico del Proyecto
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip icon={<Code />} label="Next.js + React" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    <Chip icon={<Storage />} label="Node.js + Express" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    <Chip icon={<Whatshot />} label="PyTorch + ROS + Gradio" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ width: 120, height: 120, bgcolor: 'white', borderRadius: 2, mx: 'auto', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1, boxShadow: 3 }}>
                      <img src="https://www.soysucre.info/wp-content/uploads/2022/03/Typica-Logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4 }}>
            {/* Resumen Ejecutivo */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#6366F1', color: 'white', '&:hover': { bgcolor: '#4F46E5' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Dashboard />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Resumen Ejecutivo</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    Este documento define el stack del proyecto, con foco en Frontend/Backend/BD y en AI/Robótica: PyTorch, ROS 2 y Gradio.
                  </Typography>
                </Alert>
                <Grid container spacing={2}>
                  {resumenEjecutivo.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Card sx={{ borderLeft: `5px solid ${item.color}`, position: 'relative', overflow: 'visible' }}>
                        <CardContent>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={2}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ color: item.color, display: 'flex' }}>{item.icon}</Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: item.color }}>{item.categoria}</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={3}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>{item.herramienta}</Typography>
                              <Chip label={item.version} size="small" sx={{ bgcolor: item.color, color: 'white', fontWeight: 600, fontSize: '0.875rem' }} />
                            </Grid>
                            <Grid item xs={12} md={7}>
                              <Typography variant="body2" color="text.secondary">{item.motivo}</Typography>
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
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#61DAFB', color: 'white', '&:hover': { bgcolor: '#4FC3F7' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Language />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>1. Frontend - Next.js (React + TypeScript)</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>1.1. Comparativa de Opciones Analizadas</Typography>
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
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>✅ Elección: Next.js (React + TypeScript) v14.0 o superior</Typography>
                  <Typography variant="body2">Renderizado híbrido (SSR/ISR), ideal para dashboards y SEO; gran ecosistema.</Typography>
                </Alert>
                <Card sx={{ bgcolor: '#f8f9fa' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>📚 Librerías Principales Recomendadas</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <List dense>
                          <ListItem><ListItemIcon><CheckCircle sx={{ color: '#4CAF50' }} /></ListItemIcon><ListItemText primary="UI: Chakra UI / TailwindCSS / ShadCN UI" primaryTypographyProps={{ fontWeight: 600 }} /></ListItem>
                          <ListItem><ListItemIcon><CheckCircle sx={{ color: '#4CAF50' }} /></ListItemIcon><ListItemText primary="Gestión de estado: Tanstack Query + Zustand" primaryTypographyProps={{ fontWeight: 600 }} /></ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <List dense>
                          <ListItem><ListItemIcon><CheckCircle sx={{ color: '#4CAF50' }} /></ListItemIcon><ListItemText primary="Formularios: React Hook Form + Zod" primaryTypographyProps={{ fontWeight: 600 }} /></ListItem>
                          <ListItem><ListItemIcon><CheckCircle sx={{ color: '#4CAF50' }} /></ListItemIcon><ListItemText primary="Testing: Jest + Cypress" primaryTypographyProps={{ fontWeight: 600 }} /></ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </AccordionDetails>
            </Accordion>

            {/* 2. Backend */}
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#68A063', color: 'white', '&:hover': { bgcolor: '#5A8F52' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Storage />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>2. Backend - Node.js (ExpressJS + TypeScript)</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>2.1. Comparativa de Opciones Analizadas</Typography>
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
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>✅ Elección: ExpressJS (Node.js + TypeScript) v5.x</Typography>
                  <Typography variant="body2">Simplicidad, velocidad y modularidad para un MVP mantenible y escalable.</Typography>
                </Alert>
              </AccordionDetails>
            </Accordion>

            {/* 3. Base de Datos */}
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#336791', color: 'white', '&:hover': { bgcolor: '#2A5479' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Storage />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>3. Base de Datos - PostgreSQL + MongoDB</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>3.1. Comparativa de Opciones Analizadas</Typography>
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
              </AccordionDetails>
            </Accordion>

            {/* 4. Gestor de Tareas */}
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#9C27B0', color: 'white', '&:hover': { bgcolor: '#7B1FA2' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Assignment />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>4. Gestor de Tareas - Taiga</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Alert severity="success">Taiga: Open Source, adaptable a SCRUM/Kanban e integrable con CI/CD.</Alert>
              </AccordionDetails>
            </Accordion>

            {/* === NUEVOS: PyTorch, ROS, Gradio === */}
            <Accordion expanded={expanded === 'panelAI1'} onChange={handleChange('panelAI1')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#EF5350', color: 'white', '&:hover': { bgcolor: '#E53935' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Whatshot />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>PyTorch — Deep Learning para Visión 3D</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Framework ideal para SfM, reconstrucción 3D, SLAM, NeRF y estimación de pose. Ecosistema: TorchVision, PyTorch3D, CUDA.
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={6}>
                        <Card sx={{ borderLeft: '5px solid #EF5350' }}>
                          <CardContent>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Ventajas</Typography>
                            <Typography variant="body2">• GPU/CUDA optimizado</Typography>
                            <Typography variant="body2">• Modelos SOTA</Typography>
                            <Typography variant="body2">• PyTorch3D para mallas</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Card sx={{ borderLeft: '5px solid #B71C1C' }}>
                          <CardContent>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Uso en proyecto</Typography>
                            <Typography variant="body2">• Reconstrucción/Refinamiento 3D</Typography>
                            <Typography variant="body2">• Segmentación estructural</Typography>
                            <Typography variant="body2">• Generación de layouts</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Card sx={{ bgcolor: '#fffaf0' }}>
                      <CardContent>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Instalación Windows (CUDA 12)</Typography>
                        <Box component="pre" sx={{ m: 0, p: 2, bgcolor: '#212121', color: '#fff', borderRadius: 1, fontSize: 13, overflow: 'auto' }}>
{`pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121`}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panelAI2'} onChange={handleChange('panelAI2')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#26A69A', color: 'white', '&:hover': { bgcolor: '#1E8E82' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PrecisionManufacturing />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>ROS (Robot Operating System)</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Framework open source para robótica: abstracción de hardware, drivers, pub/sub entre nodos, gestión de paquetes y herramientas (RViz, Gazebo).
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderLeft: '5px solid #26A69A' }}>
                      <CardContent>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Por qué ROS 2</Typography>
                        <Typography variant="body2">• Middleware DDS y tiempo real</Typography>
                        <Typography variant="body2">• Seguridad y multi-plataforma</Typography>
                        <Typography variant="body2">• Integración con SLAM y sensores</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ bgcolor: '#f1f8e9' }}>
                      <CardContent>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Instalación (Ubuntu Humble)</Typography>
                        <Box component="pre" sx={{ m: 0, p: 2, bgcolor: '#263238', color: '#E0F2F1', borderRadius: 1, fontSize: 13, overflow: 'auto' }}>
{`sudo apt install ros-humble-desktop
source /opt/ros/humble/setup.bash
mkdir -p ~/ros2_ws/src && cd ~/ros2_ws && colcon build`}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panelAI3'} onChange={handleChange('panelAI3')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ bgcolor: '#7E57C2', color: 'white', '&:hover': { bgcolor: '#6A48B1' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Slideshow />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Gradio — Interfaces visuales para modelos</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={7}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Crea UIs web rápidas para conectar modelos (PyTorch/TensorFlow) sin construir frontend complejo. Ideal para demos de reconstrucción 3D y asistentes de diseño.
                    </Typography>
                    <Card sx={{ bgcolor: '#f3e5f5' }}>
                      <CardContent>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Ejemplo</Typography>
                        <Box component="pre" sx={{ m: 0, p: 2, bgcolor: '#1A1A1A', color: '#EDE7F6', borderRadius: 1, fontSize: 13, overflow: 'auto' }}>
{`pip install gradio

import gradio as gr
def predict(img): return "OK"
demo = gr.Interface(fn=predict, inputs="image", outputs="label", title="Demo")
demo.launch()`}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Card sx={{ borderLeft: '5px solid #7E57C2' }}>
                      <CardContent>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Uso en el proyecto</Typography>
                        <Typography variant="body2">• Prototipos de diseño por lenguaje natural</Typography>
                        <Typography variant="body2">• Visualización de mallas y nubes de puntos</Typography>
                        <Typography variant="body2">• Validación rápida con clientes</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            {/* === FIN NUEVOS === */}

            <Divider sx={{ my: 4 }} />

            {/* Tabla Detallada de Versiones */}
            <Card sx={{ mb: 4, borderTop: '4px solid #6366F1' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#6366F1' }}>
                  📋 Tabla de Versiones del Stack Tecnológico
                </Typography>
                <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#f5f7fa' }}>
                        <TableCell sx={{ fontWeight: 700, fontSize: '0.95rem' }}>Categoría</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontSize: '0.95rem' }}>Herramienta/Tecnología</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#6366F1' }}>Versión Requerida</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontSize: '0.95rem' }}>Estado</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Frontend */}
                      <TableRow hover>
                        <TableCell sx={{ fontWeight: 600   }}>Frontend</TableCell>
                        <TableCell>Next.js (React + TypeScript)</TableCell>
                        <TableCell>
                          <Chip 
                            label="≥ 14.0" 
                            size="small" 
                            sx={{ bgcolor: '#61DAFB', color: 'white', fontWeight: 700 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip label="✅ Seleccionado" size="small" color="success" />
                        </TableCell>
                      </TableRow>
                      <TableRow hover sx={{ bgcolor: '#fafafa' }}>
                        <TableCell></TableCell>
                        <TableCell sx={{ pl: 4 }}>• React</TableCell>
                        <TableCell>
                          <Chip label="≥ 18.x" size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          <Chip label="Incluido" size="small" variant="outlined" />
                        </TableCell>
                      </TableRow>
                      <TableRow hover sx={{ bgcolor: '#fafafa' }}>
                        <TableCell></TableCell>
                        <TableCell sx={{ pl: 4 }}>• TypeScript</TableCell>
                        <TableCell>
                          <Chip label="≥ 5.x" size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          <Chip label="Incluido" size="small" variant="outlined" />
                        </TableCell>
                      </TableRow>

                      {/* Backend */}
                      <TableRow hover>
                        <TableCell sx={{ fontWeight: 600 }}>Backend</TableCell>
                        <TableCell>Node.js</TableCell>
                        <TableCell>
                          <Chip 
                            label="≥ 20.x LTS" 
                            size="small" 
                            sx={{ bgcolor: '#68A063', color: 'white', fontWeight: 700 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip label="✅ Seleccionado" size="small" color="success" />
                        </TableCell>
                      </TableRow>
                      <TableRow hover sx={{ bgcolor: '#fafafa' }}>
                        <TableCell></TableCell>
                        <TableCell sx={{ pl: 4 }}>• Express.js</TableCell>
                        <TableCell>
                          <Chip label="≥ 5.x" size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          <Chip label="✅ Seleccionado" size="small" color="success" />
                        </TableCell>
                      </TableRow>

                      {/* Base de Datos */}
                      <TableRow hover>
                        <TableCell sx={{ fontWeight: 600 }}>Base de Datos</TableCell>
                        <TableCell>PostgreSQL</TableCell>
                        <TableCell>
                          <Chip 
                            label="≥ 16.x" 
                            size="small" 
                            sx={{ bgcolor: '#336791', color: 'white', fontWeight: 700 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip label="✅ Principal" size="small" color="success" />
                        </TableCell>
                      </TableRow>
                      <TableRow hover sx={{ bgcolor: '#fafafa' }}>
                        <TableCell></TableCell>
                        <TableCell>MongoDB</TableCell>
                        <TableCell>
                          <Chip 
                            label="≥ 7.x" 
                            size="small" 
                            sx={{ bgcolor: '#47A248', color: 'white', fontWeight: 700 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip label="✅ Complementario" size="small" color="success" />
                        </TableCell>
                      </TableRow>

                      {/* AI / Robótica */}
                      <TableRow hover>
                        <TableCell sx={{ fontWeight: 600 }}>AI / Robótica</TableCell>
                        <TableCell>PyTorch</TableCell>
                        <TableCell>
                          <Chip 
                            label="≥ 2.x" 
                            size="small" 
                            sx={{ bgcolor: '#EF5350', color: 'white', fontWeight: 700 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip label="✅ Seleccionado" size="small" color="success" />
                        </TableCell>
                      </TableRow>
                      <TableRow hover sx={{ bgcolor: '#fafafa' }}>
                        <TableCell></TableCell>
                        <TableCell>ROS 2</TableCell>
                        <TableCell>
                          <Chip label="Humble o superior" size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          <Chip label="Recomendado" size="small" color="info" />
                        </TableCell>
                      </TableRow>
                      <TableRow hover>
                        <TableCell></TableCell>
                        <TableCell>Gradio</TableCell>
                        <TableCell>
                          <Chip label="≥ 4.x" size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          <Chip label="Recomendado" size="small" color="info" />
                        </TableCell>
                      </TableRow>

                      {/* Gestión */}
                      <TableRow hover>
                        <TableCell sx={{ fontWeight: 600 }}>Gestión</TableCell>
                        <TableCell>Taiga</TableCell>
                        <TableCell>
                          <Chip 
                            label="Última estable" 
                            size="small" 
                            sx={{ bgcolor: '#9C27B0', color: 'white', fontWeight: 700 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Chip label="✅ Seleccionado" size="small" color="success" />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Nota:</strong> Las versiones indicadas son mínimas recomendadas. Se sugiere usar siempre 
                    las versiones LTS (Long Term Support) disponibles para mayor estabilidad en producción.
                  </Typography>
                </Alert>
              </CardContent>
            </Card>

            {/* Footer */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, bgcolor: '#e3f2fd' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    🛠️ Stack Tecnológico Final
                  </Typography>
                  <List dense>
                    <ListItem><ListItemIcon><CheckCircle sx={{ color: 'success.main' }} /></ListItemIcon><ListItemText primary="Frontend: Next.js 14+ (React + TypeScript)" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircle sx={{ color: 'success.main' }} /></ListItemIcon><ListItemText primary="Backend: Node.js 20+ (Express 5+ TypeScript)" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircle sx={{ color: 'success.main' }} /></ListItemIcon><ListItemText primary="BD: PostgreSQL 16+ + MongoDB 7+" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircle sx={{ color: 'success.main' }} /></ListItemIcon><ListItemText primary="Gestión: Taiga (Open Source)" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircle sx={{ color: 'success.main' }} /></ListItemIcon><ListItemText primary="AI/Robótica: PyTorch, ROS 2 y Gradio" /></ListItem>
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