// classes
export class Payment {
    // readonly recipient: string;
    // details: string;
    // amount: Number
    // this is a short hand we can directly define the variables in the parameter
    // so we dont have to declare them and if same name we dont have to initialize them
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
