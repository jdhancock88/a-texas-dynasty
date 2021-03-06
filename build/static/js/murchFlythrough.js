var murch = [
      {   number: 0,
          type: "waypoint",
          start: 0,
          end: 6,
          overlayHead: "Private paradise",
          overlayText: "Clint Murchison Sr.’s remote Hacienda Acuña was more than 700 miles from his Dallas home.",
          labels: [{text: "Dallas", x: "60.5vw", y: "14vw"}, {text: "Gonzalez", x: "55.25vw", y: "48.5vw"}],
          satCredit: "Satelitte imagery: Image Landsat; Data SIO, NOAA, U.S. Navy, NGA, GEBCO"
      },
      {
          number: 1,
          type: "waypoint",
          start: 6,
          end: 11,
          overlayHead: "Nestled in the mountains",
          overlayText: "At an elevation of 3,000 feet, Hacienda Acuña sat in a sheltered valley below the peaks of Mariquita and El Tigre.",
          satCredit: "Satelitte imagery: 2016 DigitalGlobe; 2016 Cnes/Spot Image; Image Landsat; Data SIO, NOAA, U.S. Navy, NGA, GEBCO"
      },
      {
          number: 2,
          type: "waypoint",
          start: 11,
          end: 15,
          overlayHead: "HP Village inspired",
          overlayText: "Designed by Highland Park Village architect Jim Cheek, the compound had a main house, swimming pool, barns, workshops and houses for staff.",
          labels: [{text: "Main house", x: "53vw", y: "24.5vw"}, {text: "Staff housing", x: "41vw", y: "46vw"}],
          satCredit: "Satelitte imagery: 2016 DigitalGlobe"
      },
      {
          number: 3,
          type: "image",
          imagePath: "images/_house1.jpg",
          cutline: "The bedrooms opened to the veranda where guests would gather for cocktails and dinner. (Courtesy of the Murchison family)",
          start: 15,
          end: 17
      },
      {
          number: 4,
          type: "image",
          imagePath: "images/_house2.jpg",
          cutline: "Hacienda Acuña was built from limestone, clay and timber all gathered on the ranch. (Courtesy of the Murchison family)",
          start: 15,
          end: 17
      },
      {
          number: 5,
          type: "waypoint",
          start: 17,
          end: 22,
          overlayHead: "Airstrip arrivals",
          overlayText: "The airstrip accommodated Murchison’s DC-3.",
          labels: [{text: "Airstrip", x: "53vw", y: "27vw"}],
          satCredit: "Satelitte imagery: 2016 DigitalGlobe; 2016 Cnes/Spot Image; Image Landsat; Data SIO, NOAA, U.S. Navy, NGA, GEBCO"
      },
      {
          number: 6,
          type: "image",
          imagePath: "images/_airstrip.jpg",
          cutline: "Murchison’s private plane was the Flying Ginny, named after his wife. (Courtesy of the Murchison family)",
          start: 22,
          end: 23
      },
      {
          number: 7,
          type: "waypoint",
          start: 23,
          end: 28,
          overlayHead: "Island life",
          overlayText: "About 80 miles from Acuña was Murchison’s 900-acre Isla del Toro.",
          satCredit: "Satelitte imagery: 2016 DigitalGlobe; 2016 Cnes/Spot Image; Data SIO, NOAA, U.S. Navy, NGA, GEBCO"
      },
      {
          number: 8,
          type: "waypoint",
          start: 28.5,
          end: 34,
          overlayHead: "Island airstrip",
          overlayText: "The shoreline was graded into an airstrip so Murchison and his guests could make the short flight from Acuña.",
          labels: [{text: "Airstrip", x: "49vw", y: "32vw"}],
          satCredit: "Satelitte imagery: 2016 DigitalGlobe"
      },
      {
          number: 9,
          type: "waypoint",
          start: 34,
          end: 39,
          overlayHead: "Cliffside compound",
          overlayText: "In 1949 and 1950, Murchison built a main house, guest houses and staff quarters. Set back from the cliffs, they had water views.",
          labels: [{text: "Island home", x: "63vw", y: "31vw"}],
          satCredit: "Satelitte imagery: 2016 DigitalGlobe"
      },
      {
          number: 10,
          type: "image",
          imagePath: "images/_flyJeep.jpg",
          cutline: "Jeeps were used to transport guests on the 900-acre Isla del Toro. (Courtesy of the Murchison family)",
          start: 39,
          end: 39
      },
      {
          number: 11,
          type: "image",
          imagePath: "images/_islandHome.jpg",
          cutline: "The compound’s modern design was contrasted by thatched roofs. (Courtesy of the Murchison family)",
          start: 39,
          end: 39
      },
      {
          number: 12,
          type: "image",
          imagePath: "images/_islandGuest.jpg",
          cutline: "This 1950 photo shows one of the two hexagonal rooms at the main house. (Courtesy of the Murchison family)",
          start: 39,
          end: 39
      },
      {
          number: 13,
          type: "image",
          imagePath: "images/_flyBoat.jpg",
          cutline: "At Isla del Toro, the boat Hasta Mañana was used to take the Duke of Windsor fishing. (Courtesy of the Murchison family)",
          start: 39,
          end: 39
      }
  ];

$("#murchFly").flythrough({frames: murch});
