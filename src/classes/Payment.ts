import { HasFormatter } from '../interfaces/HasFormatter.js'

// classes
export class Payment implements HasFormatter {
    // readonly recipient: string;
    // details: string;
    // amount: Number

    // this is a short hand we can directly define the variables in the parameter
    // so we dont have to declare them and if same name we dont have to initialize them
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number) {
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}

