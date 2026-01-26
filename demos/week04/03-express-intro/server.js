// I need to import the expres code from my node_modules 

import express from "express"

// 2. Create an instance of our express app.
const app = express()


// I want to listen for a get request made to /
// Our server sits around all day listening for incoming requests 
// When one matches the below - to / and a get request, it will run the anon function

// the anon function *always* has two parameters - the 'request object' and the 'response object'. 
// request object - information on it from the client
// response object - methods available to repond to the client

// http://localhost:8080
app.get('/', function(request, response) {
    response.send(`You're looking at my root route, how rood!`)
})

// http://localhost:8080/owls
app.get('/owls', function(request, response) {
    response.send('Pretend this is a list of owls')
})

// http://localhost:8080/api/upgrades
app.get('/api/upgrades', function (request,response) {
    // I will specify the server is sending back JSON.
    response.status(206).json([{name: 'Sam'}, {name: 'Connor'}, {name: 'Tim'}, {name: 'Jez'}])
})

// I want to listen for a post request on localhost:8080/owls
app.post('/owls', function(request, response) {
    response.json('Owl information recieved!')
})

// server hosted on http://google.com/
// server hosted on http://google.com/cats


// Set up/tell my server to listen for incoming requests 

app.listen(8080, function() {
    console.log(`Server running on port 8080! 	(ง •̀_•́)ง`)
})