// add solution

function theBeatlesPlay(musicians, instruments){
  let array = []
  let i
  
  for(i=0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0
  let arrayfacts = []
  
  while(i<facts.length){
    arrayfacts.push(`${facts}!!!`)
    i++
  }
  return arrayfacts
}

function iLoveTheBeatles(num){
  let arraynum = []
  let i = 0
  
  do{
    arraynum.push("I love the Beatles!")
  }
  while(num < 15)
  
  return arraynum
}