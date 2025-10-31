import {
  AppBar,
  Container,
  Box,
  Typography,
  Stack,
  GlobalStyles,
  Grid,
  Paper,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import {
  EmojiObjects,
  Public as PublicIcon,
  ThreeDRotation,
  ChatBubbleOutline,
  Architecture,
  Engineering,
  TrendingUp,
  AutoAwesome,
  Build,
} from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Dashboard() {
  const objetivosArea = [
    { title: 'Tecnológica', desc: 'Modelo SfM y plataforma web', icon: <ThreeDRotation />, color: '#2196F3' },
    { title: 'Marketing', desc: 'Presentación a familias y constructoras', icon: <TrendingUp />, color: '#4CAF50' },
    { title: 'Financiera', desc: 'Suscripciones rentables y escalables', icon: <AutoAwesome />, color: '#FF9800' },
    { title: 'Constructora', desc: 'Pilotos y validación con empresas', icon: <Build />, color: '#9C27B0' },
  ];

  const entregables = [
    'Software SfM para escaneo y modelado 3D',
    'Biblioteca de muebles personalizables',
    'IA conversacional para diseño por lenguaje natural',
    'Prototipos web descargables en editores 3D',
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', color: '#fff', zIndex: 1 }}>
      {/* Importa fuente serif para énfasis en itálicas */}
      <GlobalStyles styles={`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');`} />

      {/* Video de fondo */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* IFRAME YouTube como background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none', // no bloquea clics del contenido
            overflow: 'hidden',
          }}
        >
          <Box
            component="iframe"
            // 16:9 cover hack: width en vw y minWidth en vh
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: '56.25vw',      // 9/16 = 0.5625
              minWidth: '177.78vh',    // 16/9 * 100
              minHeight: '100vh',
              border: 0,
            }}
            src="https://www.youtube.com/embed/1nYfO8jHbKI?autoplay=1&mute=1&controls=0&loop=1&playlist=1nYfO8jHbKI&modestbranding=1&rel=0&showinfo=0&playsinline=1&si=Vi1fd0fv2t75iuzI"
            title="MAPt3R Background"
            frameBorder={0}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Box>

        {/* Capa oscura para contraste del texto */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.6) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </Box>

      {/* Navbar transparente */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
          backdropFilter: 'saturate(120%) blur(2px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        {/* <Toolbar sx={{ minHeight: 72, px: { xs: 2, md: 24 } }}>
          <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: 1 }}>
            MAPt3R
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" sx={{ opacity: 0.9 }}>Qué hacemos</Button>
            <Button color="inherit" sx={{ opacity: 0.9 }}>Trabajo</Button>
            <Button color="inherit" sx={{ opacity: 0.9 }}>Sobre</Button>
            <Button color="inherit" sx={{ opacity: 0.9 }}>Blog</Button>
            <Button color="inherit" sx={{ opacity: 0.9 }}>Contacto</Button>
          </Stack>

          <Button
            variant="contained"
            sx={{
              ml: 2,
              bgcolor: '#16C79A',
              color: '#0b1f2e',
              fontWeight: 700,
              '&:hover': { bgcolor: '#11a781' },
            }}
          >
            Get in touch
          </Button>
        </Toolbar> */}
      </AppBar>

      {/* Hero */}
      <Container
        sx={{
          pt: { xs: 18, md: 14 },
          pb: { xs: 10, md: 16 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: 980,
            mx: { xs: 2, md: 'auto' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Halo suave detrás del texto */}
          <Box
            sx={{
              position: 'absolute',
              zIndex: 0,
              left: { xs: '50%', md: 0 },
              top: { xs: 6, md: -16 },
              transform: { xs: 'translateX(-50%)', md: 'none' },
              width: { xs: '92%', md: '70%' },
              height: { xs: 220, md: 260 },
              background:
                'radial-gradient(60% 60% at 35% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
              filter: 'blur(12px)',
              pointerEvents: 'none',
            }}
          />

          <Typography
            component="h1"
            sx={{
              position: 'relative',
              zIndex: 1,
              fontWeight: 900,
              letterSpacing: 1,
              lineHeight: 1.05,
              fontSize: { xs: 'clamp(36px, 8vw, 64px)', md: 'clamp(54px, 6vw, 84px)' },
              background:
                'linear-gradient(90deg, #70f0c8 0%, #16C79A 50%, #9be7ff 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 6px 24px rgba(0,0,0,.35)',
            }}
          >
            MAPt3R
          </Typography>

          <Typography
            variant="h4"
            sx={{
              position: 'relative',
              zIndex: 1,
              mt: 1.5,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              fontSize: { xs: 20, md: 28 },
              textShadow: '0 3px 16px rgba(0,0,0,.35)',
            }}
          >
            Escaneamos el mundo. <Box component="span" sx={{ opacity: 0.95 }}>Imprimimos hogares.</Box>
          </Typography>

          <Box
            sx={{
              mt: 2,
              mb: 1.5,
              height: 4,
              width: { xs: 120, md: 160 },
              background: 'linear-gradient(90deg, #16C79A, transparent)',
            }}
          />

          <Typography
            variant="h5"
            sx={{
              position: 'relative',
              zIndex: 1,
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 640,
              textShadow: '0 2px 12px rgba(0,0,0,.35)',
            }}
          >
            SfM + SLAM + Impresión 3D para vivienda inteligente.
          </Typography>
        </Box>
      </Container>

      {/* === NUEVAS SECCIONES EMPRESA === */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 1 }, position: 'relative', zIndex: 2 }}>
        {/* Misión y Visión */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'rgba(255,255,255,0.94)',
                borderRadius: 3,
                border: '1px solid rgba(22,199,154,0.25)',
                color: '#0f3460',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ bgcolor: '#16C79A', color: '#0b1f2e', p: 1, borderRadius: 1 }}>
                  <EmojiObjects />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>Misión</Typography>
              </Box>
              <Typography variant="h5" sx={{ color: '#455a64', lineHeight: 1.8, textAlign: 'justify' }}>
                Desarrollar soluciones integradas de <strong>SfM</strong> para diseño, modelado y construcción 3D de
                viviendas accesibles y personalizadas, escaneando entornos reales y permitiendo diseñar con
                <strong> lenguaje natural</strong>. Impulsamos hogares sostenibles y eficientes mediante robótica accesible.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: 'rgba(255,255,255,0.94)',
                borderRadius: 3,
                border: '1px solid rgba(22,199,154,0.25)',
                color: '#0f3460',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ bgcolor: '#16C79A', color: '#0b1f2e', p: 1, borderRadius: 1 }}>
                  <PublicIcon />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>Visión</Typography>
              </Box>
              <Typography variant="h5" sx={{ color: '#455a64', lineHeight: 1.8, textAlign: 'justify' }}>
                Ser líderes globales en construcción inteligente con <strong>SfM</strong>, donde cada casa se diseña casi
                en tiempo real desde un escaneo inicial. En 10 años, democratizar vivienda personalizada, reducir impacto
                ambiental y escalar a <strong>edificios, puentes y arquitecturas complejas</strong>.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Quiénes Somos */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: 'rgba(15,52,96,0.92)',
            borderRadius: 3,
            border: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#16C79A', mb: 2 }}>
            Quiénes Somos
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', lineHeight: 1.9, textAlign: 'justify' }}>
            Equipo de <strong>Ingenieros de Software</strong> enfocado en <strong>SfM</strong> para diseño y construcción 3D accesible.
            Generamos viviendas, interiores y muebles personalizados vía <strong>IA conversacional</strong>, empoderando
            a constructoras y familias con soluciones sostenibles y eficientes.
          </Typography>
          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip icon={<Engineering />} label="Ingeniería de Software" sx={{ bgcolor: 'rgba(22,199,154,0.2)', color: '#16C79A', fontWeight: 700 }} />
            <Chip icon={<ThreeDRotation />} label="Modelado 3D + SLAM" sx={{ bgcolor: 'rgba(22,199,154,0.2)', color: '#16C79A', fontWeight: 700 }} />
            <Chip icon={<ChatBubbleOutline />} label="IA Conversacional" sx={{ bgcolor: 'rgba(22,199,154,0.2)', color: '#16C79A', fontWeight: 700 }} />
            <Chip icon={<Architecture />} label="Construcción Inteligente" sx={{ bgcolor: 'rgba(22,199,154,0.2)', color: '#16C79A', fontWeight: 700 }} />
          </Stack>
        </Paper>

        {/* Alcances y Objetivos */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'rgba(255,255,255,0.94)',
                border: '1px solid rgba(22,199,154,0.25)',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f3460', mb: 1 }}>
                  Alcance del Emprendimiento
                </Typography>
                <Typography variant="h5" sx={{ color: '#546e7a', lineHeight: 1.8, mb: 2, textAlign: 'justify' }}>
                  Inicio en mercado residencial y expansión a edificaciones e infraestructuras. Ofrecemos software
                  <strong> SfM</strong>, biblioteca de muebles, plataforma de <strong>IA</strong> y prototipos descargables.
                  Meta a 10 años: liderazgo global, reducción del <strong>30% de desperdicios</strong> y construcción tipo “impresión”.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {entregables.map((e) => (
                    <Chip key={e} label={e} sx={{ bgcolor: 'rgba(15,52,96,0.06)', border: '1px solid rgba(15,52,96,0.15)' }} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'rgba(255,255,255,0.94)',
                border: '1px solid rgba(22,199,154,0.25)',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#2a466aff', mb: 1 }}>
                  Objetivos Generales
                </Typography>
                <Stack spacing={1.2} sx={{ color: '#546e7a' }}>
                  <Typography variant="h5">• Lanzar software <strong>SfM</strong> de escaneo residencial.</Typography>
                  <Typography variant="h5">• Biblioteca de muebles <strong>3D</strong> personalizables.</Typography>
                  <Typography variant="h5">• Rentabilidad mediante <strong>suscripciones</strong>.</Typography>
                  <Typography variant="h5">• Reducir <strong>30%</strong> de desperdicios en construcción.</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Alcance por área */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            bgcolor: 'transparent',
            borderRadius: 3,
            border: '1px solid rgba(22,199,154,0.25)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffffff', textAlign: 'center', mb: 3 }}>
            Alcance por Área
          </Typography>
          <Grid container spacing={5}>
            {objetivosArea.map((o) => (
              <Grid key={o.title} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    p: 2.5,
                    height: '100%',
                    borderRadius: 2,
                    borderLeft: `15px solid ${o.color}`,
                    bgcolor: 'rgba(245,245,245,0.85)',
                    '&:hover': { transform: 'translateY(-6px)', transition: 'all .25s ease' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'right', gap: 3, mb: 1.2, color: o.color }}>
                    {o.icon}
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>{o.title}</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ color: '#546e7a' }}>{o.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
      {/* === FIN NUEVAS SECCIONES === */}

      {/* Indicador de scroll */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          opacity: 0.9,
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 36 }} />
      </Box>
    </Box>
  );
}