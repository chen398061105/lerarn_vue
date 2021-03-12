//commonjs的模块化规范
const {sum ,mul} = require('./mathUnits')

console.log(sum(100, 200));
console.log(mul(100, 200));

//es6模块化规范
import {name} from "./info";

console.log(name);