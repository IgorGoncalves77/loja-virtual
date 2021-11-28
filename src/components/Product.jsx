import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function Product({ product }) {
  return (
    <Card sx={{ width: 212, boxShadow: "none" }}>
      <CardMedia
        component="img"
        width="196"
        height="215"
        image={product.image}
        alt={product.name}
        sx={{ border: "1px solid #E2DEDC", mb: 2 }}
      />
      <Typography align="center" sx={{ color: "#626262", height: 40 }}>
        {product.name.toUpperCase()}
      </Typography>
      {product.specialPrice != null ? (
        <Grid container justifyContent="space-evenly">
          <Grid item>
            <Typography
              align="center"
              sx={{
                textDecoration: "line-through",
                color: "#808185",
                height: 28,
              }}
            >
              R${product.price}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" sx={{ color: "#1E2B50", fontSize: 21 }}>
              R${product.specialPrice}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Typography align="center" sx={{ color: "#1E2B50", fontSize: 21 }}>
          R${product.price}
        </Typography>
      )}

      <Button
        color="secondary"
        variant="contained"
        sx={{
          mt: 2,
          mb: 2,
          borderRadius: 1,
          opacity: 1,
          height: 40,
          fontSize: 18,
          color: "#fff",
        }}
        fullWidth
      >
        COMPRAR
      </Button>
    </Card>
  );
}
