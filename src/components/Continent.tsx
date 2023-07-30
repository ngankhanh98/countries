import React from "react";
import PropTypes from "prop-types";
import Country, { CountryProps } from "./Country";
import { Box, Grid, Link, Typography, styled } from "@mui/material";

interface ContinentProps {
  code: string;
  name: string;
  countries: Array<CountryProps>;
}

function Continent(props: ContinentProps) {
  return (
    <Box paddingY={3}>
      <Typography variant="h2" key={props.code}>
        {props.name}
      </Typography>
      <GridContainer>
        {props.countries.map((country, index) => (
          <Grid item xs={3} key={index}>
            <Country {...country}></Country>
          </Grid>
        ))}
      </GridContainer>
    </Box>
  );
}

const GridContainer = styled(Grid)({
  display: "grid",
  "grid-template-columns": "repeat(4, 1fr)",
  gap: "50px",
});
export default Continent;
