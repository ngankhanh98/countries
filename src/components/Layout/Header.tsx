import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import * as React from "react";
import Search from "./Search";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <Box paddingX={20}>
      <Toolbar sx={{ height: 80 }}>
        <Image src={"logo.png"} width={30} height={30} alt="logo"></Image>
        <Typography
          component="h2"
          variant="h5"
          align="left"
          noWrap
          sx={{ flex: 0.5, justifyContent: "start", paddingLeft: 2 }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            flex: "autp",
            justifyContent: "center",
            display: "flex",
            gap: 4,
          }}
          justifyContent={"center"}
        >
          {sections.map((section) => (
            <Link
              noWrap
              key={section.title}
              variant="body1"
              href={section.url}
              gap={20}
              sx={{ p: 0.5, flexShrink: 0, textDecoration: "none", gap: 20 }}
            >
              {section.title}
            </Link>
          ))}
        </Box>

        <Box
          sx={{ flex: 0.5, justifyContent: "end", display: "flex", gap: 1 }}
          justifyContent={"end"}
        >
          <Search />
        </Box>
      </Toolbar>
    </Box>
  );
}
