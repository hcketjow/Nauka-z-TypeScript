//Czego można używać w TS:
    let a: number;
    let b: boolean;
    let c: string;
    let d: any;
    let f: number[] = [1,2,3];
    let g: any[]=[1,true,'a',false];
//Jakieś stałe: 
const ColorRed=0;
const ColorGreen=1;
const ColorBlue=2;
//Zastosowanie zmiennej enum:
enum Color {Red=0, Green=1, Blue=2};
let backgroundColor=Color.Red;