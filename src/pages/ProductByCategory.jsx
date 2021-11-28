import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsRequest } from "../redux/actions/productsActions";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import Filtro from "../components/Filtro";
import Product from "../components/Product";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#CB0D1F",
  },
}));

const ProductByCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { category } = useParams();

  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(productsRequest(category));
  }, [dispatch, category]);

  return (
    <div>
      <Breadcrumbs sx={{ padding: "16px 0px" }}>
        <Link to="/" color="textPrimary" className={classes.link}>
          Página Inicial
        </Link>
        <Typography color="textSecondary">{category}</Typography>
      </Breadcrumbs>
      <Grid container>
        <Grid item xs={12} sm={5} lg={3} xl={2}>
          <Filtro category={category} products={products} />
        </Grid>
        <Grid item xs={12} sm={7} lg={9} xl={10}>
          <Typography color="textPrimary">{category.toUpperCase()}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={{ xs: 3, md: 3 }} sx={{ mt: 3, mb: 3 }}>
            {products.map((product, index) => {
              return (
                <Grid item key={index}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductByCategory;
