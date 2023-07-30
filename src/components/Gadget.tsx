import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { BannerContainer } from "./Layout/Banner";

interface GadgetProps {
  title: number | string;
  description: string;
  color: string;
}

function Gadget(props: GadgetProps) {
  return (
    <Box padding={6}>
      <Typography variant="h4" sx={{ color: `${props.color} !important` }}>
        {props.title}
      </Typography>
      <Typography color={props.color}>{props.description}</Typography>
    </Box>
  );
}

export default Gadget;
