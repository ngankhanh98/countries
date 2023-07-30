import { Box, Link, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

function Footer(props: any) {
  const { sections, title } = props;

  return (
    <Box paddingX={20} sx={{ background: "#e2e5f0" }}>
      <Toolbar sx={{ height: 80 }}>
        <Image src={"/logo.png"} width={30} height={30} alt="logo"></Image>
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
            flex: "auto",
            gap: 4,
            display: "flex",
          }}
          justifyContent={"end"}
        >
          {sections.map((section: any) => (
            <Link
              key={section.title}
              variant='body2'
              href={section.url}
              gap={20}
              sx={{ p: 0.5, flexShrink: 0, textDecoration: "none", gap: 20 }}
            >
              {section.title}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Footer;
