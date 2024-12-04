// Function to categorize student based on grade
function categorizeStudent(grade) {
    if (grade >= 90 && grade <= 100) {
        return "A+";
    } else if (grade >= 80 && grade < 90) {
        return "A";
    } else if (grade >= 70 && grade < 80) {
        return "B";
    } else if (grade >= 60 && grade < 70) {
        return "B+";
    } else if (grade >= 50 && grade < 60) {
        return "C";
    } else if (grade >= 40 && grade < 50) {
        return "C+";
    } else {
        return "Failed";
    }
}

// Get user input
let grade = 100;
let category = categorizeStudent(grade);
console.log(`The student's grade category is: ${category}`);