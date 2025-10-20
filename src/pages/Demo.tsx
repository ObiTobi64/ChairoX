import { Container, Paper, Box, Typography } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import DemoVideo from '../../public/videos/demo.mp4';

export const Demo = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Paper 
          sx={{ 
            borderRadius: 3, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            p: 3,
            textAlign: 'center',
            mb: 3
          }}
        >
          <PlayCircle sx={{ fontSize: 50, mb: 1 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Demo del Sistema CRM Typica
          </Typography>
        </Paper>

        {/* Video */}
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Box 
            sx={{ 
              position: 'relative',
              paddingTop: '56.25%', // Aspect ratio 16:9
              bgcolor: '#000'
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src={DemoVideo}
              title="Demo CRM Typica"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};