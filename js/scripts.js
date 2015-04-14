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
            isError: false,
            triangleCheck: function() {
                var sides = [this.A, this.B, this.C];
                sides.sort(function(a, b){return a-b});
                if (this.A === 0 && this.B === 0 && this.C === 0) {
                    this.isError = true;
                    return "error, must enter a number greater then 0 for all inputs";
                } else if (this.A === 0 || this.B === 0 || this.C === 0) {
                    this.isError = true;
                    return "error, all inputs must be greater than 0";
                } else if (sides[0] + sides[1] < sides[2]) {
                    this.isError = true;
                    return "error, one input cannot equal more than the other two combined";

                } else if (this.A === this.B && this.B === this.C) {
                    return "equilateral";

                } else if ((this.A === this.B) || (this.B === this.C) || (this.C === this.A)) {
                    return "isosceles";

                } else if ((sides[0]*sides[0]) + (sides[1]*sides[1]) === (sides[2]*sides[2])) {
                    return "right";

                } else {
                    return "scalene";
                }
            }
        };

        var result = triangle.triangleCheck();

        $('#' + result).append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");

        $("#sideB").val("");
        $("#sideC").val("");
        $("#sideA").val("").focus();

        $("#result").show();

        if (triangle.isError) {
            $('.check').text(result);
        }
        else {
            $('.check').text(result + ' triangle');
        }
        event.preventDefault();
    });

        $("#clear").click(function(event) {
            $("#result").hide();
            $("#error").hide();
            $("#sideB").val("");
            $("#sideC").val("");
            $("#sideA").val("").focus();

        });
});
