//Czego można używać w TS:
var a;
var b;
var c;
var d;
var f = [1, 2, 3];
var g = [1, true, 'a', false];
//Jakieś stałe: 
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
//Zastosowanie zmiennej enum:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
