//interfaces
/* 
    Interfaces can be considered as a Schema or a design
    if a class implements an interface it should follow that schema
    and it can have some extra properties as well
*/
// interface isPerson{
//     name:string,
//     age:Number,
//     speak():string,
//     spend():Number
// }
export interface HasFormatter {
    format(): string
}