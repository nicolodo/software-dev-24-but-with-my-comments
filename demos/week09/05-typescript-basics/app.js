// to install typescript 
// npm i typescript --save-dev
// convert our file to js using npx tsc app.ts
// What are our data types?
// Boolean, String, Number, Arrays, Objects
var myString = 'Sam';
var myNumber = 42;
var myBoolean = true;
var foo = 'Foo';
// foo = 42 // error
// TypeScript is pretty clever, and it will do it's best to understand what the type should be based on what value you assign to the variable
var bar = 'bar';
bar = 'sdfs';
bar = 42;
// Arrays 
// This works - we're saying myArray will be an arrays of strings
var myArray = ['Hello', 'How', 'Are', 'Arrays', 'Annotated?'];
var myArray2 = ['Hello', 'How', 'Are', 'Arrays', 'Annotated?'];
// What if we want our array to have multiple different data types?
// const myThirdArray: (string | number)[] = ['Sam', 33, true] // error because we didn't allow booleans
// if we want to say 'this array should always be empty'
var alwaysEmpty = [];
// Objects 
var myObject = { foo: 'Hello world!' };
var myInfo = {
    name: 'Sam',
    age: 26,
    dogs: ['Charlie', 'Darcy']
};
var pets = [
    {
        name: 'Roman',
        age: 20,
        cute: true,
        img_url: 'thisisarealimage.jpg'
    },
    {
        name: 'Darcy',
        age: 9,
        cute: false,
    }
];
// functions
function sum(a, b) {
    return (a + b).toString();
}
var myCourse = 'Biology';
var myArrayOfTrees = [
    {
        treeType: 'fir',
        evergreen: true,
        age: 24,
        img_url: 'image'
    }
];
