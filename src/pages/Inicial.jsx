import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoriesRequest } from "../redux/actions/productsActions";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#000000",
    fontSize: 18,
  },
}));

export default function Inicial() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  return (
    <div>
      <Grid container>
        <Grid item sx={{ width: "20%" }}>
          <Card
            sx={{
              mt: 2,
              p: 2,
              top: 268,
              left: 101,
              minWidth: 170,
              height: 507,
              background: "#E2DEDC 0% 0% no-repeat padding-box",
              opacity: 1,
            }}
          >
            <Link to="/" className={classes.link}>
              - Página Inicial
            </Link>
            {categories.map((category, index) => (
              <Grid item key={index}>
                <Link to={category.path} className={classes.link}>
                  - {category.name}
                </Link>
              </Grid>
            ))}
            <Link to="/contato" className={classes.link}>
              - Contato
            </Link>
          </Card>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <Card
            sx={{
              m: 2,
              p: 2,
              top: 268,
              left: 101,
              height: 281,
              minWidth: 561,
              background: "#ACACAC 0% 0% no-repeat padding-box",
              opacity: 1,
            }}
          ></Card>
          <Typography
            variant="h1"
            color="#000000"
            sx={{
              m: 2,
            }}
          >
            Seja bem-vindo!
          </Typography>
          <Typography
            variant="h2"
            color="#000000"
            sx={{
              m: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </Typography>
        </Grid>
      </Grid>
      <Card
        sx={{
          mt: 2,
          p: 2,
          top: 268,
          left: 101,
          height: 180,
          background: "#CB0D1F",
          opacity: 1,
        }}
      ></Card>
    </div>
  );
}
