// Grading system
// ------------------
// 0 - 32 F Grade
// 33 - 39 D Grade
// 40 - 49 C Grade
// 50 - 59 B Grade
// 60 - 69 A- Grade
// 70 - 79 A Grade
// 80 - 95 A+ Grade
// 96 - 100 Golden + Grade
// ---------------------

var result = 26.05+54.12-18+3-30+46;
    console.log(result);

if (result>=0 && result<33) {
    console.log("F Grade");
}
else if (result >= 33 && result < 40) {
    console.log("D Grade");
}
else if (result >= 40 && result < 50) {
    console.log("C Grade");
}
else if (result >= 50 && result < 60) {
    console.log("B Grade");
}
else if (result >= 60 && result < 70) {
    console.log("A- Grade");
}
else if (result >= 70 && result < 80) {
    console.log("A Grade");
}
else if (result >= 80 && result < 96) {
    console.log("A+ Grade");
}
else if (result >= 96 && result <= 100) {
    console.log("Golden + Grade");
}
else {
    console.log("TBA");
}

