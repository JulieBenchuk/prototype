function Dog(name, weight, vaccinated, sitting) {
    this.name = name,
    this.weight = weight,
    this.vaccinated = vaccinated,
    this.sitting = sitting
}
let bobik = new Dog("Bobik", 15,false, true);
let mukhtar = new Dog("Mukhtar", 35, true, true);
let tuzik = new Dog("Tuzik", 9, false, true);

Dog.prototype.allowBoarding = function () {
    if (this.vaccinated) {
        console.log(this.name + " can be transported!");
    } else {
        console.log(this.name + " is prohibited from being transported!");
    }
}
Dog.prototype.run = function () {
    this.sitting = false;
    console.log(this.name + " is running away!");

}
bobik.allowBoarding = function () {
    console.log("WOOOF WOOOF!!!")
}

tuzik.allowBoarding();
mukhtar.allowBoarding();
bobik.allowBoarding();
bobik.run();
console.log(tuzik.hasOwnProperty("allowBoarding"));
console.log(bobik.hasOwnProperty("allowBoarding"));
