var triangleCheck = function(sideA, sideB, sideC) {

    //must run errors first

    if (sideA == 0 && sideB == 0 && sideC == 0)
    {
        return "error, must enter a number greater then 0 for all inputs"
    }

    if (sideA == 0 || sideB == 0 || sideC == 0)
    {
        return "error, all inputs must be greater than 0"
    }

    if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB)
    {
        return "error, one input cannot equal more than the other two combined"
    }
    //triangle checkers

    if (sideA == sideB && sideB == sideC)
    {
        return "equilateral triangle";
    }

    if ((sideA == sideB) || (sideB == sideC) || (sideC == sideA))
    {
        return "isosceles triangle";
    }

    if ((sideA*sideA) + (sideB*sideB) == (sideC*sideC))
    {
        return "right triangle";
    }

    else {
      return "scalene triangle";
    }

};


$(document).ready(function() {
    $("form#trianglecheck").submit(function(event) {

    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    var result = triangleCheck(sideA, sideB, sideC);

    $("#result").show();
    $("#error").hide();

    $('.check').text(result);

    event.preventDefault();
    });

    $("#clear").click(function(event) {
        $("#result").hide();
        $("#error").hide();
        $("#sideB").val("");
        $("#sideC").val("");
        $("#sideA").val("").focus();

    event.preventDefault();

 });
});
