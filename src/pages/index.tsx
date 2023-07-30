import { MainLayout } from "@/components";
import Continent from "@/components/Continent";
import Gadget from "@/components/Gadget";
import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Container,
  Grid,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import { useMemo } from "react";

const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

const GET_COUNTRIES = gql`
  query Continents {
    countries {
      code
      continent {
        code
      }
      name
    }
  }
`;
const GET_LANGUAGES = gql`
  query Languages {
    languages {
      code
      name
    }
  }
`;

export default function Home() {
  const {
    loading,
    error,
    data: { continents } = { continents: [] },
  } = useQuery(GET_CONTINENTS);
  const {
    loading: countriesLoading,
    error: countriesError,
    data: { countries } = { countries: [] },
  } = useQuery(GET_COUNTRIES);
  const {
    loading: languagesLoading,
    error: languagesError,
    data: { languages } = { languages: [] },
  } = useQuery(GET_LANGUAGES);

  const gadgets = useMemo(() => {
    return [
      {
        title: countries.length,
        description: "independent countries all over the globe.",
        color: "rgba(185,73,133,1)",
      },
      {
        title: continents.length,
        description:
          "continents made up of " +
          continents.map(({ name }: any) => name).join(", "),
        color: "rgba(31,149,142,1)",
      },
      {
        title: languages.length,
        description: "different languages used from all over the world.",
        color: "rgba(205,107,32,1)",
      },
    ];
  }, [countries, continents, languages]);

  if (
    (loading && !error) ||
    (countriesLoading && !countriesError) ||
    (languagesLoading && !languagesError)
  )
    return <Skeleton variant="rounded" width={210} height={60} />;

  return (
    <Box>
      {/*  Statics section */}
      <Container>
        <Grid container spacing={2}>
          {gadgets.map((gadget, index) => (
            <Grid item xs={4} key={index}>
              <Gadget {...gadget}></Gadget>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/*  Countries section */}
      <Box sx={{ background: "#F3F6F8" }}>
        <Container>
          {continents.map((continent: any) => (
            <Continent {...continent} key={continent.code} />
          ))}
        </Container>
      </Box>
    </Box>
  );
}

export const breadcrumbs = [
  {
    title: "Homepage",
    render: (props: any) => (
      <Link {...props} underline="hover" color="inherit" href="/">
        {props.title}
      </Link>
    ),
  },
  {
    title: "Countries",
    render: (props: any) => (
      <Typography {...props} underline="hover" color="inherit" href="/">
        {props.title}
      </Typography>
    ),
  },
];

Home.getLayout = function getLayout(page: any) {
  return <MainLayout breadcrumbs={breadcrumbs}>{page}</MainLayout>;
};
