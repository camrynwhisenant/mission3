

$("#calcbtn").click(function () {

    // calculates grade using input values
    // decimals represent values of each assignment type from syllabus
    grade = ($("#txtass").val() * .55) + ($("#txtquiz").val() * .10) + ($("#txtexams").val() * .20) + ($("#txtgp").val() * .05) + ($("#txtINTEX").val() * .10)

    // signals an alert when button is clicked to show user their final grade
    alert("Grade: " + grade.toFixed(2));

})



