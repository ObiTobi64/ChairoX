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
  Tabs,
  Tab,
} from '@mui/material';
import {
  ExpandMore,
  AccountTree,
  Business,
  CalendarToday,
  BubbleChart, // Para el diagrama Ishikawa
} from '@mui/icons-material';
import ReactFlow, {
  type Node,
  type Edge,
  Background,
  Controls,
  MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';
import IshikawaDiagram from '../assets/images/Ishikawa .png'

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
      id={`diagram-tabpanel-${index}`}
      aria-labelledby={`diagram-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Analisis() {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // ... (todo el código IDEF0 anterior se mantiene igual) ...
  // IDEF0 - Diagrama Principal (A-0)
  const idef0Nodes: Node[] = [
    {
      id: '1',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Sistema CRM
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Typica Café
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
              A-0
            </Typography>
          </Box>
        )
      },
      position: { x: 400, y: 250 },
      style: {
        background: '#0f3460',
        color: 'white',
        border: '3px solid #16C79A',
        borderRadius: '8px',
        width: 300,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  ];

  const idef0Edges: Edge[] = [
    // Entradas (Input - Izquierda)
    {
      id: 'e1-input1',
      source: 'input1',
      target: '1',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#2196F3', strokeWidth: 2 },
      label: 'Datos de Clientes',
      labelStyle: { fill: '#2196F3', fontWeight: 600 },
    },
    {
      id: 'e1-input2',
      source: 'input2',
      target: '1',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#2196F3', strokeWidth: 2 },
      label: 'Transacciones',
      labelStyle: { fill: '#2196F3', fontWeight: 600 },
    },
    // Controles (Control - Arriba)
    {
      id: 'e1-control1',
      source: 'control1',
      target: '1',
      type: 'smoothstep',
      style: { stroke: '#FF9800', strokeWidth: 2 },
      label: 'Políticas CRM',
      labelStyle: { fill: '#FF9800', fontWeight: 600 },
    },
    {
      id: 'e1-control2',
      source: 'control2',
      target: '1',
      type: 'smoothstep',
      style: { stroke: '#FF9800', strokeWidth: 2 },
      label: 'Normativas',
      labelStyle: { fill: '#FF9800', fontWeight: 600 },
    },
    // Salidas (Output - Derecha)
    {
      id: 'e1-output1',
      source: '1',
      target: 'output1',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#4CAF50', strokeWidth: 2 },
      label: 'Reportes',
      labelStyle: { fill: '#4CAF50', fontWeight: 600 },
    },
    {
      id: 'e1-output2',
      source: '1',
      target: 'output2',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#4CAF50', strokeWidth: 2 },
      label: 'Análisis',
      labelStyle: { fill: '#4CAF50', fontWeight: 600 },
    },
    // Mecanismos (Mechanism - Abajo)
    {
      id: 'e1-mech1',
      source: 'mech1',
      target: '1',
      type: 'smoothstep',
      style: { stroke: '#9C27B0', strokeWidth: 2 },
      label: 'Personal',
      labelStyle: { fill: '#9C27B0', fontWeight: 600 },
    },
    {
      id: 'e1-mech2',
      source: 'mech2',
      target: '1',
      type: 'smoothstep',
      style: { stroke: '#9C27B0', strokeWidth: 2 },
      label: 'Tecnología',
      labelStyle: { fill: '#9C27B0', fontWeight: 600 },
    },
  ];

  // Nodos auxiliares para IDEF0
  const auxiliaryNodes: Node[] = [
    // Inputs (Izquierda)
    { id: 'input1', data: { label: '' }, position: { x: 100, y: 280 }, style: { opacity: 0 } },
    { id: 'input2', data: { label: '' }, position: { x: 100, y: 360 }, style: { opacity: 0 } },
    // Controls (Arriba)
    { id: 'control1', data: { label: '' }, position: { x: 480, y: 80 }, style: { opacity: 0 } },
    { id: 'control2', data: { label: '' }, position: { x: 600, y: 80 }, style: { opacity: 0 } },
    // Outputs (Derecha)
    { id: 'output1', data: { label: '' }, position: { x: 900, y: 280 }, style: { opacity: 0 } },
    { id: 'output2', data: { label: '' }, position: { x: 900, y: 360 }, style: { opacity: 0 } },
    // Mechanisms (Abajo)
    { id: 'mech1', data: { label: '' }, position: { x: 480, y: 550 }, style: { opacity: 0 } },
    { id: 'mech2', data: { label: '' }, position: { x: 600, y: 550 }, style: { opacity: 0 } },
  ];

  // IDEF0 Desglose (A0) - COMPLETO con 8 procesos
  const idef0DesgloseNodes: Node[] = [
    // A1: Análisis y diagnóstico
    {
      id: 'a1',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 11 }}>
              Análisis y
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 11 }}>
              diagnóstico
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A1
            </Typography>
          </Box>
        )
      },
      position: { x: 50, y: 100 },
      style: {
        background: '#2196F3',
        color: 'white',
        border: '2px solid #1976D2',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
    // A2: Definición de campaña
    {
      id: 'a2',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 11 }}>
              Definición de
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 11 }}>
              campaña
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A2
            </Typography>
          </Box>
        )
      },
      position: { x: 250, y: 250 },
      style: {
        background: '#4CAF50',
        color: 'white',
        border: '2px solid #388E3C',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
    // A3: Desarrollo del concepto creativo
    {
      id: 'a3',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 10 }}>
              Desarrollo del
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 10 }}>
              concepto creativo
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A3
            </Typography>
          </Box>
        )
      },
      position: { x: 450, y: 400 },
      style: {
        background: '#FF9800',
        color: 'white',
        border: '2px solid #F57C00',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
    // A4: Selección de canales y medios
    {
      id: 'a4',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 10 }}>
              Selección de
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 10 }}>
              canales y medios
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A4
            </Typography>
          </Box>
        )
      },
      position: { x: 650, y: 550 },
      style: {
        background: '#9C27B0',
        color: 'white',
        border: '2px solid #7B1FA2',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
    // A5: Planificación de cronograma y presupuesto
    {
      id: 'a5',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 9 }}>
              Planificación de
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 9 }}>
              cronograma y
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 9 }}>
              presupuesto
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A5
            </Typography>
          </Box>
        )
      },
      position: { x: 850, y: 700 },
      style: {
        background: '#F44336',
        color: 'white',
        border: '2px solid #D32F2F',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
    // A6: Producción de contenidos y materiales
    {
      id: 'a6',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 9 }}>
              Producción de
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 9 }}>
              contenidos y
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 9 }}>
              materiales
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A6
            </Typography>
          </Box>
        )
      },
      position: { x: 1050, y: 850 },
      style: {
        background: '#00BCD4',
        color: 'white',
        border: '2px solid #0097A7',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
    // A7: Ejecución y monitoreo
    {
      id: 'a7',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 11 }}>
              Ejecución y
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 11 }}>
              monitoreo
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A7
            </Typography>
          </Box>
        )
      },
      position: { x: 1250, y: 1000 },
      style: {
        background: '#795548',
        color: 'white',
        border: '2px solid #5D4037',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
    // A8: Fidelización
    {
      id: 'a8',
      type: 'default',
      data: { 
        label: (
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 11 }}>
              Fidelización
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: 10 }}>
              A8
            </Typography>
          </Box>
        )
      },
      position: { x: 1450, y: 1150 },
      style: {
        background: '#607D8B',
        color: 'white',
        border: '2px solid #455A64',
        borderRadius: '6px',
        width: 140,
        height: 100,
      },
    },
  ];

  const idef0DesgloseEdges: Edge[] = [
    // Flujo A1 -> A2
    { 
      id: 'e-a1-a2', 
      source: 'a1', 
      target: 'a2', 
      animated: true, 
      label: 'Insights',
      style: { stroke: '#2196F3', strokeWidth: 2 },
      labelStyle: { fill: '#2196F3', fontWeight: 600, fontSize: 11 },
    },
    // Flujo A2 -> A3
    { 
      id: 'e-a2-a3', 
      source: 'a2', 
      target: 'a3', 
      animated: true, 
      label: 'Brief',
      style: { stroke: '#4CAF50', strokeWidth: 2 },
      labelStyle: { fill: '#4CAF50', fontWeight: 600, fontSize: 11 },
    },
    // Flujo A3 -> A4
    { 
      id: 'e-a3-a4', 
      source: 'a3', 
      target: 'a4', 
      animated: true, 
      label: 'Concepto',
      style: { stroke: '#FF9800', strokeWidth: 2 },
      labelStyle: { fill: '#FF9800', fontWeight: 600, fontSize: 11 },
    },
    // Flujo A4 -> A5
    { 
      id: 'e-a4-a5', 
      source: 'a4', 
      target: 'a5', 
      animated: true, 
      label: 'Plan medios',
      style: { stroke: '#9C27B0', strokeWidth: 2 },
      labelStyle: { fill: '#9C27B0', fontWeight: 600, fontSize: 11 },
    },
    // Flujo A5 -> A6
    { 
      id: 'e-a5-a6', 
      source: 'a5', 
      target: 'a6', 
      animated: true, 
      label: 'Cronograma',
      style: { stroke: '#F44336', strokeWidth: 2 },
      labelStyle: { fill: '#F44336', fontWeight: 600, fontSize: 11 },
    },
    // Flujo A6 -> A7
    { 
      id: 'e-a6-a7', 
      source: 'a6', 
      target: 'a7', 
      animated: true, 
      label: 'Materiales',
      style: { stroke: '#00BCD4', strokeWidth: 2 },
      labelStyle: { fill: '#00BCD4', fontWeight: 600, fontSize: 11 },
    },
    // Flujo A7 -> A8
    { 
      id: 'e-a7-a8', 
      source: 'a7', 
      target: 'a8', 
      animated: true, 
      label: 'Campaña activa',
      style: { stroke: '#795548', strokeWidth: 2 },
      labelStyle: { fill: '#795548', fontWeight: 600, fontSize: 11 },
    },
    // Conexiones adicionales según diagrama
    { 
      id: 'e-a2-a4', 
      source: 'a2', 
      target: 'a4', 
      type: 'smoothstep',
      style: { stroke: '#CC0000', strokeWidth: 1, strokeDasharray: '5,5' },
      label: 'Objetivos',
      labelStyle: { fill: '#CC0000', fontSize: 10 },
    },
    { 
      id: 'e-a2-a6', 
      source: 'a2', 
      target: 'a6', 
      type: 'smoothstep',
      style: { stroke: '#3333FF', strokeWidth: 1, strokeDasharray: '5,5' },
      label: 'Directrices',
      labelStyle: { fill: '#3333FF', fontSize: 10 },
    },
    { 
      id: 'e-a3-a6', 
      source: 'a3', 
      target: 'a6', 
      type: 'smoothstep',
      style: { stroke: '#001DBC', strokeWidth: 1, strokeDasharray: '5,5' },
      label: 'Creatividad',
      labelStyle: { fill: '#001DBC', fontSize: 10 },
    },
    { 
      id: 'e-a2-a7', 
      source: 'a2', 
      target: 'a7', 
      type: 'smoothstep',
      style: { stroke: '#66FF66', strokeWidth: 1, strokeDasharray: '5,5' },
      label: 'KPIs',
      labelStyle: { fill: '#66FF66', fontSize: 10 },
    },
    { 
      id: 'e-a1-a4', 
      source: 'a1', 
      target: 'a4', 
      type: 'smoothstep',
      style: { stroke: '#66FF66', strokeWidth: 1, strokeDasharray: '5,5' },
      label: 'Segmentación',
      labelStyle: { fill: '#66FF66', fontSize: 10 },
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
                    Análisis del Sistema
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Diagramas IDEF0 e Ishikawa - Sistema CRM Typica Café
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
            {/* Diagramas IDEF0 */}
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
                  <AccountTree />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Diagramas IDEF0
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                  <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab label="IDEF0 Principal (A-0)" />
                    <Tab label="IDEF0 Desglose (A0)" />
                  </Tabs>
                </Box>

                {/* IDEF0 Principal */}
                <TabPanel value={tabValue} index={0}>
                  <Card sx={{ bgcolor: '#f8f9fa', mb: 3 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Diagrama de Contexto (A-0)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Vista general del Sistema CRM mostrando las entradas, salidas, controles y mecanismos principales.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Paper sx={{ height: 600, border: '1px solid #e0e0e0' }}>
                    <ReactFlow
                      nodes={[...idef0Nodes, ...auxiliaryNodes]}
                      edges={idef0Edges}
                      fitView
                      attributionPosition="bottom-left"
                    >
                      <Background />
                      <Controls />
                      <MiniMap />
                    </ReactFlow>
                  </Paper>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={6} md={3}>
                      <Card sx={{ borderLeft: '4px solid #2196F3' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#2196F3' }}>
                            Entradas (Input)
                          </Typography>
                          <Typography variant="caption">
                            Datos e información que ingresan al sistema
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card sx={{ borderLeft: '4px solid #FF9800' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#FF9800' }}>
                            Controles (Control)
                          </Typography>
                          <Typography variant="caption">
                            Reglas y normativas que guían el proceso
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card sx={{ borderLeft: '4px solid #4CAF50' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#4CAF50' }}>
                            Salidas (Output)
                          </Typography>
                          <Typography variant="caption">
                            Resultados generados por el sistema
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card sx={{ borderLeft: '4px solid #9C27B0' }}>
                        <CardContent>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#9C27B0' }}>
                            Mecanismos (Mechanism)
                          </Typography>
                          <Typography variant="caption">
                            Recursos que ejecutan el proceso
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* IDEF0 Desglose */}
                <TabPanel value={tabValue} index={1}>
                  <Card sx={{ bgcolor: '#f8f9fa', mb: 3 }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Diagrama Desglosado (A0)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Descomposición del sistema en 8 procesos principales y sus interrelaciones.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Paper sx={{ height: 900, border: '1px solid #e0e0e0' }}>
                    <ReactFlow
                      nodes={idef0DesgloseNodes}
                      edges={idef0DesgloseEdges}
                      fitView
                      attributionPosition="bottom-left"
                    >
                      <Background />
                      <Controls />
                      <MiniMap />
                    </ReactFlow>
                  </Paper>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {[
                      { id: 'A1', name: 'Análisis y diagnóstico', color: '#2196F3', desc: 'Identificación de necesidades y análisis de mercado' },
                      { id: 'A2', name: 'Definición de campaña', color: '#4CAF50', desc: 'Establecimiento de objetivos y alcance' },
                      { id: 'A3', name: 'Desarrollo del concepto creativo', color: '#FF9800', desc: 'Creación de mensajes y diseño visual' },
                      { id: 'A4', name: 'Selección de canales y medios', color: '#9C27B0', desc: 'Definición de estrategia de medios' },
                      { id: 'A5', name: 'Planificación de cronograma y presupuesto', color: '#F44336', desc: 'Asignación de recursos y tiempos' },
                      { id: 'A6', name: 'Producción de contenidos y materiales', color: '#00BCD4', desc: 'Desarrollo de piezas publicitarias' },
                      { id: 'A7', name: 'Ejecución y monitoreo', color: '#795548', desc: 'Lanzamiento y seguimiento de campaña' },
                      { id: 'A8', name: 'Fidelización', color: '#607D8B', desc: 'Programa de lealtad y retención de clientes' },
                    ].map((proceso) => (
                      <Grid item xs={12} md={3} key={proceso.id}>
                        <Card sx={{ borderLeft: `4px solid ${proceso.color}`, height: '100%' }}>
                          <CardContent>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: proceso.color, mb: 0.5 }}>
                              {proceso.id} - {proceso.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {proceso.desc}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
              </AccordionDetails>
            </Accordion>

            {/* NUEVO: Diagrama Ishikawa */}
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
                  <BubbleChart />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Diagrama de Ishikawa (Causa-Efecto)
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Card sx={{ bgcolor: '#f8f9fa', mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Análisis de Causas Raíz
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Diagrama de espina de pescado para identificar las causas potenciales de problemas 
                      en la implementación y operación del sistema CRM.
                    </Typography>
                  </CardContent>
                </Card>
                
                {/* AQUÍ VA TU IMAGEN */}
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
                    src={IshikawaDiagram} // 👈 CAMBIA ESTA RUTA
                    alt="Diagrama de Ishikawa - Sistema CRM Typica Café"
                    sx={{
                      width: '100%',
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 1,
                    }}
                  />
                </Paper>

                {/* Categorías explicativas */}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                  {[
                    { 
                      categoria: 'Personal', 
                      color: '#2196F3', 
                      causas: ['Falta de capacitación', 'Resistencia al cambio', 'Escaso conocimiento técnico'] 
                    },
                    { 
                      categoria: 'Procesos', 
                      color: '#4CAF50', 
                      causas: ['Procesos no documentados', 'Flujos de trabajo inadecuados', 'Falta de estandarización'] 
                    },
                    { 
                      categoria: 'Tecnología', 
                      color: '#FF9800', 
                      causas: ['Infraestructura limitada', 'Problemas de integración', 'Falta de mantenimiento'] 
                    },
                    { 
                      categoria: 'Datos', 
                      color: '#9C27B0', 
                      causas: ['Datos incompletos', 'Información desactualizada', 'Falta de calidad de datos'] 
                    },
                  ].map((item, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ borderLeft: `4px solid ${item.color}`, height: '100%' }}>
                        <CardContent>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: item.color, mb: 1 }}>
                            {item.categoria}
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 2 }}>
                            {item.causas.map((causa, idx) => (
                              <Typography component="li" variant="body2" key={idx} sx={{ mb: 0.5 }}>
                                {causa}
                              </Typography>
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer */}
            
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}