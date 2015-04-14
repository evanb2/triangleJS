describe('triangleCheck', function() {


    it("it takes three inputs from user, if all are equal return 'equilateral triangle'", function() {
        expect(triangleCheck(1, 1, 1)).to.equal("equilateral triangle")
    });

    it("it takes three inputs from user, if only two are equal return 'isosceles triangle'", function() {
        expect(triangleCheck(1, 1, 2)).to.equal("isosceles triangle")
    });

    it("it takes three inputs from user, if none are equal return 'scalene triangle'", function() {
        expect(triangleCheck(1, 2, 3)).to.equal("scalene triangle")
    });

    it("it takes three inputs from user, if inputs are all 0 return 'error, must enter a number greater then 0 for all inputs'", function() {
        expect(triangleCheck(0, 0, 0)).to.equal("error, must enter a number greater then 0 for all inputs")
    });

    it("it takes three inputs from user, if even one input equals 0 return 'error, all inputs must be greater than 0'", function() {
        expect(triangleCheck(0, 1, 2)).to.equal("error, all inputs must be greater than 0")
    });

    it("it takes three inputs from user, if any input is larger than the other two combined return 'error, one side cannot equal more than the other two combined'", function() {
        expect(triangleCheck(2, 1, 6)).to.equal("error, one input cannot equal more than the other two combined")
    });

<<<<<<< HEAD
    it("it takes three inputs from user, if A^2 + B^2 = C^2 return 'right triangle'", function() {
        expect(triangleCheck(3, 4, 5)).to.equal("right triangle")
    });
=======

>>>>>>> 4f781f3fd7536f1f681df96af774fcc11980ba5d
});
