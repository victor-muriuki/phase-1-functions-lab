// Code your solution in this file!
//this function calculates the distance between a pickup location and scuber h in blocks given that its located on the 42nd block 
function distanceFromHqInBlocks(PickUpLocaton) {
  if (PickUpLocaton > 42){
    return (PickUpLocaton - 42)
  }
  else {
    return (42 - PickUpLocaton)
}  
  }
  console.log(distanceFromHqInBlocks(20))



//this function converts distance travelled in blocks to feet guven that each block is 264 feet
function distanceFromHqInFeet (PickUpLocaton){
  const block = 264
  return distanceFromHqInBlocks(PickUpLocaton) * block
}
console.log (distanceFromHqInFeet())

//this calcultes the distance trfavelled in feet it takesa pick up lovation and subtracts from destination
function distanceTravelledInFeet(PickUpLocaton, destination){
   const blocksTravelled = Math.abs(PickUpLocaton - destination) // math.abs is used toensure that the result is always a positev number
   const blocks = 264
   return blocksTravelled * blocks

}
console.log(distanceTravelledInFeet())


function calculateFarePrices(PickUpLocaton, destination) {
  if (distanceTravelledInFeet <= 400) {
    return "Free ride"
  } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
    let dist=  (distanceTravelledInFeet - 400) * 0.02
    return dist
  } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500) {
    return "pay $25"
  } else {
    return "Sorry, rides over 2500 feet are not allowed."
  }
}
console.log(calculateFarePrices())