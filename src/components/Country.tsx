import React from "react";
import PropTypes from "prop-types";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export interface CountryProps {
  code: string;
  name: string;
}
function Country(props: CountryProps) {
  return (
    <Box>
      <Box paddingY={4}>
        <span
          className={"fi fi-" + props.code!.toLowerCase()}
          style={{
            width: "100%",
            height: 103,
            backgroundSize: "cover",
            borderRadius: 8,
          }}
        ></span>
      </Box>
      <Link
        variant="body2"
        href={"/" + props.code + "?country=" + props.name}
        sx={{ textDecoration: "none" }}
      >
        {props.name}
      </Link>
    </Box>
  );
}

export default Country;
