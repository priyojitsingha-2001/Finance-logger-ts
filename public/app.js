//classes
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
//type casting 👇(! is not required since we are explicitly casting type)
const form = document.querySelector('.new-item-form');
// an array of type Invoice(class)
let invoices = [];
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
    // console.log(doc);
    list.render(doc, type.value, 'end');
});
