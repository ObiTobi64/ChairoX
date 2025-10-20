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
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Description,
  Business,
  CalendarToday,
  Support,
  Update,
  Assessment,
  Security,
  Coffee,
} from '@mui/icons-material';

interface ItemProps {
  title: string;
  description?: string;
  items?: string[];
}

const Item = ({ title, description, items }: ItemProps) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
      {title}
    </Typography>
    {description && (
      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        {description}
      </Typography>
    )}
    {items && (
      <List dense>
        {items.map((item, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <CheckCircle sx={{ fontSize: 18, color: 'secondary.main' }} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    )}
  </Box>
);

export default function CartaEntrega() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

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
                    Carta de Entrega del Producto
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<CalendarToday />}
                      label="20 de Octubre de 2025"
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
                    <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                      hemos nacido para sorprender
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4 }}>
            {/* Información del Cliente */}
            <Card sx={{ mb: 3, bgcolor: '#f8f9fa' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Señores
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Typica – Café
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dirección: Edificio Tres Cruces, Batallón Colorados 40, La Paz, Bolivia
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Asunto: Carta de Entrega del Producto (Mantenimiento y Soporte)
                </Typography>
              </CardContent>
            </Card>

            {/* Saludo */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" paragraph>
                Estimados miembros de la Dirección de Typica – Café & Tostaduría Especializada,
              </Typography>
              <Typography variant="body1" paragraph>
                Se tiene el agrado de comunicarles la entrega exitosa del producto correspondiente al
                Sistema CRM desarrollado para Typica – Café. Durante el desarrollo e implementación del
                proyecto, hemos trabajado de manera coordinada para cumplir con los objetivos
                establecidos y asegurar que el sistema cumpla con los más altos estándares de calidad,
                disponibilidad y eficiencia operativa.
              </Typography>
            </Box>

            {/* Acordeones */}
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
              Contenido del Documento
            </Typography>

            {/* Funcionalidades */}
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
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
                  <Support />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Funcionalidades Desarrolladas y Entregadas
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Item
                  title="Soporte Correctivo"
                  description="Solución de errores o fallas reportados en la operación."
                />
                <Item
                  title="Soporte Preventivo"
                  description="Verificación periódica de rendimiento, integridad de datos y copias de seguridad."
                />
                <Item
                  title="Mesa de Ayuda (Help Desk)"
                  description="Atención prioritaria con tiempos de respuesta definidos por nivel de incidencia."
                />
                <Item title="Actualizaciones" description="Actualizaciones de software y seguridad." />
                <Item title="Reportes" description="Reportes mensuales de soporte y desempeño del sistema." />
              </AccordionDetails>
            </Accordion>

            {/* Entregables */}
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
                  <Description />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Entregables del Proyecto
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Item
                  title="Documentación de Soporte"
                  description="Detalles de incidencias resueltas, actualizaciones realizadas y recomendaciones para optimizar el uso del sistema."
                />
                <Item
                  title="Informe Final de Mantenimiento"
                  description="Resumen de las actividades realizadas, resultados obtenidos y estado actual del sistema."
                />
                <Item
                  title="Carta de Aceptación"
                  description="Documento para ser firmado por representantes de Typica que certifica la conformidad con la entrega."
                />
                <Item
                  title="Detalles Técnicos"
                  description="Detalle de requerimientos funcionales, arquitectura, tecnologías y diseño UI/UX."
                />
                <Item
                  title="Sistema CRM Funcional"
                  description="Plataforma operativa con los siguientes módulos:"
                  items={[
                    'Gestión de Clientes y Contactos',
                    'Fidelización y Recompensas',
                    'Comunicación Multicanal',
                    'Automatización de Campañas',
                    'Dashboard de Análisis y Reportes',
                    'Feedback, Reservas y Eventos',
                    'Integración con POS',
                    'Compatible con entornos web y dispositivos móviles',
                  ]}
                />
                <Item title="Manual de Instalación y Configuración" />
                <Item
                  title="Manual de Usuario Administrativo"
                  description="Guía práctica para la gestión de contenidos y uso de la plataforma."
                />
                <Item title="Manual de Usuario Final" />
              </AccordionDetails>
            </Accordion>

            {/* Mantenimiento */}
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
                  <Update />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Mantenimiento Post-Lanzamiento
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body1">
                  Como parte de nuestro compromiso, se incluye un periodo de 12 meses de soporte y
                  mantenimiento a partir de la entrega oficial del sistema. Este servicio cubre soporte
                  técnico, corrección de errores y optimización de rendimiento.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Conclusión */}
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
                  <Assessment />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Conclusión
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  En conclusión, hemos cumplido con los objetivos planteados y confiamos en que este
                  mantenimiento y soporte serán una herramienta clave para fortalecer la operación del
                  sistema CRM, asegurando la continuidad y mejora en la gestión de clientes, fidelización y
                  experiencia que marca en todas las sucursales de Typica.
                </Typography>
                <Typography variant="body1" paragraph>
                  Agradecemos la confianza depositada en nuestro equipo y esperamos que esta colaboración
                  contribuya de manera significativa al trabajo que realiza Typica – Café.
                </Typography>
                <Typography variant="body1">
                  A continuación, requerimos la firma de un representante autorizado de Typica para
                  formalizar la entrega del mantenimiento y soporte.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Divider sx={{ my: 4 }} />

            {/* Footer con Firmas */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ textAlign: 'center', p: 3, bgcolor: '#f8f9fa' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Atentamente,
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, my: 2 }}>
                    Alexander Cruz
                  </Typography>
                  <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600 }}>
                    CEO – ChairuX
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ textAlign: 'center', p: 3, bgcolor: '#f8f9fa' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Firma de Aceptación del Cliente
                  </Typography>
                  <Divider sx={{ my: 3, borderWidth: 1, borderColor: 'primary.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    Representante Autorizado
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Typica – Café
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* Documentos Adjuntos */}
            <Card sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                📎 Documentos Adjuntos:
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Documentación de Soporte',
                  'Informe Final de Mantenimiento',
                  'Carta de Aceptación',
                  'Manual de Usuario',
                  'Manual Técnico',
                ].map((doc, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Security sx={{ color: 'primary.main' }} />
                      <Typography variant="body2">{doc}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}