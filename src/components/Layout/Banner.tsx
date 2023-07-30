import { Box, Breadcrumbs, Link } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import * as React from "react";

function Banner(props: any) {
  console.log('props', props)
  return (
    <BannerContainer>
      <Box width={"60%"}>
        <Typography variant="h1">
          {props.title}
        </Typography>
      </Box>
    </BannerContainer>
  );
}

export const BannerContainer = styled(Box)({
  "-webkit-clip-path":
    "polygon(0 0,calc(100% - 192px) 0,calc(100% - 66px) 100%,0 100%)",
  "clip-path":
    "polygon(0 0,calc(100% - 192px) 0,calc(100% - 66px) 100%,0 100%)",
  backgroundColor: "#e2e5f0",
  display: "grid",
  placeItems: "center",
  paddingTop: 60,
  paddingBottom: 60,
});

export default Banner;
