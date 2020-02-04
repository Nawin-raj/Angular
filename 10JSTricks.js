//Big number
var a=9;
var b=99;
var c=81;
(a>b)? (a>c)? console.log(a+" "+ "is greater"):console.log(c+" is greater"):console.log(b+ " is greater")

//number to string
 var num=7;
 num=num+" ";
 console.log(typeof num)

 //Fill arrays

 var arr=Array(5).fill("chinnu")
console.log(arr)

//unique arrays
var arr=[7,0,3,6,1,8,8,5,7,6]
const unique=Array.from(new Set(arr));
console.log(unique)

//slicing arrays
var users=[1,2,3,4,5,6,7,8,9]
users.length=3;
console.log(users)

//slicing arrays end 
var users=[1,2,3,4,5,6,7,8,9]
console.log(users.slice(-3))

//arrays to objects
var users=[1,2,3,4,5,6,7,8,9]
var obj={...users};
console.log(obj)

//objects to arrys
var emp={
    name:"naveen",
    age:23,
    com:"cts"
}
var keys=Object.keys(emp);
var values=Object.values(emp);

console.log(keys)
console.log(values)

//run this in browser
var start=performance.now();
console.log("hi")
var end=performance.now();
console.log(`${end-start}`)
