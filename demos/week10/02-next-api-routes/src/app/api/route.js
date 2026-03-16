// export functions per HTTP method. GET POST, PUT, DELETE

// these function names should be all caps

export function GET() {
    return Response.json({message: 'Hello world!'})
}


/*

app.get('/', (req, res) => {
    res.json('fooo')    
    })
*/