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
          "r": 32.39377757955178,
          "t": 14
        },
        "movement": null
      },
      {
        "name": "Rails",
        "pc": {
          "r": 51.84067289788537,
          "t": 23
        },
        "movement": null
      },
      {
        "name": "Sinatra",
        "pc": {
          "r": 32.53138974732235,
          "t": 32
        },
        "movement": null
      },
      {
        "name": "Python",
        "pc": {
          "r": 58.05165137324187,
          "t": 41
        },
        "movement": null
      },
      {
        "name": "Django",
        "pc": {
          "r": 29.587191850516472,
          "t": 50
        },
        "movement": null
      },
      {
        "name": "Javascript (vanilla)",
        "pc": {
          "r": 57.58183979698106,
          "t": 59
        },
        "movement": null
      },
      {
        "name": "SASS",
        "pc": {
          "r": 45.36167485487659,
          "t": 68
        },
        "movement": null
      },
      {
        "name": "LESS",
        "pc": {
          "r": 53.38404971572174,
          "t": 77
        },
        "movement": null
      },
      {
        "name": "Angular",
        "pc": {
          "r": 338.09396932524345,
          "t": 33
        },
        "movement": null
      },
      {
        "name": "Java",
        "pc": {
          "r": 372.4669059392895,
          "t": 61
        },
        "movement": null
      },
      {
        "name": "Node",
        "pc": {
          "r": 139.07352755566984,
          "t": 47
        },
        "movement": null
      },
      {
        "name": "Crystal",
        "pc": {
          "r": 241.55144438468147,
          "t": 17
        },
        "movement": null
      },
      {
        "name": "Elixir",
        "pc": {
          "r": 274.1745245290547,
          "t": 29
        },
        "movement": null
      },
      {
        "name": "Phoenix",
        "pc": {
          "r": 239.77985681402575,
          "t": 41
        },
        "movement": null
      },
      {
        "name": "Go",
        "pc": {
          "r": 271.98905245593477,
          "t": 53
        },
        "movement": null
      },
      {
        "name": "Rust",
        "pc": {
          "r": 248.77388016820828,
          "t": 65
        },
        "movement": null
      },
      {
        "name": "Elm",
        "pc": {
          "r": 257.2448661563759,
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
          "r": 27.720120672487212,
          "t": 123
        },
        "movement": null
      },
      {
        "name": "AWS",
        "pc": {
          "r": 66.2672979806928,
          "t": 151
        },
        "movement": null
      },
      {
        "name": "Google cloud",
        "pc": {
          "r": 234.90164988614293,
          "t": 123
        },
        "movement": null
      },
      {
        "name": "Dais",
        "pc": {
          "r": 255.12547953041278,
          "t": 151
        },
        "movement": null
      },
      {
        "name": "Private cloud",
        "pc": {
          "r": 347.6971887334838,
          "t": 137
        },
        "movement": null
      },
      {
        "name": "Azure ",
        "pc": {
          "r": 132.737904014458,
          "t": 112
        },
        "movement": null
      },
      {
        "name": "Kubernetes",
        "pc": {
          "r": 170.0551433429605,
          "t": 129
        },
        "movement": null
      },
      {
        "name": "Terraform",
        "pc": {
          "r": 143.46295409544368,
          "t": 146
        },
        "movement": null
      },
      {
        "name": "Heroku",
        "pc": {
          "r": 158.6442514379626,
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
          "r": 47.792663617650035,
          "t": 192
        },
        "movement": null
      },
      {
        "name": "Emergent architecture",
        "pc": {
          "r": 73.56199378313042,
          "t": 199
        },
        "movement": null
      },
      {
        "name": "Agile development",
        "pc": {
          "r": 27.23078908840594,
          "t": 206
        },
        "movement": null
      },
      {
        "name": "Microservices",
        "pc": {
          "r": 55.96335261188551,
          "t": 213
        },
        "movement": null
      },
      {
        "name": "Monolith-first",
        "pc": {
          "r": 30.19214052149131,
          "t": 220
        },
        "movement": null
      },
      {
        "name": "Shared sign on",
        "pc": {
          "r": 59.768491357014426,
          "t": 227
        },
        "movement": null
      },
      {
        "name": "BDD",
        "pc": {
          "r": 27.03480152246526,
          "t": 234
        },
        "movement": null
      },
      {
        "name": "Agile security",
        "pc": {
          "r": 69.13732829187683,
          "t": 241
        },
        "movement": null
      },
      {
        "name": "Coding in the Open",
        "pc": {
          "r": 47.63947477085147,
          "t": 248
        },
        "movement": null
      },
      {
        "name": "Github Flow",
        "pc": {
          "r": 74.4536942631608,
          "t": 255
        },
        "movement": null
      },
      {
        "name": "Responsive Design",
        "pc": {
          "r": 43.34719169430218,
          "t": 262
        },
        "movement": null
      },
      {
        "name": "Fuzz testing",
        "pc": {
          "r": 235.47684639699867,
          "t": 202
        },
        "movement": null
      },
      {
        "name": "Websocket connections into secure networks",
        "pc": {
          "r": 255.40578581550707,
          "t": 219
        },
        "movement": null
      },
      {
        "name": "Serverless infrastructure",
        "pc": {
          "r": 242.1762538310313,
          "t": 236
        },
        "movement": null
      },
      {
        "name": "Universal JS",
        "pc": {
          "r": 259.2680850801863,
          "t": 253
        },
        "movement": null
      },
      {
        "name": "Single-Page Apps",
        "pc": {
          "r": 326.8729534558103,
          "t": 227
        },
        "movement": null
      },
      {
        "name": "Federated Active Directory auth",
        "pc": {
          "r": 141.7855656415473,
          "t": 206
        },
        "movement": null
      },
      {
        "name": "Exploratory manual testing",
        "pc": {
          "r": 164.45987023435254,
          "t": 227
        },
        "movement": null
      },
      {
        "name": "Continuous service review",
        "pc": {
          "r": 131.09107767187191,
          "t": 248
        },
        "movement": null
      }
    ]
  },
  {
    "color": "#B76200",
    "left": 1030,
    "top": 518,
    "quadrant": "Tools",
    "items": [
      {
        "name": "Docker",
        "pc": {
          "r": 47.94101251750674,
          "t": 303
        },
        "movement": null
      },
      {
        "name": "Gov_uk_elements gem",
        "pc": {
          "r": 63.031113727118374,
          "t": 331
        },
        "movement": null
      },
      {
        "name": "Kontena",
        "pc": {
          "r": 237.35980049755463,
          "t": 317
        },
        "movement": null
      },
      {
        "name": "ITIL",
        "pc": {
          "r": 327.21624888275596,
          "t": 317
        },
        "movement": null
      },
      {
        "name": "Vault",
        "pc": {
          "r": 134.52708222739625,
          "t": 303
        },
        "movement": null
      },
      {
        "name": "Lets Encrypt",
        "pc": {
          "r": 174.8980714852785,
          "t": 331
        },
        "movement": null
      }
    ]
  }
];
