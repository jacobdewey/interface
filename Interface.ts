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
amountInStock: number;
yourName: string
}






}
//% blockId= ShopProduct block="ShopProduct |description: %string|cost: %number|name: %string|amountInStock %number|yourName %string"|
export function ShopProduct(b: string, c: number, d: string, e: number, a: string): shop["product"]{
return {description: b, cost: c, name: d, amountInStock: e, yourName: a}




}
//% block
export function BuyFromShop(): void{

}


















}






































