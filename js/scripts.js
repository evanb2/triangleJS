


$(document).ready(function() {
    $("#sideA").focus();
    $("form#trianglecheck").submit(function(event) {
        var sideA = parseInt($("input#sideA").val());
        var sideB = parseInt($("input#sideB").val());
        var sideC = parseInt($("input#sideC").val());

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
                    $('#equilateral').append("<li>" + this.A + ", " + this.B + ", " + this.C + "</li>");
                    return "equilateral triangle";

                } else if ((this.A === this.B) || (this.B === this.C) || (this.C === this.A)) {
                    $('#isosceles').append("<li>" + this.A + ", " + this.B + ", " + this.C + "</li>");
                    return "isosceles triangle";

                } else if ((sides[0]*sides[0]) + (sides[1]*sides[1]) === (sides[2]*sides[2])) {
                    $('#right').append("<li>" + this.A + ", " + this.B + ", " + this.C + "</li>");
                    return "right triangle";

                } else {
                    $('#scalene').append("<li>" + this.A + ", " + this.B + ", " + this.C + "</li>");
                    return "scalene triangle";
                }
            }
        };

        var result = triangle.triangleCheck();

        $("#sideB").val("");
        $("#sideC").val("");
        $("#sideA").val("").focus();

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
