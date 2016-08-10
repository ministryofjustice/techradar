  document.title = "MoJ DS's Technology Radar (August 16)";

  var radar_arcs = [
  {
    "r": 100,
    "name": "Adopt"
  },
  {
    "r": 200,
    "name": "Trial"
  },
  {
    "r": 300,
    "name": "Assess"
  },
  {
    "r": 400,
    "name": "Hold"
  }
];

  var h = 1000;
  var w = 1200;

  var radar_data = [
  {
    "left": 1030,
    "top": 18,
    "color": "#587486",
    "quadrant": "Languages & Frameworks",
    "items": [
      {
        "name": "Ruby",
        "pc": {
          "r": 44.21975401770139,
          "t": 10
        },
        "movement": null
      },
      {
        "name": "Rails",
        "pc": {
          "r": 48.34126554559958,
          "t": 15
        },
        "movement": null
      },
      {
        "name": "Sinatra",
        "pc": {
          "r": 48.02624700559669,
          "t": 20
        },
        "movement": null
      },
      {
        "name": "Python",
        "pc": {
          "r": 45.816016076506344,
          "t": 25
        },
        "movement": null
      },
      {
        "name": "Django",
        "pc": {
          "r": 41.90172917276205,
          "t": 30
        },
        "movement": null
      },
      {
        "name": "Javascript (vanilla)",
        "pc": {
          "r": 53.476525846041554,
          "t": 35
        },
        "movement": null
      },
      {
        "name": "SASS",
        "pc": {
          "r": 55.32163093154873,
          "t": 40
        },
        "movement": null
      },
      {
        "name": "LESS",
        "pc": {
          "r": 40.060236178355666,
          "t": 45
        },
        "movement": null
      },
      {
        "name": "Universal",
        "pc": {
          "r": 241.40673175382554,
          "t": 50
        },
        "movement": null
      },
      {
        "name": "Angular",
        "pc": {
          "r": 356.1524023021865,
          "t": 55
        },
        "movement": null
      },
      {
        "name": "Java",
        "pc": {
          "r": 340.24151833344814,
          "t": 60
        },
        "movement": null
      },
      {
        "name": "Node",
        "pc": {
          "r": 156.5899578895933,
          "t": 65
        },
        "movement": null
      }
    ]
  },
  {
    "color": "#B70062",
    "left": 34,
    "top": 18,
    "quadrant": "Platforms",
    "items": [
      {
        "name": "DS Cloud Platform",
        "pc": {
          "r": 41.48837915346939,
          "t": 100
        },
        "movement": null
      },
      {
        "name": "AWS",
        "pc": {
          "r": 51.90690441491425,
          "t": 107
        },
        "movement": null
      },
      {
        "name": "Google cloud",
        "pc": {
          "r": 256.97553065790726,
          "t": 114
        },
        "movement": null
      },
      {
        "name": "Dais",
        "pc": {
          "r": 243.1547126166459,
          "t": 121
        },
        "movement": null
      },
      {
        "name": "Private cloud",
        "pc": {
          "r": 341.31238698932606,
          "t": 128
        },
        "movement": null
      },
      {
        "name": "Azure ",
        "pc": {
          "r": 143.52992881036081,
          "t": 135
        },
        "movement": null
      },
      {
        "name": "Kubernetes",
        "pc": {
          "r": 155.12862931058316,
          "t": 142
        },
        "movement": null
      },
      {
        "name": "Terraform",
        "pc": {
          "r": 158.96898618785926,
          "t": 149
        },
        "movement": null
      },
      {
        "name": "Heroku",
        "pc": {
          "r": 144.4858220156593,
          "t": 156
        },
        "movement": null
      }
    ]
  },
  {
    "left": 45,
    "top": 518,
    "color": "#DC6F1D",
    "quadrant": "Techniques",
    "items": [
      {
        "name": "Progressive Enhancement",
        "pc": {
          "r": 44.178700091886476,
          "t": 190
        },
        "movement": null
      },
      {
        "name": "Emergent architecture",
        "pc": {
          "r": 56.02059947070582,
          "t": 193
        },
        "movement": null
      },
      {
        "name": "Agile development",
        "pc": {
          "r": 44.60185219059239,
          "t": 196
        },
        "movement": null
      },
      {
        "name": "Microservices",
        "pc": {
          "r": 50.95489947534032,
          "t": 199
        },
        "movement": null
      },
      {
        "name": "Monolith-first",
        "pc": {
          "r": 46.31553077152894,
          "t": 202
        },
        "movement": null
      },
      {
        "name": "Shared sign on",
        "pc": {
          "r": 57.109257046120156,
          "t": 205
        },
        "movement": null
      },
      {
        "name": "BDD",
        "pc": {
          "r": 45.082553401528,
          "t": 208
        },
        "movement": null
      },
      {
        "name": "Agile security",
        "pc": {
          "r": 40.42771001352958,
          "t": 211
        },
        "movement": null
      },
      {
        "name": "Coding in the Open",
        "pc": {
          "r": 48.8346329754262,
          "t": 214
        },
        "movement": null
      },
      {
        "name": "Github Flow",
        "pc": {
          "r": 44.58696359484632,
          "t": 217
        },
        "movement": null
      },
      {
        "name": "Responsive Design",
        "pc": {
          "r": 42.00029904606729,
          "t": 220
        },
        "movement": null
      },
      {
        "name": "Fuzz testing",
        "pc": {
          "r": 255.1510830954661,
          "t": 223
        },
        "movement": null
      },
      {
        "name": "Websocket connections into secure networks",
        "pc": {
          "r": 242.5928079180026,
          "t": 226
        },
        "movement": null
      },
      {
        "name": "Serverless infrastructure",
        "pc": {
          "r": 244.26728885273798,
          "t": 229
        },
        "movement": null
      },
      {
        "name": "Single-Page Apps",
        "pc": {
          "r": 349.3034665566701,
          "t": 232
        },
        "movement": null
      },
      {
        "name": "Federated Active Directory auth",
        "pc": {
          "r": 148.1099904946803,
          "t": 235
        },
        "movement": null
      },
      {
        "name": "Exploratory manual testing",
        "pc": {
          "r": 141.5288325521634,
          "t": 238
        },
        "movement": null
      },
      {
        "name": "Continuous service review",
        "pc": {
          "r": 151.24412799106446,
          "t": 241
        },
        "movement": null
      }
    ]
  },
  {
    "color": "#B70062",
    "left": 1030,
    "top": 518,
    "quadrant": "Tools",
    "items": [
      {
        "name": "Docker",
        "pc": {
          "r": 51.430053982522104,
          "t": 280
        },
        "movement": null
      },
      {
        "name": "Gov_uk_elements gem",
        "pc": {
          "r": 41.821345335461174,
          "t": 291
        },
        "movement": null
      },
      {
        "name": "Kontena",
        "pc": {
          "r": 256.535663529819,
          "t": 302
        },
        "movement": null
      },
      {
        "name": "ITIL",
        "pc": {
          "r": 346.72758911814924,
          "t": 313
        },
        "movement": null
      },
      {
        "name": "Vault",
        "pc": {
          "r": 142.06481091988877,
          "t": 324
        },
        "movement": null
      },
      {
        "name": "Lets Encrypt",
        "pc": {
          "r": 148.16595277756645,
          "t": 335
        },
        "movement": null
      }
    ]
  }
];
