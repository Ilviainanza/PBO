//parent class
class person {
    constructor(name) {
        this.name = name;
    }

getInformation() {
    console.log(`This person is ${this.name}`);
}
}

//child class
class professor extends person {
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log (
            `my name is ${this.name}, and i will be your ${this.teaches} professor`
        );
    }
}

const pia = new professor("pia", "math");
console.log(pia.getInformation());
console.log(pia.introduceSelf());