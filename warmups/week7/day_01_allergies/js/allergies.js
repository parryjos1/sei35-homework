console.log("Hello");


const Allergies = {
  //list of scores
  scorecard: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  },

  //list of score numbers
  getKeys: function(){

    const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
    console.log(allergyKeys);
    return allergyKeys;
  },
  //compare our score to the list of numbers
  getList: function(score) {
    const allergyKeys = this.getKeys();

    let allergies = [];

    for (let i = 0; i < allergyKeys.length; i++) {

      const key = allergyKeys[i];

      if (score >= key) {
        allergies.push(this.scorecard[key])
        // console.log(allergies);
        score -= key;
        // console.log(score);
      }
    }

    return allergies;
  },
  //diagnose
  diagnosis: function(score) {
    const allergies = this.getList(score);

    if (allergies.length === 0) {
      console.log("No allergies detected.");
    }
    else {
      console.log(`Allergies detected: ${allergies.join(', ')}.`);
    }
  }
}

Allergies.diagnosis(34);  //chocolate and peanuts
Allergies.diagnosis(12); //strawberries and shellfish
Allergies.diagnosis(0); //No allergies
