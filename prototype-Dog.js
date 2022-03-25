function Dog(name, weight, vaccinated) {
    this.name = name;
    this.weight = weight;
    this.vaccinated = vaccinated;
}
let bobik = new Dog("Bobik", 15,false);
let mukhtar = new Dog("Mukhtar", 35, true);
let tuzik = new Dog("Tuzik", 9, false);

Dog.prototype.allowBoarding = function () {
    if (this.vaccinated) {
        console.log(this.name + " can be transported!");
    } else {
        console.log(this.name + " is prohibited from being transported!");
    }
}
bobik.allowBoarding = function () {
    console.log("WOOOF WOOOF!!!")
}

tuzik.allowBoarding();
mukhtar.allowBoarding();
bobik.allowBoarding();
