// https://www.codewars.com/kata/poetic-rhythm/train/javascript

// dictionary of symbols for short and long syllables.
const syllables = {
  short: [".", "*", "x"],
  long: ["/", "_"]
}

const meters = {
  iamb: ["s", "l"],
  trochee: ["l","s"],
  spondee: ["l", "l"],
  pyrrhic: ["s", "s"]
}

// return the type of meter
const identifyMeter = str => {
  let split = str.split("")
  let meter_lengths = []
  let result = ""
  let trigger_what_is = false
  split.forEach(symbol => {
    if(syllables.short.includes(symbol)){
      meter_lengths.push("s")
    } else if(syllables.long.includes(symbol)){
      meter_lengths.push("l")
    } else {
     trigger_what_is = true 
    }
  })
  
  if(trigger_what_is == true){return "What is this?"}
  if(str.length != 2){ return "Not a dissyllable." }
  
  
  Object.entries(meters).forEach((meter_tuple) => {
    if((meter_tuple[1][0] == meter_lengths[0]) && meter_tuple[1][1] == meter_lengths[1]){
      result = meter_tuple[0]
    }
  })
  
  return result
}