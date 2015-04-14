


$(document).ready(function() {
    $("form#trianglecheck").submit(function(event) {

    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var appendEquilateral = function() {
        $('#equilateral').append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
    };
    var appendIsosceles = function() {
        $('#isosceles').append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
    };
    var appendRight = function() {
        $('#right').append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
    };
    var appendScalene = function() {
        $('#scalene').append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
    };
    var triangle = {
        A: sideA,
        B: sideB,
        C: sideC,
        triangleCheck: function() {
            var sides = [this.A, this.B, this.C];
            sides.sort(function(a, b){return a-b});
            if (this.A === 0 && this.B === 0 && this.C === 0) {
                return "error, must enter a number greater then 0 for all inputs";
            } else if (this.A === 0 || this.B === 0 || this.C === 0) {
                return "error, all inputs must be greater than 0";
            } else if (sides[0] + sides[1] < sides[2]) {
                return "error, one input cannot equal more than the other two combined";
            } else if (this.A === this.B && this.B === this.C) {
                appendEquilateral();
                return "equilateral triangle";
            } else if ((this.A === this.B) || (this.B === this.C) || (this.C === this.A)) {
                appendIsosceles();
                return "isosceles triangle";
            } else if ((sides[0]*sides[0]) + (sides[1]*sides[1]) === (sides[2]*sides[2])) {
                appendRight();
                return "right triangle";
            } else {
                appendScalene();
                return "scalene triangle";
            }
        }
    };

    var result = triangle.triangleCheck();

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
