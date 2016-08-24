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
          "r": 36,
          "t": 14
        },
        "movement": null
      },
      {
        "name": "Rails",
        "pc": {
          "r": 59,
          "t": 23
        },
        "movement": null
      },
      {
        "name": "Sinatra",
        "pc": {
          "r": 38,
          "t": 32
        },
        "movement": null
      },
      {
        "name": "Python",
        "pc": {
          "r": 73,
          "t": 41
        },
        "movement": null
      },
      {
        "name": "Django",
        "pc": {
          "r": 49,
          "t": 50
        },
        "movement": null
      },
      {
        "name": "Javascript (vanilla)",
        "pc": {
          "r": 57,
          "t": 59
        },
        "movement": null
      },
      {
        "name": "SASS",
        "pc": {
          "r": 30,
          "t": 68
        },
        "movement": null
      },
      {
        "name": "LESS",
        "pc": {
          "r": 69,
          "t": 77
        },
        "movement": null
      },
      {
        "name": "Angular",
        "pc": {
          "r": 343,
          "t": 33
        },
        "movement": null
      },
      {
        "name": "Java",
        "pc": {
          "r": 351,
          "t": 61
        },
        "movement": null
      },
      {
        "name": "Node",
        "pc": {
          "r": 129,
          "t": 47
        },
        "movement": null
      },
      {
        "name": "Crystal",
        "pc": {
          "r": 232,
          "t": 17
        },
        "movement": null
      },
      {
        "name": "Elixir",
        "pc": {
          "r": 257,
          "t": 29
        },
        "movement": null
      },
      {
        "name": "Phoenix",
        "pc": {
          "r": 238,
          "t": 41
        },
        "movement": null
      },
      {
        "name": "Go",
        "pc": {
          "r": 262,
          "t": 53
        },
        "movement": null
      },
      {
        "name": "Rust",
        "pc": {
          "r": 249,
          "t": 65
        },
        "movement": null
      },
      {
        "name": "Elm",
        "pc": {
          "r": 265,
          "t": 77
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
          "r": 32,
          "t": 123
        },
        "movement": null
      },
      {
        "name": "AWS",
        "pc": {
          "r": 71,
          "t": 151
        },
        "movement": null
      },
      {
        "name": "Google cloud",
        "pc": {
          "r": 231,
          "t": 123
        },
        "movement": null
      },
      {
        "name": "Dais",
        "pc": {
          "r": 269,
          "t": 151
        },
        "movement": null
      },
      {
        "name": "Private cloud",
        "pc": {
          "r": 336,
          "t": 137
        },
        "movement": null
      },
      {
        "name": "Azure ",
        "pc": {
          "r": 131,
          "t": 112
        },
        "movement": null
      },
      {
        "name": "Kubernetes",
        "pc": {
          "r": 154,
          "t": 129
        },
        "movement": null
      },
      {
        "name": "Terraform",
        "pc": {
          "r": 138,
          "t": 146
        },
        "movement": null
      },
      {
        "name": "Heroku",
        "pc": {
          "r": 166,
          "t": 163
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
          "r": 40,
          "t": 192
        },
        "movement": null
      },
      {
        "name": "Emergent architecture",
        "pc": {
          "r": 71,
          "t": 199
        },
        "movement": null
      },
      {
        "name": "Agile development",
        "pc": {
          "r": 31,
          "t": 206
        },
        "movement": null
      },
      {
        "name": "Microservices",
        "pc": {
          "r": 72,
          "t": 213
        },
        "movement": null
      },
      {
        "name": "Monolith-first",
        "pc": {
          "r": 48,
          "t": 220
        },
        "movement": null
      },
      {
        "name": "Shared sign on",
        "pc": {
          "r": 56,
          "t": 227
        },
        "movement": null
      },
      {
        "name": "BDD",
        "pc": {
          "r": 30,
          "t": 234
        },
        "movement": null
      },
      {
        "name": "Agile security",
        "pc": {
          "r": 54,
          "t": 241
        },
        "movement": null
      },
      {
        "name": "Coding in the Open",
        "pc": {
          "r": 48,
          "t": 248
        },
        "movement": null
      },
      {
        "name": "Github Flow",
        "pc": {
          "r": 73,
          "t": 255
        },
        "movement": null
      },
      {
        "name": "Responsive Design",
        "pc": {
          "r": 38,
          "t": 262
        },
        "movement": null
      },
      {
        "name": "Fuzz testing",
        "pc": {
          "r": 242,
          "t": 202
        },
        "movement": null
      },
      {
        "name": "Websocket connections into secure networks",
        "pc": {
          "r": 251,
          "t": 219
        },
        "movement": null
      },
      {
        "name": "Serverless infrastructure",
        "pc": {
          "r": 233,
          "t": 236
        },
        "movement": null
      },
      {
        "name": "Universal JS",
        "pc": {
          "r": 269,
          "t": 253
        },
        "movement": null
      },
      {
        "name": "Single-Page Apps",
        "pc": {
          "r": 348,
          "t": 227
        },
        "movement": null
      },
      {
        "name": "Federated Active Directory auth",
        "pc": {
          "r": 128,
          "t": 206
        },
        "movement": null
      },
      {
        "name": "Exploratory manual testing",
        "pc": {
          "r": 155,
          "t": 227
        },
        "movement": null
      },
      {
        "name": "Continuous service review",
        "pc": {
          "r": 146,
          "t": 248
        },
        "movement": null
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
          "r": 39,
          "t": 303
        },
        "movement": null
      },
      {
        "name": "Gov_uk_elements gem",
        "pc": {
          "r": 72,
          "t": 331
        },
        "movement": null
      },
      {
        "name": "Kontena",
        "pc": {
          "r": 240,
          "t": 317
        },
        "movement": null
      },
      {
        "name": "ITIL",
        "pc": {
          "r": 344,
          "t": 317
        },
        "movement": null
      },
      {
        "name": "Vault",
        "pc": {
          "r": 143,
          "t": 303
        },
        "movement": null
      },
      {
        "name": "Lets Encrypt",
        "pc": {
          "r": 167,
          "t": 331
        },
        "movement": null
      }
    ]
  }
];
