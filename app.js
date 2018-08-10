function Ninja(name) {
    this.name = name;
    this.health = 100;
    const self = this;

    this.sayName = function() {
        console.log("My ninja name is " + this.name)
        return this
    }

    const ninjaSpeed = function() {
        self.speed = 3;
        return self.speed;
    }

    const ninjaStrength = function() {
        self.strength = 3;
        return self.strength;
    }

    this.showStats = function() {
        console.log("Name: " + self.name + ", Health: " + self.health + ", Speed: " + ninjaSpeed() + ", Strength: " + ninjaStrength());
    }

    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        } else {
            console.log("Error: Must enter instance of Ninja");
        }
    }

    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 15;
            console.log(ninja.name + " was kicked by " + this.name + " and lost 5 Health!");
        } else {
            console.log("Error: Must enter instance of Ninja");
        }
    }

    this.drinkSake = function() {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();