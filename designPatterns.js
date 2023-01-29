class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = new Set();
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (!this.phoneNumbers.has(number)) {
            throw new Error(`The number ${number} is not in the phone numbers list.`);
        }
        this.notifyObservers(number);
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.onDial(number));
    }
}



class Observer {
    onDial(number) {
        console.log(`The number ${number} is being dialed.`)
    }
}

class PrintNumberObserver extends Observer {
    onDial(number) {
        console.log(number);
    }
}

class PrintDiallingObserver extends Observer {
    onDial(number) {
        console.log(`Now Dialling ${number}`);
    }
}


//===============   TESTS   ===============//

const telephone = new Telephone();

const printNumberObserver = new PrintNumberObserver();
const printDiallingObserver = new PrintDiallingObserver();

telephone.addObserver(printNumberObserver);
telephone.addObserver(printDiallingObserver);

telephone.addPhoneNumber("2347023232");
telephone.addPhoneNumber("2347023233");
telephone.dialPhoneNumber("2347023232");
// Output: "2347023232"
// Output: "Now Dialling 2347023232"

// telephone.removePhoneNumber("2347023232");
// telephone.dialPhoneNumber("2347023232");
// Output: Error: The number 2347023232 is not in the phone numbers list.

telephone.removeObserver(printNumberObserver);
telephone.dialPhoneNumber("2347023233");
// Output: "Now Dialling 2347023233"
