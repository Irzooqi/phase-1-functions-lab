function distanceFromHqInBlocks(pickUpLocation) {
    const hqLocation = 42;

    if (pickUpLocation >= hqLocation) {
        return pickUpLocation - hqLocation;
    } else {
        return hqLocation - pickUpLocation;
    }
}

function distanceFromHqInFeet(pickUpLocation) {
    const blockLength = 264; // 1 block is 264 feet
    const distanceInBlocks = distanceFromHqInBlocks(pickUpLocation);
    
    return distanceInBlocks * blockLength;
}

function distanceTravelledInFeet(start, destination) {
    const blockLength = 264; // 1 block is 264 feet
    const distanceInBlocks = Math.abs(destination - start);
    
    return distanceInBlocks * blockLength;
}
