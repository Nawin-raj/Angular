// //spread operator
// var arr=[1,2,3,4,5];
// var newarr=[...arr,6,7];
// console.log(newarr)


// var obj1={
//     name:"naveen"
// }

// var obj2={
//     ...obj1,
//     age:2
// }
// console.log(obj2)

//rest operator

// var filter=(...values)=>{
//     return values.filter(x=>x%2==0);
// }

// console.log(filter(1,2,4,5,6,7,8))

// //Array destructuring

// var arr=[1,2,3,4,5];
// [num1,num2]=arr;
// console.log(num1,num2)

//objects and arrays are refeence types in javascript

var person={
    name:"chinnu"
}
//in this case person2 name is also changing becoz person2 just holds the pointer to person object, 
//if we make any changes to person object those will reflected to person 2 also.
//to solve this problem use spread operator
var person2=person;
person.name="naveen"
console.log(person2)


//using spread operator
var person={
    name:"chinnu"
}
var person2={
    ...person
}
person.name="naveen"
console.log(person2)
