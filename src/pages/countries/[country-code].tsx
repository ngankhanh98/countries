import { MainLayout } from "@/components";
import { gql, useQuery } from "@apollo/client";
import { Box, Link, Typography } from "@mui/material";

const GET_COUNTRY_BY_CODE = gql`
  query Country($code: ID!) {
    country(code: $code) {
      capital

      currencies
      currency
      emoji
      emojiU
      languages {
        code
        name
      }
      name
      native
      phone
      phones
      states {
        code
        name
      }
      subdivisions {
        code
        name
      }
    }
  }
`;
export default function CountryPage(props: any) {
  const query = props.query;
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code: query["country-code"] },
  });

  return <Box></Box>;
}

CountryPage.getInitialProps = async (ctx: any) => {
  return { query: ctx.query };
};

export const breadcrumbs = (code = "", name = "") => [
  {
    title: "Homepage",
    render: (props: any) => (
      <Link {...props} underline="hover" color="inherit" href="/countries">
        {props.title}
      </Link>
    ),
  },
  {
    title: name,
    render: (props: any) => (
      <Typography
        {...props}
        underline="hover"
        color="inherit"
        href="/countries"
      >
        {props.title}
      </Typography>
    ),
  },
];

CountryPage.getLayout = function getLayout(page: any) {
  console.log("page", page);
  const { query } = page.props;
  return <MainLayout title={query["country"]}>{page}</MainLayout>;
};
