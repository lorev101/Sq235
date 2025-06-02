import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Box,
  Link,
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

const prodotti = [
  {
    nome: "Tiramisù",
    descrizione: "Classico italiano con caffè e mascarpone",
    prezzo: "4.50",
    immagine: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&h=500",
  },
  {
    nome: "Croissant",
    descrizione: "Sfogliato al burro francese",
    prezzo: "2.00",
    immagine: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&h=500",
  },
  {
    nome: "Profiterole",
    descrizione: "Bignè con crema chantilly",
    prezzo: "3.80",
    immagine: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?auto=format&fit=crop&w=500&h=500",
  },
  {
    nome: "Macarons",
    descrizione: "Assortimento di gusti",
    prezzo: "2.50",
    immagine: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=500&h=500",
  },
];

function PasticceriaLandingPage() {
  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif", backgroundColor: "#fffaf5" }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: 'primary.light', color: 'primary.dark' }} elevation={0}>
        <Toolbar>
          <CakeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "Pacifico, cursive" }}>
            Dolce Vita
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Chi siamo</Button>
          <Button color="inherit">Contatti</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://source.unsplash.com/1600x600/?pastry")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        <Typography variant="h3" align="center" sx={{ fontFamily: "Pacifico, cursive" }}>
          Scopri il gusto della tradizione
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 5,
            px: 3
          }}
        >
          <Box sx={{ paddingBottom: 2 }}>
            <Link
              href="/prodotti"
              style={{
                textDecoration: 'none',
                fontFamily: 'Playfair Display, cursive',
                fontWeight: 700,
                borderRadius: 3,
                borderWidth: 2,
                borderColor: '#8e6e53',
                color: '#8e6e53',
                fontSize: '1.1rem',
                letterSpacing: 1,
                backgroundColor: 'transparent',
                transition: 'all 0.3s',
                boxShadow: 'none',
               
            
              }}
            >
             
                Scopri la nostra arte
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: { xs: 'nowrap', md: 'wrap' },
              gap: 4,
              justifyContent: { xs: 'flex-start', md: 'center' },
              overflowX: { xs: 'auto', md: 'visible' },
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': {
                height: 6,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'background.paper',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'primary.light',
                borderRadius: 3,
              },
              pb: { xs: 2, md: 0 },
            }}
          >
            {prodotti.map((prodotto) => (
              <Box
                sx={{
                  width: {
                    xs: '260px',
                    md: 'calc(33.333% - 16px)',
                  },
                  flex: { xs: '0 0 auto', md: '1 1 auto' },
                  minWidth: { md: '280px' },
                  maxWidth: { md: '320px' },
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: "transform 0.2s",
                    '&:hover': { 
                      transform: "scale(1.02)",
                      backgroundColor: 'secondary.light' 
                    },
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={prodotto.immagine}
                    alt={prodotto.nome}
                    sx={{
                      objectFit: 'cover',
                      aspectRatio: '1/1',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {prodotto.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {prodotto.descrizione}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                      €{prodotto.prezzo}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: 'primary.main', color: "white", py: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontFamily: "Pacifico, cursive" }}>
          Dolce Vita
              </Typography>
              <Typography variant="body2">Il gusto della tradizione artigianale.</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1" gutterBottom>Social</Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Link href="#" color="inherit"><InstagramIcon /></Link>
          <Link href="#" color="inherit"><FacebookIcon /></Link>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1" gutterBottom>Contatti</Typography>
              <Typography variant="body2">Via dei Dolci, 123 - Roma</Typography>
              <Typography variant="body2">info@dolcevita.it</Typography>
              <Typography variant="body2">Lun - Sab: 8:00 - 20:00</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PasticceriaLandingPage />
    </ThemeProvider>
  );
}

export default App;
