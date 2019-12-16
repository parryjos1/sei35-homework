//   const LineN= ['Times Square', "34th", "28th", "23rd", "Union Square", "8th"]
//   const LineL= ["8th", "6th", "Union Square", "3rd", "1st"]
//   const Line6= ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
//   const Intersections= ["Union Square"]
//
// let planTrip = function(StartLine, StartStation, EndLine, EndStation) {
//   let lengthOfLine1 = 0
//   let lengthOfLine2 = 0
//   let lengthOf1Line = 0
//   let StartingLine = undefined
//   let EndingLine = undefined
//   if (StartLine === "N") {
//     StartingLine = LineN
//   } else if (StartLine === "L") {
//     StartingLine = LineL
//   } else if (StartLine === "6") {
//     StartingLine = Line6
//   }
//   if (EndLine === "N") {
//     EndingLine = LineN
//   } else if (EndLine === "L") {
//     EndingLine = LineL
//   } else if (EndLine === "6") {
//     EndingLine = Line6
//   }
//   let Line1Start = StartingLine.indexOf(StartStation)
//   let Line1Intersect = StartingLine.indexOf("Union Square")
//   let Line2Start = EndingLine.indexOf(EndStation)
//   let Line2Intersect = EndingLine.indexOf("Union Square")
//   if (StartLine !== EndLine) { //Takes 2 lines
//     if (Line1Start > Line1Intersect) {
//       lengthOfLine1 = Line1Start - Line1Intersect
//     } else if (Line1Start < Line1Intersect) {
//       lengthOfLine1 = Line1Intersect - Line1Start
//     } else if (Line1Start === Line1Intersect) {
//       lengthOfLine1 = 0
//     }
//     if (Line2Start > Line2Intersect) {
//       lengthOfLine2 = Line2Start - Line2Intersect
//     } else if (Line2Start < Line2Intersect) {
//       lengthOfLine2 = Line2Intersect - Line2Start
//     } else if (Line2Start === Line2Intersect) {
//       lengthOfLine2 = 0
//     }
//     EndingLine = EndingLine.reverse()
//     if (lengthOfLine1 !== 0 && lengthOfLine2 !== 0) {
//       console.log(`There will be ${lengthOfLine1+lengthOfLine2} stops on your trip`)
//       for (i = Line1Start; i <= lengthOfLine1+1; i++) {
//         if (StartingLine[i] === "Union Square") {
//           console.log(`You are transferring stations at Union Square`)
//           break;
//         }
//         console.log(`You are currently at ${StartingLine[i]} station`)
//       }
//       Line2Start = EndingLine.indexOf("Union Square")
//       for (i = Line2Start; i <= lengthOfLine2; i++) {
//         console.log(`You are currently at ${EndingLine[i]} station`)
//       }
//       console.log(`You have arrived at your destination ${EndStation}`)
//     }
//   }
//   if (StartLine === EndLine) { //Takes 1 line
//     if (Line1Start > Line2Start) {
//       lengthOfLine1 = Line1Start - Line2Start
//       StartingLine = StartingLine.reverse();
//     } else if (Line1Start < Line2Start) {
//       lengthOfLine1 = Line2Start - Line1Start
//     } else if (Line1Start === Line2Start) {
//       lengthOfLine1 = 0
//       return `You are already at the station you want to go to`
//     }
//     console.log(`There are ${lengthOfLine1} stops in your journey`)
//     for (i = Line1Start; i <= lengthOfLine1+1; i++) {
//       if (StartingLine[i] === EndStation) {
//         return `You have arrived at your destination ${EndStation}`
//       }
//       console.log(`You are currently at ${StartingLine[i]} station`)
//     }
//   }
// }


