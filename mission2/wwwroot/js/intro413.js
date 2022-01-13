

$("#calcbtn").click(function () {

    // calculates grade using input values includes letter grade
    //decimals represent values of each assignment type from syllabus
    grade = ($("#txtass").val() * .55) + ($("#txtquiz").val() * .10) + ($("#txtexams").val() * .20) + ($("#txtgp").val() * .05) + ($("#txtINTEX").val() * .10)
    
    lettergrade = 'A'
    if (grade >= 94) {
        lettergrade = 'A'
    }
    else if (grade >= 90) {
        lettergrade = 'A-'
    }
    else if (grade >= 87) {
        lettergrade = 'B+'
    }
    else if (grade >= 84) {
        lettergrade = 'B'
    }
    else if (grade >= 80) {
        lettergrade = 'B-'
    }
    else if (grade >= 77) {
        lettergrade = 'C+'
    }
    else if (grade >= 74) {
        lettergrade = 'C'
    }
    else if (grade >= 70) {
        lettergrade = 'C-'
    }
    else if (grade >= 67) {
        lettergrade = 'D+'
    }
    else if (grade >= 64) {
        lettergrade = 'D'
    }
    else if (grade >= 60) {
        lettergrade = 'D-'
    }
    else {
        lettergrade = 'E'
    }


    // signals an alert when button is clicked to show user their final grade

    alert("Grade: " + grade.toFixed(2) + '%   ' + lettergrade);

})



