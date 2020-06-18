//% weight=100 color=#333333 icon="\uf234"
namespace interfaces{
/** 
export interface cars {
"yourInvenory":{
"yourCars":{
"car_one":{
"Make": "Tesla",
"YourTesla":{
"Model": "X",
}
}
"car_two":{
"Make": "Tesla",
"YourTesla":{
"Model": "S"
}
}
"car_three":{
"Make": "MinyVan"
}
}
}
"allTypes":{
"Tesla":{
"Model":{
"Model_One": "X",
"Model_Two": "S",
"Model_Three": "3"
}
}
"MinyVan":{
"Model":{
//  non yet
}
}
}
}
*/
declare interface shop{
money: number;
product:{
description: string;
cost: number;
name: string;
amountInStock: number
}






}
//% blockId= ShopProduct block="ShopProduct |description: %string|cost: %number|name: %string|amountInStock: %number|"
export function ShopProduct(b: string, c: number, d: string, e: number): shop["product"]{
return {description: b, cost: c, name: d, amountInStock: e}




}
//% block
export function addToShop(x: shop["product"]): void{
console.log(x)



}
//% blockId= BuyFromShop block="Buy|product with name: %string| from shop"
export function BuyFromShop(c: string): void{
console.log(console.inspect("name: "+c))






}


















}






































