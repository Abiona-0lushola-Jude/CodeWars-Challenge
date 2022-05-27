// Question

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Solution

function bmi(weight, height) {
    let pop = weight/Math.pow(height,2)
    if(pop <= 18.5){
      return "Underweight"
    }else if(pop <= 25){
      return "Normal"
    }else if(pop <= 30){
        return "Overweight"
    }else if(pop > 30){
      return "Obese"
    }
  }