
// app.get('/:id', ....)

export async function GET(request, {params}) {
    const {id} = await params

    console.log(id)

    return Response.json('This particular pet')
}