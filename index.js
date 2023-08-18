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
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const distanceBeyond400 = distanceInFeet - 400;
        const farePrice = distanceBeyond400 * 0.02;
        return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}