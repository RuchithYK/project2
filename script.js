const option = document.querySelector("#option");
let msg = document.getElementById("msg");
let flagImage = document.getElementById("flag");

// Country list with country codes and their respective country code for flags
let countryList = {
    AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM", ANG: "AN", AOA: "AO", 
    AQD: "AQ", ARS: "AR", AUD: "AU", AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", 
    XOF: "BE", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", BOB: "BO", 
    BRL: "BR", BSD: "BS", NOK: "BV", BWP: "BW", BYR: "BY", BZD: "BZ", CAD: "CA", 
    CDF: "CD", XAF: "CF", CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", 
    CUP: "CU", CVE: "CV", CYP: "CY", CZK: "CZ", DJF: "DJ", DKK: "DK", DOP: "DO", 
    DZD: "DZ", ECS: "EC", EEK: "EE", EGP: "EG", ETB: "ET", EUR: "FR", FJD: "FJ", 
    FKP: "FK", GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", 
    GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", 
    HUF: "HU", IDR: "ID", ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", 
    JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", KMF: "KM", 
    KPW: "KP", KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", 
    LKR: "LK", LRD: "LR", LSL: "LS", LTL: "LT", LVL: "LV", LYD: "LY", MAD: "MA", 
    MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN", MOP: "MO", MRO: "MR", 
    MTL: "MT", MUR: "MU", MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ", 
    NAD: "NA", XPF: "NC", NGN: "NG", NIO: "NI", NPR: "NP", NZD: "NZ", OMR: "OM", 
    PAB: "PA", PEN: "PE", PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", 
    QAR: "QA", RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", 
    SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG", SKK: "SK", SLL: "SL", SOS: "SO", 
    SRD: "SR", STD: "ST", SVC: "SV", SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", 
    TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TWD: "TW", TZS: "TZ", 
    UAH: "UA", UGX: "UG", USD: "US", UYU: "UY", UZS: "UZ", VEF: "VE", VND: "VN", 
    VUV: "VU", YER: "YE", ZAR: "ZA", ZMK: "ZM", ZWD: "ZW"
};
const countryName = {
    AF: "Afghanistan",  AL: "Albania",  DZ: "Algeria",  AS: "American Samoa",  AD: "Andorra",  AO: "Angola",  AI: "Anguilla",  AQ: "Antarctica",
    AG: "Antigua and Barbuda",  AR: "Argentina",  AM: "Armenia",  AW: "Aruba",  AU: "Australia",  AT: "Austria",  AZ: "Azerbaijan",  BS: "Bahamas",
    BH: "Bahrain",  BD: "Bangladesh",  BB: "Barbados",  BY: "Belarus",  BE: "Belgium",  BZ: "Belize",  BJ: "Benin",  BM: "Bermuda",
    BT: "Bhutan",  BO: "Bolivia",  BA: "Bosnia and Herzegovina",  BW: "Botswana",  BR: "Brazil",  IO: "British Indian Ocean Territory",  VG: "British Virgin Islands",  BN: "Brunei",
    BG: "Bulgaria",  BF: "Burkina Faso",  BI: "Burundi",  KH: "Cambodia",  CM: "Cameroon",  CA: "Canada",  CV: "Cape Verde",  KY: "Cayman Islands",
    CF: "Central African Republic",  TD: "Chad",  CL: "Chile",  CN: "China",  CX: "Christmas Island",  CC: "Cocos (Keeling) Islands",  CO: "Colombia",  KM: "Comoros",
    CG: "Congo (Congo-Brazzaville)",  CD: "Congo (Democratic Republic of the Congo)",  CK: "Cook Islands",  CR: "Costa Rica",  HR: "Croatia",  CU: "Cuba",  CY: "Cyprus",  CZ: "Czech Republic",
    CI: "Ivory Coast",  DK: "Denmark",  DJ: "Djibouti",  DM: "Dominica",  DO: "Dominican Republic",  EC: "Ecuador",  EG: "Egypt",  SV: "El Salvador",
    GQ: "Equatorial Guinea",  ER: "Eritrea",  EE: "Estonia",  SZ: "Eswatini",  ET: "Ethiopia",  FK: "Falkland Islands",  FO: "Faroe Islands",  FJ: "Fiji",
    FI: "Finland",  FR: "France",  GF: "French Guiana",  PF: "French Polynesia",  TF: "French Southern and Antarctic Lands",  GA: "Gabon",  GM: "Gambia",  GE: "Georgia",
    DE: "Germany",  GH: "Ghana",  GI: "Gibraltar",  GR: "Greece",  GL: "Greenland",  GD: "Grenada",  GP: "Guadeloupe",  GU: "Guam",
    GT: "Guatemala",  GG: "Guernsey",  GN: "Guinea",  GW: "Guinea-Bissau",  GY: "Guyana",  HT: "Haiti",  HM: "Heard Island and McDonald Islands",  HN: "Honduras",
    HK: "Hong Kong",  HU: "Hungary",  IS: "Iceland",  IN: "India",  ID: "Indonesia",  IR: "Iran",  IQ: "Iraq",  IE: "Ireland",
    IL: "Israel",  IT: "Italy",  JM: "Jamaica",  JP: "Japan",  JE: "Jersey",  JO: "Jordan",  KZ: "Kazakhstan",  KE: "Kenya",
    KI: "Kiribati",  KW: "Kuwait",  KG: "Kyrgyzstan",  LA: "Laos",  LV: "Latvia",  LB: "Lebanon",  LS: "Lesotho",  LR: "Liberia",
    LY: "Libya",  LI: "Liechtenstein",  LT: "Lithuania",  LU: "Luxembourg",  MO: "Macau",  MK: "North Macedonia",  MG: "Madagascar",  MW: "Malawi",
    MY: "Malaysia",  MV: "Maldives",  ML: "Mali",  MT: "Malta",  MH: "Marshall Islands",  MQ: "Martinique",  MR: "Mauritania",  MU: "Mauritius",
    YT: "Mayotte",  MX: "Mexico",  FM: "Micronesia",  MD: "Moldova",  MC: "Monaco",  MN: "Mongolia",  ME: "Montenegro",  MS: "Montserrat",
    MA: "Morocco",  MZ: "Mozambique",  MM: "Myanmar",  NA: "Namibia",  NR: "Nauru",  NP: "Nepal",  NL: "Netherlands",  NC: "New Caledonia",
    NZ: "New Zealand",  NI: "Nicaragua",  NE: "Niger",  NG: "Nigeria",  NU: "Niue",  NF: "Norfolk Island",  KP: "North Korea",  MP: "Northern Mariana Islands",
    NO: "Norway",  OM: "Oman",  PK: "Pakistan",  PW: "Palau",  PS: "Palestine",  PA: "Panama",  PG: "Papua New Guinea",  PY: "Paraguay",
    PE: "Peru",  PH: "Philippines",  PL: "Poland",  PT: "Portugal",  PR: "Puerto Rico",  QA: "Qatar",  RE: "Réunion",  RO: "Romania",
    RU: "Russia",  RW: "Rwanda",  SA: "Saudi Arabia",  SN: "Senegal",  RS: "Serbia",  SC: "Seychelles",  SL: "Sierra Leone",  SG: "Singapore",
    SX: "Sint Maarten",  SK: "Slovakia",  SI: "Slovenia",  SB: "Solomon Islands",  SO: "Somalia",  ZA: "South Africa",  GS: "South Georgia and the South Sandwich Islands",  KR: "South Korea",
    ES: "Spain",  LK: "Sri Lanka",  SD: "Sudan",  SR: "Suriname",  SS: "South Sudan",  SJ: "Svalbard and Jan Mayen",  SE: "Sweden",  CH: "Switzerland",
    SY: "Syria",  TW: "Taiwan",  TJ: "Tajikistan",  TZ: "Tanzania",  TH: "Thailand",  TG: "Togo",  TK: "Tokelau",  TO: "Tonga",
    TR: "Turkey",  TM: "Turkmenistan",  TC: "Turks and Caicos Islands",  TV: "Tuvalu",  UG: "Uganda",  UA: "Ukraine",  AE: "United Arab Emirates",  GB: "United Kingdom",
    US: "United States",  UY: "Uruguay",  UZ: "Uzbekistan",  VU: "Vanuatu",  VA: "Vatican City",  VE: "Venezuela",  VN: "Vietnam",  VG: "British Virgin Islands",
    WF: "Wallis and Futuna",  EH: "Western Sahara",  YE: "Yemen",  ZM: "Zambia",  ZW: "Zimbabwe"
};

  

// Function to populate the dropdown with country options
function populateCountryOptions() {
    for (let countryCode in countryList) {
        let countryOption = document.createElement("option");
        countryOption.value = countryList[countryCode];
        countryOption.textContent = countryCode;
        option.appendChild(countryOption);
    }
}

// Function to update the flag image and the message when a country is selected
function updateFlagAndMessage() {
    const country = option.value;
    const name = countryName[country];
    msg.innerText = `Country : ${name}`;
    flagImage.src = `https://flagsapi.com/${country}/flat/64.png`;
}

// Event listener for the change event
option.addEventListener('change', updateFlagAndMessage);

// Populate the country options when the page loads
window.onload = populateCountryOptions;
