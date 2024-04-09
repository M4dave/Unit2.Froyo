function enterFroyoFlavors() {
    let userEnterFroyoFlavors = prompt(
      "Enter a list of comma-separated froyo flavors.",
      "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    );
    if (userEnterFroyoFlavors !== null) {
      countFlavorsFor(userEnterFroyoFlavors);
    }
  }
  //Calling the function enterFroyoFlavors
  enterFroyoFlavors()
  
  function countFlavorsFor(flavorsInput) {
    let flavorsArray = flavorsInput.split(",");
    let flavorCounts = {};
  
    flavorsArray.forEach((flavor) => {
      flavor = flavor.trim().toLowerCase();
      if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
      } else {
        flavorCounts[flavor] = 1;
      }
    });
    // Display in the browser console
    console.log(`The flavors and quantities you ordered are:`);
    console.table(flavorCounts);
    console.log(flavorsArray);
  }