displayDoorWithFrameSize = (roSize) => {
    let doorWithFrameSize = convertToFraction(parseFloat(displaySlabSizeInch(roSize))+1.75)+'"';
    console.log("door with frame "+doorWithFrameSize);
    document.getElementById("final-feet-small4").innerHTML = '"';
    document.getElementById('net-frame').value = doorWithFrameSize;
}