// Question

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


// Solution
function areYouPlayingBanjo(name) {
    // Implement me
    let pop = name.split("")
    if(pop[0]=== "R" || pop[0]=== "r"){
        return `${pop.join('')} plays banjo`
    }else{
      return `${pop.join('')} does not play banjo`
  }
    
  }