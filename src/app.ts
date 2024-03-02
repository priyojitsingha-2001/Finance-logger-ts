//classes
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/ListTemplate.js'
//interfaces
import { HasFormatter } from './interfaces/HasFormatter.js'


//type casting 👇(! is not required since we are explicitly casting type)
const form = document.querySelector('.new-item-form') as HTMLFormElement

// an array of type Invoice(class)
let invoices: Invoice[] = []

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
    // console.log(doc);
    list.render(doc, type.value, 'end')

})
