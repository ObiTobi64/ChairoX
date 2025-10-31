import { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  ExpandMore,
  AccountTree,
  Business,
  CalendarToday,
  Description,
  Checklist,
  WarningAmber,
  PictureAsPdf,
  OpenInNew,
} from '@mui/icons-material';

// QUITA estas importaciones de ReactFlow y el css
// import ReactFlow, { type Node, type Edge, Background, Controls, MiniMap } from 'reactflow';
// import 'reactflow/dist/style.css';

// AGREGA la imagen del organigrama
import DiagramaJerarquico from '../assets/images/diagramaJerarquico.png';

export default function Analisis() {
  const [expanded, setExpanded] = useState<string | false>('panelOrg');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // elimina orgNodes y orgEdges (ya no se usan con imagen)

  // Manuales de funciones
  const funciones = [
    {
      rol: 'CTO',
      area: 'Tecnología',
      funciones: ['Definir arquitectura SfM/SLAM', 'Liderar roadmap técnico', 'Asegurar calidad y performance'],
      indicadores: ['Disponibilidad plataforma', 'Velocidad de releases', 'Precisión reconstrucción 3D'],
    },
    {
      rol: 'Lead Operaciones',
      area: 'Operaciones',
      funciones: ['Planificar despliegues', 'Coordinar impresión 3D', 'Monitorear SLAs'],
      indicadores: ['Tiempo de puesta en marcha', 'Órdenes cumplidas', 'SLA >= 99%'],
    },
    {
      rol: 'Head Growth',
      area: 'Comercial',
      funciones: ['Estrategia GTM', 'Funnels y partnerships', 'Pricing y retención'],
      indicadores: ['MRR', 'CAC/LTV', 'Tasa de retención'],
    },
  ];

  // Manuales de actividades (procedimientos clave)
  const actividades = [
    {
      titulo: 'Flujo de escaneo → modelo 3D',
      pasos: [
        'Captura con dispositivo (SLAM) del sitio',
        'Procesamiento SfM (nube de puntos y malla)',
        'Generación de modelo optimizado',
        'Exportación glTF/OBJ y publicación en plataforma',
      ],
    },
    {
      titulo: 'Diseño por IA conversacional',
      pasos: [
        'Prompt del cliente (lenguaje natural)',
        'Validación de restricciones y normas',
        'Aplicación de layout, mobiliario y materiales',
        'Previsualización y ajustes iterativos',
      ],
    },
    {
      titulo: 'Impresión 3D de vivienda',
      pasos: [
        'Segmentación por capas',
        'Generación de G-code/paths',
        'Ejecución y monitoreo',
        'QA post-impresión y reporte',
      ],
    },
  ];

  // Gestión de riesgos
  const riesgos = [
    {
      nombre: 'Precisión del modelo insuficiente',
      impacto: 'Alto',
      prob: 'Media',
      mitigacion: 'Validación con dataset de referencia, pruebas en obra, ajuste de parámetros SfM.',
      color: '#e53935',
    },
    {
      nombre: 'Fallas en impresión 3D',
      impacto: 'Alto',
      prob: 'Baja',
      mitigacion: 'Redundancia en equipos, mantenimiento preventivo, simulación previa.',
      color: '#fb8c00',
    },
    {
      nombre: 'Adopción lenta del mercado',
      impacto: 'Media',
      prob: 'Media',
      mitigacion: 'Pilotos con constructoras, casos de éxito, pricing escalonado.',
      color: '#fdd835',
    },
    {
      nombre: 'Cumplimiento normativo',
      impacto: 'Alto',
      prob: 'Baja',
      mitigacion: 'Asesoría legal, mapeo de normativa por país, certificaciones.',
      color: '#8e24aa',
    },
  ];

  // NUEVO: rutas de manuales (PDFs en /public)
  const manualesFunciones = [
    { id: 'ceo',  titulo: 'Manual de funciones — CEO',  src: '/pdfs/manuales/ceo.pdf'  },
    { id: 'cfo',  titulo: 'Manual de funciones — CFO',  src: '/pdfs/manuales/cfo.pdf'  },
    { id: 'chro', titulo: 'Manual de funciones — CHRO', src: '/pdfs/manuales/chro.pdf' },
    { id: 'cmo',  titulo: 'Manual de funciones — CMO',  src: '/pdfs/manuales/cmo.pdf'  },
  ];

  // Documento de Gestión de Riesgos (contenido completo)
  const riesgosIntro = {
    titulo: 'Documento de Identificación y Mitigación de Riesgos — Proyecto MAPt3R',
    parrafos: [
      'El presente documento tiene por finalidad identificar, clasificar y proponer estrategias de mitigación y contingencia ante los riesgos asociados al diseño, desarrollo e implementación del Servicio MAPt3R.',
      'El enfoque adoptado responde a una perspectiva técnico‑consultiva, orientada a garantizar la continuidad operativa, la seguridad de la información y la calidad del producto final durante todas las fases del proyecto.',
      'La identificación de riesgos se basa en los componentes críticos del sistema, considerando variables técnicas y organizacionales. Cada riesgo se presenta categorizado y acompañado de un plan de mitigación (acciones preventivas) y un plan de contingencia (acciones correctivas).',
    ],
  };

  type RiesgoItem = {
    titulo: string;
    descripcion?: string;
    mitigacion: string;
    contingencia: string;
  };

  const riesgosCategorias: { nombre: string; items: RiesgoItem[] }[] = [
    {
      nombre: '1. Infraestructura',
      items: [
        {
          titulo: '1.1 Fallo de hardware GPU/servidores',
          descripcion: 'Fallo de componentes físicos (GPU, discos, placas) por envejecimiento o sobrecarga térmica.',
          mitigacion:
            'Inventario HW con garantías; contratos de mantenimiento; monitorización SMART y de temperatura; rotación preventiva de componentes; pruebas de estrés periódicas.',
          contingencia:
            'Failover a nodos de reserva; reprogramar jobs; activar colocation/cloud temporal y reemplazo físico urgente.',
        },
        {
          titulo: '1.2 Interrupción eléctrica prolongada',
          descripcion: 'Cortes de suministro o UPS/generador insuficiente que afectan operación.',
          mitigacion:
            'UPS dimensionado y generador con mantenimiento; pruebas periódicas de conmutación; políticas de ahorro energético para picos.',
          contingencia:
            'Encendido de generador; migración de cargas críticas a sitio secundario; apagado controlado de servicios no esenciales.',
        },
        {
          titulo: '1.3 Fallas por sobrecalentamiento / refrigeración',
          descripcion: 'Ineficiente HVAC o flujo de aire que provoca temperaturas fuera de rango.',
          mitigacion:
            'Diseño HVAC adecuado, sensorización ambiental por rack, mantenimiento preventivo y alertas tempranas.',
          contingencia:
            'Reducir carga en racks afectados; trasladar cargas críticas; reparación inmediata del sistema de refrigeración.',
        },
      ],
    },
    {
      nombre: '2. Red y Conectividad',
      items: [
        {
          titulo: '2.1 Corte de enlace a Internet o ISP',
          descripcion: 'Interrupción del servicio por fallo o saturación del proveedor.',
          mitigacion: 'Doble ISP, enlaces redundantes, BGP si aplica, monitor de latencia y ancho de banda.',
          contingencia:
            'Reenrutamiento por ISP alterno; acceso administrativo por enlace celular/backup; notificar clientes y activar SLAs alternos.',
        },
      ],
    },
    {
      nombre: '3. Seguridad',
      items: [
        {
          titulo: '3.1 Acceso físico no autorizado a servidores',
          mitigacion:
            'Control de acceso (tarjetas/biometría), CCTV, registro de visitas, políticas de seguridad física.',
          contingencia:
            'Aislar el rack afectado, auditoría forense, revocar credenciales y notificar según política.',
        },
        {
          titulo: '3.2 Robo o fuga de modelos y/o datos (IP)',
          mitigacion:
            'RBAC estricto, cifrado en reposo y tránsito, KMS/HSM, DLP y segmentación de redes.',
          contingencia:
            'Revocar accesos comprometidos, rotación de claves, restaurar desde backups y notificar stakeholders/legal.',
        },
      ],
    },
    {
      nombre: '4. Seguridad (IA)',
      items: [
        {
          titulo: '4.1 Filtración de datos sensibles en modelos',
          descripcion:
            'Los modelos reproducen PII u otros datos sensibles aprendidos del entrenamiento.',
          mitigacion:
            'Anonimización y limpieza de datos; aplicar differential privacy y pruebas de extracción antes de producción.',
          contingencia:
            'Retirar modelo de producción, reentrenar con dataset saneado y notificar afectados según regulación.',
        },
      ],
    },
    {
      nombre: '5. Legal & Compliance',
      items: [
        {
          titulo: '5.1 Infracción de derechos de autor por datos de entrenamiento',
          descripcion: 'Uso de assets 3D/texturas/licencias sin autorización clara.',
          mitigacion:
            'Auditoría de orígenes, preferir datasets con licencias claras, contratos de cesión y trazabilidad.',
          contingencia:
            'Retirar modelos implicados, negociar licencias o recompilar dataset, coordinar respuesta legal.',
        },
        {
          titulo: '5.2 Regulaciones de export control / uso dual',
          mitigacion: 'Evaluación legal temprana, clasificación de uso y restricciones por país/usuario.',
          contingencia:
            'Bloquear acceso a usuarios/países afectados y aplicar controles de licenciamiento.',
        },
      ],
    },
    {
      nombre: '6. Calidad de salida',
      items: [
        {
          titulo: '6.1 Modelos 3D con errores estructurales/inseguros',
          descripcion:
            'Outputs con topología incorrecta, escalas erradas o no aptos para uso.',
          mitigacion:
            'Pipelines de QA automático (watertightness, escala, topología), datasets de calidad y métricas de validación.',
          contingencia:
            'Rechazo automático de outputs; re‑entrenamiento o post‑proceso; comunicar incidencia al cliente.',
        },
      ],
    },
    {
      nombre: '7. Operacional',
      items: [
        {
          titulo: '7.1 Escalabilidad y picos de demanda',
          descripcion: 'Capacidad GPU/infra insuficiente ante picos, causando latencia y errores.',
          mitigacion:
            'Dimensionamiento con headroom, colas de trabajo, optimización (quantization, caching) y plan de bursting.',
          contingencia:
            'Priorizar clientes, habilitar bursting a cloud, provisionar nodos adicionales y comunicarse con clientes.',
        },
      ],
    },
    {
      nombre: '8. Costos',
      items: [
        {
          titulo: '8.1 Costos operativos elevados por entrenamiento/inferencia',
          descripcion: 'Consumo energético y de recursos que incrementan costos operativos.',
          mitigacion:
            'Optimización de entrenamiento (mixed precision), planificación de jobs nocturnos, monitor de consumo y negociación de tarifas.',
          contingencia:
            'Pausar trabajos no críticos, replanificar entrenamientos y offload temporal a cloud.',
        },
      ],
    },
    {
      nombre: '9. Backup & DR',
      items: [
        {
          titulo: '9.1 Pérdida de datos por backup incompleto o corrupto',
          descripcion: 'Políticas de backup insuficientes o backups no verificables.',
          mitigacion: 'Política 3‑2‑1, verificaciones periódicas y pruebas de restauración regulares.',
          contingencia: 'Restaurar desde copia offsite, activar sitio DR y comunicar impacto a stakeholders.',
        },
      ],
    },
    {
      nombre: '10. Desarrollo',
      items: [
        {
          titulo: '10.1 Integración con pipelines CI/CD fallida',
          descripcion: 'Despliegues con errores por configuración o exposición de secretos.',
          mitigacion: 'Infra como código, pipelines reproducibles, secretos en vault y revisión de PRs.',
          contingencia: 'Revertir a versión estable, rollback controlado y reparación en entorno aislado.',
        },
      ],
    },
    {
      nombre: '11. Dependencias',
      items: [
        {
          titulo: '11.1 Vulnerabilidades en librerías ML o motores 3D',
          descripcion:
            'Dependencias con CVEs o fallos de seguridad que comprometen la plataforma.',
          mitigacion: 'Escaneo SCA, políticas de actualización, pruebas en sandbox y alternativas seguras.',
          contingencia: 'Aplicar parches/hotfixes, aislar servicio vulnerable y notificar plan de mitigación.',
        },
      ],
    },
    {
      nombre: '12. Privacidad',
      items: [
        {
          titulo: '12.1 Incumplimiento de regulaciones (consentimiento, LOPD/GDPR)',
          descripcion:
            'Procesamiento de datos sin permisos o sin bases legales claras.',
          mitigacion:
            'Políticas de privacidad claras, consentimientos explícitos, minimización de datos y registro de actividades.',
          contingencia:
            'Suspender procesos cuestionados, cooperar con autoridades y notificar brechas según normativa.',
        },
      ],
    },
    {
      nombre: '13. Continuidad',
      items: [
        {
          titulo: '13.1 Dependencia de una sola persona (key‑person risk)',
          descripcion: 'Conocimiento centralizado en un individuo clave del proyecto.',
          mitigacion:
            'Documentación, pair programming, rotación de conocimiento y on‑call distribuido.',
          contingencia:
            'Activar plan de sustitución, contratar temporalmente y transferir conocimiento urgente.',
        },
      ],
    },
    {
      nombre: '14. Ética / Uso indebido',
      items: [
        {
          titulo: '14.1 Uso malintencionado de modelos (deepfakes, falsificaciones)',
          descripcion: 'Abuso de la plataforma para actividades ilícitas o dañinas.',
          mitigacion: 'AUP, límites por cuenta, verificación KYC para empresas y logging forense.',
          contingencia:
            'Bloquear cuentas abusivas, auditoría forense y cooperación legal.',
        },
      ],
    },
    {
      nombre: '15. Licencias SW',
      items: [
        {
          titulo: '15.1 Conflicto por licencias de software abierto (OSS)',
          descripcion:
            'Uso de OSS con cláusulas copyleft que afecta distribución comercial.',
          mitigacion:
            'Revisión legal de licencias, preferencia por dependencias compatibles y acuerdos CLA.',
          contingencia:
            'Reempaquetar con alternativas, negociar licencias o refactor para eliminar dependencia.',
        },
      ],
    },
    {
      nombre: '16. Integración API',
      items: [
        {
          titulo: '16.1 Cambios en APIs de terceros (formatos, rate limits)',
          descripcion:
            'Dependencia de proveedores externos que cambian contratos o formatos.',
          mitigacion: 'Versionado, timeouts, retries, circuit breaker y caching.',
          contingencia:
            'Fallback local, comunicación con proveedor y adaptación/patch rápido.',
        },
      ],
    },
    {
      nombre: '17. Mantenimiento',
      items: [
        {
          titulo: '17.1 Degradación por deuda técnica (tech debt)',
          descripcion:
            'Acumulación de código y arquitectura que reduce velocidad de entrega.',
          mitigacion:
            'Registro de deuda técnica, code quality gates y sprints dedicados a refactor.',
          contingencia:
            'Programar sprint de mantenimiento, congelar features mayores temporalmente.',
        },
      ],
    },
    {
      nombre: '18. Medio ambiente',
      items: [
        {
          titulo: '18.1 Riesgos por condiciones ambientales en el datacenter',
          descripcion:
            'Incendios, inundaciones o condiciones extremas que afectan la infraestructura local.',
          mitigacion:
            'Sensores ambientales, detectores de humo, sistema de supresión, evaluación de riesgo ubicacional.',
          contingencia:
            'Evacuación segura, activación de DR offsite y restauración desde copias fuera de sitio.',
        },
      ],
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', py: 4 }}>
      {/* Video de fondo ... (ya presente) */}
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
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
                    Documentación Organizacional
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                    Diagrama jerárquico, manuales y gestión de riesgos
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<CalendarToday />}
                      label="Octubre 2025"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                    <Chip
                      icon={<Business />}
                      label="MAPt3R"
                      sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4 }}>
            {/* 1) Diagrama Jerárquico */}
            <Accordion expanded={expanded === 'panelOrg'} onChange={handleChange('panelOrg')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccountTree />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Diagrama Jerárquico
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Paper sx={{ height: 500, border: '1px solid #e0e0e0' }}>
                  {/* <ReactFlow nodes={orgNodes} edges={orgEdges} fitView attributionPosition="bottom-left">
                    <Background />
                    <Controls />
                    <MiniMap />
                  </ReactFlow> */}
                  <img src={DiagramaJerarquico} alt="Diagrama Jerárquico" style={{ width: '65%', height: 'auto', justifyContent: 'center' }} />
                </Paper>
              </AccordionDetails>
            </Accordion>

            {/* 2) Manuales de funciones */}
            <Accordion expanded={expanded === 'panelFunciones'} onChange={handleChange('panelFunciones')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: 'secondary.main', color: 'white', '&:hover': { bgcolor: 'secondary.dark' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Description />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Manuales de funciones
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  {manualesFunciones.map((m) => (
                    <Grid key={m.id} item xs={12} md={6}>
                      <Accordion disableGutters sx={{ border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                            <PictureAsPdf sx={{ color: '#e53935' }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f3460' }}>
                              {m.titulo}
                            </Typography>
                          </Box>
                          <Box
                            component="a"
                            href={m.src}
                            target="_blank"
                            rel="noopener"
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              color: '#0f3460',
                              border: '1px solid rgba(15,52,96,.2)',
                              '&:hover': { bgcolor: 'rgba(15,52,96,.05)' },
                            }}
                            title="Abrir en nueva pestaña"
                          >
                            <OpenInNew fontSize="small" />
                            <Typography variant="caption">Abrir PDF</Typography>
                          </Box>
                        </AccordionSummary>

                        {/* Visor embebido opcional */}
                        <AccordionDetails>
                          <Box sx={{ height: 560, borderRadius: 1, overflow: 'hidden' }}>
                            <Box
                              component="iframe"
                              src={`${m.src}#toolbar=1&navpanes=0&view=FitH`}
                              sx={{ width: '100%', height: '100%', border: 0 }}
                              title={m.titulo}
                            />
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* 3) Manuales de actividades */}
            <Accordion expanded={expanded === 'panelActividades'} onChange={handleChange('panelActividades')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: 'secondary.main', color: 'white', '&:hover': { bgcolor: 'secondary.dark' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Checklist />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Manuales de actividades
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  {actividades.map((a) => (
                    <Grid key={a.titulo} item xs={12} md={4}>
                      <Card sx={{ height: '100%', borderLeft: '4px solid #0f3460' }}>
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0f3460', mb: 1 }}>
                            {a.titulo}
                          </Typography>
                          <Box component="ol" sx={{ m: 0, pl: 2 }}>
                            {a.pasos.map((p, i) => (
                              <Typography key={i} component="li" variant="body2" sx={{ mb: 0.5 }}>
                                {p}
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

            {/* 4) Gestión de riesgos */}
            <Accordion expanded={expanded === 'panelRiesgos'} onChange={handleChange('panelRiesgos')} sx={{ mb: 2, boxShadow: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ bgcolor: 'error.main', color: 'white', '&:hover': { bgcolor: 'error.dark' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WarningAmber />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Gestión de riesgos
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                {/* Introducción del documento */}
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f3460', mb: 1 }}>
                  {riesgosIntro.titulo}
                </Typography>
                {riesgosIntro.parrafos.map((t, i) => (
                  <Typography key={i} variant="body2" sx={{ color: 'text.secondary', mb: 1.2, textAlign: 'justify' }}>
                    {t}
                  </Typography>
                ))}

                {/* Categorías y riesgos */}
                {riesgosCategorias.map((cat) => (
                  <Accordion key={cat.nombre} disableGutters sx={{ mt: 2, border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0f3460' }}>
                        {cat.nombre}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2}>
                        {cat.items.map((r) => (
                          <Grid key={r.titulo} item xs={12}>
                            <Card sx={{ borderLeft: '5px solid #ef5350' }}>
                              <CardContent>
                                <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>
                                  {r.titulo}
                                </Typography>
                                {r.descripcion && (
                                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                    {r.descripcion}
                                  </Typography>
                                )}
                                <Grid container spacing={2}>
                                  <Grid item xs={12} md={6}>
                                    <Box sx={{ p: 1.5, bgcolor: '#fff3e0', borderRadius: 1 }}>
                                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#e65100', mb: 0.5 }}>
                                        Plan de Mitigación
                                      </Typography>
                                      <Typography variant="body2">{r.mitigacion}</Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <Box sx={{ p: 1.5, bgcolor: '#e3f2fd', borderRadius: 1 }}>
                                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0d47a1', mb: 0.5 }}>
                                        Plan de Contingencia
                                      </Typography>
                                      <Typography variant="body2">{r.contingencia}</Typography>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
