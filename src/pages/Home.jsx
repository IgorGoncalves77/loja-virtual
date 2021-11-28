import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { categoriesRequest } from "../redux/actions/productsActions";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import LogoSistema from "../assets/LogoSistema.png";
import Inicial from "./Inicial";
import ProductByCategory from "./ProductByCategory";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    margin: "0",
    padding: "0 20px",
    whiteSpace: "nowrap",
    cursor: "pointer",
    color: "hsla(0,0%,100%,.65)",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#fff",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  return (
    <div>
      <Box
        sx={{
          height: 31,
          background: "#231F20",
        }}
      >
        <Container
          sx={{
            color: "#FFFFFF",
          }}
        >
          <Typography
            sx={{
              textAlign: "end",
              textDecoration: "underline",
            }}
          >
            Acesse sua Conta ou Cadastre-se
          </Typography>
        </Container>
      </Box>
      <Container>
        <Grid
          container
          sx={{
            height: 145,
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item>
            <img
              style={{ width: 200, height: 70 }}
              src={LogoSistema}
              alt="Logo do Sistema"
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="secondary"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#00A8A9",
                  },
                },
              }}
            />
            <Button
              color="secondary"
              variant="contained"
              sx={{
                height: 55,
                width: 110,
                borderRadius: "0px",
                marginLeft: "-3px",
                color: "#fff",
              }}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Container>

      <BrowserRouter>
        <AppBar position="relative">
          <Container>
            <Grid
              container
              sx={{
                minHeight: 54,
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Link to="/" className={classes.menuButton}>
                  PÁGINA INICIAL
                </Link>
              </Grid>

              {categories.map((category, index) => (
                <Grid item key={index}>
                  <Link to={category.path} className={classes.menuButton}>
                    {category.name.toUpperCase()}
                  </Link>
                </Grid>
              ))}

              <Grid item>
                <Link to="/contato" className={classes.menuButton}>
                  CONTATO
                </Link>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
        <Container>
          <Switch>
            <Route exact path="/" component={Inicial} />
            <Route exact path="/:category" component={ProductByCategory} />
            <Route exact path="/contato" component={Inicial} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}
