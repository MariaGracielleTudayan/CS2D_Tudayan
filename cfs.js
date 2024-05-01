// Variables
let name = "Maria Gracielle Tudayan";
let address = "Patac, Galimuyod, Ilocos Sur";
let age = 19;

let classRole = "Student"; // you can change the Class Role to check
const course = "BSCS"; // one constant for courses: BSCS, BSM, and BAEL
let password = "1234567890BSCS"; // you can try other password to check

// Check password validity and print student information
switch (course) {
    case "BSCS":
    case "BSM":
    case "BAEL":
        switch (classRole) {
            case "Officer":
            case "Student":
            case "Teacher":
                if (password.length >= 12 && password.includes(course)) {
                    console.log("Name: " + name);
                    for (let i = 0; i < age; i++) {
                        console.log("Address: " + address, i);
                    }
                } else {
                    console.error("Invalid Password");
                }
                break;
            default:
                console.error("Invalid Class Role input.");
        }
        break;
    default:
        console.error("Invalid Course input.");
}
