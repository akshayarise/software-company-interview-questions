function A() {
    var name = "Akshay";

    function B() {
        console.log("name: ", name);
    }
    return B;
}

const myFunc = A();
myFunc();