import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  categoriesRequest,
  filterRequest,
} from "../redux/actions/productsActions";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import FiltroCategoria from "../functions/FiltroCategoria";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#626262",
  },
}));

export default function Filtro({ category, products }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categoriesReducer.categories);
  const filters = useSelector((state) => state.filtersReducer.filter);
  let filtro = "";
  let filterProducts = [];

  useEffect(() => {
    dispatch(categoriesRequest());
    dispatch(filterRequest(category));
  }, [dispatch, category]);

  if (filters.length > 0) {
    filtro = filters[0].filter.toUpperCase();
  }

  if (products.length !== 0) {
    filterProducts = FiltroCategoria(products);
  }

  return (
    <Card
      sx={{
        p: 2,
        top: 268,
        left: 101,
        width: 170,
        minHeight: 474,
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "1px solid #E2DEDC",
        opacity: 1,
      }}
    >
      <Typography
        gutterBottom
        align="left"
        color="textPrimary"
        variant="subtitle1"
      >
        FILTRE POR
      </Typography>
      <Typography
        gutterBottom
        align="left"
        color="textSecondary"
        variant="subtitle2"
      >
        CATEGORIAS
      </Typography>
      {categories.map((category, index) => (
        <Grid item key={index}>
          <Link to={category.path} className={classes.link}>
            - {category.name}
          </Link>
        </Grid>
      ))}
      <Typography
        gutterBottom
        align="left"
        color="textSecondary"
        variant="subtitle2"
      >
        {filtro}
      </Typography>
      {filterProducts.map((filterProduct, index) => (
        <Grid item key={index}>
          <Link to={category} className={classes.link}>
            - {filterProduct}
          </Link>
        </Grid>
      ))}
    </Card>
  );
}
