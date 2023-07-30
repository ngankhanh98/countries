import { MainLayout } from "@/components";
import Continent from "@/components/Continent";
import Gadget from "@/components/Gadget";
import {
  Grid,
  Paper,
  styled,
  Box,
  Container,
  Link,
  Typography,
} from "@mui/material";

const gadgets = [
  {
    title: 56,
    description:
      "independent countries make up the Commonwealth in Africa, Asia, the Americas, Europe and the Pacific",
    color: "rgba(185,73,133,1)",
  },
  {
    title: 33,
    description:
      "of the world’s 42 small states are Commonwealth members, each with a population of 1.5 million or less",
    color: "rgba(31,149,142,1)",
  },
  {
    title: "2.5 billion",
    description:
      "citizens live in Commonwealth countries, with more than 60 per cent aged 29 or under",
    color: "rgba(205,107,32,1)",
  },
];

const continents = [
  {
    code: "AF",
    name: "Africa",
    countries: [
      {
        code: "AO",
        name: "Angola",
      },
      {
        code: "BF",
        name: "Burkina Faso",
      },
      {
        code: "BI",
        name: "Burundi",
      },
      {
        code: "BJ",
        name: "Benin",
      },
      {
        code: "BW",
        name: "Botswana",
      },
      {
        code: "CD",
        name: "Democratic Republic of the Congo",
      },
      {
        code: "CF",
        name: "Central African Republic",
      },
      {
        code: "CG",
        name: "Republic of the Congo",
      },
      {
        code: "CI",
        name: "Ivory Coast",
      },
      {
        code: "CM",
        name: "Cameroon",
      },
      {
        code: "CV",
        name: "Cape Verde",
      },
      {
        code: "DJ",
        name: "Djibouti",
      },
      {
        code: "DZ",
        name: "Algeria",
      },
      {
        code: "EG",
        name: "Egypt",
      },
      {
        code: "EH",
        name: "Western Sahara",
      },
      {
        code: "ER",
        name: "Eritrea",
      },
      {
        code: "ET",
        name: "Ethiopia",
      },
      {
        code: "GA",
        name: "Gabon",
      },
      {
        code: "GH",
        name: "Ghana",
      },
      {
        code: "GM",
        name: "Gambia",
      },
      {
        code: "GN",
        name: "Guinea",
      },
      {
        code: "GQ",
        name: "Equatorial Guinea",
      },
      {
        code: "GW",
        name: "Guinea-Bissau",
      },
      {
        code: "KE",
        name: "Kenya",
      },
      {
        code: "KM",
        name: "Comoros",
      },
      {
        code: "LR",
        name: "Liberia",
      },
      {
        code: "LS",
        name: "Lesotho",
      },
      {
        code: "LY",
        name: "Libya",
      },
      {
        code: "MA",
        name: "Morocco",
      },
      {
        code: "MG",
        name: "Madagascar",
      },
      {
        code: "ML",
        name: "Mali",
      },
      {
        code: "MR",
        name: "Mauritania",
      },
      {
        code: "MU",
        name: "Mauritius",
      },
      {
        code: "MW",
        name: "Malawi",
      },
      {
        code: "MZ",
        name: "Mozambique",
      },
      {
        code: "NA",
        name: "Namibia",
      },
      {
        code: "NE",
        name: "Niger",
      },
      {
        code: "NG",
        name: "Nigeria",
      },
      {
        code: "RE",
        name: "Réunion",
      },
      {
        code: "RW",
        name: "Rwanda",
      },
      {
        code: "SC",
        name: "Seychelles",
      },
      {
        code: "SD",
        name: "Sudan",
      },
      {
        code: "SH",
        name: "Saint Helena",
      },
      {
        code: "SL",
        name: "Sierra Leone",
      },
      {
        code: "SN",
        name: "Senegal",
      },
      {
        code: "SO",
        name: "Somalia",
      },
      {
        code: "SS",
        name: "South Sudan",
      },
      {
        code: "ST",
        name: "São Tomé and Príncipe",
      },
      {
        code: "SZ",
        name: "Swaziland",
      },
      {
        code: "TD",
        name: "Chad",
      },
      {
        code: "TG",
        name: "Togo",
      },
      {
        code: "TN",
        name: "Tunisia",
      },
      {
        code: "TZ",
        name: "Tanzania",
      },
      {
        code: "UG",
        name: "Uganda",
      },
      {
        code: "YT",
        name: "Mayotte",
      },
      {
        code: "ZA",
        name: "South Africa",
      },
      {
        code: "ZM",
        name: "Zambia",
      },
      {
        code: "ZW",
        name: "Zimbabwe",
      },
    ],
  },
  {
    code: "AN",
    name: "Antarctica",
    countries: [
      {
        code: "AQ",
        name: "Antarctica",
      },
      {
        code: "BV",
        name: "Bouvet Island",
      },
      {
        code: "GS",
        name: "South Georgia and the South Sandwich Islands",
      },
      {
        code: "HM",
        name: "Heard Island and McDonald Islands",
      },
      {
        code: "TF",
        name: "French Southern Territories",
      },
    ],
  },
  {
    code: "AS",
    name: "Asia",
    countries: [
      {
        code: "AE",
        name: "United Arab Emirates",
      },
      {
        code: "AF",
        name: "Afghanistan",
      },
      {
        code: "AM",
        name: "Armenia",
      },
      {
        code: "AZ",
        name: "Azerbaijan",
      },
      {
        code: "BD",
        name: "Bangladesh",
      },
      {
        code: "BH",
        name: "Bahrain",
      },
      {
        code: "BN",
        name: "Brunei",
      },
      {
        code: "BT",
        name: "Bhutan",
      },
      {
        code: "CC",
        name: "Cocos [Keeling] Islands",
      },
      {
        code: "CN",
        name: "China",
      },
      {
        code: "CX",
        name: "Christmas Island",
      },
      {
        code: "GE",
        name: "Georgia",
      },
      {
        code: "HK",
        name: "Hong Kong",
      },
      {
        code: "ID",
        name: "Indonesia",
      },
      {
        code: "IL",
        name: "Israel",
      },
      {
        code: "IN",
        name: "India",
      },
      {
        code: "IO",
        name: "British Indian Ocean Territory",
      },
      {
        code: "IQ",
        name: "Iraq",
      },
      {
        code: "IR",
        name: "Iran",
      },
      {
        code: "JO",
        name: "Jordan",
      },
      {
        code: "JP",
        name: "Japan",
      },
      {
        code: "KG",
        name: "Kyrgyzstan",
      },
      {
        code: "KH",
        name: "Cambodia",
      },
      {
        code: "KP",
        name: "North Korea",
      },
      {
        code: "KR",
        name: "South Korea",
      },
      {
        code: "KW",
        name: "Kuwait",
      },
      {
        code: "KZ",
        name: "Kazakhstan",
      },
      {
        code: "LA",
        name: "Laos",
      },
      {
        code: "LB",
        name: "Lebanon",
      },
      {
        code: "LK",
        name: "Sri Lanka",
      },
      {
        code: "MM",
        name: "Myanmar [Burma]",
      },
      {
        code: "MN",
        name: "Mongolia",
      },
      {
        code: "MO",
        name: "Macao",
      },
      {
        code: "MV",
        name: "Maldives",
      },
      {
        code: "MY",
        name: "Malaysia",
      },
      {
        code: "NP",
        name: "Nepal",
      },
      {
        code: "OM",
        name: "Oman",
      },
      {
        code: "PH",
        name: "Philippines",
      },
      {
        code: "PK",
        name: "Pakistan",
      },
      {
        code: "PS",
        name: "Palestine",
      },
      {
        code: "QA",
        name: "Qatar",
      },
      {
        code: "SA",
        name: "Saudi Arabia",
      },
      {
        code: "SG",
        name: "Singapore",
      },
      {
        code: "SY",
        name: "Syria",
      },
      {
        code: "TH",
        name: "Thailand",
      },
      {
        code: "TJ",
        name: "Tajikistan",
      },
      {
        code: "TM",
        name: "Turkmenistan",
      },
      {
        code: "TR",
        name: "Turkey",
      },
      {
        code: "TW",
        name: "Taiwan",
      },
      {
        code: "UZ",
        name: "Uzbekistan",
      },
      {
        code: "VN",
        name: "Vietnam",
      },
      {
        code: "YE",
        name: "Yemen",
      },
    ],
  },
  {
    code: "EU",
    name: "Europe",
    countries: [
      {
        code: "AD",
        name: "Andorra",
      },
      {
        code: "AL",
        name: "Albania",
      },
      {
        code: "AT",
        name: "Austria",
      },
      {
        code: "AX",
        name: "Åland",
      },
      {
        code: "BA",
        name: "Bosnia and Herzegovina",
      },
      {
        code: "BE",
        name: "Belgium",
      },
      {
        code: "BG",
        name: "Bulgaria",
      },
      {
        code: "BY",
        name: "Belarus",
      },
      {
        code: "CH",
        name: "Switzerland",
      },
      {
        code: "CY",
        name: "Cyprus",
      },
      {
        code: "CZ",
        name: "Czech Republic",
      },
      {
        code: "DE",
        name: "Germany",
      },
      {
        code: "DK",
        name: "Denmark",
      },
      {
        code: "EE",
        name: "Estonia",
      },
      {
        code: "ES",
        name: "Spain",
      },
      {
        code: "FI",
        name: "Finland",
      },
      {
        code: "FO",
        name: "Faroe Islands",
      },
      {
        code: "FR",
        name: "France",
      },
      {
        code: "GB",
        name: "United Kingdom",
      },
      {
        code: "GG",
        name: "Guernsey",
      },
      {
        code: "GI",
        name: "Gibraltar",
      },
      {
        code: "GR",
        name: "Greece",
      },
      {
        code: "HR",
        name: "Croatia",
      },
      {
        code: "HU",
        name: "Hungary",
      },
      {
        code: "IE",
        name: "Ireland",
      },
      {
        code: "IM",
        name: "Isle of Man",
      },
      {
        code: "IS",
        name: "Iceland",
      },
      {
        code: "IT",
        name: "Italy",
      },
      {
        code: "JE",
        name: "Jersey",
      },
      {
        code: "LI",
        name: "Liechtenstein",
      },
      {
        code: "LT",
        name: "Lithuania",
      },
      {
        code: "LU",
        name: "Luxembourg",
      },
      {
        code: "LV",
        name: "Latvia",
      },
      {
        code: "MC",
        name: "Monaco",
      },
      {
        code: "MD",
        name: "Moldova",
      },
      {
        code: "ME",
        name: "Montenegro",
      },
      {
        code: "MK",
        name: "North Macedonia",
      },
      {
        code: "MT",
        name: "Malta",
      },
      {
        code: "NL",
        name: "Netherlands",
      },
      {
        code: "NO",
        name: "Norway",
      },
      {
        code: "PL",
        name: "Poland",
      },
      {
        code: "PT",
        name: "Portugal",
      },
      {
        code: "RO",
        name: "Romania",
      },
      {
        code: "RS",
        name: "Serbia",
      },
      {
        code: "RU",
        name: "Russia",
      },
      {
        code: "SE",
        name: "Sweden",
      },
      {
        code: "SI",
        name: "Slovenia",
      },
      {
        code: "SJ",
        name: "Svalbard and Jan Mayen",
      },
      {
        code: "SK",
        name: "Slovakia",
      },
      {
        code: "SM",
        name: "San Marino",
      },
      {
        code: "UA",
        name: "Ukraine",
      },
      {
        code: "VA",
        name: "Vatican City",
      },
      {
        code: "XK",
        name: "Kosovo",
      },
    ],
  },
  {
    code: "NA",
    name: "North America",
    countries: [
      {
        code: "AG",
        name: "Antigua and Barbuda",
      },
      {
        code: "AI",
        name: "Anguilla",
      },
      {
        code: "AW",
        name: "Aruba",
      },
      {
        code: "BB",
        name: "Barbados",
      },
      {
        code: "BL",
        name: "Saint Barthélemy",
      },
      {
        code: "BM",
        name: "Bermuda",
      },
      {
        code: "BQ",
        name: "Bonaire",
      },
      {
        code: "BS",
        name: "Bahamas",
      },
      {
        code: "BZ",
        name: "Belize",
      },
      {
        code: "CA",
        name: "Canada",
      },
      {
        code: "CR",
        name: "Costa Rica",
      },
      {
        code: "CU",
        name: "Cuba",
      },
      {
        code: "CW",
        name: "Curacao",
      },
      {
        code: "DM",
        name: "Dominica",
      },
      {
        code: "DO",
        name: "Dominican Republic",
      },
      {
        code: "GD",
        name: "Grenada",
      },
      {
        code: "GL",
        name: "Greenland",
      },
      {
        code: "GP",
        name: "Guadeloupe",
      },
      {
        code: "GT",
        name: "Guatemala",
      },
      {
        code: "HN",
        name: "Honduras",
      },
      {
        code: "HT",
        name: "Haiti",
      },
      {
        code: "JM",
        name: "Jamaica",
      },
      {
        code: "KN",
        name: "Saint Kitts and Nevis",
      },
      {
        code: "KY",
        name: "Cayman Islands",
      },
      {
        code: "LC",
        name: "Saint Lucia",
      },
      {
        code: "MF",
        name: "Saint Martin",
      },
      {
        code: "MQ",
        name: "Martinique",
      },
      {
        code: "MS",
        name: "Montserrat",
      },
      {
        code: "MX",
        name: "Mexico",
      },
      {
        code: "NI",
        name: "Nicaragua",
      },
      {
        code: "PA",
        name: "Panama",
      },
      {
        code: "PM",
        name: "Saint Pierre and Miquelon",
      },
      {
        code: "PR",
        name: "Puerto Rico",
      },
      {
        code: "SV",
        name: "El Salvador",
      },
      {
        code: "SX",
        name: "Sint Maarten",
      },
      {
        code: "TC",
        name: "Turks and Caicos Islands",
      },
      {
        code: "TT",
        name: "Trinidad and Tobago",
      },
      {
        code: "US",
        name: "United States",
      },
      {
        code: "VC",
        name: "Saint Vincent and the Grenadines",
      },
      {
        code: "VG",
        name: "British Virgin Islands",
      },
      {
        code: "VI",
        name: "U.S. Virgin Islands",
      },
    ],
  },
  {
    code: "OC",
    name: "Oceania",
    countries: [
      {
        code: "AS",
        name: "American Samoa",
      },
      {
        code: "AU",
        name: "Australia",
      },
      {
        code: "CK",
        name: "Cook Islands",
      },
      {
        code: "FJ",
        name: "Fiji",
      },
      {
        code: "FM",
        name: "Micronesia",
      },
      {
        code: "GU",
        name: "Guam",
      },
      {
        code: "KI",
        name: "Kiribati",
      },
      {
        code: "MH",
        name: "Marshall Islands",
      },
      {
        code: "MP",
        name: "Northern Mariana Islands",
      },
      {
        code: "NC",
        name: "New Caledonia",
      },
      {
        code: "NF",
        name: "Norfolk Island",
      },
      {
        code: "NR",
        name: "Nauru",
      },
      {
        code: "NU",
        name: "Niue",
      },
      {
        code: "NZ",
        name: "New Zealand",
      },
      {
        code: "PF",
        name: "French Polynesia",
      },
      {
        code: "PG",
        name: "Papua New Guinea",
      },
      {
        code: "PN",
        name: "Pitcairn Islands",
      },
      {
        code: "PW",
        name: "Palau",
      },
      {
        code: "SB",
        name: "Solomon Islands",
      },
      {
        code: "TK",
        name: "Tokelau",
      },
      {
        code: "TL",
        name: "East Timor",
      },
      {
        code: "TO",
        name: "Tonga",
      },
      {
        code: "TV",
        name: "Tuvalu",
      },
      {
        code: "UM",
        name: "U.S. Minor Outlying Islands",
      },
      {
        code: "VU",
        name: "Vanuatu",
      },
      {
        code: "WF",
        name: "Wallis and Futuna",
      },
      {
        code: "WS",
        name: "Samoa",
      },
    ],
  },
  {
    code: "SA",
    name: "South America",
    countries: [
      {
        code: "AR",
        name: "Argentina",
      },
      {
        code: "BO",
        name: "Bolivia",
      },
      {
        code: "BR",
        name: "Brazil",
      },
      {
        code: "CL",
        name: "Chile",
      },
      {
        code: "CO",
        name: "Colombia",
      },
      {
        code: "EC",
        name: "Ecuador",
      },
      {
        code: "FK",
        name: "Falkland Islands",
      },
      {
        code: "GF",
        name: "French Guiana",
      },
      {
        code: "GY",
        name: "Guyana",
      },
      {
        code: "PE",
        name: "Peru",
      },
      {
        code: "PY",
        name: "Paraguay",
      },
      {
        code: "SR",
        name: "Suriname",
      },
      {
        code: "UY",
        name: "Uruguay",
      },
      {
        code: "VE",
        name: "Venezuela",
      },
    ],
  },
];

export default function Home() {
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
          {continents.map((continent) => (
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
      <Link
        {...props}
        underline="hover"
        color="inherit"
        href="/"
      >
        {props.title}
      </Link>
    ),
  },
  {
    title: "Countries",
    render: (props: any) => (
      <Typography
        {...props}
        underline="hover"
        color="inherit"
        href="/"
      >
        {props.title}
      </Typography>
    ),
  },
];

Home.getLayout = function getLayout(page: any) {
  return <MainLayout breadcrumbs={breadcrumbs}>{page}</MainLayout>;
};
