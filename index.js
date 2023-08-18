function distanceFromHqInBlocks(pickUpLocation) {
    const hqLocation = 42;

    if (pickUpLocation >= hqLocation) {
        return pickUpLocation - hqLocation;
    } else {
        return hqLocation - pickUpLocation * -1;
    }
}
