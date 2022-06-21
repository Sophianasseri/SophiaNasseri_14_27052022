const states = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'California',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
];

const department = [
  {
    value: 'sales',
    label: 'Sales',
  },
  {
    value: 'marketing',
    label: 'Marketing',
  },
  {
    value: 'engineering',
    label: 'Engineering',
  },
  {
    value: 'human resources',
    label: 'Human Resources',
  },
  {
    value: 'Legal',
    label: 'Legal',
  },
];

const tableEntries = [
  {
    value: '10',
    label: '10',
  },
  {
    value: '25',
    label: '25',
  },
  {
    value: '50',
    label: '50',
  },
  {
    value: '100',
    label: '100',
  },
];

const mockedData = [
  {
    firstName: 'Lynda',
    lastName: 'Sherr',
    startDate: '01/21/2019',
    department: 'Sales',
    dateOfBirth: '07/12/1985',
    street: '12649 Hermina Crossing',
    city: 'El Paso',
    state: 'TX',
    zipCode: '48167',
  },
  {
    firstName: 'Conny',
    lastName: 'Gounet',
    startDate: '12/09/2017',
    department: 'Marketing',
    dateOfBirth: '02/18/1992',
    street: '634 Pennsylvania Road',
    city: 'Fairfield',
    state: 'CT',
    zipCode: '31601',
  },
  {
    firstName: 'Davis',
    lastName: 'Rapelli',
    startDate: '08/25/2021',
    department: 'Human Resources',
    dateOfBirth: '05/02/1977',
    street: '033 Parkside Way',
    city: 'Columbus',
    state: 'OH',
    zipCode: '45726',
  },
  {
    firstName: 'Abdul',
    lastName: 'Davy',
    startDate: '11/22/2010',
    department: 'Human Resources',
    dateOfBirth: '10/10/1965',
    street: '02 Brentwood Terrace',
    city: 'Portsmouth',
    state: 'NH',
    zipCode: '38571',
  },

  {
    firstName: 'Marjorie',
    lastName: 'Acock',
    startDate: '02/17/1998',
    department: 'Engineering',
    dateOfBirth: '09/30/1973',
    street: '7867 Johnson Road',
    city: 'Sacramento',
    state: 'CA',
    zipCode: '51106',
  },

  {
    firstName: 'Marshall',
    lastName: 'Le febre',
    startDate: '04/03/2022',
    department: 'Legal',
    dateOfBirth: '04/25/2000',
    street: '624 Welch Circle',
    city: 'Minneapolis',
    state: 'MN',
    zipCode: '55912',
  },
  {
    firstName: 'Zaria',
    lastName: 'Tugman',
    startDate: '09/02/2012',
    department: 'Sales',
    dateOfBirth: '11/10/1989',
    street: '5447 3rd Point',
    city: 'Albuquerque',
    state: 'NM',
    zipCode: '68968',
  },
  {
    firstName: 'Marci',
    lastName: 'Compson',
    startDate: '08/17/1999',
    department: 'Marketing',
    dateOfBirth: '03/13/1978',
    street: '0 Derek Road',
    city: 'Akron',
    state: 'OH',
    zipCode: '84589',
  },
  {
    firstName: 'Claiborne',
    lastName: 'Sisneros',
    startDate: '07/12/2018',
    department: 'Engineering',
    dateOfBirth: '05/30/1967',
    street: '98822 Vera Trail',
    city: 'Salinas',
    state: 'CA',
    zipCode: '77859',
  },
  {
    firstName: 'Tanya',
    lastName: 'Burehill',
    startDate: '09/10/2021',
    department: 'Marketing',
    dateOfBirth: '06/22/1986',
    street: '34 Buena Vista Lane',
    city: 'Glendale',
    state: 'CA',
    zipCode: '89446',
  },
  {
    firstName: 'Emmalynne',
    lastName: 'Dennehy',
    startDate: '10/02/2022',
    department: 'Human Resources',
    dateOfBirth: '01/18/1997',
    street: '66018 Ludington Drive',
    city: 'El Paso',
    state: 'TX',
    zipCode: '14489',
  },
  {
    firstName: 'Itch',
    lastName: 'Lynds',
    startDate: '09/09/2014',
    department: 'Legal',
    dateOfBirth: '04/13/1978',
    street: '9900 Washington Bay',
    city: 'Hartford',
    state: 'CT',
    zipCode: '26894',
  },
  {
    firstName: 'Mordy',
    lastName: 'Turpie',
    startDate: '03/12/2018',
    department: 'Human Resources',
    dateOfBirth: '07/27/1982',
    street: '175 Arrowood Cricle',
    city: 'Saint Petersburg',
    state: 'FL',
    zipCode: '78958',
  },
  {
    firstName: 'Petrina',
    lastName: 'Sandiford',
    startDate: '11/30/2007',
    department: 'Sales',
    dateOfBirth: '05/22/1990',
    street: '870 Riverside Parkway',
    city: 'South Bend',
    state: 'IN',
    zipCode: '25586',
  },
  {
    firstName: 'Francklyn',
    lastName: 'Sheerin',
    startDate: '01/05/2019',
    department: 'Legal',
    dateOfBirth: '08/02/1998',
    street: '31 Loftsgordon Court',
    city: 'Tacoma',
    state: 'WA',
    zipCode: '75824',
  },
];

export { states, department, tableEntries, mockedData };
