function calculateResult() {
    const n = document.getElementById("subjects").value;
    let total = 0;
    let i;
    for (i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter the subject number" + (i + 1)));
        total += x;

    }
    let average = total / n;
    let grade;
    if (average >= 90) {
        grade = "A";
    }
    else if (average >= 75) {
        grade = "B";
    }
    else if (average >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    let result;

    if (average >= 40) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }
    let result2 = document.getElementById("result").innerHTML="Total Marks: " + total + "<br>" +"Average Marks: " + average.toFixed(2) + "<br>" +"Grade: " + grade + "<br>" +"Result: " + result;
}