// Lets see who can drive a car by age


function whoCanDrive (age) {
    if ((age >= 18) && (age <= 65)) {
        console.log("Your age is: ", age, " you can drive in Bangladesh");
    } 
    else {
        console.log("Your age is: ", age, " you can not drive in Bangladesh");
    }
}

whoCanDrive(120);
whoCanDrive(10);
whoCanDrive(66);
whoCanDrive(30);
whoCanDrive(18);
whoCanDrive(21);