// Which year is leap year

// function isLeapYear(year){
//     if (year % 400 === 0) {
//         console.log(true);
//     }
//     else if (year % 100 === 0) {
//         console.log(false);
//     }
//     else {
//         console.log(year % 4 === 0);
//     }
// }

// isLeapYear(2024);
// isLeapYear(2032);
// isLeapYear(2036);
// isLeapYear(2048);
// isLeapYear(2059);
// isLeapYear(2028);


// function isLeapYear(year){
//     if ((year % 4 == 0 && year % 100 != 0) || year % 100 != 0) {
//         console.log ("Your year is Leap Year: ", year);
//     }
//     else {
//         console.log ("Your year is not a Leap Year: ", year);
//     }
// }

// isLeapYear(1950);
// isLeapYear(2950);
// isLeapYear(3950);
// isLeapYear(4950);
// isLeapYear(2100);
// isLeapYear(2150);
// console.log(LeapYearOrNot);

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        // return {"Your year is Leap Year: ": year};
        // return (["Your year is Leap Year: "], year);
        return ["Your year is Leap Year: ", year];
    }
    else {
        // return {"Your year is not a Leap Year: ": year};
        // return (["Your year is not a Leap Year: "], year);
        return ["Your year is not a Leap Year: ", year];
    }
}

// isLeapYear(1900)

const leapYearOrNot = isLeapYear(2024);
console.log(leapYearOrNot);