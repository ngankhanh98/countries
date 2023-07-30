import { Box, Breadcrumbs, Link } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import * as React from "react";

interface BannerProps {
  breadcrumbs: Array<{ title: string; render: Function }>;
}

function Banner(props: BannerProps) {
  return (
    <BannerContainer>
      <Box width={"60%"}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ paddingBottom: 2 }}>
          {props.breadcrumbs.map((b: any, index: number) =>
            b.render({ key: index, title: b.title })
          )}
        </Breadcrumbs>
        <Typography variant="h1">
          {props.breadcrumbs[props.breadcrumbs.length - 1]?.title}
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
  paddingTop: 36,
  paddingBottom: 60,
});

export default Banner;
