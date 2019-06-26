class SearchHelper {
  constructor() {
    this.cities = [
      {
        "id": 707860,
        "name": "Hurzuf",
        "country": "UA",
        "coord": {
          "lon": 34.283333,
          "lat": 44.549999
        }
      },
      {
        "id": 519188,
        "name": "Novinki",
        "country": "RU",
        "coord": {
          "lon": 37.666668,
          "lat": 55.683334
        }
      },
      {
        "id": 1283378,
        "name": "Gorkhā",
        "country": "NP",
        "coord": {
          "lon": 84.633331,
          "lat": 28
        }
      },
      {
        "id": 1270260,
        "name": "State of Haryāna",
        "country": "IN",
        "coord": {
          "lon": 76,
          "lat": 29
        }
      },
      {
        "id": 708546,
        "name": "Holubynka",
        "country": "UA",
        "coord": {
          "lon": 33.900002,
          "lat": 44.599998
        }
      },
      {
        "id": 1283710,
        "name": "Bāgmatī Zone",
        "country": "NP",
        "coord": {
          "lon": 85.416664,
          "lat": 28
        }
      },
      {
        "id": 529334,
        "name": "Mar’ina Roshcha",
        "country": "RU",
        "coord": {
          "lon": 37.611111,
          "lat": 55.796391
        }
      },
      {
        "id": 1269750,
        "name": "Republic of India",
        "country": "IN",
        "coord": {
          "lon": 77,
          "lat": 20
        }
      },
      {
        "id": 1283240,
        "name": "Kathmandu",
        "country": "NP",
        "coord": {
          "lon": 85.316666,
          "lat": 27.716667
        }
      },
      {
        "id": 703363,
        "name": "Laspi",
        "country": "UA",
        "coord": {
          "lon": 33.733334,
          "lat": 44.416668
        }
      },
      {
        "id": 3632308,
        "name": "Merida",
        "country": "VE",
        "coord": {
          "lon": -71.144997,
          "lat": 8.598333
        }
      },
      {
        "id": 473537,
        "name": "Vinogradovo",
        "country": "RU",
        "coord": {
          "lon": 38.545555,
          "lat": 55.423332
        }
      },
      {
        "id": 384848,
        "name": "Qarah Gawl al ‘Ulyā",
        "country": "IQ",
        "coord": {
          "lon": 45.6325,
          "lat": 35.353889
        }
      },
      {
        "id": 569143,
        "name": "Cherkizovo",
        "country": "RU",
        "coord": {
          "lon": 37.728889,
          "lat": 55.800835
        }
      },
      {
        "id": 713514,
        "name": "Alupka",
        "country": "UA",
        "coord": {
          "lon": 34.049999,
          "lat": 44.416668
        }
      },
      {
        "id": 2878044,
        "name": "Lichtenrade",
        "country": "DE",
        "coord": {
          "lon": 13.40637,
          "lat": 52.398441
        }
      },
      {
        "id": 464176,
        "name": "Zavety Il’icha",
        "country": "RU",
        "coord": {
          "lon": 37.849998,
          "lat": 56.049999
        }
      },
      {
        "id": 295582,
        "name": "‘Azriqam",
        "country": "IL",
        "coord": {
          "lon": 34.700001,
          "lat": 31.75
        }
      },
      {
        "id": 1271231,
        "name": "Ghūra",
        "country": "IN",
        "coord": {
          "lon": 79.883331,
          "lat": 24.766666
        }
      },
      {
        "id": 690856,
        "name": "Tyuzler",
        "country": "UA",
        "coord": {
          "lon": 34.083332,
          "lat": 44.466667
        }
      },
      {
        "id": 464737,
        "name": "Zaponor’ye",
        "country": "RU",
        "coord": {
          "lon": 38.861942,
          "lat": 55.639999
        }
      },
      {
        "id": 707716,
        "name": "Il’ichëvka",
        "country": "UA",
        "coord": {
          "lon": 34.383331,
          "lat": 44.666668
        }
      },
      {
        "id": 697959,
        "name": "Partyzans’ke",
        "country": "UA",
        "coord": {
          "lon": 34.083332,
          "lat": 44.833332
        }
      },
      {
        "id": 803611,
        "name": "Yurevichi",
        "country": "RU",
        "coord": {
          "lon": 39.934444,
          "lat": 43.600555
        }
      },
      {
        "id": 614371,
        "name": "Gumist’a",
        "country": "GE",
        "coord": {
          "lon": 40.973888,
          "lat": 43.026943
        }
      },
      {
        "id": 874560,
        "name": "Ptitsefabrika",
        "country": "GE",
        "coord": {
          "lon": 40.290558,
          "lat": 43.183613
        }
      },
      {
        "id": 874652,
        "name": "Orekhovo",
        "country": "GE",
        "coord": {
          "lon": 40.146111,
          "lat": 43.351391
        }
      },
      {
        "id": 2347078,
        "name": "Birim",
        "country": "NG",
        "coord": {
          "lon": 9.997027,
          "lat": 10.062094
        }
      },
      {
        "id": 2051302,
        "name": "Priiskovyy",
        "country": "RU",
        "coord": {
          "lon": 132.822495,
          "lat": 42.819168
        }
      },
      {
        "id": 563692,
        "name": "Dzhaga",
        "country": "RU",
        "coord": {
          "lon": 42.650002,
          "lat": 43.25
        }
      },
      {
        "id": 481725,
        "name": "Tret’ya Rota",
        "country": "RU",
        "coord": {
          "lon": 39.681389,
          "lat": 43.741943
        }
      },
      {
        "id": 2638976,
        "name": "Ruislip",
        "country": "GB",
        "coord": {
          "lon": -0.42341,
          "lat": 51.573441
        }
      },
      {
        "id": 2892705,
        "name": "Karow",
        "country": "DE",
        "coord": {
          "lon": 13.48117,
          "lat": 52.609039
        }
      },
      {
        "id": 2922336,
        "name": "Gatow",
        "country": "DE",
        "coord": {
          "lon": 13.18285,
          "lat": 52.483238
        }
      },
      {
        "id": 975511,
        "name": "Mkuze",
        "country": "ZA",
        "coord": {
          "lon": 32.038609,
          "lat": -27.616409
        }
      },
      {
        "id": 1280737,
        "name": "Lhasa",
        "country": "CN",
        "coord": {
          "lon": 91.099998,
          "lat": 29.65
        }
      },
      {
        "id": 745042,
        "name": "İstanbul",
        "country": "TR",
        "coord": {
          "lon": 28.983311,
          "lat": 41.03508
        }
      },
      {
        "id": 3496831,
        "name": "Mao",
        "country": "DO",
        "coord": {
          "lon": -71.078133,
          "lat": 19.551861
        }
      },
      {
        "id": 2017370,
        "name": "Russian Federation",
        "country": "RU",
        "coord": {
          "lon": 100,
          "lat": 60
        }
      },
      {
        "id": 2045761,
        "name": "De-Friz",
        "country": "RU",
        "coord": {
          "lon": 131.991394,
          "lat": 43.27861
        }
      },
      {
        "id": 1257986,
        "name": "Rumbak",
        "country": "IN",
        "coord": {
          "lon": 77.416664,
          "lat": 34.049999
        }
      },
      {
        "id": 476350,
        "name": "Vavibet",
        "country": "RU",
        "coord": {
          "lon": 34.916668,
          "lat": 67.933334
        }
      },
      {
        "id": 1343000,
        "name": "Surtagān Chib",
        "country": "PK",
        "coord": {
          "lon": 64.656113,
          "lat": 26.474443
        }
      },
      {
        "id": 456169,
        "name": "Rīgas Rajons",
        "country": "LV",
        "coord": {
          "lon": 24.333332,
          "lat": 57
        }
      },
      {
        "id": 475279,
        "name": "Verkhneye Shchekotikhino",
        "country": "RU",
        "coord": {
          "lon": 36.133331,
          "lat": 53
        }
      },
      {
        "id": 711349,
        "name": "Bucha",
        "country": "UA",
        "coord": {
          "lon": 30.366671,
          "lat": 50.583328
        }
      },
      {
        "id": 798544,
        "name": "Republic of Poland",
        "country": "PL",
        "coord": {
          "lon": 20,
          "lat": 52
        }
      },
      {
        "id": 3094325,
        "name": "Kuchary",
        "country": "PL",
        "coord": {
          "lon": 19.383329,
          "lat": 52.150002
        }
      },
      {
        "id": 6255149,
        "name": "North America",
        "country": "",
        "coord": {
          "lon": -100.546883,
          "lat": 46.073231
        }
      },
      {
        "id": 3575514,
        "name": "Brumaire",
        "country": "KN",
        "coord": {
          "lon": -62.73333,
          "lat": 17.299999
        }
      },
      {
        "id": 1861387,
        "name": "Ishikawa-ken",
        "country": "JP",
        "coord": {
          "lon": 136.770493,
          "lat": 36.77145
        }
      },
      {
        "id": 1857578,
        "name": "Matoba",
        "country": "JP",
        "coord": {
          "lon": 133.949997,
          "lat": 34.25
        }
      },
      {
        "id": 1299298,
        "name": "Pya",
        "country": "MM",
        "coord": {
          "lon": 95.599998,
          "lat": 21.51667
        }
      },
      {
        "id": 3256023,
        "name": "Kalanac",
        "country": "BA",
        "coord": {
          "lon": 18.78389,
          "lat": 44.86861
        }
      },
      {
        "id": 2921044,
        "name": "Federal Republic of Germany",
        "country": "DE",
        "coord": {
          "lon": 10.5,
          "lat": 51.5
        }
      },
      {
        "id": 2861876,
        "name": "Land Nordrhein-Westfalen",
        "country": "DE",
        "coord": {
          "lon": 7,
          "lat": 51.5
        }
      },
      {
        "id": 802899,
        "name": "Mutaykutan",
        "country": "RU",
        "coord": {
          "lon": 47.660641,
          "lat": 42.818859
        }
      },
      {
        "id": 523523,
        "name": "Nalchik",
        "country": "RU",
        "coord": {
          "lon": 43.618889,
          "lat": 43.498058
        }
      },
      {
        "id": 546448,
        "name": "Kolganov",
        "country": "RU",
        "coord": {
          "lon": 40.066669,
          "lat": 44.366669
        }
      },
      {
        "id": 500023,
        "name": "Rybatskiy",
        "country": "RU",
        "coord": {
          "lon": 44.166389,
          "lat": 44.799171
        }
      },
      {
        "id": 2207349,
        "name": "Bellara",
        "country": "AU",
        "coord": {
          "lon": 153.149597,
          "lat": -27.063919
        }
      },
      {
        "id": 7870412,
        "name": "Bartlett",
        "country": "ZA",
        "coord": {
          "lon": 28.25263,
          "lat": -26.17061
        }
      },
      {
        "id": 961935,
        "name": "Rietfontein",
        "country": "ZA",
        "coord": {
          "lon": 29.200001,
          "lat": -25.5
        }
      },
      {
        "id": 3371200,
        "name": "Hardap",
        "country": "NA",
        "coord": {
          "lon": 17.25,
          "lat": -24.5
        }
      },
      {
        "id": 1016666,
        "name": "Botswana",
        "country": "ZA",
        "coord": {
          "lon": 30.533331,
          "lat": -24.33333
        }
      },
      {
        "id": 3858204,
        "name": "El Destierro",
        "country": "AR",
        "coord": {
          "lon": -62.47662,
          "lat": -24.1
        }
      },
      {
        "id": 4070245,
        "name": "Jones Crossroads",
        "country": "US",
        "coord": {
          "lon": -85.484657,
          "lat": 31.21073
        }
      },
      {
        "id": 4344544,
        "name": "Vernon Parish",
        "country": "US",
        "coord": {
          "lon": -93.183502,
          "lat": 31.11685
        }
      },
      {
        "id": 4215307,
        "name": "Pennick",
        "country": "US",
        "coord": {
          "lon": -81.55899,
          "lat": 31.313
        }
      },
      {
        "id": 5285039,
        "name": "Black Bear Spring",
        "country": "US",
        "coord": {
          "lon": -110.288139,
          "lat": 31.386209
        }
      },
      {
        "id": 4673179,
        "name": "Bee House",
        "country": "US",
        "coord": {
          "lon": -98.081139,
          "lat": 31.40266
        }
      },
      {
        "id": 6078447,
        "name": "Morden",
        "country": "CA",
        "coord": {
          "lon": -98.101357,
          "lat": 49.191898
        }
      },
      {
        "id": 2201316,
        "name": "Nasirotu",
        "country": "FJ",
        "coord": {
          "lon": 178.25,
          "lat": -18.033331
        }
      },
      {
        "id": 1938756,
        "name": "Sisali",
        "country": "ID",
        "coord": {
          "lon": 124.531387,
          "lat": -9.19167
        }
      },
      {
        "id": 2009359,
        "name": "Puntan",
        "country": "ID",
        "coord": {
          "lon": 110.553329,
          "lat": -7.51944
        }
      },
      {
        "id": 2566086,
        "name": "Tsiémé-Mandiélé",
        "country": "CG",
        "coord": {
          "lon": 15.2875,
          "lat": -4.22694
        }
      },
      {
        "id": 154733,
        "name": "Masama",
        "country": "TZ",
        "coord": {
          "lon": 37.183331,
          "lat": -3.23333
        }
      },
      {
        "id": 1630349,
        "name": "Purukcahu",
        "country": "ID",
        "coord": {
          "lon": 114.583328,
          "lat": -0.58333
        }
      },
      {
        "id": 2224928,
        "name": "Néméyong II",
        "country": "CM",
        "coord": {
          "lon": 13.5,
          "lat": 2.91667
        }
      },
      {
        "id": 6716279,
        "name": "Pondok Genteng",
        "country": "ID",
        "coord": {
          "lon": 99.0709,
          "lat": 3.2245
        }
      },
      {
        "id": 2384618,
        "name": "Mbongoté",
        "country": "CF",
        "coord": {
          "lon": 18.283331,
          "lat": 4.25
        }
      },
      {
        "id": 378867,
        "name": "Amiling",
        "country": "SS",
        "coord": {
          "lon": 32.355831,
          "lat": 4.19417
        }
      },
      {
        "id": 2230362,
        "name": "Kélkoto",
        "country": "CM",
        "coord": {
          "lon": 11.16667,
          "lat": 4.43333
        }
      },
      {
        "id": 343846,
        "name": "Angetu",
        "country": "ET",
        "coord": {
          "lon": 39.48333,
          "lat": 6.33333
        }
      },
      {
        "id": 370366,
        "name": "Massa",
        "country": "SD",
        "coord": {
          "lon": 29.466669,
          "lat": 10.98333
        }
      },
      {
        "id": 365618,
        "name": "Tumko",
        "country": "SD",
        "coord": {
          "lon": 24.6,
          "lat": 12.01667
        }
      },
      {
        "id": 524894,
        "name": "Moskva",
        "country": "RU",
        "coord": {
          "lon": 37.606667,
          "lat": 55.761665
        }
      },
      {
        "id": 1861060,
        "name": "Japan",
        "country": "JP",
        "coord": {
          "lon": 139.753098,
          "lat": 35.68536
        }
      },
      {
        "id": 2130037,
        "name": "Hokkaidō",
        "country": "JP",
        "coord": {
          "lon": 141.346603,
          "lat": 43.06451
        }
      },
      {
        "id": 6199126,
        "name": "Sanggrahan",
        "country": "ID",
        "coord": {
          "lon": 110.246109,
          "lat": -7.46056
        }
      },
      {
        "id": 6388445,
        "name": "Karangmangle",
        "country": "ID",
        "coord": {
          "lon": 109.0075,
          "lat": -7.43028
        }
      },
      {
        "id": 494806,
        "name": "Sheremetyevskiy",
        "country": "RU",
        "coord": {
          "lon": 37.491112,
          "lat": 55.98
        }
      },
      {
        "id": 467104,
        "name": "Yershovo",
        "country": "RU",
        "coord": {
          "lon": 36.858055,
          "lat": 55.771111
        }
      },
      {
        "id": 462352,
        "name": "Znamenka",
        "country": "RU",
        "coord": {
          "lon": 35.981392,
          "lat": 52.896671
        }
      },
      {
        "id": 2267057,
        "name": "Lisbon",
        "country": "PT",
        "coord": {
          "lon": -9.13333,
          "lat": 38.716671
        }
      },
      {
        "id": 3082707,
        "name": "Walbrzych",
        "country": "PL",
        "coord": {
          "lon": 16.284321,
          "lat": 50.771412
        }
      },
      {
        "id": 3091150,
        "name": "Naklo nad Notecia",
        "country": "PL",
        "coord": {
          "lon": 17.60181,
          "lat": 53.142139
        }
      },
      {
        "id": 1784658,
        "name": "Zhengzhou",
        "country": "CN",
        "coord": {
          "lon": 113.648613,
          "lat": 34.757778
        }
      },
      {
        "id": 7301040,
        "name": "Tonyrefail",
        "country": "GB",
        "coord": {
          "lon": -3.41503,
          "lat": 51.580238
        }
      },
      {
        "id": 1348747,
        "name": "Bankra",
        "country": "IN",
        "coord": {
          "lon": 88.298058,
          "lat": 22.627501
        }
      },
      {
        "id": 6255148,
        "name": "Europe",
        "country": "",
        "coord": {
          "lon": 9.140625,
          "lat": 48.69096
        }
      },
      {
        "id": 524925,
        "name": "Moskovskaya Oblast’",
        "country": "RU",
        "coord": {
          "lon": 37.628334,
          "lat": 55.75639
        }
      },
      {
        "id": 4047656,
        "name": "Provo",
        "country": "US",
        "coord": {
          "lon": -94.107697,
          "lat": 34.037609
        }
      },
      {
        "id": 5493998,
        "name": "Tejon",
        "country": "US",
        "coord": {
          "lon": -105.28611,
          "lat": 34.58979
        }
      },
      {
        "id": 1463749,
        "name": "Guliston",
        "country": "UZ",
        "coord": {
          "lon": 65.518929,
          "lat": 38.510029
        }
      },
      {
        "id": 749184,
        "name": "Ciciler",
        "country": "TR",
        "coord": {
          "lon": 30.063601,
          "lat": 40.442982
        }
      },
      {
        "id": 750594,
        "name": "Bilmece",
        "country": "TR",
        "coord": {
          "lon": 36.150002,
          "lat": 41.150002
        }
      },
      {
        "id": 3113208,
        "name": "Provincia de Pontevedra",
        "country": "ES",
        "coord": {
          "lon": -8.5,
          "lat": 42.5
        }
      },
      {
        "id": 2653753,
        "name": "Carmarthenshire",
        "country": "GB",
        "coord": {
          "lon": -4.16667,
          "lat": 51.833328
        }
      },
    ]
  }
  searchByName(string) {
    if (string) {
      const str = new RegExp('^' + string.trim());
      const arr = this.cities.filter(el => str.test(el.name.toLowerCase()));
      return arr.slice(0, 7);
    } else {
      return [];
    }
  }
}

export default new SearchHelper;