// THE GRAND PARIS PROJECT
const AllLines = {
 Line1 : ["La Defense", "Esplanade de la Defense", "Pont de Neuilly", "Les Sablons", "Porte Maillot", "Argentine", "Charles de Gaulle-Etoile", "George V", "Franklin D. Roosevelt", "Champs-Elysees-Clemenceau", "Concorde", "Tuileries", "Palais Royal-Musee du Louvre", "Louvre-Rivoli", "Chatelet", "Hotel de Ville", "Saint-Paul", "Bastille", "Gare de Lyon", "Reuilly-Diderot", "Nation", "Porte de Vincennes", "Saint-Mande", "Berault", "Chateau de Vincennes"],
 Line2 : ["Porte Dauphine", "Victor Hugo", "Charles de Gaulle-Etoile", "Ternes", "Courcelles", "Monceau", "Villiers", "Rome", "Place de Clichy", "Blanche", "Pigalle", "Anvers", "Barbes-Rochechouart", "La Chapelle", "Stalingrad", "Jaures", "Colonel Fabien", "Belleville", "Couronnes", "Menilmontant", "Pere Lachaise", "Phillippe Auguste", "Alexander Dumas", "Avron", "Nation"],
 Line3 : ["Pont de Levallois Becon", "Anatole France", "Louise Michel", "Porte de Champerret", "Pereire", "Wagram", "Malesherbes", "Villiers", "Europe", "Saint-Lazare", "Havre-Caumartin", "Opera", "Quatre-Septembre", "Bourse", "Sentier", "Reaumur-Sebastopol", "Arts es Metiers", "Temple", "Republique", "Parmentier", "Rue Saint-Maur", "Pere Lachaise", "Gambette", "Porte de Bagnolet", "Gallieni"],
// Line3b : ["Porte des Lilas", "Saint-Fargeau", "Pelleport", "Gambette"],
 Line4 : ["Porte de Cilgnancourt", "Simplon", "Marcadet-Poissonniers", "Chateau Rouge", "Gare du Nord", "Gare de I'Est", "Chateau d'Eau", "Strasbourg-Saint-Dennis", "Reaumur-Sebastopol", "Etienne Marcel", "Les Halles", "Chatelet", "Cite", "Saint-Michael", "Odeon", "Saint-Germain-des-Pres", "Saint-Sulpice", "Saint-Placide", "Montparnasse-Bienvenue", "Vavin", "Raspail", "Mouton-Duvernet", "Alesia", "Porte d'Orleans"],
 Line5 : ["Bobigny Pablo Picasso", "Bobigny-Pantin Raymond Queneau", "Eglise de Pantin", "Hoche", "Porte de Pantin", "Ourcq", "Laumiere", "Jaures", "Stalingrad", "Gare du Nord", "Gare de I'Est", "Jacques Bonsergent", "Republique", "Oberkampf", "Richard-Lenoir", "Breguet-Sabin", "Bastille", "Quai de la Rapee", "Gare d'Austerlitz", "Saint-Marcel", "Campo-Formio", "Place d'Italie"],
 Line6 : ["Charles de Gaulle Etoile", "Kleber", "Boissiere", "Trocadero", "Passy", "Bir-Hakeim", "Dupleix", "La Motte-Picquet Grenelle", "Cambronne", "Slevres-Lecourbe", "Pasteur", "Montparnasse Bienvenue", "Edgar Quinet", "Raspail", "Denfert-Rochereau", "Saint-Jacques", "Glaciere", "Corvisart", "Place d'Italie", "Nationale", "Chevaleret", "Quai de la Gare", "Bercy", "Dugommier", "Daumesnil", "Bel-Air", "Picpus", "Nation"],
 Line7 : ["La Courneuve 8 Mai 1945", "Fort d'Aubervilliers", "Aubervilliers-Pantin Quatre Chemins", "Porte de la Villette", "Corentin Cariou", "Crimee", "Riquet", "Stalingrad", "Loius Blanc", "Chateau-Landon", "Gare de I'Est", "Poissonniers", "Cadet", "Le Pelentier", "Chaussee d'Antin-La Fayette", "Opera", "Pyramides", "Palais Royal", "Musee du Louvre", "Pont Neuf", "Chatelet", "Pont Marie", "Sully-Moriand", "Jussieu", "Place Monge", "Censier-Daubenton", "Les Gobelins", "Place d'Italie", "Tolbiac", "Maison Blanche", "Porte d'Italie", "Porte de Choisy", "Porte d'Lvry", "Pierre et Marie Curie", "Mairie d'Lvry"],
// Line7Alt : ["Le Kremillin-Bicetre", "Villie Leo Lagrange", "Villejuif Paul Vaillant-Couturier", "Villiejuif Louis Aragon"],
// Line7b : ["Louis Blanc", "Jaures", "Bolivar", "Buttes Chaumont", "Botzaris", "Place de Fetes", "Pre Saint-Gervais", "Danube"],
 Line8 : ["Balard", "Lourmel", "Boucicaut", "Felix Faure", "Commerce", "La Motte-Picquet-Grenelle", "Ecole Millitaire", "La Tour-Maubourg", "Invalides", "Concorde", "Madeleline", "Opera", "Richelieu-Drouot", "Grands Boulevards", "Bonne Nouvelle", "Strasbourg-Saint-Denis", "Republique", "Filles du Calvaire", "Saint-Sebastian-Froissant", "Chemin Vert", "Bastille", "Ledru-Rollin", "Faidherbe-Chaligny", "Reuilly-Diderot", "Montgallet", "Daumesnil", "Michael Bizot", "Porte Doree", "Porte de Charenton", "Liberte", "Charenton-Ecoles", "Ecole Veterinaire de Maisons-Alfort", "Maisons-Alfort-Stade", "Maisons-Alfort-Les Juilliottes", "Creteil L'Echat", "Creteil-Universite", "Creteil-Prefecture", "Creteil Pointe du Lac"],
 Line9 : ["Pont de Sevres", "Billancourt", "Marcel Sembat", "Exelmans", "Michel-Ange-Molitor", "Michel-Ange-Auteuil", "Jasmin", "Ranelagh", "La Muette", "Rue de la Pompe", "Trocadero", "Iena", "Alma-Marceau", "Franklin D. Roosevelt", "Saint-Phillippe-de-Roule", "Miromesnil", "Saint-Augustin", "Havre-Caumartin", "Chaussee d'Antin-La Fayette", "Richelieu-Drouot", "Grands Boulevards", "Bonne Nouvelle", "Strasbourg-Saint-Denis", "Republique", "Oberkampf", "Saint-Ambroise", "Voltaire", "Charonne", "Rue des Boulets", "Nation", "Buzenval", "Maraichers", "Porte de Montreuil", "Robespierre", "Croix de Chavaux", "Mairie de Montreuil"],
 Line10 : ["Boulogne Pont de Saint-Cloud", "Boulogne Jean Jaures", "Michel-Ange-Molitor", "Chardon Lagache", "Mirabeau", "Javel-Ange-Citroen", "Charles Michels", "Avenue Emile Zola", "La Motte-Picquet Grenelle", "Segur", "Duroc", "Vaneau", "Sevres-Babylone", "Mabillon", "Odeon", "Cluny-La Sorbonne", "Maubert-Mutualite", "Cardinal Lemoine", "Jussieu", "Gare d'Austerlitz"],
//Line 10 is missing the reverse properly since its a round circle,
 Line11 : ["Chatelet", "Hotel de Ville", "Rambuteau", "Arts et Metiers", "Republique", "Goncourt", "Belleville", "Pyrenees", "Jourdain", "Place des Fetes", "Telegraphe", "Porte des Lilas", "Mairie des Lilas"],
 Line12 : ["Aubervilliers Front Populaire", "Porte de la Chapelle", "Marx Dormoy", "Marcadet-Poissonniers", "Jules Joffrin", "Lamarck-Caulaincourt", "Abbesses", "Pigalle", "Saint-Georges", "Notre-Dame-de-Lorettes", "Trinite-d'Estienne d'Orves", "Saint-Lazare", "Madeleine", "Concorde", "Assemblee Nationale", "Solferino", "Rue du Bac", "Sevres-Babylone", "Rennes", "Notre-Dame-des-Champs", "Montparnasse Bienvenue", "Falguiere", "Pasteur", "Volontaires", "Vaugirand", "Convention", "Porte de Versailles", "Corentin Celton", "Mairie d'Issy"],
 Line13 : ["St-Denis Universite", "Basilique de St-Denis", "Saint-Denis Pte de Paris", "Carrefour Pleyel", "Mairie de St-Ouen", "Garibaldi", "Porte de St-Ouen", "Guy Moquet", "La Fourche", "Place de Clichy", "Liege", "Saint-Lazare", "Miromesnil", "Champ-Elysees Clemenceau", "Invalides", "Varenne", "Saint-Fracois-Xavier", "Duroc", "Montparnasse Bienvenue", "Gaite", "Pernety", "Placeisance", "Porte de Vanves", "Malakoff Plateau de Vanves", "Malakoff Rue Etienne Dolet", "Chatillion Montrouge"],
// Line13Alt : ["Asnieres Gennevilliers Les Courtilles", "Les Angettes", "Gabriel Peri", "Mairie de Clichy", "Porte de Clichy", "Brochant", "La Fourche"]
  Line14 : ["Saint-Lazare", "Madeleine", "Pyramides", "Chatelet", "Gare de Lyon", "Bercy", "Cour Saint-Emilion", "Bibliotheque Fracois Mitterrand", "Olympiades"],
}
const AllLinesInter = {
 Line1Inter : ["Charles de Gaulle-Etoile", "Franklin D. Roosevelt", "Champs-Elysees-Clemenceau", "Concorde", "Palais Royal-Musee du Louvre", "Chatelet", "Hotel de Ville", "Bastille", "Gare de Lyon", "Reuilly-Diderot", "Nation", "Porte de Vincennes"],
 Line2Inter : ["Charles de Gaulle-Etoile", "Villiers", "Place de Clichy", "Barbes-Rochereau", "Stalingrad", "Jaures", "Belleville", "Pere Lachaise", "Nation"],
 Line3Inter : ["Villiers", "Saint-Lazare", "Havre-Caumartin", "Opera", "Reaumur-Sebastopol", "Arts et Metiers", "Republique", "Pere Lachaise", "Gambette"],
 Line4Inter : ["Marcadet-Poissonniers", "Barbes-Rochechouart", "Gare du Nord", "Gare de I'Est", "Strasbourg-Saint-Denis", "Reaumur-Sebastopol", "Chatelet", "Odeon", "Montparnasse-Bienvenue", "Raspail", "Denfert-Rochereau"],
 Line5Inter : ["Jaures", "Stalingrad", "Gare du Nord", "Gare de I'Est", "Republique", "Oberkampf", "Bastille", "Gare d'Austerlitz", "Place d'Italie"],
 Line6Inter : ["Charles de Gaulle", "Trocadero", "La Motte-Picquet Grenelle", "Pasteur", "Montparnasse Bienvenue", "Raspail", "Denfert-Rochereau", "Place d'Italie", "Bercy", "Daumesnil", "Nation"],
 Line7Inter : ["Stalingrad", "Louis Blanc", "Gare de I'Est", "Chaussee d'Antin-La Fayette", "Opera", "Pyramides", "Palais Royal Musee du Louvre", "Chatelet", "Jussieu", "Place d'Italie"],
 Line8Inter : ["La Motte-Picquet-Grenelle", "Invalides", "Concorde", "Madeleine", "Opera", "Richelieu-Drouot", "Strasbourg-Saint-Denis", "Republique", "Bastille", "Reuilly-Diderot", "Daumesnil"],
 Line9Inter : ["Michel-Ange-Molitor", "Michel-Ange-Auteuil", "Trocadero", "Franklin D. Roosevelt", "Miromesnil", "Saint Augustin", "Havre-Caumartin", "Chaussee d'Antin-La Fayette", "Richelieu-Drouot", "Strasbourg-Saint-Denis", "Republique", "Oberkampf", "Nation"],
 Line10Inter : ["Michel-Ange-Molitor", "La Motte-Picquet Grenelle", "Duroc", "Sevres-Babylone", "Odeon", "Jussieu", "Gare d'Austerlitz"],
 Line11Inter : ["Chatelet", "Hotel de Ville", "Arts et Metiers", "Republique", "Belleville", "Place des Fetes", "Portes des Lilas"],
 Line12Inter : ["Marcadet-Poissonniers", "Pigalle", "Saint-Lazare", "Madeleine", "Concorde", "Sevres-Babylone", "Montparnasse Bienvenue", "Pasteur"],
 Line13Inter : ["Place de Clichy", "Saint-Lazare", "Miromesnil", "Champs-Elysees-Clemenceau", "Invalides", "Duroc", "Montparnasse Bienvenue"],
 Line14Inter : ["Saint-Lazare", "Madeleine", "Pyramides", "Chatelet", "Gare de Lyon", "Bercy"],
};
const planTrip = function(StartLine, StartStation, EndLine, EndStation) {
  let currentLineInter = undefined;
  let currentLine = undefined;
  let Line1Index = 0;
  let Line2Index = 0;
  let transferAt = [];
  if (StartLine === "1") {
      StartingLine = AllLines.Line1;
      currentLine = AllLines.Line1;
      currentLineInter = AllLinesInter.Line1Inter;
    } else if (StartLine === "2") {
      StartingLine = AllLines.Line2;
      currentLine = AllLines.Line2;
      currentLineInter = AllLinesInter.Line2Inter;
    } else if (StartLine === "3") {
      StartingLine = AllLines.Line3;
      currentLine = AllLines.Line3;
      currentLineInter = AllLinesInter.Line3Inter;
    } else if (StartLine === "4") {
      StartingLine = AllLines.Line4;
      currentLine = AllLines.Line4;
      currentLineInter = AllLinesInter.Line4Inter;
    } else if (StartLine === "5") {
      StartingLine = AllLines.Line5;
      currentLine = AllLines.Line5;
      currentLineInter = AllLinesInter.Line5Inter;
    } else if (StartLine === "6") {
      StartingLine = AllLines.Line6;
      currentLine = AllLines.Line6;
      currentLineInter = AllLinesInter.Line6Inter;
    } else if (StartLine === "7") {
      StartingLine = AllLines.Line7;
      currentLine = AllLines.Line7;
      currentLineInter = AllLinesInter.Line7Inter;
    } else if (StartLine === "8") {
      StartingLine = AllLines.Line8;
      currentLine = AllLines.Line8;
      currentLineInter = AllLinesInter.Line8Inter;
    } else if (StartLine === "9") {
      StartingLine = AllLines.Line9;
      currentLine = AllLines.Line9;
      currentLineInter = AllLinesInter.Line9Inter;
    } else if (StartLine === "10") {
      StartingLine = AllLines.Line10;
      currentLine = AllLines.Line10;
      currentLineInter = AllLinesInter.Line10Inter;
    } else if (StartLine === "11") {
      StartingLine = AllLines.Line11;
      currentLine = AllLines.Line11;
      currentLineInter = AllLinesInter.Line11Inter;
    } else if (StartLine === "12") {
      StartingLine = AllLines.Line12;
      currentLine = AllLines.Line12;
      currentLineInter = AllLinesInter.Line12Inter;
    } else if (StartLine === "13") {
      StartingLine = AllLines.Line13;
      currentLine = AllLines.Line13;
      currentLineInter = AllLinesInter.Line13Inter;
    } else if (StartLine === "14") {
      StartingLine = AllLines.Line14;
      currentLine = AllLines.Line14;
      currentLineInter = AllLinesInter.Line14Inter;
    }
  if (EndLine === "1") {
        EndingLine = AllLines.Line1;
    } else if (EndLine === "2") {
        EndingLine = AllLines.Line2;
    } else if (EndLine === "3") {
      EndingLine = AllLines.Line3;
    } else if (EndLine === "4") {
        EndingLine = AllLines.Line4;
    } else if (EndLine === "5") {
      EndingLine = AllLines.Line5;
    } else if (EndLine === "6") {
      EndingLine = AllLines.Line6;
    } else if (EndLine === "7") {
      EndingLine = AllLines.Line7;
    } else if (EndLine === "8") {
      EndingLine = AllLines.Line8;
    } else if (EndLine === "9") {
      EndingLine = AllLines.Line9;
    } else if (EndLine === "10") {
      EndingLine = AllLines.Line10;
    } else if (EndLine === "11") {
      EndingLine = AllLines.Line11;
    } else if (EndLine === "12") {
      EndingLine = AllLines.Line12;
    } else if (EndLine === "13") {
      EndingLine = AllLines.Line13;
    } else if (EndLine === "14") {
      EndingLine = AllLines.Line14;
    };
  let linesToTravel = [];
  let testing = []
  let testingarray = []
  //WORKS
  console.log()
  let tests = function() {
    if (StartingLine !== EndingLine) {
      for(key in AllLines) {
        for(keyinter in AllLinesInter ) {
          for(x = 0; x < 40; x++) {
            if (AllLines[key].includes(currentLineInter[x])) {
              currentLineInter = AllLinesInter[keyinter]
            }
            if (testing.includes(currentLineInter[x]) === false) {
              testing.push(currentLineInter[x])
              break;
            };
            for (i = 0; i < 100; i++) {
              if (EndingLine.includes(testing[i])) {
                return
              };
            };
          };
          for(y=0; y <= testing.length; y++) {
            for(key2 in AllLines) {
              if (AllLines[key2].includes(testing[y])) {
                if(testingarray.includes(AllLines[key2]) === false) {
                  testingarray.push(AllLines[key2])
                }
              }
            }
          }
        };
      };
    };
  };
  tests();
  let stationsTraveled = [StartStation];
  testing.push(EndStation)
  testing.unshift(StartStation)
  let findStationsTraveled = function() {
    for (i = 0; i <= testingarray.length-1; i++) {
      for (x = 0; x <= testingarray[i].length-1; x++) {
        if (stationsTraveled.includes(testing[(i+1)]) === false) {
          if (testingarray[i].indexOf(testingarray[i][x]) <= testingarray[i].indexOf(testing[(i+1)]) && testingarray[i].indexOf(testingarray[i][x]) > testingarray[i].indexOf(testing[i])) {
            stationsTraveled.push(testingarray[i][x])
          }
        }
      }
    }
  };
  findStationsTraveled();
  console.log(`There are ${stationsTraveled.length} stops in your journey`)
  for (i = 0; i < stationsTraveled.length; i++) {
    if (stationsTraveled[i] === EndStation) {
      return `You have arrived at your destination ${EndStation} station`
    } else {
      console.log(`You are currently at ${stationsTraveled[i]} station and traveling to ${stationsTraveled[(i+1)]} station`)
    }
  }
  if (StartLine === EndLine) { //Takes 1 line
    let Line1Start = StartingLine.indexOf(StartStation)
    let Line2Start = EndingLine.indexOf(EndStation)
    console.log(Line1Start)
    console.log(Line2Start)
      if (Line1Start > Line2Start) {
        lengthOfLine1 = Line1Start - Line2Start  //CHANGE TO lengthOf1Line if necessary
        StartingLine = StartingLine.reverse();
      } else if (Line1Start < Line2Start) {
        lengthOfLine1 = Line2Start - Line1Start
      } else if (Line1Start === Line2Start) {
        lengthOfLine1 = 0
        return `You are already at the station you want to go to`
      }
      for (i = Line1Start; i <= lengthOfLine1; i++) {
        console.log(`You are currently at ${StartingLine[i]} station`)
      }
    }
    console.log(testingarray)
    console.log(testing)
}
// DONE
