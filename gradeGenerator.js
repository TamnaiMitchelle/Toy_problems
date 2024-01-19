function gradeGenerator(marks) {

    //Validates the range of marks
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Marks should be between 0 and 100.";
    }

    //Determines grade based on mark
    let grade
    if (marks > 79) {
        grade = "grade A"

    } else if(marks <= 79 && marks >= 60) {
        grade = "grade B"

    }else if(marks <= 59 && marks >= 49){
        grade = "grade C"
    

    }else if(marks <=49 && marks >= 40){
        grade = "grade D"

    }else{
        grade = "grade E"
    }

    return grade
    
    
}

//example
let studentMarks = 75; // You can change this value to test different marks
const studentGrade = gradeGenerator(studentMarks);

console.log(`Marks: ${studentMarks}, Grade: ${studentGrade}`);
