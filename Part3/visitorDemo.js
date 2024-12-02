var CarVisitor = function () {
    this.visit = function (car) {
        if (car.seats > 2) {
            console.log('this is clearly a car for old people');
        } else {
            console.log('My bet is this car has at least 2 cylinders');
        }
    }
};

var carVariable = function () {
    var seats = 5;
    var doors = 4;
    this.accept = function (visitorObject) {
        visitorObject.visit(this);
    }
};

var myCar = new carVariable();
myCar.seats = 2;
myCar.accept(new CarVisitor());
