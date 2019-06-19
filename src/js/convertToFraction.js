const convertToFraction = (num) => {  //converting numbers in "0.0" format to strings in "0-0" format
    let fraction = new Fraction(num);
    fraction = fraction.toFraction(true);
    fraction = fraction.replace(" ", "-");
    return fraction;
}