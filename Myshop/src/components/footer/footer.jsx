
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, Payment, LocalShipping, HelpOutline } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx=
    {{ 
      mt: 5,
      backgroundColor: '#2B3445', 
      color: 'grey.50', 
      padding: '40px 0',

      }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>Catégories</Typography>
            <Link href="#" variant="body2" color="inherit" display="block">Électronique</Link>
            <Link href="#" variant="body2" color="inherit" display="block">Accessoires</Link>
            <Link href="#" variant="body2" color="inherit" display="block">Vêtements</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>Service Client</Typography>
            <Link href="#" variant="body2" color="inherit" display="block">FAQ</Link>
            <Link href="#" variant="body2" color="inherit" display="block">Politique de retour</Link>
            <Link href="#" variant="body2" color="inherit" display="block">Support</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>À propos</Typography>
            <Link href="#" variant="body2" color="inherit" display="block">Notre histoire</Link>
            <Link href="#" variant="body2" color="inherit" display="block">Contactez-nous</Link>
            <Link href="#" variant="body2" color="inherit" display="block">Carrières</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="inherit" gutterBottom>Suivez-nous</Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ marginRight: '10px' }}><Facebook /></Link>
              <Link href="#" color="inherit" sx={{ marginRight: '10px' }}><Twitter /></Link>
              <Link href="#" color="inherit" sx={{ marginRight: '10px' }}><Instagram /></Link>
            </Box>
            <Typography variant="h6" color="inherit" gutterBottom sx={{ marginTop: '20px' }}>Moyens de paiement</Typography>
            <Box>
              <Payment fontSize="large" />
              {/* Ajoutez d'autres icônes de paiement ici */}
            </Box>
            <Typography variant="h6" color="inherit" gutterBottom sx={{ marginTop: '20px' }}>Livraison</Typography>
            <LocalShipping fontSize="large" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
