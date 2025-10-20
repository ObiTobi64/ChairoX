import { Grid, Paper, Typography, Box, Card, CardContent, Chip, Alert } from '@mui/material';
import {
  TrendingUp,
  AttachMoney,
  BusinessCenter,
  CalendarToday,
  Engineering,
  LocalCafe,
  ShowChart,
  Timeline as TimelineIcon,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function Dashboard() {
  // Datos de simulación Monte Carlo (basados en el análisis)
  const costoEstimado = {
    media: 45678,
    mediana: 45500,
    percentil5: 38200,
    percentil95: 53100,
    desviacion: 4250,
  };

  const fasesProyecto = [
    { fase: 'Análisis', devs: 1, meses: 1, color: '#2196F3' },
    { fase: 'Desarrollo', devs: 5, meses: 3, color: '#4CAF50' },
    { fase: 'Revisión', devs: 1, meses: 2, color: '#FF9800' },
  ];

  const distribucionCostos = [
    { rango: '35k-40k', frecuencia: 850, probabilidad: 8.5 },
    { rango: '40k-45k', frecuencia: 3200, probabilidad: 32 },
    { rango: '45k-50k', frecuencia: 3850, probabilidad: 38.5 },
    { rango: '50k-55k', frecuencia: 1650, probabilidad: 16.5 },
    { rango: '55k+', frecuencia: 450, probabilidad: 4.5 },
  ];

  const desgloseCostos = [
    { categoria: 'Mano de Obra', valor: 43500, porcentaje: 95.2 },
    { categoria: 'Hosting & Infra', valor: 1200, porcentaje: 2.6 },
    { categoria: 'Licencias', valor: 500, porcentaje: 1.1 },
    { categoria: 'Contingencia', valor: 478, porcentaje: 1.1 },
  ];

  const COLORS = ['#2196F3', '#4CAF50', '#FF9800', '#9C27B0'];

  const evolucionMCMC = [
    { iter: 0, costo: 50000 },
    { iter: 2000, costo: 48000 },
    { iter: 4000, costo: 46500 },
    { iter: 6000, costo: 45800 },
    { iter: 8000, costo: 45600 },
    { iter: 10000, costo: 45678 },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: '#0f3460' }}>
          ChairuX
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
          Desarrolladora de Soluciones Digitales
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', maxWidth: 800 }}>
          Análisis de viabilidad y estimación de costos para el Sistema CRM de Typica Café 
          basado en simulación Monte Carlo (10,000 iteraciones)
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Tarjetas principales de resumen */}
        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AttachMoney sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                ${costoEstimado.media.toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Costo Estimado Medio
              </Typography>
              <Chip 
                label={`σ = $${costoEstimado.desviacion.toLocaleString()}`}
                size="small"
                sx={{ mt: 1, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalendarToday sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                6 Meses
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Duración del Proyecto
              </Typography>
              <Chip 
                label="3 Fases"
                size="small"
                sx={{ mt: 1, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Engineering sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                5 Devs
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Equipo Máximo
              </Typography>
              <Chip 
                label="Peak: Mes 2-4"
                size="small"
                sx={{ mt: 1, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                95%
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                Intervalo de Confianza
              </Typography>
              <Chip 
                label={`$${costoEstimado.percentil5.toLocaleString()} - $${costoEstimado.percentil95.toLocaleString()}`}
                size="small"
                sx={{ mt: 1, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Distribución de Costos - Histograma */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Distribución de Costo Total - Monte Carlo
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={distribucionCostos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rango" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`${value} simulaciones`, 'Frecuencia']}
                />
                <Legend />
                <Bar dataKey="frecuencia" fill="#69b3a2" name="Frecuencia" />
              </BarChart>
            </ResponsiveContainer>
            <Alert severity="info" sx={{ mt: 2 }}>
              <Typography variant="body2">
                <strong>Media:</strong> ${costoEstimado.media.toLocaleString()} USD | 
                <strong> Mediana:</strong> ${costoEstimado.mediana.toLocaleString()} USD | 
                <strong> Moda:</strong> $45k-50k (38.5% de casos)
              </Typography>
            </Alert>
          </Paper>
        </Grid>

        {/* Desglose de Costos - Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Desglose de Costos
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={desgloseCostos}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ porcentaje }) => `${porcentaje}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {desgloseCostos.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2 }}>
              {desgloseCostos.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box 
                    sx={{ 
                      width: 12, 
                      height: 12, 
                      bgcolor: COLORS[index], 
                      borderRadius: '50%', 
                      mr: 1 
                    }} 
                  />
                  <Typography variant="body2">
                    {item.categoria}: ${item.valor.toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Evolución MCMC */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Convergencia del Algoritmo MCMC
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={evolucionMCMC}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="iter" label={{ value: 'Iteraciones', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Costo (USD)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="costo" 
                  stroke="#2b7" 
                  strokeWidth={2} 
                  name="Costo estimado"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <Alert severity="success" sx={{ mt: 2 }}>
              <Typography variant="body2">
                El algoritmo convergió después de ~8,000 iteraciones. 
                Estabilidad alcanzada en <strong>${costoEstimado.media.toLocaleString()} ± ${costoEstimado.desviacion.toLocaleString()}</strong>
              </Typography>
            </Alert>
          </Paper>
        </Grid>

        {/* Fases del Proyecto */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Fases del Proyecto
            </Typography>
            {fasesProyecto.map((fase, index) => (
              <Card key={index} sx={{ mb: 2, borderLeft: `4px solid ${fase.color}` }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    {fase.fase}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip 
                      icon={<Engineering />}
                      label={`${fase.devs} dev${fase.devs > 1 ? 's' : ''}`}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip 
                      icon={<CalendarToday />}
                      label={`${fase.meses} mes${fase.meses > 1 ? 'es' : ''}`}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            ))}
            <Alert severity="warning" sx={{ mt: 2 }}>
              <Typography variant="body2">
                <strong>Fase 2 (Desarrollo)</strong> concentra el 83% del esfuerzo total
              </Typography>
            </Alert>
          </Paper>
        </Grid>

        {/* Cliente: Typica */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #0f3460 0%, #16C79A 100%)' }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={2}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    bgcolor: 'white',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1,
                    mx: 'auto',
                  }}
                >
                  <LocalCafe sx={{ fontSize: 60, color: '#0f3460' }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                  Proyecto: Sistema CRM para Typica Café
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                  Plataforma integral de gestión de clientes, fidelización y comunicación multicanal 
                  para fortalecer la experiencia del cliente en todas las sucursales.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip 
                    label="React + TypeScript"
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                  <Chip 
                    label="Node.js + Express"
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                  <Chip 
                    label="PostgreSQL"
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                  <Chip 
                    label="APIs Multicanal"
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="overline" sx={{ color: '#666' }}>
                      Rango de Inversión
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f3460' }}>
                      $38k - $53k USD
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                      Intervalo de confianza 90%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Conclusiones */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
              <ShowChart /> Conclusiones del Análisis Monte Carlo
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Alert severity="success" sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    ✅ Viabilidad Confirmada
                  </Typography>
                  <Typography variant="body2">
                    El proyecto tiene un <strong>95% de probabilidad</strong> de completarse entre 
                    <strong> $38,200 y $53,100 USD</strong>, con una media de <strong>$45,678 USD</strong>.
                  </Typography>
                </Alert>
              </Grid>
              <Grid item xs={12} md={6}>
                <Alert severity="info" sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    📊 Distribución Concentrada
                  </Typography>
                  <Typography variant="body2">
                    El <strong>70.5%</strong> de las simulaciones arrojan costos entre $40k-50k USD, 
                    indicando alta predictibilidad.
                  </Typography>
                </Alert>
              </Grid>
              <Grid item xs={12} md={6}>
                <Alert severity="warning">
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    ⚠️ Factor de Riesgo Principal
                  </Typography>
                  <Typography variant="body2">
                    La variación en <strong>sueldos mensuales</strong> ($1,200-$1,800) genera el 92% 
                    de la variabilidad total del costo.
                  </Typography>
                </Alert>
              </Grid>
              <Grid item xs={12} md={6}>
                <Alert severity="error">
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    🎯 Recomendación Estratégica
                  </Typography>
                  <Typography variant="body2">
                    Fijar contratos con desarrolladores al <strong>inicio del proyecto</strong> reduce 
                    la desviación estándar en <strong>~$2,000 USD</strong>.
                  </Typography>
                </Alert>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}