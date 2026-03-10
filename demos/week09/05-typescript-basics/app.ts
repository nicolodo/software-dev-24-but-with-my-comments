// to install typescript 

// npm i typescript --save-dev
// convert our file to js using npx tsc app.ts

// What are our data types?

// Boolean, String, Number, Arrays, Objects

const myString:string = 'Sam'
const myNumber:number = 42
const myBoolean:boolean = true

let foo: string = 'Foo'
// foo = 42 // error

// TypeScript is pretty clever, and it will do it's best to understand what the type should be based on what value you assign to the variable
let bar = 'bar'
bar = 'sdfs'
bar = 42


// Arrays 

// This works - we're saying myArray will be an arrays of strings
const myArray: Array<string> = ['Hello', 'How', 'Are', 'Arrays', 'Annotated?']

const myArray2: string[] = ['Hello', 'How', 'Are', 'Arrays', 'Annotated?']

// What if we want our array to have multiple different data types?

// const myThirdArray: (string | number)[] = ['Sam', 33, true] // error because we didn't allow booleans

// if we want to say 'this array should always be empty'
const alwaysEmpty: never[] = []


// Objects 
const myObject: {foo: string} = {foo: 'Hello world!'}

const myInfo: {
    name: string,
    age: number,
    dogs: string[]
    } = {
    name: 'Sam',
    age: 26,
    dogs: ['Charlie', 'Darcy']
}


// we can create a new data strucutre called 'types' -> we can re-use these types across our application. Think of them like a special variable for typescript

type petInfoType = {
    name: string,
    age: number,
    cute: boolean,
    // properties on an object can be optional. So we're saying the object might have an img_url property, and if they do it should be of type string
    img_url?: string
}

const pets: petInfoType[] = [
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
]


// functions

function sum(a: number, b: number): string {
    return (a + b).toString()
}


// Union types

// developing an app for a university 

type uniClasses = 'Art' | 'History' | 'Comp Sci' | 'Biology'

const myCourse: uniClasses = 'Biology'


// trees

type treeDetailsTypes = {
    treeType: treeTypes,
    evergreen: boolean,
    age: number,
    img_url?: string,
}

type treeTypes = 'fir' | 'oak' | 'willlow' | 'cherry'

const myArrayOfTrees: treeDetailsTypes[] = [
    {
        treeType: 'fir',
        evergreen: true,
        age: 24,
        img_url: 'image'
    }
]