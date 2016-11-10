  document.title = "MoJ DS's Technology Radar (September 2016)";

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
          "r": 39,
          "t": 14
        },
        "movement": "t"
      },
      {
        "name": "Rails",
        "pc": {
          "r": 51,
          "t": 23
        },
        "movement": "t"
      },
      {
        "name": "Sinatra",
        "pc": {
          "r": 43,
          "t": 32
        },
        "movement": "t"
      },
      {
        "name": "Python",
        "pc": {
          "r": 61,
          "t": 41
        },
        "movement": "t"
      },
      {
        "name": "Django",
        "pc": {
          "r": 40,
          "t": 50
        },
        "movement": "t"
      },
      {
        "name": "Javascript (vanilla)",
        "pc": {
          "r": 62,
          "t": 59
        },
        "movement": "t"
      },
      {
        "name": "SASS",
        "pc": {
          "r": 46,
          "t": 68
        },
        "movement": "t"
      },
      {
        "name": "LESS (css)",
        "pc": {
          "r": 58,
          "t": 77
        },
        "movement": "t"
      },
      {
        "name": "EJB",
        "pc": {
          "r": 342,
          "t": 26
        },
        "movement": "t"
      },
      {
        "name": "Angular",
        "pc": {
          "r": 370,
          "t": 47
        },
        "movement": "t"
      },
      {
        "name": "Java",
        "pc": {
          "r": 333,
          "t": 68
        },
        "movement": "t"
      },
      {
        "name": "Node",
        "pc": {
          "r": 148,
          "t": 47
        },
        "movement": "t"
      },
      {
        "name": "Crystal",
        "pc": {
          "r": 230,
          "t": 17
        },
        "movement": "t"
      },
      {
        "name": "Elixir",
        "pc": {
          "r": 273,
          "t": 29
        },
        "movement": "t"
      },
      {
        "name": "Phoenix",
        "pc": {
          "r": 236,
          "t": 41
        },
        "movement": "t"
      },
      {
        "name": "Go",
        "pc": {
          "r": 273,
          "t": 53
        },
        "movement": "t"
      },
      {
        "name": "Rust",
        "pc": {
          "r": 246,
          "t": 65
        },
        "movement": "t"
      },
      {
        "name": "Elm",
        "pc": {
          "r": 255,
          "t": 77
        },
        "movement": "t"
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
          "r": 27,
          "t": 123
        },
        "movement": "t"
      },
      {
        "name": "AWS",
        "pc": {
          "r": 74,
          "t": 151
        },
        "movement": "t"
      },
      {
        "name": "Google cloud",
        "pc": {
          "r": 228,
          "t": 123
        },
        "movement": "t"
      },
      {
        "name": "Dais",
        "pc": {
          "r": 258,
          "t": 151
        },
        "movement": "t"
      },
      {
        "name": "Private cloud",
        "pc": {
          "r": 329,
          "t": 137
        },
        "movement": "t"
      },
      {
        "name": "Azure ",
        "pc": {
          "r": 138,
          "t": 112
        },
        "movement": "t"
      },
      {
        "name": "Kubernetes",
        "pc": {
          "r": 150,
          "t": 129
        },
        "movement": "t"
      },
      {
        "name": "Terraform",
        "pc": {
          "r": 129,
          "t": 146
        },
        "movement": "t"
      },
      {
        "name": "Heroku",
        "pc": {
          "r": 172,
          "t": 163
        },
        "movement": "t"
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
          "r": 35,
          "t": 192
        },
        "movement": "t"
      },
      {
        "name": "Emergent architecture",
        "pc": {
          "r": 65,
          "t": 199
        },
        "movement": "t"
      },
      {
        "name": "Agile development",
        "pc": {
          "r": 39,
          "t": 206
        },
        "movement": "t"
      },
      {
        "name": "Microservices",
        "pc": {
          "r": 53,
          "t": 213
        },
        "movement": "t"
      },
      {
        "name": "Monolith-first",
        "pc": {
          "r": 43,
          "t": 220
        },
        "movement": "t"
      },
      {
        "name": "Shared sign on",
        "pc": {
          "r": 71,
          "t": 227
        },
        "movement": "t"
      },
      {
        "name": "BDD",
        "pc": {
          "r": 30,
          "t": 234
        },
        "movement": "t"
      },
      {
        "name": "Agile security",
        "pc": {
          "r": 64,
          "t": 241
        },
        "movement": "t"
      },
      {
        "name": "Coding in the Open",
        "pc": {
          "r": 41,
          "t": 248
        },
        "movement": "t"
      },
      {
        "name": "Github Flow",
        "pc": {
          "r": 50,
          "t": 255
        },
        "movement": "t"
      },
      {
        "name": "Responsive Design",
        "pc": {
          "r": 42,
          "t": 262
        },
        "movement": "t"
      },
      {
        "name": "Fuzz testing",
        "pc": {
          "r": 228,
          "t": 199
        },
        "movement": "t"
      },
      {
        "name": "Mutation testing",
        "pc": {
          "r": 269,
          "t": 213
        },
        "movement": "t"
      },
      {
        "name": "Websocket connections into secure networks",
        "pc": {
          "r": 248,
          "t": 227
        },
        "movement": "t"
      },
      {
        "name": "Serverless infrastructure",
        "pc": {
          "r": 272,
          "t": 241
        },
        "movement": "t"
      },
      {
        "name": "Universal JS",
        "pc": {
          "r": 226,
          "t": 255
        },
        "movement": "t"
      },
      {
        "name": "Single-Page Apps",
        "pc": {
          "r": 325,
          "t": 227
        },
        "movement": "t"
      },
      {
        "name": "Federated Active Directory auth",
        "pc": {
          "r": 136,
          "t": 206
        },
        "movement": "t"
      },
      {
        "name": "Exploratory manual testing",
        "pc": {
          "r": 161,
          "t": 227
        },
        "movement": "t"
      },
      {
        "name": "Continuous service review",
        "pc": {
          "r": 135,
          "t": 248
        },
        "movement": "t"
      }
    ]
  },
  {
    "color": "#629700",
    "left": 1030,
    "top": 518,
    "quadrant": "Tools",
    "items": [
      {
        "name": "Docker",
        "pc": {
          "r": 41,
          "t": 303
        },
        "movement": "t"
      },
      {
        "name": "Gov_uk_elements gem",
        "pc": {
          "r": 54,
          "t": 331
        },
        "movement": "t"
      },
      {
        "name": "Kontena",
        "pc": {
          "r": 240,
          "t": 296
        },
        "movement": "t"
      },
      {
        "name": "Terraform",
        "pc": {
          "r": 253,
          "t": 317
        },
        "movement": "t"
      },
      {
        "name": "Docker Swarm",
        "pc": {
          "r": 237,
          "t": 338
        },
        "movement": "t"
      },
      {
        "name": "ITIL",
        "pc": {
          "r": 334,
          "t": 317
        },
        "movement": "t"
      },
      {
        "name": "Vault",
        "pc": {
          "r": 146,
          "t": 303
        },
        "movement": "t"
      },
      {
        "name": "Lets Encrypt",
        "pc": {
          "r": 168,
          "t": 331
        },
        "movement": "t"
      }
    ]
  }
];
