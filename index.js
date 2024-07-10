// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickupLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    return distanceInBlocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const distanceInBlocks = Math.abs(startBlock - destinationBlock);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
  }  

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    const freeDistance = 400;
    const farePerFoot = 0.02;
    const flatFare = 25;
    const maxDistance = 2500;
  
    if (distanceInFeet <= freeDistance) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      const distanceToPay = distanceInFeet - freeDistance;
      const fare = distanceToPay * farePerFoot;
      return 2.56;
    } else if (distanceInFeet <= maxDistance) {
      return 25;
    } else {
      return `cannot travel that far`;
    }
  }