class vehicle {
    #numberofWheels;
    #numberOfDoors;
    constructor(color, trim, wheels, interior, enhancedAutoPilot, fullSelfDrivingCapability, numberOfWheels, numberOfDoors){
        this.color = color;
        this.trim = trim;
        this.wheels = wheels;
        this.interior = interior;
        this.enhancedAutoPilot = enhancedAutoPilot;
        this.fullSelfDrivingCapability = fullSelfDrivingCapability
        this.#numberofWheels = numberOfWheels
        this.#numberOfDoors = numberOfDoors

       
    }


    talk() {
        console.log(`This Tesla is ${this.color} color with the ${this.wheels} wheel package and ${this.interior} interior. 
        This vehicle has Enhanced Auto Pilot ${this.enhancedAutoPilot} and Full Self Driving Capability ${this.fullSelfDrivingCapability}.`);
    }

}

const vehicle1 = new vehicle (`black`, `sport`, `4`, `leather`, true, true, 4, 4  )
console.log(vehicle1)
vehicle1.talk()

class ModelS extends vehicle {
    
    constructor(color, trim, wheels, interior, enhancedAutoPilot, fullSelfDrivingCapability)
    {super(color, trim, wheels, interior, enhancedAutoPilot, fullSelfDrivingCapability)
    
    }

    get topSpeed () {
        let velocidad = 0;

        if (this.trim === `Plaid`){
            return velocidad = 200
        }
        else if (this.trim === `Standard`){
            return velocidad = 149
        }
        else {
            return velocidad = 300
        }

    }

   
    set topSpeed(trim){
        if(trim.toLowerCase === `plaid`){
            this.trim = trim
        }
        else if (trim.toLowerCase === `standard`){
            this.trim = trim
        }
        else {
            this.trim = trim
        }

    }

    howFast () {
        console.log(`The Top Speed of your car is ${this.topSpeed}`)
    }
}

const vehicle2 = new ModelS (`Blue`,`Standard`,`4`,`Leather`, true, true)
console.log(vehicle2)
console.log(vehicle2.topSpeed)

vehicle2.topSpeed = "Plaid"
console.log(vehicle2.topSpeed)

vehicle2.howFast()

