import { Box, Container, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";

const Myproducts = [
  { text: "LUNETTES", link: "src/products/five.jpg" },
  { text: "MONTRE", link: "src/products/fourd.jpg" },
  { text: "JACKET", link: "src/products/images.jpg" },
  { text: "BAGUE", link: "src/products/second.jpg" },
  { text: "SAC", link: "src/products/six.jpg" },
  { text: "HOODIES", link: "src/products/third.jpg" },
];

const Main = () => {
  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container sx={{ mt: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            className="Mybutton"
            value="left"
            aria-label="left aligned"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important" }}
            className="Mybutton"
            value="center"
            aria-label="centered"
          >
            MEN Category
          </ToggleButton>
          <ToggleButton
            className="Mybutton"
            value="right"
            aria-label="right aligned"
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"}  flexWrap={"wrap"} justifyContent={"space-between"}   >
        
        {Myproducts.map((item) => {
          return (
            <Card key={item} sx={{ maxWidth: 345, mt: 6 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={item.link}
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.text}
                  </Typography>
        
                  <Typography variant="subtitle1" component="p">
                    12.99€
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
        
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button sx={{ textTransform: "capitalize" }} size="small">
                  <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                  Add to cart
                </Button>
                <Rating name="read-only" value={4} readOnly />
              </CardActions>
            </Card>
          );
        })}
      </Stack >
    
    </Container>
  );
};

export default Main;
