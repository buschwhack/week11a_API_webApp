let allcarsdata = [
    {
      "make": "Toyota",
      "model": "Camry",
      "model_year": "2001",
      "vin": "MPWBSKYJS3CD08291"
    },
    {
      "make": "Suzuki",
      "model": "Aerio",
      "model_year": "2005",
      "vin": "52TE2H38BDYV75292"
    },
    {
      "make": "Mitsubishi",
      "model": "Montero",
      "model_year": "2006",
      "vin": "1B9ABVMKF1SL71203"
    },
    {
      "make": "Lamborghini",
      "model": "Murcielago",
      "model_year": "2007",
      "vin": "WVJR3JPX6J7K91030"
    },
    {
      "make": "Ford",
      "model": "Windstar Cargo",
      "model_year": "2000",
      "vin": "J7JUDYGB2SF265097"
    },
    {
      "make": "Dodge",
      "model": "Charger",
      "model_year": "2012",
      "vin": "5SMUA6XNVN8U48218"
    },
    {
      "make": "Saturn",
      "model": "Astra",
      "model_year": "2008",
      "vin": "SWRZ3P2FKGRU49991"
    },
    {
      "make": "Nissan",
      "model": "Rogue",
      "model_year": "2019",
      "vin": "1BWSFPHAVR7T58471"
    },
    {
      "make": "Oldsmobile",
      "model": "Achieva",
      "model_year": "1992",
      "vin": "BNTLMHCS2J0464919"
    },
    {
      "make": "Pontiac",
      "model": "Sunbird",
      "model_year": "1994",
      "vin": "0UWLGYC9HMR200707"
    },
    {
      "make": "Ford",
      "model": "F350 Super Duty Crew Cab",
      "model_year": "2009",
      "vin": "9BACZD67R37952921"
    },
    {
      "make": "Ford",
      "model": "F250 Super Duty Regular Cab",
      "model_year": "1999",
      "vin": "74EHVF6MLR8L22375"
    },
    {
      "make": "GMC",
      "model": "Sierra (Classic) 1500 Extended Cab",
      "model_year": "2007",
      "vin": "5LJK4KRCLRWH02088"
    },
    {
      "make": "Kia",
      "model": "K900",
      "model_year": "2019",
      "vin": "58YVR7UD2DK555134"
    },
    {
      "make": "BMW",
      "model": "Z4",
      "model_year": "2016",
      "vin": "HF7JMY2WH0AL30233"
    },
    {
      "make": "Plymouth",
      "model": "Voyager",
      "model_year": "1994",
      "vin": "RZ06NAA8NPP871738"
    },
    {
      "make": "Chevrolet",
      "model": "Express 1500 Passenger",
      "model_year": "2012",
      "vin": "164W7H6HW9KL27600"
    },
    {
      "make": "Toyota",
      "model": "Tacoma Xtracab",
      "model_year": "1999",
      "vin": "619A7Z9JBC3R80904"
    },
    {
      "make": "Mercedes-Benz",
      "model": "M-Class",
      "model_year": "2014",
      "vin": "84UF8UBZE6E420004"
    },
    {
      "make": "Nissan",
      "model": "LEAF",
      "model_year": "2015",
      "vin": "NWMGZ9XFV1B868285"
    },
    {
      "make": "Ram",
      "model": "3500 Regular Cab",
      "model_year": "2013",
      "vin": "B66PN0TZRB9965802"
    },
    {
      "make": "Dodge",
      "model": "Intrepid",
      "model_year": "1996",
      "vin": "VWCJZ3ZCV5R160130"
    },
    {
      "make": "Volvo",
      "model": "S60",
      "model_year": "2006",
      "vin": "UPAEFX4N67DF16442"
    },
    {
      "make": "Audi",
      "model": "A6",
      "model_year": "2013",
      "vin": "FSNLZPVNC18F95880"
    },
    {
      "make": "GMC",
      "model": "Sierra 3500 HD Regular Cab",
      "model_year": "2018",
      "vin": "5NRVC28LESNK90929"
    },
    {
      "make": "Ram",
      "model": "3500 Crew Cab",
      "model_year": "2012",
      "vin": "96F181PTP68G12288"
    },
    {
      "make": "GMC",
      "model": "Sierra 2500 HD Extended Cab",
      "model_year": "2009",
      "vin": "WXEZ5ZMV942K22440"
    },
    {
      "make": "Ford",
      "model": "Transit 250 Van",
      "model_year": "2018",
      "vin": "T2CWSG0RLW6K72586"
    },
    {
      "make": "Chevrolet",
      "model": "Express 3500 Passenger",
      "model_year": "2008",
      "vin": "T7Y95BH4XL9J56422"
    },
    {
      "make": "Ram",
      "model": "3500 Mega Cab",
      "model_year": "2011",
      "vin": "3USUPL04HH5117040"
    },
    {
      "make": "INFINITI",
      "model": "QX",
      "model_year": "1998",
      "vin": "P539ULYX9HTX46615"
    },
    {
      "make": "Acura",
      "model": "MDX",
      "model_year": "2002",
      "vin": "RW3WHEU221EX64215"
    },
    {
      "make": "INFINITI",
      "model": "EX",
      "model_year": "2012",
      "vin": "1YZXETGCNK6670384"
    },
    {
      "make": "Chevrolet",
      "model": "Colorado Crew Cab",
      "model_year": "2008",
      "vin": "6ULK5D9MYG3522731"
    },
    {
      "make": "Mercury",
      "model": "Monterey",
      "model_year": "2006",
      "vin": "5ZRNUV2PK0U291986"
    },
    {
      "make": "Lotus",
      "model": "Evora",
      "model_year": "2010",
      "vin": "TVV4828LND9S68241"
    },
    {
      "make": "Lincoln",
      "model": "Navigator",
      "model_year": "2004",
      "vin": "LBJKL7MUWKW644669"
    },
    {
      "make": "Pontiac",
      "model": "G8",
      "model_year": "2009",
      "vin": "3BFW3K16TL1920440"
    },
    {
      "make": "Chevrolet",
      "model": "Silverado 2500 HD Regular Cab",
      "model_year": "2009",
      "vin": "M6X1VL2DT0DF11228"
    },
    {
      "make": "Chevrolet",
      "model": "Corvette",
      "model_year": "2013",
      "vin": "61VGLJMHELHN49352"
    },
    {
      "make": "Ford",
      "model": "E250 Super Duty Cargo",
      "model_year": "2007",
      "vin": "S0MY6D1ML3UB09228"
    },
    {
      "make": "Cadillac",
      "model": "Escalade ESV",
      "model_year": "2018",
      "vin": "6CCBJRU8XZEE86009"
    },
    {
      "make": "Volkswagen",
      "model": "CC",
      "model_year": "2011",
      "vin": "ZWE8E5VKR89M65164"
    },
    {
      "make": "Jeep",
      "model": "Compass",
      "model_year": "2015",
      "vin": "0FBM96VH5EHR11017"
    },
    {
      "make": "Freightliner",
      "model": "Sprinter 3500 Cargo",
      "model_year": "2016",
      "vin": "C2PDAV1BWGGS42858"
    },
    {
      "make": "Chevrolet",
      "model": "Malibu",
      "model_year": "2002",
      "vin": "1ZH5F953938816310"
    },
    {
      "make": "Ford",
      "model": "Ranger Regular Cab",
      "model_year": "2009",
      "vin": "MJ4N9ZKYD9D448468"
    },
    {
      "make": "Audi",
      "model": "A6",
      "model_year": "2008",
      "vin": "XAUG7NA6Z79E53856"
    },
    {
      "make": "INFINITI",
      "model": "M",
      "model_year": "2007",
      "vin": "GYF3J44VDR6Y30201"
    },
    {
      "make": "Mercury",
      "model": "Grand Marquis",
      "model_year": "2005",
      "vin": "CX7XV0K42WJC66736"
    },
    {
      "make": "Jeep",
      "model": "Cherokee",
      "model_year": "1999",
      "vin": "BZP15XSVGC0C17977"
    },
    {
      "make": "GMC",
      "model": "Sierra 2500 HD Extended Cab",
      "model_year": "2003",
      "vin": "M306A3WV4X5577852"
    },
    {
      "make": "BMW",
      "model": "Z4",
      "model_year": "2008",
      "vin": "5AH6YVPDMFLP35845"
    },
    {
      "make": "Lincoln",
      "model": "Mark VII",
      "model_year": "1992",
      "vin": "0JMZW4Y7EDHM76334"
    },
    {
      "make": "Volkswagen",
      "model": "Jetta",
      "model_year": "2001",
      "vin": "GC3DM49Z2E3Y46965"
    },
    {
      "make": "Mercury",
      "model": "Tracer",
      "model_year": "1997",
      "vin": "4J9PH0034C5K06139"
    },
    {
      "make": "Ford",
      "model": "F150 SuperCrew Cab",
      "model_year": "2009",
      "vin": "9JNCCMSSA14Y19672"
    },
    {
      "make": "Suzuki",
      "model": "Verona",
      "model_year": "2005",
      "vin": "MN4NG5TP11BT60965"
    },
    {
      "make": "Nissan",
      "model": "Titan King Cab",
      "model_year": "2006",
      "vin": "0L13CK13VSHY17880"
    },
    {
      "make": "Dodge",
      "model": "Ram 2500 Regular Cab",
      "model_year": "2010",
      "vin": "1HLDPE0ZBXNR97548"
    },
    {
      "make": "Nissan",
      "model": "Frontier Crew Cab",
      "model_year": "2012",
      "vin": "WAUCHRG99KGA61398"
    },
    {
      "make": "Nissan",
      "model": "Stanza",
      "model_year": "1992",
      "vin": "T7HJXG90PBW877707"
    },
    {
      "make": "Toyota",
      "model": "Avalon",
      "model_year": "1996",
      "vin": "6ZH3RW68XERP42933"
    },
    {
      "make": "Chevrolet",
      "model": "Suburban 1500",
      "model_year": "2005",
      "vin": "YWFNJUPPJSCF66208"
    },
    {
      "make": "Nissan",
      "model": "Maxima",
      "model_year": "2014",
      "vin": "F7NAGTNBKNLA31938"
    },
    {
      "make": "Lincoln",
      "model": "Navigator",
      "model_year": "2010",
      "vin": "MXHGPY065YPT85467"
    },
    {
      "make": "Mercedes-Benz",
      "model": "500 E",
      "model_year": "1992",
      "vin": "GWJLN3UP248R44212"
    },
    {
      "make": "Chevrolet",
      "model": "Volt",
      "model_year": "2017",
      "vin": "RH831G2RWRDR83450"
    },
    {
      "make": "Volkswagen",
      "model": "Rabbit",
      "model_year": "2009",
      "vin": "P7JLZCH66FLH03696"
    },
    {
      "make": "Pontiac",
      "model": "Grand Prix",
      "model_year": "2006",
      "vin": "7V1Y6EGDVY1E44662"
    },
    {
      "make": "Dodge",
      "model": "Sprinter 3500 Cargo",
      "model_year": "2004",
      "vin": "Y2DHRZC4YVZU29797"
    },
    {
      "make": "Chevrolet",
      "model": "TrailBlazer",
      "model_year": "2009",
      "vin": "VDBM2VFPYM0S89766"
    },
    {
      "make": "Dodge",
      "model": "Caravan Cargo",
      "model_year": "1994",
      "vin": "S7SCJLAF33TZ76862"
    },
    {
      "make": "Toyota",
      "model": "4Runner",
      "model_year": "2002",
      "vin": "3UUCUVXWHMRN19843"
    },
    {
      "make": "Aston Martin",
      "model": "Vanquish S",
      "model_year": "2018",
      "vin": "4HJ0SM1D566838315"
    },
    {
      "make": "INFINITI",
      "model": "G",
      "model_year": "1999",
      "vin": "BYXPXRG3V16C75625"
    },
    {
      "make": "GMC",
      "model": "Savana 2500 Cargo",
      "model_year": "2004",
      "vin": "CWLRV0RHAB1N65267"
    },
    {
      "make": "Hyundai",
      "model": "Elantra",
      "model_year": "2018",
      "vin": "DGWJL8RLPD8J72748"
    },
    {
      "make": "Chevrolet",
      "model": "Silverado 3500 HD Crew Cab",
      "model_year": "2010",
      "vin": "R2SB7AJ52Y7Z60349"
    },
    {
      "make": "Toyota",
      "model": "C-HR",
      "model_year": "2019",
      "vin": "32ML5TN86LD229914"
    },
    {
      "make": "Buick",
      "model": "Rainier",
      "model_year": "2007",
      "vin": "2ZYNKAV6WZGJ76684"
    },
    {
      "make": "Chevrolet",
      "model": "Silverado 2500 HD Extended Cab",
      "model_year": "2001",
      "vin": "P4AW9YP64T1R44104"
    },
    {
      "make": "Kia",
      "model": "Sportage",
      "model_year": "2001",
      "vin": "C3715JC1EV3A97241"
    },
    {
      "make": "GMC",
      "model": "Sierra 3500 HD Regular Cab",
      "model_year": "2016",
      "vin": "CPLGPCLBNUBL07919"
    },
    {
      "make": "Nissan",
      "model": "Frontier King Cab",
      "model_year": "2004",
      "vin": "BF43L7D8CNGP02963"
    },
    {
      "make": "Subaru",
      "model": "Impreza",
      "model_year": "1993",
      "vin": "65538SV9XT3E50981"
    },
    {
      "make": "Tesla",
      "model": "Model S",
      "model_year": "2013",
      "vin": "61BM9559TT5053477"
    },
    {
      "make": "Maserati",
      "model": "Levante",
      "model_year": "2019",
      "vin": "E2L83A9U2EN252571"
    },
    {
      "make": "Acura",
      "model": "SLX",
      "model_year": "1997",
      "vin": "6AVP320HZ2L241741"
    },
    {
      "make": "Ferrari",
      "model": "430 Scuderia",
      "model_year": "2009",
      "vin": "4FR8PESTG4BL63417"
    },
    {
      "make": "Dodge",
      "model": "Stealth",
      "model_year": "1996",
      "vin": "STV2GM2CJ0W358534"
    },
    {
      "make": "Dodge",
      "model": "Caravan Passenger",
      "model_year": "1999",
      "vin": "7TRH9HNWDTBR42824"
    },
    {
      "make": "BMW",
      "model": "X1",
      "model_year": "2018",
      "vin": "MY46FZ4V0ZC105761"
    },
    {
      "make": "Dodge",
      "model": "Colt",
      "model_year": "1994",
      "vin": "TVMP5MKUDFB885001"
    },
    {
      "make": "GMC",
      "model": "Sierra 2500 HD Crew Cab",
      "model_year": "2017",
      "vin": "CP6YCE926XC568172"
    },
    {
      "make": "Volvo",
      "model": "XC70",
      "model_year": "2013",
      "vin": "Y6N6ZNM9L7BS01635"
    },
    {
      "make": "Volvo",
      "model": "S80",
      "model_year": "2007",
      "vin": "SHJF45EX2V6P99001"
    },
    {
      "make": "Ram",
      "model": "ProMaster City",
      "model_year": "2016",
      "vin": "HKWPFBZSTNY170776"
    },
    {
      "make": "Ford",
      "model": "F350 Super Duty Crew Cab",
      "model_year": "2018",
      "vin": "G0EY9CBP8KWV88694"
    },
    {
      "make": "INFINITI",
      "model": "G",
      "model_year": "2008",
      "vin": "VHLY4HEGJ9EP04266"
    }
  ];

  module.exports = allcarsdata;